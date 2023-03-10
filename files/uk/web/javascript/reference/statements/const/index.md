---
title: const
slug: Web/JavaScript/Reference/Statements/const
page-type: javascript-statement
browser-compat: javascript.statements.const
---

{{jsSidebar("Statements")}}

Оголошення **`const`** (стала)
створює сталі з блоковою областю видимості, подібні до змінних, оголошених за допомогою ключового слова [`let`](/uk/docs/Web/JavaScript/Reference/Statements/let). Значення сталої не може бути змінено шляхом повторного присвоєння (тобто за допомогою [оператора присвоєння](/uk/docs/Web/JavaScript/Reference/Operators/Assignment)), а також таку стало не можна повторно оголосити (тобто за допомогою [оголошення змінної](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#oholoshennia)). Проте якщо стала є [об'єктом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object) або [масивом](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array), то її властивості або елементи можуть бути змінені або прибрані.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Синтаксис

```js-nolint
const name1 = value1;
const name1 = value1, name2 = value2;
const name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Назва сталої, що може бути будь-яким дозволеним {{Glossary("identifier", "ідентифікатором")}}.
- `valueN`
  - : Значення сталої. Може бути будь-яким дозволеним виразом, включно з функцією.

Також для оголошення змінних можна використовувати запис [присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
const { bar } = foo; // де foo = { bar:10, baz:12 };
/* Це створює сталу з назвою 'bar', що має значення 10 */
```

## Опис

Це оголошення створює сталу, чия область видимості може бути або глобальною, або локальною в межах блоку, в якому вона оголошена. Глобальні сталі **не** стають властивостями об'єкта {{domxref("window")}}, на відміну від змінних {{jsxref("Statements/var","var")}}.

Ініціалізатор сталої – обов'язковий. Обов'язково потрібно задати значення в самому оголошенні. (Що має зміст, адже це значення не може бути змінено пізніше.)

**Оголошення `const`** створює доступне лише для зчитування посилання на значення. Це **не** означає, що значення сталої стає беззмінним, а лише те, що ідентифікатор змінної не може бути присвоєний повторно. Наприклад, у випадку того, що вміст є об'єктом, це означає, що вміст об'єкта (наприклад, його властивості) може бути змінений.

Усі нюанси щодо [темпоральної мертвої зон](/uk/docs/Web/JavaScript/Reference/Statements/let#temporalna-mertva-zona-tdz) стосуються і {{jsxref("Statements/let", "let")}}, і `const`. Через це оголошення `const` нерідко звуть [непіднімними](/uk/docs/Glossary/Hoisting).

Стала не може мати назву, що збігається з назвою функції або змінної в тій же області видимості.

Якщо при проведенні експериментів у інтерактивному середовищі, як то вебконсолі Firefox (**Інструменти** > **Інструменти веброзробника** > **Консоль**) запустити два оголошення `const` з однаковою назвою, навіть у різних командах, то можна отримати помилку у зв'язку з повторним оголошенням. Розгорнуте обговорення цієї проблеми – на сторінці [вади Firefox 1580891](https://bugzil.la/1580891). Консоль Chrome дозволяє повторне оголошення `const` в окремій команді.

На відміну від `var`, ключове слово `const` є початком [_оголошення_, а не _інструкції_](/uk/docs/Web/JavaScript/Reference/Statements#vidminnosti-mizh-instruktsiiamy-ta-oholoshenniamy). Це означає, що саме лише оголошення `const` не може бути тілом блока (що має зміст, адже до такої змінної не можна було б звернутися).

```js example-bad
if (true) const a = 1; // SyntaxError: Unexpected token 'const'
```

## Приклади

### Базове застосування const

Сталі можуть бути оголошені як у верхньому, так у нижньому регістрі, але загальноприйнято використовувати лише великі літери.

```js
// означити MY_FAV як сталу і задати їй значення 7
const MY_FAV = 7;

// тут вилетить помилка - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV – це 7
console.log("моє улюблене число: " + MY_FAV);

// спроба повторно оголосити сталу викидає помилку
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// назва MY_FAV вище зарезервована для сталої, тож такий рядок так само викине помилку
var MY_FAV = 20;

// і тут – так само помилка
let MY_FAV = 20;
```

### Блокова область видимості

Важливо зауважити про природу блокової області видимості.

```js
if (MY_FAV === 7) {
  // тут все гаразд, створюється змінна MY_FAV з блоковою областю видимості
  // (добре оголошувати несталу змінну з блоковою областю видимості за допомогою let)
  let MY_FAV = 20;

  // тепер MY_FAV – це 20
  console.log("моє улюблене число – " + MY_FAV);

  // цей запис піднімається в глобальний контекст і призводить до помилки
  var MY_FAV = 20;
}

// MY_FAV – досі 7
console.log("моє улюблене число – " + MY_FAV);
```

### const повинна бути ініціалізована

```js example-bad
// викидає помилку
// Uncaught SyntaxError: Missing initializer in const declaration

const FOO;
```

### const для об'єктів і масивів

`const` так само працює для об'єктів і масивів. Спроба перезаписати об'єкт призведе до помилки "Assignment to constant variable" (присвоєння сталій).

```js example-bad
const MY_OBJECT = { key: "value" };
MY_OBJECT = { OTHER_KEY: "value" };
```

Проте ключі об'єктів – не захищені, тож наступна інструкція виконається без проблем:

```js
MY_OBJECT.key = "otherValue";
```

Щоб об'єкт став беззмінним, треба використати на ньому [`Object.freeze()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

Те саме стосується масивів. Присвоєння змінній нового масиву призводить до помилки "Assignment to constant variable".

```js example-bad
const MY_ARRAY = [];
MY_ARRAY = ["B"];
```

І все ж, можна закинути в масив нові елементи, а отже – змінити його.

```js
MY_ARRAY.push("A"); // ["A"]
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- [Сталі в Посібнику з JavaScript](/uk/docs/Web/JavaScript/Guide/Grammar_and_types#stali)
