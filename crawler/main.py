# BASE URL: https://alura-quiz-delta.vercel.app/

import json
import os
import sys
from contextlib import suppress
from typing import Set

import requests

number_of_requests: int = 0


def clear_console():
    os.system('cls')


def get_db(url: str):
    clear_console()
    global number_of_requests
    number_of_requests += 1
    print('Requisições:', number_of_requests)
    response = requests.get(f'{url}/api/db')
    return response.json()


def check_valid_url(url: str) -> str:
    with suppress(Exception):
        get_db(url)
        return True
    return False


crawler: Set[str] = set()


def crawler_url(start_url: str, depth: int) -> Set[str]:
    if depth <= 0:
        return []
    depth -= 1
    global crawler
    with suppress(Exception):
        urls = get_db(start_url)['external']
        for url in urls:
            if url not in crawler:
                for new_url in crawler_url(url, depth):
                    crawler.add(new_url)
            crawler.add(url)
    crawler.add(start_url)
    return crawler


url, depth = sys.argv[1:]
crawler_url(url, int(depth))
with suppress(KeyError):
    crawler.remove('')
urls = [url for url in crawler if check_valid_url(url)]

with open('data/urls.txt', 'w') as f:
    f.write('\n'.join(urls))
with open('data/external.json', 'w') as f:
    f.write(json.dumps(urls, indent=2))
print(len(urls), 'URLs encontradas')
