---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.clz32
---
{{JSRef}}

Функція **`Math.clz32()`** повертає кількість старших нульових бітів 32-бітного бінарного представлення переданого числа.

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

## Синтаксис

```js
Math.clz32(x)
```

### Параметри

- `x`
  - : Число.

### Повернене значення

Кількість старших нульових бітів 32-бітного бінарного представлення переданого числа.

## Опис

"`clz32`" — це скорочення від **CountLeadingZeroes32** ("порахувати старші нулі для 32-розрядного значення").

Якщо `x` — не число, то його буде спочатку перетворено на число, а потім переведено у 32-бітне беззнакове ціле число.

Якщо переведене 32-бітне беззнакове ціле число дорівнює `0`, то функція поверне `32`, оскільки всі біти дорівнюють `0`.

Ця функція здебільшого корисна в системах, які компілюються у JS, зокрема – [Emscripten](/uk/docs/Emscripten).

### Обрахунок кількості старших одиниць, та інше

На сьогодні не існує функції `Math.clon` для обрахунку старших одиниць (скорочено від "Count Leading Ones"; названо "clon", а не "clo", оскільки "clo" та "clz" занадто схожі, особливо для неангломовних людей). Однак, функцію `clon` можна легко створити шляхом обернення бітів числа та передачі результату до `Math.clz32`. Це працюватиме, оскільки обернена 1 дорівнює 0, і навпаки. Таким чином, обернення бітів також оберне і виміряну кількість нулів (з `Math.clz32`), змушуючи функцію `Math.clz32` рахувати кількість одиниць замість нулів.

Припустімо, є таке 32-бітне слово:

```js
var a = 32776;   // 00000000000000001000000000001000 (16 старших нулів)
Math.clz32(a);   // 16

var b = ~32776;  // 11111111111111110111111111110111 (обернене 32776, 0 старших нулів)
Math.clz32(b);   // 0 (цей результат дорівнює кількості старших одиниць у числі a)
```

Використавши цю логіку, можна створити функцію `clon`, як показано нижче:

```js
var clz = Math.clz32;
function clon(integer){
    return clz(~integer);
}
```

Далі цей підхід можна розширити, створивши функції "Count Trailing Zeros" та "Count Trailing Ones" (для обрахунку кінцевих нулів та одиниць відповідно), що не міститимуть переходів, так, як це показано нижче. Функція `ctrz`, що наведена далі, заповнює всі вищі біти значеннями нижчих заповнених бітів, а потім змінює знак результату та очищає вищі біти так, щоб можна було використати функцію `clz`.

```js
var clz = Math.clz32;
function ctrz(integer){ // обрахунок кінцевих пробілів
    // 1. Заповнюємо всі вищі біти після першого
    integer |= integer << 16;
    integer |= integer << 8;
    integer |= integer << 4;
    integer |= integer << 2;
    integer |= integer << 1;
    // 2. Тепер обернемо всі біти, щоб розкрити нижчі з них
    return 32 - clz(~integer) |0; // `|0` гарантує зведення до цілого
}
function ctron(integer){ // обрахунок кінцевих одиниць
    // В JavaScript не існує оператора для зміщення бітів із заповненням звільнених
    // місць одиницями, тому наведений нижче код — найшвидший
    return ctrz(~integer);
    /* Альтернавна реалізація для демонстрації:
       // 1. прибираємо всі вищі біти за першим нулем
       integer &= (integer << 16) | 0xffff;
       integer &= (integer << 8 ) | 0x00ff;
       integer &= (integer << 4 ) | 0x000f;
       integer &= (integer << 2 ) | 0x0003;
       integer &= (integer << 1 ) | 0x0001;
       // 2. Тепер, шляхом обернення бітів розкриємо нижчі нулі
       return 32 - clon(~integer) |0;
    */
}
```

Такі допоміжні функції можна зібрати у модуль ASM.JS, і отримати таким чином справжній шедевр швидкодії. Такі ситуації — це саме те, для чого і був створений ASM.JS.

```js
var countTrailsMethods = (function(stdlib, foreign, heap) {
    "use asm";
    var clz = stdlib.Math.clz32;
    function ctrz(integer) { // обрахунок кінцевих нулів
        integer = integer | 0; // зведення до цілого числа
        // 1. Заповнюємо всі вищі біти після першого
        // ASMjs чомусь не дозволяє використовувати оператори ^=, &= чи |=
        integer = integer | (integer << 16);
        integer = integer | (integer << 8);
        integer = integer | (integer << 4);
        integer = integer | (integer << 2);
        integer = integer | (integer << 1);
        // 2. Тепер обернемо всі біти, щоб розкрити нижчі з них
        return 32 - clz(~integer) |0;
    }
    function ctron(integer) { // обрахунок кінцевих одиниць
        integer = integer | 0; // зведення до цілого числа
        return ctrz(~integer) |0;
    }
    // на жаль, ASM.JS потребує використання повільних і незграбних об'єктів:
    return {a: ctrz, b: ctron};
})(window, null, null);
var ctrz = countTrailsMethods.a;
var ctron = countTrailsMethods.b;
```

## Приклади

### Застосування Math.clz32()

```js
Math.clz32(1);           // 31
Math.clz32(1000);        // 22
Math.clz32();            // 32

var stuff = [NaN, Infinity, -Infinity, 0, -0, false, null, undefined, 'foo', {}, []];
stuff.every(n => Math.clz32(n) == 32);  // true

Math.clz32(true);        // 31
Math.clz32(3.5);         // 30
```

## Поліфіл

Наступний поліфіл є найбільш ефективним.

```js
if (!Math.clz32) Math.clz32 = (function(log, LN2){
  return function(x) {
    // Нехай n буде ToUint32(x).
    // Нехай p — це кількість старших нульових бітів
    // 32-бітного бінарного представлення числа n.
    // Повернемо p.
    var asUint = x >>> 0;
    if (asUint === 0) {
      return 32;
    }
    return 31 - (log(asUint) / LN2 | 0) |0; // вираз "| 0" працює як math.floor
  };
})(Math.log, Math.LN2);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл для `Math.clz32` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
