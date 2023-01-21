---
title: Користувацький агент
slug: Glossary/User_agent
page-type: glossary-definition
tags:
  - Browser
  - UA
  - User-agent
  - Web Browser
  - WebMechanics
  - agent
  - user agent
  - userAgent
---

Користувацький агент – комп'ютерна програма, що представляє особу, в контексті {{Glossary("World Wide Web", "Вебу")}} – {{Glossary("Browser","браузер")}}.

Окрім браузера, користувацький агент може бути ботом, що збирає дані з вебсторінок, менеджером завантажень файлів або іншим застосунком, що звертається до Вебу. До кожного запиту, що надсилається на сервер, браузери додають {{Glossary("HTTP")}} заголовок самоідентифікації {{HTTPHeader("User-Agent")}}, котрий зветься рядком користувацького агента (UA - "user agent"). Цей рядок нерідко ідентифікує браузер, його номер версії, та операційну систему хоста.

Спам-боти, менеджери завантажень та частина браузерів нерідко надсилають оманливий рядок UA, аби заявити себе як іншого клієнта. Це зветься _підробкою користувацького агента_.

За допомогою {{Glossary("JavaScript")}} на клієнтському боці можна звернутися до рядка користувацького агента за допомогою властивості {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}.

Типовий рядок користувацького агента має наступний вигляд: `"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## Дивіться також

- [User agent](https://uk.wikipedia.org/wiki/User_agent) на Вікіпедії
- {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}
- [З'ясування браузера за допомогою користувацького агента](/uk/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: Заголовок `User-Agent`
- [Глосарій:](/uk/docs/Glossary)

  - {{Glossary("Browser", "Браузер")}}

- Заголовки HTTP

  - {{HTTPHeader("User-agent")}}
