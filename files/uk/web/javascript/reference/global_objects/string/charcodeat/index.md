---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
  - JavaScript
  - Method
  - Reference
  - String
  - Unicode
browser-compat: javascript.builtins.String.charCodeAt
---
{{JSRef}}

Метод **`charCodeAt()`** повертає ціле число в діапазоні від `0` до `65535`, що відповідає кодовій одиниці UTF-16 за переданим індексом в рядку.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

Значення кодової одиниці UTF-16 збігається зі значенням коду символу в Unicode для тих кодів, які поміщаються в одну кодову одиницю UTF-16. Якщо ж кодова одиниця Unicode не може бути виражена через одну кодову одиницю UTF-16 (через те, що її значення більше за `0xFFFF`), то значення коду, поверненого методом, буде _першою частиною сурогатної пари_ коду. Щоб отримати значення коду цілком, краще застосувати {{jsxref("Global_Objects/String/codePointAt", "codePointAt()")}}.

## Синтаксис

```js
charCodeAt(index)
```

### Параметри

- `index`
  - : Ціле значення, яке більше або дорівнює `0`, і при цьому менше за значення поля `length` рядка. Якщо `index` — не число, то замість нього буде вжито усталений `0`.

### Повернене значення

Число, яке відповідає значенню кодової одиниці UTF-16 символу, що знаходиться в рядку за вказаним індексом. Якщо `index` виходить за межі рядка, `charCodeAt()` поверне {{jsxref("Global_Objects/NaN", "NaN")}}.

## Опис

Коди Unicode варіюються в діапазоні від `0` до `1114111` (`0x10FFFF`). Перші 128 кодів Unicode цілком збігаються з кодуванням ASCII. (Більш поглиблену інформацію про юнікод можна знайти в розділі [Настанови з JavaScript](/uk/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode).)

> **Примітка:** `charCodeAt()` завжди повертатиме значення, менше за `65536`. Причина цього полягає в тому, що коди з більшим значенням позначаються _парою_ "сурогатних" псевдосимволів (з меншим числовим значенням), які разом складаються в справжній символ.
>
> З цієї причини, щоб розглянути (чи відтворити) цілий символ з кодовим значенням `65536` або більше, недостатньо просто отримати `charCodeAt(i)`. Для таких символів також необхідне значення `charCodeAt(i+1)` (як буцім при роботі з двома літерами в рядку), або використання функції `codePointAt(i)` замість цього. Докладніше — в прикладах 2 та 3 далі.

Метод `charCodeAt()` повертає {{jsxref("Global_Objects/NaN", "NaN")}}, коли переданий індекс менший за `0`, або ж коли він дорівнює чи більший за значення поля `length` рядка.

Зворотна сумісність: В історичних версіях (як, наприклад, JavaScript 1.2) метод `charCodeAt()` повертав число, яке відповідало значенню з кодового набору ISO-Latin-1 від символу за переданим індексом. Набір кодів ISO-Latin-1 має діапазон від `0` до `255`. Перші `0-127` значень точно збігаються з набором символів ASCII.

## Приклади

### Застосування charCodeAt()

Наступний приклад повертає `65`, юнікодне значення A.

```js
'ABC'.charCodeAt(0)  // повертає 65
```

### Лагодження методу charCodeAt() для обробки символів з-поза меж Базового багатомовного плану, коли їхня присутність у рядку заздалегідь не відома

Цей варіант можна використовувати для циклів і подібних конструкцій, коли невідомо, чи не-BMP символи наявні в рядку перед вказаною індексом позицією.

```js
function fixedCharCodeAt(str, idx) {
  // наприклад fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // наприклад fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // Старший сурогат (також можна замінити останнє
  // шістнадцяткове значення на 0xDB7F, щоб старші сурогати
  // сприймались як окремі символи приватного плану)
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by ' +
        'low surrogate in fixedCharCodeAt()';
    }
    return (
      (hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Молодший сурогат
    // Хибне значення повертається для того, щоб дозволити циклу
    // пропустити цю ітерацію, оскільки молодший сурогат мав би
    // вже опрацюватись під час обробки старшого в попередній ітерації
    return false;
    // hi = str.charCodeAt(idx - 1);
    // low = code;
    // return ((hi - 0xD800) * 0x400) +
    //   (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

### Лагодження методу charCodeAt() для обробки символів з-поза меж Базового багатомовного плану, коли їхня присутність у рядку відома заздалегідь

```js
function knownCharCodeAt(str, idx) {
  str += '';
  var code,
      end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    }
    else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Опрацьовується іще одна позиція, оскільки один із "символів"
    // є частиною сурогатної пари
    return ((hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
  return code;
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
