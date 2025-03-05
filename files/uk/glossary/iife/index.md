---
title: IIFE
slug: Glossary/IIFE
page-type: glossary-definition
---

{{GlossarySidebar}}

**IIFE** (негайно закличний вираз-функція) – це ідіома, в якій {{glossary("function", "функція")}} {{glossary("JavaScript")}} запускається зразу після свого визначення. Цей патерн також відомий як _самовиконувана анонімна функція_. Назва IIFE була запропонована Беном Альманом на [його блозі](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
// стандартний IIFE
(function () {
  // інструкції…
})();

// варіант зі стрілковою функцією
(() => {
  // інструкції…
})();

// асинхронний IIFE
(async () => {
  // інструкції…
})();
```

Він вміщає дві основні частини:

1. [_Вираз_-функцію](/uk/docs/Web/JavaScript/Reference/Operators/function). Зазвичай він повинен [стояти в дужках](/uk/docs/Web/JavaScript/Reference/Operators/Grouping), аби розбиратися коректно.
2. Негайне _викликання_ цього виразу-функції. Можна передати аргументи, хоча IIFE без аргументів є більш поширеними.

IIFE є поширеним патерном, що вживається для виконання довільної кількості інструкцій у власній області видимості (і, можливо, повернення значення), в місці, де повинен бути лише один вираз. Вони схожі на, але набагато потужніші за [оператор коми](/uk/docs/Web/JavaScript/Reference/Operators/Comma_operator), який може просто виконати кілька виразів і, отже, не надає можливості використовувати локальні змінні або інструкції керування плином виконання.

Серед ситуацій для використання IIFE:

- Уникання забруднення глобального простору імен шляхом створення нової {{jsxref("scope", "області видимості")}}.
- Створення нового асинхронного контексту для використання {{jsxref("Operators/await", "await")}} в неасинхронному контексті.
- Обчислення значень за допомогою складної логіки, такої як використання кількох інструкцій як єдиного виразу.

Приклади коду дивіться на довідкових сторінках [виразу `function`](/uk/docs/Web/JavaScript/Reference/Operators/function) і [виразу `async function`](/uk/docs/Web/JavaScript/Reference/Operators/async_function).

## Дивіться також

- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipedia)
- [Оператор коми](/uk/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Споріднені терміни глосарія:
  - {{Glossary("Function", "Функція")}}
