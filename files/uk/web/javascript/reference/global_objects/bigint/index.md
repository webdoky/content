---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
page-type: javascript-class
browser-compat: javascript.builtins.BigInt
---

{{JSRef}}

Значення **`BigInt`** (велике ціле) представляють числові значення, котрі [завеликі](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) для представлення {{Glossary("Primitive", "примітивом")}} `number`.

## Опис

**Значення BigInt**, також іноді зване просто **BigInt**, є {{Glossary("Primitive", "примітивом")}} `bigint`, створеним шляхом додавання в кінець літерала цілого числа `n`, або ж викликом функції {{jsxref("BigInt/BigInt", "BigInt()")}} (без оператора `new`) із передачею їй цілого числа або рядка.

```js
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n
```

Значення BigInt у певних аспектах подібні до значень Number, але також відрізняються в кількох ключових нюансах: значення BigInt не можуть використовуватися з методами вбудованого об'єкта [`Math`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Math) і не можуть змішуватися в операціях зі значеннями Number; усі значення повинні бути зведені до одного типу. Проте слід обережно зводити значення туди-назад, адже точність значення BigInt може бути втрачена при зведенні до значення Number.

### Інформація про тип

При перевірці `typeof` значення BigInt (примітив `bigint`) дасть `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Значення BigInt також може бути загорнуто в `Object`:

```js
typeof Object(1n) === "object"; // true
```

### Оператори

Більшість операторів підтримує BigInt, проте також більшість не дозволяє змішувати операнди різних типів – BigInt мають бути або обидва, або жоден:

- [Арифметичні оператори](/uk/docs/Web/JavaScript/Reference/Operators#aryfmetychni-operatory): `+`, `-`, `*`, `/`, `%`, `**`
- [Бітові оператори](/uk/docs/Web/JavaScript/Reference/Operators#operatory-pobitovoho-zsuvu): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Унарне заперечення (`-`)](/uk/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Збільшення та зменшення на одиницю](/uk/docs/Web/JavaScript/Reference/Operators#zbilshennia-ta-zmenshennia-na-odynytsiu): `++`, `--`

Оператори, що повертають булеві значення, дозволяють змішувати операнди-числа та BigInt:

- [Оператори відношення](/uk/docs/Web/JavaScript/Reference/Operators#operatory-vidnoshennia) та [оператори рівності](/uk/docs/Web/JavaScript/Reference/Operators#operatory-rivnosti): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- [Логічні оператори](/uk/docs/Web/JavaScript/Reference/Operators#binarni-lohichni-operatory) покладаються лише на [істинність](/uk/docs/Glossary/Truthy) операндів

Два оператори взагалі не підтримують BigInt:

- [Унарний плюс (`+`)](/uk/docs/Web/JavaScript/Reference/Operators/Unary_plus) не може їх підтримувати у зв'язку з конфліктом використання в asm.js, тож його пропустили, [щоб не ламати asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- [Беззнаковий зсув управо (`>>>`)](/uk/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) – єдиний бітовий оператор, що не підтримує BigInt, адже кожне значення BigInt має знак.

Особливі випадки:

- Додавання (`+`) рядка та BigInt повертає рядок.
- Ділення (`/`) відкидає дробові частини в бік до нуля, оскільки BigInt не може представляти дробові кількості.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, тепер це працює!
const prod = previousMaxSafe * 2n; // 18014398509481982n
const diff = prod - 10n; // 18014398509481972n
const mod = prod % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, а не 2.5n
```

### Порівняння

Значення BigInt строго не дорівнює значенню Number, проте _дорівнює_ нестрого:

```js
0n === 0; // false
0n == 0; // true
```

Значення Number і значення BigInt можуть порівнюватися як звично:

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

Значення BigInt і значення Number можуть змішуватися в масивах і сортуватися:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // усталена логіка сортування
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// не спрацює, адже віднімання не працює з різними типами
// TypeError: can't convert BigInt value to Number value

// сортування з адекватним числовим порівнювачем
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

Зверніть увагу, що порівняння загорнутих в `Object` значень BigInt працює як для інших об'єктів – показує рівність лише тоді, коли порівнюється з собою один і той же примірник:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Через те, що перетворення між значеннями Number та значеннями BigInt можуть призводити до втрати точності, рекомендовано наступне:

