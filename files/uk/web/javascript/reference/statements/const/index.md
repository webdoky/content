---
title: const
slug: Web/JavaScript/Reference/Statements/const
page-type: javascript-statement
browser-compat: javascript.statements.const
---

{{jsSidebar("Statements")}}

Оголошення **`const`** (стала) оголошує локальні змінні з блоковою областю видимості. Значення сталої не може бути змінено шляхом повторного присвоєння за допомогою [оператора присвоєння](/uk/docs/Web/JavaScript/Reference/Operators/Assignment), але якщо стала є [об'єктом](/uk/docs/Web/JavaScript/Data_structures#obiekty), то властивості такого об'єкта можуть бути додані, оновлені чи прибрані.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Синтаксис

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Назва змінної до оголошення. Кожна назва повинна бути дозволеним [ідентифікатором](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#identyfikatory) JavaScript або [зв'язувальним патерном деструктурування](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
- `valueN`
  - : Початкове значення змінної. Може бути будь-яким дозволеним виразом.

## Опис

Оголошення `const` – вельми подібне до {{jsxref("Statements/let", "let")}}:

- Оголошення `const` мають області видимості блоків, як і функцій.
- До оголошень `const` можна звертатися лише після того, як досягнуто рядка з оголошенням (дивіться [темпоральну мертву зону](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz)). У зв'язку з цим оголошення `const` часто звуть [неспливними](/uk/docs/Glossary/Hoisting).
- Оголошення `const` не створюють властивостей на {{jsxref("globalThis")}}, коли оголошення відбувається на зовнішньому рівні сценарію.
- Оголошення `const` не можуть бути [виконані повторно](/uk/docs/Web/JavaScript/Reference/Statements/let#povtorni-oholoshennia) будь-яким іншим оголошенням в тій же області видимості.
- З `const` починаються [_оголошення_, але не _інструкції_](/uk/docs/Web/JavaScript/Reference/Statements#riznytsia-mizh-instruktsiiamy-ta-oholoshenniamy). Це означає, що не можна використовувати самотнє оголошення `const` як тіло блоку (це має зміст, адже в такому разі не було б можливості звернутися до такої змінної).

  ```js-nolint example-bad
  if (true) const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
  ```

Ініціалізатор сталої – обов'язковий. Обов'язково задати значення в самому оголошенні. (Це має зміст, враховуючи те, що значення не можна змінити пізніше.)

```js-nolint example-bad
const FOO; // SyntaxError: Missing initializer in const declaration
```

Оголошення `const` створює незмінюване посилання на значення. Це _не_ означає, що значення, котре зберігається в сталій, незмінюване: це лише означає, що не може бути повторно присвоєний ідентифікатор змінної. Наприклад, у випадку, коли вміст є об'єктом, це означає, що вміст об'єкта (тобто його властивості) може бути змінений. Оголошення `const` слід розуміти як "створити змінну, чия _ідентичність_ залишається сталою", а не "чиє _значення_ залишається сталим", або "створити незмінювані {{glossary("binding", "зв'язування")}}", а не "незмінювані значення".

Чимало стилістичних посібників (включно з [тутешнім](/uk/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript#oholoshennia-zminnykh)) радять віддавати перевагу `const` над {{jsxref("Statements/let", "let")}} у випадках, коли змінна повторно не присвоюється у своїй області видимості. Це дозволяє чітко вказати, що тип змінної (або значення, у випадку примітивів) ніколи не змінюється. Інші можуть віддавати перевагу `let` для непримітивів, котрі змінюються.

Список, що стоїть після ключового слова `const`, зветься _списком {{glossary("binding", "зв'язування")}}_ і розділяється комами, причому коми _не_ є [операторами коми](/uk/docs/Web/JavaScript/Reference/Operators/Comma_operator), а знаки `=` _не_ є [операторами присвоєння](/uk/docs/Web/JavaScript/Reference/Operators/Assignment). Ініціалізатори пізніших змінних можуть посилатися на раніше оголошені змінні списку.

## Приклади

### Базове застосування const

Сталі можуть бути оголошені як у верхньому, так у нижньому регістрі, але загальноприйнято використовувати лише великі літери, особливо для примітивів, оскільки вони є істинно незмінюваними.

```js
// означити MY_FAV як сталу і задати їй значення 7
const MY_FAV = 7;

console.log("моє улюблене число: " + MY_FAV);
```

```js-nolint example-bad
// Повторне присвоєння сталій змінній спричиняє помилку
MY_FAV = 20; // TypeError: Assignment to constant variable

// Повторне оголошення сталої спричиняє помилку
const MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
let MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
```

### Блокова область видимості

Важливо зауважити про природу блокової області видимості.

```js-nolint
const MY_FAV = 7;

if (MY_FAV === 7) {
  // Це дозволено, оскільки знаходиться в новій блоковій області видимості
  const MY_FAV = 20;
  console.log(MY_FAV); // 20

  // оголошення var не обмежують область видимості блоками, тож це призводить до помилки
  var MY_FAV = 20; // SyntaxError: Identifier 'MY_FAV' has already been declared
}

console.log(MY_FAV); // 7
```

### const для об'єктів і масивів

Оголошення `const` так само працює для об'єктів і масивів. Спроба перезаписати об'єкт призведе до помилки "Assignment to constant variable" (присвоєння сталій).

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Проте ключі об'єктів – не захищені, тож наступна інструкція виконається без проблем:

```js
MY_OBJECT.key = "otherValue";
```

Щоб об'єкт став беззмінним, треба використати на ньому {{jsxref("Object.freeze()")}}.

Те саме стосується масивів. Присвоєння змінній нового масиву призводить до помилки "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

І все ж, можна закинути в масив нові елементи, а отже – змінити його.

```js
MY_ARRAY.push("A"); // ["A"]
```

### Оголошення з деструктуруванням

Лівий бік кожного `=` також може бути зв'язувальним патерном. Це дає змогу створювати декілька змінних за раз.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Більше про це – на сторінці [Присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Сталі в Посібнику з JavaScript](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#stali)
