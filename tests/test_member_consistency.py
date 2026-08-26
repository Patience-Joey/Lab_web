import unittest
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]


class MemberParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.div_depth = 0
        self.current = None
        self.members = {}
        self.capture = None
        self.current_link = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        classes = set(attributes.get("class", "").split())
        if tag == "div":
            self.div_depth += 1

        if tag == "div" and not self.current and classes.intersection({"team-card", "team-member"}):
            self.current = {
                "depth": self.div_depth,
                "name": "",
                "role": "",
                "image": "",
                "links": [],
            }

        if not self.current:
            return

        if tag == "h3":
            self.capture = "name"
        elif tag in {"p", "div"} and classes.intersection({"member-title", "member-position"}):
            self.capture = "role"
        elif tag == "img" and not self.current["image"]:
            self.current["image"] = attributes.get("src", "").strip()
        elif tag == "a":
            self.current_link = {"href": attributes.get("href", "").strip(), "icon": ""}
        elif tag == "i" and self.current_link is not None:
            self.current_link["icon"] = attributes.get("class", "")

    def handle_data(self, data):
        if self.current and self.capture:
            self.current[self.capture] += data.strip()

    def handle_endtag(self, tag):
        if self.current and tag in {"h3", "p"}:
            self.capture = None

        if self.current and tag == "a" and self.current_link is not None:
            self.current["links"].append(self.current_link)
            self.current_link = None

        closes_card = (
            self.current
            and tag == "div"
            and self.div_depth == self.current["depth"]
        )
        if closes_card:
            name = self.current["name"]
            if name:
                self.members[name] = self.current
            self.current = None
            self.capture = None
            self.current_link = None

        if tag == "div":
            self.div_depth -= 1


def parse_members(filename):
    parser = MemberParser()
    parser.feed((ROOT / filename).read_text(encoding="utf-8"))
    return parser.members


def normalized_role(value):
    for role in ("特任教授", "博士研究生", "硕士研究生", "本科生"):
        if role in value:
            return role
    return value.strip()


class MemberConsistencyTests(unittest.TestCase):
    def setUp(self):
        self.home = parse_members("index.html")
        self.team = parse_members("team.html")

    def test_featured_members_match_team_page(self):
        for name in ("夏彦", "曹学伟", "吴雨涵"):
            with self.subTest(name=name):
                self.assertIn(name, self.home)
                self.assertIn(name, self.team)
                self.assertEqual(self.home[name]["image"], self.team[name]["image"])
                self.assertEqual(
                    normalized_role(self.home[name]["role"]),
                    normalized_role(self.team[name]["role"]),
                )
                self.assertEqual(
                    {link["href"] for link in self.home[name]["links"]},
                    {link["href"] for link in self.team[name]["links"]},
                )

    def test_team_links_match_their_icons(self):
        for name, member in self.team.items():
            for link in member["links"]:
                href = link["href"]
                icon = link["icon"]
                with self.subTest(name=name, href=href, icon=icon):
                    self.assertNotEqual(href, "#")
                    if "fa-envelope" in icon:
                        self.assertTrue(href.startswith("mailto:"))
                    elif "fa-github" in icon:
                        self.assertIn(urlsplit(href).hostname, {"github.com", "www.github.com"})
                    elif "fa-google" in icon:
                        self.assertEqual(urlsplit(href).hostname, "scholar.google.com")
                    elif "fa-globe" in icon:
                        self.assertIn(urlsplit(href).scheme, {"http", "https"})

    def test_yan_xia_institution_is_mcml_not_dfki(self):
        sources = [
            ROOT / "team.html",
            ROOT / "publications.html",
            ROOT / "search-results.html",
            ROOT / "js" / "i18n.js",
            ROOT / "report.md",
        ]
        combined = "\n".join(path.read_text(encoding="utf-8") for path in sources)
        self.assertIn("MCML", combined)
        self.assertNotIn("DFKI", combined)
        self.assertNotIn("德国国家人工智能中心", combined)

    def test_jiayue_yang_updated_bio_has_english_translation(self):
        source = "杨家越，中国科学技术大学计算机科学与技术专业本科生，现于剑桥大学开展访问研究。主要研究方向包括三维与四维计算机视觉。"
        translation = "Jiayue Yang is an undergraduate student in Computer Science and Technology at USTC and is currently conducting visiting research at the University of Cambridge. His research focuses on 3D and 4D computer vision."
        team = (ROOT / "team.html").read_text(encoding="utf-8")
        i18n = (ROOT / "js" / "i18n.js").read_text(encoding="utf-8")

        self.assertIn(source, team)
        self.assertIn(f"'{source}': '{translation}'", i18n)


if __name__ == "__main__":
    unittest.main()
