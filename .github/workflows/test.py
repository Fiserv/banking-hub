import requests
import json

# Function to get a list of hook IDs for the repository
def get_hook_ids():
    url = f"https://api.github.com/repos/Fiserv/Testing-repo/hooks"
    headers = {
        "Authorization": f"Bearer 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",
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()
    hooks = response.json()
    hook_ids = [hook["id"] for hook in hooks]
    return hook_ids

# Function to redeliver failed deliveries with status code 500
def redeliver_failed_deliveries(hook_id):
    url = f"https://api.github.com/repos/Fiserv/Testing-repo/hooks/{hook_id}/deliveries"
    headers = {
        "Authorization": f"Bearer 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",
        "Accept": "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    response = requests.get(url, headers=headers)
    response.raise_for_status()
    deliveries = response.json()
    
    for delivery in deliveries:
        if delivery["status_code"] == 200:
            delivery_id = delivery["id"]
            print(f"Redelivered delivery ID {delivery_id} for hook ID {hook_id}")


if __name__ == "__main__":
    hook_ids = get_hook_ids()
    print("Hook IDs:", hook_ids)
    for hook_id in hook_ids:
        redeliver_failed_deliveries(hook_id)