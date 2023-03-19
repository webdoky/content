---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.codePointAt
---

{{JSRef}}

Метод **`codePointAt()`** повертає невід'ємне число, що відповідає значенню коду Unicode символу за вказаною позицією. Зверніть увагу на те, що ця функція дає не N-ну кодову точку в рядку, а кодову точку, що починається за заданим індексом в рядку.

{{EmbedInteractiveExample("pages/js/string-codepointat.html","shorter")}}

## Синтаксис

```js-nolint
codePointAt(pos)
```

### Параметри

- `pos`
  - : Позиція елемента в рядку `str`, код якого слід повернути.

### Повернене значення

Десяткове число, яке відповідає значенню коду символу, що знаходиться в рядку за вказаною позицією `pos`.

- Якщо за вказаною позицією `pos` нічого немає, повертається [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined).
- Якщо за позицією `pos` знаходиться старший сурогат UTF-16, повертається код цілої сурогатної _пари_.
- Якщо за позицією `pos` знаходиться молодший сурогат UTF-16, повертається _лише_ код молодшого сурогату.

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

Оскільки звертання за індексом `pos` до елементу, який є молодшим сурогатом UTF-16, повертає _лише_ код молодшого сурогату, краще не звертатися за індексом безпосередньо до рядка UTF-16.

Натомість можна вжити інструкцію [`for...of`](/uk/docs/Web/JavaScript/Guide/Loops_and_iteration#instruktsiia-forof) або метод [`forEach()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) масиву (чи будь-що інше, що перебирає сурогати UTF-16 правильно) для перебирання елементів рядка, викликаючи `codePointAt(0)` для отримання коду кожного елемента.

```js
for (const codePoint of "\ud83d\udc0e\ud83d\udc71\u2764") {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'
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
