import importlib.util
import tempfile
import unittest
from pathlib import Path


SCRIPT = Path(__file__).parents[1] / "scripts" / "add_member_from_issue.py"
SPEC = importlib.util.spec_from_file_location("add_member_from_issue", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(MODULE)


VALID_BODY = """### 姓名

测试成员

### 成员类别

博士研究生

### 个人简介

测试成员，中国科学技术大学在读博士研究生，研究方向为三维视觉。

### 头像

![portrait](https://github.com/user-attachments/assets/11111111-2222-3333-4444-555555555555)

### 公开邮箱

member@mail.ustc.edu.cn

### 个人主页

https://example.com/member

### GitHub 主页

https://github.com/example

### Google Scholar

_No response_
"""


class MemberPublisherTests(unittest.TestCase):
    def make_team_file(self, directory: str) -> Path:
        path = Path(directory) / "team.html"
        path.write_text(
            "\n".join(
                [
                    '<div class="faculty"><!-- AUTO-MEMBERS:FACULTY --></div>',
                    '<div class="graduate">',
                    "        <!-- AUTO-MEMBERS:GRADUATE -->",
                    "</div>",
                    '<div class="undergraduate"><!-- AUTO-MEMBERS:UNDERGRADUATE --></div>',
                ]
            ),
            encoding="utf-8",
        )
        return path

    def test_adds_valid_member_and_escapes_content(self):
        with tempfile.TemporaryDirectory() as directory:
            team_file = self.make_team_file(directory)
            changed = MODULE.update_team_file(team_file, VALID_BODY, 42)
            output = team_file.read_text(encoding="utf-8")

            self.assertTrue(changed)
            self.assertIn('data-member-issue="42"', output)
            self.assertIn("测试成员", output)
            self.assertIn("博士研究生", output)
            self.assertIn("mailto:member@mail.ustc.edu.cn", output)
            self.assertLess(output.index('data-member-issue="42"'), output.index("AUTO-MEMBERS:GRADUATE"))

    def test_duplicate_issue_is_idempotent(self):
        with tempfile.TemporaryDirectory() as directory:
            team_file = self.make_team_file(directory)
            self.assertTrue(MODULE.update_team_file(team_file, VALID_BODY, 42))
            first = team_file.read_text(encoding="utf-8")
            self.assertFalse(MODULE.update_team_file(team_file, VALID_BODY, 42))
            self.assertEqual(first, team_file.read_text(encoding="utf-8"))

    def test_rejects_non_github_photo(self):
        body = VALID_BODY.replace(
            "https://github.com/user-attachments/assets/11111111-2222-3333-4444-555555555555",
            "https://example.com/photo.jpg",
        )
        with tempfile.TemporaryDirectory() as directory:
            team_file = self.make_team_file(directory)
            with self.assertRaises(MODULE.SubmissionError):
                MODULE.update_team_file(team_file, body, 43)

    def test_escapes_html_from_submission(self):
        body = VALID_BODY.replace("测试成员，中国科学技术大学", "测试成员，<script>alert(1)</script>中国科学技术大学")
        with tempfile.TemporaryDirectory() as directory:
            team_file = self.make_team_file(directory)
            MODULE.update_team_file(team_file, body, 44)
            output = team_file.read_text(encoding="utf-8")

            self.assertNotIn("<script>", output)
            self.assertIn("&lt;script&gt;alert(1)&lt;/script&gt;", output)


if __name__ == "__main__":
    unittest.main()
