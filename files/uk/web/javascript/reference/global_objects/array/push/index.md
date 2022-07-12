---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.push
---

{{JSRef}}

Метод **`push()`** (запхати) додає один або декілька елементів у кінець
масиву та повертає нову довжину масиву.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Синтаксис

```js
push(element0)
push(element0, element1)
push(element0, element1, /* ... ,*/ elementN)
```

### Параметри

- `elementN` (елемент № N)
  - : Елемент(и), що потрібно додати у кінець масиву.

### Повернене значення

Нова властивість {{jsxref("Array.length", "length")}} об'єкта, на якому
був викликаний метод.

## Опис

Метод `push` додає значення до масиву.

`push` навмисно є узагальненим. Цей метод можна використовувати з
{{jsxref("Function.call", "call()")}} або {{jsxref("Function.apply", "apply()")}}
для об’єктів, схожих на масиви. Метод `push` покладається на властивість `length`,
щоб визначити, звідки почати вставляти задані значення. Якщо властивість `length` не можна перетворити на число,
використовується індекс 0. Це включає в себе можливість відсутності `length`; у цьому випадку
`length` також буде створено.

Незважаючи на те, що {{jsxref("Global_Objects/String", "рядки", "", 1)}} є нативними об'єктами,
подібними до масиву, вони не підходять для застосування цього методу, оскільки рядки є незмінними.
Те саме стосується нативного
масивоподібного об’єкта {{jsxref("Functions/arguments", "arguments", "", 1)}}.

## Приклади

### Додавання елементів до масиву

Наступний код створює масив `sports`, що містить два елементи, потім
додає до нього ще два елементи. Змінна `total` містить нову довжину масиву.

```js
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
```

### Об’єднання двох масивів

У цьому прикладі для переміщення всіх елементів з другого масиву в перший
використовується {{jsxref("Operators/Spread_syntax", "синтаксис розгортання", "", "1")}}

```js
let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Об’єднання другого масиву в перший
vegetables.push(...moreVegs);

console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
```

Об’єднання двох масивів також можна зробити за допомогою методу {{jsxref("Array.prototype.concat()", "concat()")}}.

### Використання об’єкта у подібний до масиву спосіб

Як згадувалося вище, `push` є навмисно узагальненим, і це можна використати
на власну користь. `Array.prototype.push` може добре працювати з об’єктом,
як показує цей приклад.

Зверніть увагу, що ми не створюємо масив для зберігання колекції об’єктів. Натомість ми зберігаємо
колекцію на самому об’єкті і використовуємо `call` на
`Array.prototype.push`, щоб змусити метод подумати, що ми маємо справу з масивом, і це просто працює,
завдяки тому, що JavaScript дозволяє нам встановлювати контекст виконання будь-яким способом.

```js
let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length автоматично збільшується
        // кожного разу, коли додається елемент.
        [].push.call(this, elem)
    }
}

// Давайте додамо декілька порожніх об’єктів просто для ілюстрації.
obj.addElem({})
obj.addElem({})
console.log(obj.length)
// → 2
```

Зверніть увагу, хоча `obj` не є масивом, метод `push`
успішно збільшив властивість `length` у `obj` так само,
як якщо це був би реальний масив.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
