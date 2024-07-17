---
title: Підготовчий запит
slug: Glossary/Preflight_request
page-type: glossary-definition
---

{{GlossarySidebar}}

Підготовчий запит CORS (попередній запит, передполітний запит) – це запит {{Glossary("CORS")}}, який перевіряє, чи розуміє сервер протокол CORS, за допомогою певних методів і заголовків.

Це запит {{HTTPMethod("OPTIONS")}}, що використовує два або три заголовки запиту HTTP: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Origin")}} і, за потреби, {{HTTPHeader("Access-Control-Request-Headers")}}.

Підготовчий запит автоматично надсилається браузером, і, як правило, розробники фронтенду не повинні самостійно формувати такі запити. Він з'являється, коли запит вважається ["таким, що потребує попередньої підготовки"](/uk/docs/Web/HTTP/CORS#zapyty-z-poperednioiu-pidhotovkoiu), і пропускається для [простих запитів](/uk/docs/Web/HTTP/CORS#prosti-zapyty).

Наприклад, клієнт міг би запитати сервер, чи дозволить він запит {{HTTPMethod("DELETE")}}, перед тим, як надіслати запит `DELETE`, за допомогою підготовчого запиту:

```http
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: x-requested-with
Origin: https://foo.bar.org
```

Якщо сервер це дозволяє, то він відповідає на підготовчий запит заголовком відповіді {{HTTPHeader("Access-Control-Allow-Methods")}}, який містить `DELETE`:

```http
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: X-Requested-With
Access-Control-Max-Age: 86400
```

Підготовчий запит може за потреби кешуватися для запитів, створених за допомогою того самого {{Glossary("URL")}}, за допомогою заголовка {{HTTPHeader("Access-Control-Max-Age")}}, як у прикладі вище. Для кешування підготовчих відповідей браузер використовує окремий кеш, окремий від загального кешу HTTP, яким керує. Підготовчі відповіді ніколи не кешуються в загальному кеші HTTP браузера.

## Дивіться також

- {{Glossary("CORS")}}
- {{HTTPMethod("OPTIONS")}}
