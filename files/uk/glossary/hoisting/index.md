---
title: Підняття
slug: Glossary/Hoisting
page-type: glossary-definition
---

{{GlossarySidebar}}

**Підняттям** JavaScript називають процес, при якому здається, ніби інтерпретатор переміщує _оголошення_ функцій, змінних, класів та імпортів нагору їхньої області видимості, перед виконанням коду.

_Підняття_ не є терміном, нормативно визначеним у специфікації ECMAScript. Специфікація визначає групу оголошень як [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration) (піднімне оголошення), але це стосується лише оголошень [`function`](/uk/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/uk/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/uk/docs/Web/JavaScript/Reference/Statements/async_function) і [`async function*`](/uk/docs/Web/JavaScript/Reference/Statements/async_function*). Підняття нерідко вважається також можливістю оголошень [`var`](/uk/docs/Web/JavaScript/Reference/Statements/var), хоч і в інший спосіб. Простими словами, будь-яку з наступних логік можна вважати підняттям:

1. Змога використовувати значення змінної в її області видимості до рядка, в якому вона оголошена. ("Підняття значення")
2. Змога звертатися до змінної в її області видимості до рядка, в якому вона оголошена, без викидання {{jsxref("ReferenceError")}}, проте її значенням завжди є [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined). ("Підняття оголошення")
3. Оголошення змінної призводить до зміни поведінки її області видимості до рядка, в якому вона оголошена.
4. Побічні ефекти оголошення виробляються до виконання решти коду, що вміщає це оголошення.

Чотири оголошення функцій, перелічені вище, піднімаються з логікою типу 1; оголошення `var` піднімається з логікою типу 2; оголошення [`let`](/uk/docs/Web/JavaScript/Reference/Statements/let), [`const`](/uk/docs/Web/JavaScript/Reference/Statements/const) і [`class`](/uk/docs/Web/JavaScript/Reference/Statements/class) (вони також разом звуться _лексичними оголошеннями_) піднімаються з логікою типу 3; оголошення [`import`](/uk/docs/Web/JavaScript/Reference/Statements/import) піднімаються з логікою типу 1 і типу 4.

Дехто віддає перевагу вважати, що `let`, `const` і `class` не піднімаються, оскільки [темпоральна мертва зона](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz) суворо забороняє будь-яке використання таких змінних до їхнього оголошення. Така розбіжність думок є припустимою, оскільки підняття – це не загально узгоджений термін. Однак темпоральна мертва зона може призводити до інших помітних змін у її області видимості, що свідчить про якогось роду підняття:

```js
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

Якби оголошення `const x = 2` взагалі не піднімалося (тобто вступало в дію лише тоді, коли виконується), то інструкція `console.log(x)` повинна була б мати змогу зчитати значення `x` з зовнішньої області видимості. Проте у зв'язку з тим, що оголошення `const` все ж "забруднює" всю область видимості, в якій визначено, інструкція `console.log(x)` зчитує значення `x` з оголошення `const x = 2`, яке ще не ініціалізовано, і викидає {{jsxref("ReferenceError")}}. А проте, більш корисним може бути опис лексичних оголошень як непіднімальних, тому що з боку корисності підняття цих оголошень не приносить жодних змістовних можливостей.

Зверніть увагу, що наступне не є формою підняття:

```js
{
  var x = 1;
}
console.log(x); // 1
```

Тут немає "доступу до оголошення"; це можливо просто тому, що оголошення `var` не обмежується блоками.

Більше про підняття читайте:

- Підняття `var`, `let` і `const`: [Посібник з граматики та типів](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#pidniattia-zminnykh)
- Підняття `function`: [Посібник з функцій](/uk/docs/Web/JavaScript/Guide/Functions#pidniattia-funktsii)
- Підняття `class`: [Посібник з класів](/uk/docs/Web/JavaScript/Guide/Using_classes#pidniattia-oholoshennia-klasu)
- Підняття `import`: [Модулі JavaScript](/uk/docs/Web/JavaScript/Guide/Modules#oholoshennia-importu-pidnimaiutsia)

## Дивіться також

- [Інструкція `var`](/uk/docs/Web/JavaScript/Reference/Statements/var) — WebDoky
- [Інструкція `let`](/uk/docs/Web/JavaScript/Reference/Statements/let) — WebDoky
- [Інструкція `const`](/uk/docs/Web/JavaScript/Reference/Statements/const) — WebDoky
- [Інструкція `function`](/uk/docs/Web/JavaScript/Reference/Statements/function) — WebDoky
