---
title: Об'єкт arguments
slug: Web/JavaScript/Reference/Functions/arguments
page-type: javascript-language-feature
browser-compat: javascript.functions.arguments
---

{{jsSidebar("Functions")}}

**`arguments`** – це масивоподібний об'єкт, доступний всередині [функцій](/uk/docs/Web/JavaScript/Guide/Functions), який містить значення аргументів, переданих поточній функції.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Опис

> [!NOTE]
> У сучасному коді краще віддавати перевагу [решті параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters).

Об'єкт `arguments` – це локальна змінна, доступна всередині всіх не[стрілкових](/uk/docs/Web/JavaScript/Reference/Functions/Arrow_functions) функцій. Всередині такої функції можна звертатися до її аргументів за допомогою її об'єкта `arguments`. Він містить записи для кожного аргументу, з яким була викликана функція, а перший запис має індекс `0`.

Наприклад, якщо функції передано 3 аргументи, до них можна звертатися так:

```js
arguments[0]; // перший аргумент
arguments[1]; // другий аргумент
arguments[2]; // третій аргумент
```

Об'єкт `arguments` корисний для функцій, які викликаються з більшою кількістю аргументів, ніж їм формально дозволено отримувати, – такі функції звуться [_варіативними_](https://uk.wikipedia.org/wiki/%D0%92%D0%B0%D1%80%D1%96%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D1%96%D1%8F), серед них, наприклад, {{jsxref("Math.min()")}}. У цьому прикладі функція приймає будь-яку кількість рядкових аргументів і повертає найдовший з них:

```js
function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

Можна скористатися {{jsxref("Functions/arguments/length", "arguments.length")}}, щоб полічити, зі скількома аргументами була викликана функція. Якщо ж потрібно полічити, скільки параметрів функція має в оголошенні, слід звернутися до властивості {{jsxref("Function/length", "length")}} цієї функції.

### Присвоєння за індексами

Кожен індекс аргументу також можна задати або перезаписати:

```js
arguments[1] = "нове значення";
```

Несуворі функції, що мають лише прості параметри (тобто не мають решти, усталених параметрів або їх деструктурування), синхронізують нове значення параметрів з об'єктом `arguments`, і навпаки:

```js
function func(a) {
  arguments[0] = 99; // оновлення arguments[0] also змінює a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // оновлення a також змінює arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99
```

Несуворі функції, що _мають_ передані [решту](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters), [усталені](/uk/docs/Web/JavaScript/Reference/Functions/Default_parameters) або [деструктуровані](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) параметри, не синхронізують нові значення, присвоєні параметрам у тілі функції, з об'єктом `arguments`. Замість цього об'єкт `arguments` у несуворих функцій зі складними параметрами завжди відображатиме значення, передані функції при її виклику.

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // оновлення arguments[0] не впливає на a
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // оновлення a не впливає на arguments[0]
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// Невідстежуваний усталений параметр
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

Це та сама логіка, яку демонструють всі [функції суворого режиму](/uk/docs/Web/JavaScript/Reference/Strict_mode#sproshchennia-eval-i-arguments), незалежно від типів параметрів, які їм передаються. Тобто присвоєння нових значень до параметрів у тілі функції ніколи не впливає на об'єкт `arguments`, і так само присвоєння нових значень за індексами `arguments` не впливає на значення параметрів, навіть якщо функція має лише прості параметри.

> [!NOTE]
> Не можна вписати директиву `"use strict";` у тіло визначення функції, що приймає решту, усталені або деструктуровані параметри. Це призведе до викидання [синтаксичної помилки](/uk/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params).

### arguments – це масивоподібний об'єкт

`arguments` – це масивоподібний об'єкт, тобто `arguments` має властивість {{jsxref("Functions/arguments/length", "length")}} і властивості з індексами від нуля, але не має вбудованих методів {{jsxref("Array")}}, таких як {{jsxref("Array/forEach", "forEach()")}} або {{jsxref("Array/map", "map()")}}. Однак його можна перетворити на справжній масив за допомогою [`slice()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}} або [синтаксису розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

```js
const args = Array.prototype.slice.call(arguments);
// або
const args = Array.from(arguments);
// або
const args = [...arguments];
```

Для поширених ситуацій використання `arguments` як масивоподібного об'єкта – достатньо, оскільки він водночас [є ітерованим](/uk/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) і має властивість `length` та числові індекси. Наприклад, метод {{jsxref("Function.prototype.apply()", "apply()")}} приймає масивоподібні об'єкти.

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## Властивості

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : Посилання на поточну функцію, до якої належать аргументи. Заборонено в суворому режимі.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Число аргументів, що були передані функції.
- [`arguments[Symbol.iterator]()`](/uk/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Повертає новий об'єкт [ітератора масиву](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), що містить значення для кожного індексу `arguments`.

## Приклади

### Визначення функції, що з'єднує докупи декілька рядків

Цей приклад визначає функцію, що з'єднує докупи декілька рядків. Її єдиний формальний аргумент – це рядок, що містить символи, які розділяють елементи, котрі з'єднуються.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Можна передати цій функції скільки завгодно аргументів. Вона повертає рядок, що містить рядковий список, утворений з кожного аргументу списку:

```js
myConcat(", ", "червоний", "помаранчевий", "синій");
// "червоний, помаранчевий, синій"

myConcat("; ", "слон", "жирафа", "лев", "гепард");
// "слон; жирафа; лев; гепард"

myConcat(". ", "шавлія", "базилік", "орегано", "перець", "петрушка");
// "шавлія. базилік. орегано. перець. петрушка"
```

### Визначення функції, що створює списки HTML

Цей приклад визначає функцію, що створює рядок, який містить HTML для списку. Її єдиний формальний аргумент – це рядок, що містить `"u"`, якщо список має бути [невпорядкованим (з маркерами)](/uk/docs/Web/HTML/Element/ul), або `"o"`, якщо список має бути [упорядкованим (з номерами)](/uk/docs/Web/HTML/Element/ol). Функція визначається так:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // закінчити список
  return html;
}
```

До цієї функції можна передати будь-яку кількість аргументів, і вона додасть кожен аргумент як елемент списку до списку вказаного типу. Наприклад:

```js
list("u", "Один", "Два", "Три");
// "<ul><li>Один</li><li>Два</li><li>Три</li></ul>"
```

### Застосування typeof до arguments

Оператор {{jsxref("Operators/typeof", "typeof")}} повертає `'object'`, коли його застосувати до `arguments`:

```js
console.log(typeof arguments); // 'object'
```

Типи окремих аргументів можна з'ясувати, проіндексувавши `arguments`:

```js
console.log(typeof arguments[0]); // повертає тип першого аргументу
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
- [Решта параметрів](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters)
