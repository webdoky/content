---
title: Функція першого класу
slug: Glossary/First-class_Function
page-type: glossary-definition
---

{{GlossarySidebar}}

Про мову програмування кажуть, що вона має **функції першого класу**, коли функції в цій мові вважаються такими ж змінними, як і всі решта. Наприклад, в такій мові функцію можна передавати як аргумент іншим функціям, її можна повертати іншою функцією і призначати її як значення змінній.

## Приклади

### Присвоєння функції змінній

```js
const foo = () => {
  console.log("агов");
};
foo(); // Закликати її за допомогою змінної
// агов
```

Тут _Анонімна функція_ присвоєна {{glossary("Variable", "Змінній")}}, а потім ця змінна використана, щоб закликати цю функцію, додавши після неї дужки `()`.

> [!NOTE]
> Навіть якщо ваша функція має назву, для її заклику все одно можна використовувати ім'я змінної. Надання їй власної назви буває корисним для зневадження коду. _Але це не впливає на те, як її закликають._

### Передача функції як аргументу

```js
function sayHello() {
  return "Привіт, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Передати `sayHello` як аргумент функції `greeting`
greeting(sayHello, "JavaScript!");
// Привіт, JavaScript!
```

> [!NOTE]
> Функція, що передається як аргумент до іншої функції, зветься _{{glossary("Callback function", "функцією зворотного виклику")}}_. _`sayHello()` - це функція зворотного виклику._

### Повернення функції

```js
function sayHello() {
  return () => {
    console.log("Привіт!");
  };
}
```

У цьому прикладі функція повертається з іншої функції: _функцію можна повернути, тому що функції в JavaScript вважаються значеннями_.

> [!NOTE]
> Функція, що повертає функцію або приймає інші функції як аргументи, зветься _функцією вищого порядку_.

## Дивіться також

- [Функції першого класу](https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D1%96%D1%8F_%D0%BF%D0%B5%D1%80%D1%88%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BB%D0%B0%D1%81%D1%83) на Вікіпедії
- Споріднені терміни глосарія:
  - {{glossary("Callback function", "Функція зворотного виклику)}}
  - {{glossary("Function", "Функція")}}
  - {{glossary("Variable", "Змінна")}}
