---
title: Усталені параметри
slug: Web/JavaScript/Reference/Functions/Default_parameters
page-type: javascript-language-feature
browser-compat: javascript.functions.default_parameters
---

{{jsSidebar("Functions")}}

**Усталені параметри функцій** дозволяють ініціалізувати названі параметри усталеними значеннями, якщо не було передано значення або `undefined`.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Синтаксис

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## Опис

У JavaScript параметри функцій усталено мають значення {{jsxref("undefined")}}. Однак часто буває корисно встановити інше усталене значення. Тут допоможуть усталені параметри.

У наступному прикладі, якщо для `b` не буде надано значення при виклику `multiply`, значення `b` буде `undefined` під час обчислення `a * b`, і `multiply` поверне `NaN`.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

Раніше загальна стратегія встановлення усталених значень полягала в перевірці параметрів у тілі функції та присвоєнні значення, якщо вони дорівнюють `undefined`. У наступному прикладі `b` встановлюється на `1`, якщо `multiply` викликається лише з одним аргументом:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

З усталеними параметрами перевірки в тілі функції більше не потрібні. Тепер можна призначити `1` як усталене значення для `b` безпосередньо в заголовку функції:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Параметри все ще встановлюються зліва направо, перезаписуючи усталені параметри, навіть якщо наступні параметри не мають усталених значень.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Перший усталений параметр і решта після нього не впливатимуть на значення [`length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/length)(довжини) функції.

Усталені параметри існують у власній області видимості, яка є батьківською щодо області видимості, створеної для тіла функції.

Це означає, що на попередні параметри можна посилатися при визначенні наступних. Однак функції та змінні, оголошені в тілі функції, не слід використовувати при визначенні усталених значень; така спроба викличе помилку {{jsxref("ReferenceError")}} під час виконання. Це також стосується змінних, оголошених у тілі функції за допомогою [`var`](/uk/docs/Web/JavaScript/Reference/Statements/var).

Наприклад, наступна функція викличе `ReferenceError` під час виконання, оскільки усталене значення параметра `a` не має доступу до області видимості тіла функції:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Ця функція виведе значення _параметра_ `a`, оскільки змінна `var a` піднімається лише на початок області видимості, створеної для тіла функції, а не в батьківську область, створену для списку параметрів. Тому її значення невидиме для `b`.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Усталені параметри можуть приймати будь-який вираз, але не можна використовувати {{jsxref("Operators/await", "await")}} або {{jsxref("Operators/yield", "yield")}}, які призупиняють обчислення виразу. Параметр має бути визначений _синхронно_.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Оскільки усталений параметр обчислюється під час виклику функції, а не під час її визначення, дійсність операторів `await` та `yield` залежить від поточної функції, а не від навколишньої. Наприклад, якщо поточна функція не є `async`, тоді `await` розглядатиметься як ідентифікатор для якого застосовуються звичайні [правила синтаксису ідентифікаторів](/uk/docs/Web/JavaScript/Reference/Lexical_grammar/#identyfikatory), навіть якщо ця функція є вкладеною в `async` функцію.

## Приклади

### Передача undefined проти інших хибних значень

У другому виклику цього прикладу, навіть якщо перший аргумент явно встановлено як `undefined` (але не як `null` або інші {{Glossary("falsy")}} значення), значення аргументу `num` все одно залишатиметься усталеним.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num дорівнює 1)
test(undefined); // 'number' (num також дорівнює 1)

// тест з іншими хибними значеннями:
test(""); // 'string' (num дорівнює '')
test(null); // 'object' (num дорівнює null)
```

### Обчислення під час виклику

Усталений аргумент обчислюється _під час виклику_. На відміну від Python (наприклад) де новий об'єкт створюється кожного разу, коли функція викликається.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], не [1, 2]
```

Це стосується навіть функцій та змінних:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Попередні усталені параметри доступні для наступних

Параметри, визначені раніше (ліворуч), доступні для наступних усталених параметрів:

```js
function greet(name, greeting, message = `${greeting}, ${name}`) {
  return [name, greeting, message];
}

greet("Дмитро", "Привіт"); // ["Дмитро", "Привіт", "Привіт, Дмитро"]
greet("Дмитро", "Привіт", "З Днем Народження!"); // ["Дмитро", "Привіт", "З Днем Народження!"]
```

Щоб продемонструвати як обробляються різні крайові випадки, цю функціональність можна відтворити таким чином:

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Деструктурований параметр із присвоєнням усталеного значення

Для присвоєння усталенного значення можна скористатися синтаксисом [присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

Звичайним підходом є встановлення порожнього об'єкта або масиву як усталеного значення для деструктурованого параметра; наприклад: `[x = 1, y = 2] = []`. Це дає змогу не передавати нічого у функцію і все одно отримати ці значення заздалегідь заповненими:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Аналогічно працює для об'єктів:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- [Функції довідник](/uk/docs/Web/JavaScript/Reference/Functions)
- [Rest параметри](/uk/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Оператор null-злиття (`??`)](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
