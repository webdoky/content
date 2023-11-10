---
title: Верблюдячий регістр
slug: Glossary/Camel_case
page-type: glossary-definition
---

{{GlossarySidebar}}

**Верблюдячий регістр** – це спосіб написання фраз без пробілів, при якому перша літера кожного слова робиться великою, крім першої літери всього складеного слова, яка може бути як великою, так і малою. Назва цього регістру походить від подібності великих літер до горбів спини верблюда. Нерідко цей регістр стилізується як "верблюдячийРегістр", щоб нагадати читачу про його зовнішній вигляд.

Верблюдячий регістр нерідко використовується як загальноприйнятий спосіб іменування змінних. Наступні змінні мають верблюдячий регістр: {{domxref("console")}}, {{domxref("crossOriginIsolated")}}, {{jsxref("encodeURIComponent")}}, {{jsxref("ArrayBuffer")}} й {{domxref("HTMLElement")}}.

Зверніть увагу на те, що якщо фраза містить абревіатури (наприклад, `URI` чи `HTML`), то верблюдячий регістр може працювати по-різному. Деякі вважають за краще залишати всі абревіатури великими, як у `encodeURIComponent` вище. Це іноді може призводити до неоднозначності з кількома підряд абревіатурами, такими як `XMLHTTPRequest`. Інші вважають за краще робити великою лише першу літеру, як у `XmlHttpRequest`. Наявна глобальна змінна, {{domxref("XMLHttpRequest")}}, використовує комбінацію обох підходів.

Коли перша літера всієї фрази має вищий регістр, то це зветься _вищим верблюдячим регістром_ або _регістром Pascal_. Інакше – це _нижчий верблюдячий регістр_.

Верблюдячий регістр є найпопулярнішим у JavaScript, Java та різних інших мовах програмування.

## Дивіться також

- [Зміїний регістр](/uk/docs/Glossary/Snake_case)
- [Шашличний регістр](/uk/docs/Glossary/Kebab_case)
- [Правило typescript-eslint: `naming-convention`](https://typescript-eslint.io/rules/naming-convention/)