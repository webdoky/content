---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.codePointAt
---

{{JSRef}}

Метод **`codePointAt()`** (кодова точка на позиції) значень {{jsxref("String")}} повертає невід'ємне число, що відповідає значенню кодової точки Unicode символу, що починається за вказаним індексом. Зверніть увагу на те, що індекс – все одно заснований на кодових одиницях UTF-16, а не кодових точках Unicode.

{{EmbedInteractiveExample("pages/js/string-codepointat.html", "shorter")}}

## Синтаксис

```js-nolint
codePointAt(index)
```

### Параметри

- `index`
  - : Індекс від нуля символу, що повинен бути повернений. [Перетворюючись на ціле число](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#peretvorennia-na-tsile) — `undefined` перекидається на 0.

### Повернене значення

- Якщо `index` лежить поза діапазоном `0` – `str.length - 1`, то `codePointAt()` повертає {{jsxref("undefined")}}.
- Якщо елемент на `index` є початковим сурогатом UTF-16, то цей метод повертає кодову точку сурогатної _пари_.
- Якщо елемент на `index` є кінцевим сурогатом UTF-16, то цей метод повертає _лише_ кінцеву сурогатну кодову одиницю.

## Опис

Символи в рядку індексуються зліва направо. Індекс першого символу – `0`, а індекс останнього символу в рядку, що зветься `str`, – `str.length - 1`.

Кодові точки Unicode мають діапазон від `0` до `1114111` (`0x10FFFF`). В UTF-16 кожен індекс рядка відповідає кодовій одиниці зі значенням від `0` до `65535`. Вищі кодові точки представлені _парою_ 16-бітних псевдосимволів-сурогатів. Таким чином, `codePointAt()` повертає кодову точку, що може охоплювати два індекси рядка. Про Unicode читайте [Символи UTF-16, кодові точки Unicode та графемні кластери](/uk/docs/Web/JavaScript/Reference/Global_Objects/String#symvoly-utf-16-kodovi-tochky-unicode-ta-hrafemni-klastery).

## Приклади

### Застосування codePointAt()

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### Цикли з методом codePointAt()

У зв'язку з тим, що використання індексів рядка в циклі призводить до того, що одна й та ж кодова точка обробляється двічі (один раз – для початкового сурогату, інший – для кінцевого сурогату), а також тим, що другий раз `codePointAt()` повертає _лише_ кінцевий сурогат, краще уникати циклів за індексом.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Натомість краще вжити інструкцію [`for...of`](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration#instruktsiia-forof) або [розгорнути рядок](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax), – обидва способи закликають [`@@iterator`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) рядка, що ітерує за кодовими точками. Потім – використати `codePointAt(0)`, щоб отримати кодову точку кожного елемента.

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `String.prototype.codePointAt` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
