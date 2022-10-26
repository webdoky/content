#!/usr/bin/python3

from collections import Counter
import requests
from bs4 import BeautifulSoup
import pprint

ORIGIN = 'https://webdoky.org'
HEADERS = {
    'User-Agent': 'Googlebot'}

processed_urls = set()
url_counter = Counter()
missing_counter = Counter()
pp = pprint.PrettyPrinter(width=41)


def clean_url(url):
    return url.split('#')[0].removesuffix('/').removeprefix(ORIGIN).removeprefix('/')


def is_url_internal(url):
    if url.startswith(ORIGIN):
        return True
    if url.startswith('https://'):
        return False
    if url.startswith('http://'):
        return False
    return True


def is_url_omitted(url):
    if url == '':
        return True
    if not is_url_internal(url):
        return True
    if url.startswith('cdn-cgi'):
        return True
    return False


def process_url(url):
    if url in missing_counter:
        missing_counter.update([url])
        return
    if url in processed_urls:
        url_counter.update([url])
        return
    print(f"process_url({url})")
    full_url = f"{ORIGIN}/{url}"
    page = requests.get(full_url, headers=HEADERS)
    page.encoding = 'UTF-8'
    if page.status_code != 200:
        print(f"{page.status_code} at {url}")
        processed_urls.add(url)
        if page.status_code >= 400:
            missing_counter.update([url])
        return
    # print(page.text)
    try:
        soup = BeautifulSoup(page.text, "lxml")
        content_element = soup.select_one('main.container > .w-full')
        missing_explanation_element = content_element.find(
            text="Схоже, що ми іще не переклали цей розділ. Скористайтеся цим посиланням, щоб перейти на оригінальну версію цієї статті в MDN.")
        if missing_explanation_element is not None:
            print(f"UNTRANSLATED: {url}")
            missing_counter.update([url])
            return

        links = content_element.find_all('a')

        internal_link_urls = [clean_href for clean_href in (clean_url(href)
                              for href in (link["href"] for link in links)) if clean_href != url and not is_url_omitted(clean_href)]
        counter = Counter(internal_link_urls)
        print(counter.most_common(3))
        url_counter.update([url])
        processed_urls.add(url)
        for referring_link in internal_link_urls:
            process_url(referring_link)
    except Exception as e:
        print(e)
        print(f"FAILURE AT {url or '/'}")
        # print(page.text)
        raise e


process_url('')

pp.pprint(url_counter.most_common(1000))
print('\n\nMISSING\n')
pp.pprint(missing_counter.most_common(10))
