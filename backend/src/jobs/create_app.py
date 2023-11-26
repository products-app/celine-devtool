import os
import requests
from dotenv import load_dotenv, find_dotenv


load_dotenv(find_dotenv())


PERSONAL_ACCESS_TOKEN = os.environ.get("PERSONAL_ACCESS_TOKEN")
GITHUB_API_URL = "https://api.github.com"


def create_github_app(app_name):
    # https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28
    data = {
        "name": app_name,
        "private": False,
        "has_issues": True,
        "has_projects": True,
        "has_wiki": True,
    }

    # Send a POST request to the API endpoint to create a new repository
    response = requests.post(
        "https://api.github.com/orgs/products-app/repos",
        json=data,
        headers={"Authorization": f"Bearer {PERSONAL_ACCESS_TOKEN}"},
    )

    print(response)

    # Check the status code of the response
    if response.status_code == 201:
        print("Successfully created repository")
    else:
        print("Failed to create repository")


def upload_template_github_app():
    return "hello"
