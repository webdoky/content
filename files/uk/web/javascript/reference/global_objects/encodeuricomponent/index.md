---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
page-type: javascript-function
browser-compat: javascript.builtins.encodeURIComponent
---

{{jsSidebar("Objects")}}

Функція **`encodeURIComponent()`** (закодувати компонент URI) кодує {{Glossary("URI")}} шляхом заміни кожного входження певних символів однією, двома, трьома або чотирма послідовностями екранування, що представляють кодування символу в {{Glossary("UTF-8")}} (чотири послідовності будуть лише для символів, що складаються з двох сурогатних символів). Порівняно з {{jsxref("encodeURI()")}}, ця функція кодує більше символів, включно з тими, котрі є частиною синтаксису URI.

{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}

## Синтаксис

```js-nolint
encodeURIComponent(uriComponent)
```

### Параметри

- `uriComponent`
  - : Рядок для кодування як компонента URI (шляху, рядка запиту, фрагмента тощо). Інші значення – [перетворюються на рядки](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#zvedennia-do-riadka).

### Повернене значення

Новий рядок, що представляє `uriComponent`, закодований як компонент URI.

### Винятки

- {{jsxref("URIError")}}
  - : Викидається, коли `uriComponent` містить [самотній сурогат](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

## Опис

`encodeURIComponent()` – це функція, що є властивістю глобального об'єкта.

`encodeURIComponent()` використовує такий же алгоритм кодування, як описаний для {{jsxref("encodeURI()")}}. Він екранує усі символи, **окрім**:

```plain
A–Z a–z 0–9 - _ . ! ~ * ' ( )
```

Порівняно з {{jsxref("encodeURI()")}}, `encodeURIComponent()` екранує більшу множину символів. Функцію `encodeURIComponent()` слід застосовувати на введених користувачем полях форм, що надсилаються на сервер за допомогою {{HTTPMethod("POST")}}: вона екранує символи `&`, що можуть ненавмисно бути додані при введенні даних для певних сутностей HTML, та інші символи, що вимагають кодування й розкодування. Наприклад, якщо користувач напише `Jack & Jill`, то без `encodeURIComponent()` амперсанд може бути розтлумачений сервером як початок нового поля й поставити під загрозу цілісність даних.

Для [`application/x-www-form-urlencoded` (англ.)](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#application/x-www-form-urlencoded-encoding-algorithm) пробіли треба замінювати `+`, тож одним з варіантів – після перетворення `encodeURIComponent()` провести додаткову заміну `%20` на `+`.

## Приклади

### Кодування для заголовків Content-Disposition і Link

Наступний приклад демонструє особливе кодування, що вимагається в параметрах заголовків відповідей сервера {{HTTPHeader("Content-Disposition")}} і {{HTTPHeader("Link")}} в UTF-8 (наприклад, імена файлів у UTF-8):

```js
const fileName = "my file(2).txt";
const header = `Content-Disposition: attachment; filename*=UTF-8''${encodeRFC5987ValueChars(
  fileName,
)}`;

console.log(header);
// "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Рядок нижче утворює послідовності %27 %28 %29 %2A (Зверніть увагу, що
      // дійсне кодування "*" – це %2A, з чого випливає потреба викликати
      // toUpperCase() для коректного кодування). І хоча RFC3986 резервує "!",
      // RFC5987 – ні, тому цей символ немає потреби екранувати.
      .replace(
        /['()*]/g,
        (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
      )
      // Наступне не обов'язково для процентного кодування згідно з RFC5987,
      // тож можна дозволити трохи кращу прочитність по той бік дроту: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
      )
  );
}
```

### Кодування для RFC3986

Новіший стандарт [RFC3986](https://datatracker.ietf.org/doc/html/rfc3986) резервує `!`, `'`, `(`, `)` і `*`, навіть попри те, що ці символи не мають формалізованого використання як обмежувачі в URI. Наступна функція кодує рядок у сумісному з RFC3986 форматі компонента URL. Також вона кодує `[` і `]`, котрі є частиною синтаксису URI {{Glossary("IPv6")}}. Сумісна з RFC3986 реалізація `encodeURI` їх екранувати не повинна, що продемонстровано в [прикладі `encodeURI()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/encodeURI#koduvannia-dlia-rfc3986).

```js
function encodeRFC3986URIComponent(str) {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}
```

### Кодування самотнього сурогату викидає помилку

Викидається помилка {{jsxref("URIError")}}, якщо спробувати закодувати сурогат, який не є частиною пари старшого та молодшого сурогатів. Наприклад:

```js
// Пара старший-молодший – ОК
encodeURIComponent("\uD800\uDFFF"); // "%F0%90%8F%BF"
// Самотня старшосурогатна кодова одиниця викидає помилку "URIError: malformed URI sequence"
encodeURIComponent("\uD800");
// Самотня старшосурогатна кодова одиниця викидає помилку "URIError: malformed URI sequence"
encodeURIComponent("\uDFFF");
```

Можна скористатися методом {{jsxref("String.prototype.toWellFormed()")}}, котрий замінює самотні сурогати на символ заміни Unicode (U+FFFD), щоб уникнути цієї помилки. Також можна скористатися методом {{jsxref("String.prototype.isWellFormed()")}}, щоб перевірити, чи містить рядок самотні сурогати, перед тим, як передати його в `encodeURIComponent()`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("decodeURI()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
