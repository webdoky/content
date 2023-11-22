---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.imul
---

{{JSRef}}

Статичний метод **`Math.imul()`** ("integer multiply" – множення цілих чисел) повертає результат C-подібного 32-бітного множення двох аргументів.

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

## Синтаксис

```js-nolint
Math.imul(a, b)
```

### Параметри

- `a`
  - : Перше число.
- `b`
  - : Друге число.

### Повернене значення

Результат C-подібного 32-бітного множення переданих двох аргументів.

## Опис

`Math.imul()` дає змогу множити 32-бітні цілі числа з традиційною для C семантикою. Цей функціонал корисний для таких проєктів, як [Emscripten](https://uk.wikipedia.org/wiki/Emscripten).

Оскільки `imul()` — це статичний метод об'єкта `Math`, його потрібно завжди використовувати через `Math.imul()`. Не слід звертатись до нього як до методу власноруч створеного екземпляра `Math` (`Math` не є конструктором).

Якщо використати в `imul()` звичайні числа з рухомою комою JavaScript, буде помітно суттєве падіння швидкодії коду. Це пов'язано з дорогим перетворенням для множення чисел з рухомою комою на цілі числа, а потім перетворенням цілочислового результату множення назад у число з рухомою комою. Проте при використанні [asm.js](/uk/docs/Games/Tools/asm.js), що дозволяє JIT-оптимізаторам використовувати в JavaScript цілі числа з більшою впевненістю, множення двох чисел, за лаштунками збережених як цілі (що можливо лише при використанні asm.js), за допомогою `imul()` потенційно може бути швидшим.

## Приклади

### Застосування Math.imul()

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `Math.imul` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [Emscripten](https://uk.wikipedia.org/wiki/Emscripten) на Вікіпедії
