---
title: Заголовок запиту
slug: Glossary/Request_header
page-type: glossary-definition
---

{{GlossarySidebar}}

**Заголовок запиту** – це {{glossary("HTTP header", "заголовок HTTP")}}, який можна використовувати в запиті HTTP для надання інформації про контекст запиту, щоб сервер міг припасувати відповідь. Наприклад, заголовки {{HTTPHeader("Accept", "Accept-*")}} вказують дозволені та бажані формати відповіді. Інші заголовки можна використовувати для надання облікових даних автентифікації (наприклад, {{HTTPHeader("Authorization")}}), для керування кешуванням або для отримання інформації про користувацький агент чи посилача тощо.

Не всі заголовки, що можуть зустрічатися в запиті, визначені специфікацією як _заголовки запиту_. Наприклад, заголовок {{HTTPHeader("Content-Type")}} визначений як {{glossary("representation header", "заголовок представлення")}}.

Крім цього, {{Glossary("CORS")}} визначає підмножину заголовків запиту як {{glossary('CORS-safelisted request header', 'прості заголовки')}}, заголовки запиту, які завжди вважаються дозволеними та не вказуються явно в відповідях на {{glossary("preflight request", "підготовчі")}} запити.

Повідомлення HTTP нижче показує декілька заголовків запиту після запиту {{HTTPMethod("GET")}}:

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## Дивіться також

- [Список усіх заголовків HTTP](/uk/docs/Web/HTTP/Headers)
- [RFC 9110, розділ 6.3: Поля заголовків](https://httpwg.org/specs/rfc9110.html#header.fields)
