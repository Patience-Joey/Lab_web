import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class RecentPublicationTests(unittest.TestCase):
    def setUp(self):
        self.home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.publications = (ROOT / "publications.html").read_text(encoding="utf-8")
        self.search = (ROOT / "search-results.html").read_text(encoding="utf-8")
        self.i18n = (ROOT / "js" / "i18n.js").read_text(encoding="utf-8")

    def test_text2loc_plus_metadata_and_links(self):
        title = "Text2Loc++: Generalizing 3D Point Cloud Localization from Natural Language"
        for source in (self.home, self.publications, self.search):
            self.assertIn(title, source)
        self.assertIn("TPAMI 2026", self.home)
        self.assertIn("TPAMI 2026", self.publications)
        self.assertIn("https://ieeexplore.ieee.org/abstract/document/11654523/", self.home)
        self.assertIn("https://arxiv.org/abs/2511.15308", self.publications)
        self.assertIn("https://yan-xia.github.io/images/Text2Loc.png", self.home)

    def test_semcityloc_metadata_links_and_image(self):
        title = "SemCityLoc: Aerial 6DoF Localization Using Semantic 3D City Models"
        for source in (self.home, self.publications, self.search):
            self.assertIn(title, source)
        self.assertIn("ECCV 2026", self.home)
        self.assertIn("ECCV 2026", self.publications)
        self.assertIn("https://arxiv.org/abs/2606.27444", self.publications)
        self.assertIn("https://github.com/Albertchen98/SemCityLoc", self.publications)
        self.assertIn("https://albertchen98.github.io/SemCityLoc/", self.publications)
        self.assertIn("https://albertchen98.github.io/SemCityLoc/static/images/figures/6DoF_v7.png", self.home)

    def test_homepage_news_has_english_translations(self):
        expected = {
            "我们的论文Text2Loc++被TPAMI 2026接收": "Text2Loc++ Accepted by TPAMI 2026",
            "我们的论文SemCityLoc被ECCV 2026接收": "SemCityLoc Accepted by ECCV 2026",
        }
        for chinese, english in expected.items():
            with self.subTest(chinese=chinese):
                self.assertIn(chinese, self.home)
                self.assertIn(f"'{chinese}': '{english}'", self.i18n)


if __name__ == "__main__":
    unittest.main()
