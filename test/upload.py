import requests

url = "https://picdb.izaries.workers.dev/upload"  # Replace with the actual URL

file_path = "./test.jpg"  # Replace with the actual file path

with open(file_path, "rb") as file:
    files = {"file": file}
    response = requests.post(url, files=files)

if response.status_code == 200:
    print(response.text)
    print("File uploaded successfully!")
else:
    print("Failed to upload file. Error:", response.text)


