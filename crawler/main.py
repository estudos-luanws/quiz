import json
import os
import sys
from contextlib import suppress
from typing import List, Set

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


def crawler_url(start_url: str, depth: int) -> List[str]:
    if depth <= 0:
        return []
    depth -= 1
    crawler: Set[str] = set()
    with suppress(Exception):
        urls = get_db(start_url)['external']
        for url in urls:
            if url not in crawler:
                for new_url in crawler_url(url, depth):
                    crawler.add(new_url)
            crawler.add(url)

    with suppress(KeyError):
        crawler.remove('')
    crawler.add(start_url)
    return list(crawler)


url, depth = sys.argv[1:]
urls = crawler_url(url, int(depth))
with open('urls.txt', 'w') as f:
    f.write('\n'.join(urls))
with open('external.json', 'w') as f:
    f.write(json.dumps(urls, indent=2))
print(len(urls), 'URLs encontradas')
