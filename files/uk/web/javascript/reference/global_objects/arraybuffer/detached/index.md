---
title: ArrayBuffer.prototype.detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.detached
---

{{JSRef}}

Аксесорна властивість **`detached`** (від'єднаний) примірників {{jsxref("ArrayBuffer")}} повертає булеве значення, котре вказує на те, чи був цей буфер від'єднаний (кудись переданий), чи ні.

## Опис

Властивість `detached` – це аксесорна властивість, чия аксесорна функція присвоєння – `undefined`, тобто цю властивість можна лише зчитувати. Значенням є `false`, коли `ArrayBuffer` щойно створено. Значення стає `true`, коли `ArrayBuffer` [передається](/uk/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#peredacha-arraybuffer), що від'єднує екземпляр від його ділянки пам'яті. Як тільки буфер став від'єднаним, його вже неможливо використовувати.

## Приклади

### Використання detached

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `ArrayBuffer.prototype.detached` у складі `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