- Значення BigInt слід використовувати лише тоді, коли доцільно очікувати значень, більших за 2<sup>53</sup>.
- Не слід перетворювати між собою значення BigInt і значення Number.

### Перевірки умов

Значення BigInt відповідають тим самим правилам перетворення, що й Number, коли:

- перетворюються на [`Boolean`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean) – за допомогою функції [`Boolean`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Boolean);
- використовуються з [логічними операторами](/uk/docs/Web/JavaScript/Reference/Operators) `||`, `&&` і `!`; або
- зустрічаються в перевірках умов, як то інструкціях [`if`](/uk/docs/Web/JavaScript/Reference/Statements/if...else).

А саме – лише `0n` є [хибністю](/uk/docs/Glossary/Falsy); все решта – [істинність](/uk/docs/Glossary/Truthy).

```js
if (0n) {
  console.log("Привіт з if!");
} else {
  console.log("Привіт з else!");
}
// "Привіт з else!"

0n || 12n; // 12n
0n && 12n; // 0n
Boolean(0n); // false
Boolean(12n); // true
!12n; // false
!0n; // true
```

### Криптографія

Операції, котрі підтримують значення BigInt, мають несталий час виконання, а тому вразливі до [атак по часу](https://uk.wikipedia.org/wiki/%D0%90%D1%82%D0%B0%D0%BA%D0%B0_%D0%BF%D0%BE_%D1%87%D0%B0%D1%81%D1%83). Таким чином, значення BigInt у JavaScript можуть бути небезпечними для використання в криптографії, якщо не вживати застережних заходів. Як дуже узагальнений приклад – нападник може виміряти часову різницю між `101n ** 65537n` і `17n ** 9999n`, завдяки чому – оцінити потужність таємних значень, як то приватних ключів, на основі витрат часу. Якщо все ж необхідно використовувати BigInt, слід звернутися до [ЧаПів атак по часу](https://timing.attacks.cr.yp.to/programming.html) щодо загальних порад на тему цієї проблеми.

### Використання всередині JSON

Застосування [`JSON.stringify()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) до будь-якого значення BigInt призведе до виринання `TypeError`, адже значення BigInt усталено не серіалізуються в JSON. Проте `JSON.stringify()` залишає саме для значень BigInt запасний хід: ця функція намагається викликати метод BigInt `toJSON()`. (Вона не робить цього для будь-яких інших примітивних значень.) Таким чином, можна реалізувати власний метод `toJSON()` (це один з тих небагатьох випадків, коли внесення змін до вбудованих об'єктів явно не знеохочується):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

Замість викидання помилки, тепер `JSON.stringify()` виробляє рядок:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Коли не хочеться вносити зміни до `BigInt.prototype`, можна застосувати для серіалізації значень BigInt параметр `JSON.stringify` [`replacer`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parametr-replacer):

```js
const replacer = (key, value) =>
  typeof value === "bigint" ? { $bigint: value.toString() } : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":{"$bigint":"18014398509481982"}}
```

Потім для обробки такого значення можна передати параметр [`reviver`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#zastosuvannia-parametra-reviver) методу `JSON.parse`:

```js
const reviver = (key, value) =>
  value !== null &&
  typeof value === "object" &&
  "$bigint" in value &&
  typeof value.$bigint === "string"
    ? BigInt(value.$bigint)
    : value;

const payload = '{"number":1,"big":{"$bigint":"18014398509481982"}}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

> [!NOTE]
> Хоч замінювач для `JSON.stringify()` можна зробити узагальненим, і коректно серіалізувати значення BigInt для всіх можливих об'єктів, як це показано вище, відновника `JSON.parse()` слід використовувати з обережністю, оскільки серіалізація є _незворотною_: неможливо відрізнити об'єкт, котрий, припустімо, просто має властивість з ім'ям `$bigint`, від справжнього BigInt.
>
> Крім цього, приклад вище створює цілий об'єкт під час заміни та відновлення, що може мати вплив на продуктивність або використання пам'яті для більших об'єктів, що містять багато BigInt. Якщо форма корисного навантаження відома, може бути краще просто серіалізувати BigInt як рядки та відновлювати їх на основі імен властивостей.

Фактично JSON дозволяє числові літерали довільної довжини; їх просто не можна розібрати з повною точністю в JavaScript. Якщо відбувається комунікація з іншою програмою, написаною на мові, що підтримує довші цілі числа (наприклад, 64-бітові цілі), і необхідно передати BigInt як число JSON, а не рядок JSON, дивіться [Серіалізацію чисел без втрат](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON#vykorystannia-chysel-json).

### Зведення до BigInt

Чимало вбудованих операцій, котрі очікують на BigInt, спершу зводять свої аргументи до BigInt. [Ця операція](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) може бути підсумована отак:

- BigInt повертаються як є.
- [`undefined`](/uk/docs/Web/JavaScript/Reference/Global_Objects/undefined) і [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) викидають {{jsxref("TypeError")}}.
- `true` стає `1n`; `false` стає `0n`.
- Рядки перетворюються шляхом розбору їх так, ніби вони містять цілочисловий літерал. Будь-яка невдача розбору призводить до {{jsxref("SyntaxError")}}. Синтаксис є підмножиною [рядкових літералів чисел](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number#zvedennia-do-chysla), у якій десятковий розділювач і експоненційний запис – заборонені.
- [Number](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number) викидають {{jsxref("TypeError")}} для запобігання небажаному неявному зведенню, що призвело б до втрати точності.
- [Symbol](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol) викидають {{jsxref("TypeError")}}.
- Об'єкти спочатку [перетворюються на примітиви](/uk/docs/Web/JavaScript/Data_structures#zvedennia-do-prymityva) шляхом виклику їх методів [`[Symbol.toPrimitive]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (з підказкою `"number"`), `valueOf()` і `toString()` – у такому порядку. Потім результівний примітив перетворюється на BigInt.

Найкращий спосіб досягнути в JavaScript майже такого ж ефекту – функція [`BigInt()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt): `BigInt(x)` використовує такий же алгоритм для перетворення `x`, окрім того, що [Number](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number) не викидають {{jsxref("TypeError")}}, а перетворюються на BigInt, якщо є цілими числами.

Зверніть увагу, що вбудовані операції, котрі очікують на BigInt, нерідко після зведення обрізають BigInt до фіксованої ширини. Серед таких операцій – {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}}, а також методи об'єктів {{jsxref("BigInt64Array")}} і {{jsxref("BigUint64Array")}}.

## Конструктор

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Повертає примітивні значення типу BigInt. Викидає помилку, коли викликати його з `new`.

## Статичні методи

- {{jsxref("BigInt.asIntN()")}}
  - : Обрізає значення BigInt до знакового цілого числа, і повертає його.
- {{jsxref("BigInt.asUintN()")}}
  - : Обрізає значення BigInt до беззнакового цілого числа, і повертає його.

## Властивості примірника

Ці властивості означені на `BigInt.prototype` і є спільними для всіх примірників `BigInt`.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : Функція-конструктор, що створила об'єкт-примірник. Для примірників `BigInt` початкове значення – конструктор {{jsxref("BigInt/BigInt", "BigInt")}}.
- `BigInt.prototype[Symbol.toStringTag]`
  - : Початкове значення [`[Symbol.toStringTag]`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) – рядок `"BigInt"`. Ця властивість використовується в {{jsxref("Object.prototype.toString()")}}. Проте у зв'язку з тим, що `BigInt` також має власну реалізацію метода [`toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString), ця властивість не використовується, якщо не викликати [`Object.prototype.toString.call()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Function/call) зі значенням BigInt як `thisArg`.

## Методи примірника

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Повертає рядок з чутливим до мови представленням цього значення BigInt. Заміщає метод [`Object.prototype.toLocaleString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- {{jsxref("BigInt.prototype.toString()")}}
  - : Повертає рядкове представлення цього значення BigInt за заданою основою числення. Заміщає метод [`Object.prototype.toString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Повертає поточне значення BigInt. Заміщає метод [`Object.prototype.valueOf()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

## Приклади

### Обчислення простих чисел

```js
// Повертає true, якщо передане значення BigInt є простим числом
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Приймає за аргумент значення BigInt, повертає n-не просте число у вигляді значення BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// 73n
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`Number`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
