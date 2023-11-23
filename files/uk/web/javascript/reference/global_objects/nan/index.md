---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
page-type: javascript-global-property
browser-compat: javascript.builtins.NaN
---

{{jsSidebar("Objects")}}

Глобальна властивість **`NaN`** – значення, що представляє "Not-A-Number" – нечисло.

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Значення

Те саме числове значення, що й {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Опис

`NaN` – властивість _глобального об'єкта_. Інакше кажучи, це змінна в глобальній області видимості.

В сучасних браузерах `NaN` є неналаштовною властивістю, недоступною для запису. Навіть коли це не так, слід уникати її змін.

Є п'ять різновидів операцій, що повертають `NaN`:

- Провал перетворення на число (тобто явного перетворення, як то `parseInt("blabla")`, `Number(undefined)`, або ж неявного, як то `Math.abs(undefined)`)
- Математичні операції, чий результат не є дійсним числом (наприклад, `Math.sqrt(-1)`)
- Невизначені форми (наприклад, `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Метод чи вираз, чий операнд є або зводиться до `NaN` (наприклад, `7 ** NaN`, `7 * "blabla"`) — а отже, `NaN` є заразним значенням
- Інші випадки, коли недійсне значення представляється як число (наприклад, недійсне значення [Date](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` і його логіка не були винайдені JavaScript. Його семантика полягає в семантиці арифметики з рухомою комою (включно з фактом `NaN !== NaN`) описані в стандарті [IEEE 754](https://uk.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%D1%82_%D1%80%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%97_%D0%BA%D0%BE%D0%BC%D0%B8_%D0%B7_%D0%BF%D0%BE%D0%B4%D0%B2%D1%96%D0%B9%D0%BD%D0%BE%D1%8E_%D1%82%D0%BE%D1%87%D0%BD%D1%96%D1%81%D1%82%D1%8E). Логіка `NaN` включає:

- Коли `NaN` бере участь у математичній операції (окрім [бітових операцій](/uk/docs/Web/JavaScript/Reference/Operators#operatory-pobitovoho-zsuvu)), результат зазвичай також буде `NaN`. (Дивіться [контрприклад](#tykhe-ekranuvannia-nan) нижче.)
- Коли `NaN` є одним з операндів будь-якого відносного порівняння (`>`, `<`, `>=`, `<=`), результат завжди буде `false`.
- `NaN` вважається нерівним (за допомогою [`==`](/uk/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/uk/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_equality) і [`!==`](/uk/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) будь-якому іншому значенню – включно з іншим значенням `NaN`.

Крім цього, `NaN` є одним зі значень [хибності](/uk/docs/Glossary/Falsy) в JavaScript.

## Приклад

### Перевірка на NaN

Щоб зрозуміти, чи є значення `NaN`, слід використовувати {{jsxref("Number.isNaN()")}} або {{jsxref("isNaN()")}} для якнайяснішого з'ясування, чи є значення `NaN` — або, оскільки `NaN` є єдиним нерівним самому собі значенням, можна виконати самопорівняння, отак: `x !== x`.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

Проте зверніть увагу на різницю між `isNaN()` і `Number.isNaN()`: перший варіант поверне `true`, коли значення вже дорівнює `NaN`, або стане `NaN` після зведення до числа, натомість другий – поверне `true` лише коли значення вже є `NaN`:

```js
isNaN("привіт, світе"); // true
Number.isNaN("привіт, світе"); // false
```

З тієї само причини використання значення BigInt викине помилку при використанні `isNaN()`, але не `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Крім цього, одна частина методів масиву не може знайти `NaN`, а інша – може. А саме – ті, що шукають індекс ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}), не можуть знайти `NaN`, а ті, що шукають значення ({{jsxref("Array/includes", "includes()")}}) – можуть:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Методи, що приймають коректно визначений предикат, завжди можуть знайти NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Більше інформації про `NaN` та його порівняння – на сторінці [Перевірка на рівність та тотожність](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Помітно відмінні значення NaN

Є підстави для того, щоб `NaN` не було рівним самому собі. Можливо виробити два числа з рухомою точкою з різними двійковими представленнями, котрі обидва будуть `NaN`, тому що в [кодуванні IEEE 754](https://uk.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%BE_%D0%B7_%D1%80%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%8E_%D0%BA%D0%BE%D0%BC%D0%BE%D1%8E) будь-яке число з рухомою точкою з експонентою `0x7ff` і ненульовою мантисою є `NaN`. У JavaScript маніпуляції бітового рівня можна виконати за допомогою [типізованих масивів](/uk/docs/Web/JavaScript/Guide/Typed_arrays).

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Отримання байтового представлення NaN
const n = f2b(NaN);
// Змінити перший біт, котрий є бітом знаку і не грає ролі для NaN
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### Тихе екранування NaN

`NaN` пролізає крізь усі математичні операції, тож зазвичай достатньо перевірити на `NaN` один раз – у кінці обчислення, щоб помітити помилку. Єдиний випадок, коли `NaN` тихо екранується – при [піднесенні до степеня](/uk/docs/Web/JavaScript/Reference/Operators/Exponentiation) з показником степеня `0`, що зразу повертає `1`, без перевірки значення основи.

```js
NaN ** 0 === 1; // true
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN()")}}
