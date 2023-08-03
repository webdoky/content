---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
page-type: javascript-error
---

{{jsSidebar("Errors")}}

Виняток JavaScript "_variable_ is not defined" ("_змінна_ не означена") трапляється, коли десь відбувається звертання до відсутньої змінної.

## Повідомлення

```plain
ReferenceError: "x" is not defined (браузери на основі V8 і Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Тип помилки

{{jsxref("ReferenceError")}}.

## Що пішло не так?

Десь відбувається звертання до відсутньої змінної. Така змінна повинна бути оголошена, тобто слід пересвідчитися, що вона доступна для поточних сценарію та [області видимості](/uk/docs/Glossary/Scope).

> **Примітка:** При завантаженні бібліотеки (наприклад, jQuery) слід пересвідчитися, що вона завантажується до звертання до змінних цієї бібліотеки, як то "$". Слід поставити елемент {{HTMLElement("script")}}, котрий завантажує цю бібліотеку, до власного коду, що її використовує.

## Приклади

### Змінна не оголошена

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Змінна "foo" ніде не означена. Вона повинна бути якимсь рядком, аби метод {{jsxref("String.prototype.substring()")}} спрацював.

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### Не та область видимості

Змінна повинна бути доступна в поточному контексті виконання. Змінні, означені всередині [функції](/uk/docs/Web/JavaScript/Reference/Functions), не можуть використовуватися ніде поза своєю функцією, тому що змінна означена лише в області видимості такої функції

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Утім, функція може звертатися до всіх змінних та функцій, означених всередині області видимості, в котрій означена вона сама. Інакше кажучи, функція, означена в глобальній області, може звертатися до всіх змінних, означених в глобальній області.

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Дивіться також

- [Область видимості](/uk/docs/Glossary/Scope)
- [Оголошення змінних у Посібнику JavaScript](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#oholoshennia-zminnykh)
- [Функційна область видимості в Посібнику JavaScript](/uk/docs/Web/JavaScript/Guide/Functions#funktsiina-oblast-vydymosti)
