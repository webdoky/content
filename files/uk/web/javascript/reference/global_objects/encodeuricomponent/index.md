---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - Method
  - Reference
  - URI
browser-compat: javascript.builtins.encodeURIComponent
---

{{jsSidebar("Objects")}}

Функція **`encodeURIComponent()`** (закодувати компонент URI) кодує {{glossary("URI")}} шляхом заміни кожного входження певних символів однією, двома, трьома або чотирма послідовностями екранування, що представляють кодування символу в {{glossary("UTF-8")}} (чотири послідовності будуть лише для символів, що складаються з двох "сурогатних" символів).

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}

## Синтаксис

```js-nolint
encodeURIComponent(uriComponent)
```

### Параметри

- `uriComponent`
  - : Рядок, число, булеве значення, null, undefined або будь-який об'єкт. Перед кодуванням `uriComponent` перетворюється на рядок.

### Повернене значення

Новий рядок, що представляє _uriComponent_, закодований як компонент URI.

## Опис

`encodeURIComponent()` екранує всі символи, **окрім**:

```plain
Не екрануються:

    A-Z a-z 0-9 - _ . ! ~ * ' ( )
```

`encodeURIComponent()` відрізняється від {{jsxref("encodeURI", "encodeURI()")}} у наступний спосіб:

```js
const set1 = ";,/?:@&=+$"; // Зарезервовані символи
const set2 = "-_.!~*'()"; // Неекрановані символи
const set3 = "#"; // Знак номера
const set4 = "ABC abc 123"; // Абетково-цифрові символи та пробіл

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (пробіл кодується як %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (пробіл кодується як %20)
```

Зверніть увагу, що буде викинуто {{jsxref("URIError")}}, якщо трапиться спроба закодувати сурогат, котрий не є частиною пари вищий-нижчий, наприклад,

```js
// пара вищий-нижчий OK
console.log(encodeURIComponent("\uD800\uDFFF"));

// самотній вищий сурогат викидає "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// самотній нижчий сурогат викидає "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Слід використовувати `encodeURIComponent()` на введених користувачем полях, котрі надсилаються на сервер з {{HTTPMethod("POST")}}. Таким чином закодуються символи `&`, котрі можуть випадково з'явитися під час введення даних з певними сутностями HTML чи іншими символами, що вимагають кодування й розкодування.

Наприклад, якщо користувач напише `Jack & Jill`, то такий текст може бути закодований як `Jack &amp; Jill`. Без `encodeURIComponent()` амперсанд може бути розтлумачений сервером як початок нового поля й поставити під загрозу цілісність даних.

Для [`application/x-www-form-urlencoded` (англ.)](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) пробіли треба замінювати `+`, тож одним з варіантів – після перетворення `encodeURIComponent()` провести додаткову заміну `%20` на `+`.

Для більшої суворості щодо відповідності {{rfc("3986")}} (котрий резервує !, ', (, ) і \*), навіть попри те, що ці символи не мають формалізованого використання в поділі URI, можна безпечно використовувати таке:

```js
function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );
}
```

## Приклади

### Кодування для заголовків Content-Disposition і Link

Наступний приклад демонструє особливе кодування, що вимагається в параметрах заголовків відповідей сервера {{HTTPHeader("Content-Disposition")}} і {{HTTPHeader("Link")}} в UTF-8 (наприклад, імена файлів у UTF-8):

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName
)}`;

console.log(header);
// виводить "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Зверніть увагу, що коли RFC3986 резервує "!", то RFC5987 – ні,
      // тому цей символ немає потреби екранувати
      .replace(/['()]/g, escape) // отже, %27 %28 %29
      .replace(/\*/g, "%2A")
      // Наступне не обов'язково для процентного кодування згідно з RFC5987,
      // тож можна дозволити трохи кращу прочитність по той бік дроту: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

// ось альтернатива для функції вище
function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Зверніть увагу, що коли RFC3986 резервує "!", то RFC5987 – ні,
      // тому цей символ немає потреби екранувати
      .replace(/['()*]/g, (c) => `%${c.charCodeAt(0).toString(16)}`) // отже, %27 %28 %29 %2a (Зверніть увагу, що дійсне кодування "*" – %2A
      // з чого випливає потреба викликати toUpperCase() для коректного кодування)
      // Наступне не обов'язково для процентного кодування згідно з RFC5987,
      // тож можна дозволити трохи кращу прочитність по той бік дроту: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
  );
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
