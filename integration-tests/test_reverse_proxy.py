import requests
from unittest import TestCase

class TestReverseProxy(TestCase):

    def test_reverse_proxy_returns_alice(self):
        response = requests.get("http://localhost:8080/alice", headers={"Referer": "www.randomwebsite.com"})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content.decode('utf-8'), "Hello, I'm Alice, brought to you by www.randomwebsite.com")

    def test_reverse_proxy_returns_bob(self):
        response = requests.get("http://localhost:8080/bob", headers={"Referer": "www.google.com"})

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content.decode('utf-8'), "Hello, I'm Bob, brought to you by www.google.com")

    def test_reverse_proxy_does_not_return_other_names(self):
        names = [
          "alex",
          "betty",
          "charlie",
          "dexter",
          "edgar",
          "fred"
        ]
        for name in names:
          response = requests.get(f"http://localhost:8080/{name}")
          self.assertEqual(response.status_code, 404)

    def test_base_path_returns_404(self):
        response = requests.get(f"http://localhost:8080/")
        self.assertEqual(response.status_code, 404)