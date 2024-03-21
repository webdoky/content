---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
page-type: javascript-static-method
browser-compat: javascript.builtins.JSON.stringify
---

{{JSRef}}

Статичний метод **`JSON.stringify()`** (перетворити на рядок) перетворює значення JavaScript на рядок JSON, додатково замінюючи значення, якщо була вказана необов'язкова функція-замінювач, або ж додатково вибираючи лише вказані властивості, якщо було передано замінювач-масив.

{{EmbedInteractiveExample("pages/js/json-stringify.html", "taller")}}

## Синтаксис

```js-nolint
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

### Параметри

- `value` (значення)
  - : Значення, яке буде перетворено на рядок JSON.
- `replacer` (замінювач) {{optional_inline}}
  - : Функція, яка змінює поведінку процесу перетворення значення на рядок, або ж масив із рядків і чисел, котрий задає властивості `value` до включення у вивід. Якщо цей параметр є масивом, то всі ті його елементи, котрі не є ані рядками, ані числами (в т.ч. як примітивами, так об'єктами-обгортками), включно зі значеннями {{jsxref("Symbol")}}, цілковито ігноруються. Якщо цей параметр не є ані функцією, ані масивом (наприклад, дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) або просто не заданий), то в отриманий рядок будуть включені всі властивості об'єкта, котрі мають рядкові ключі.
- `space` (пробіл) {{optional_inline}}

  - : Рядок або число, що буде використано для вставки пробільних символів у отриманий рядок JSON з міркувань розбірливості.

    Якщо передане значення – число, то воно означатиме кількість пробільних символів у відступі, обмежену 10-ма (тобто будь-яке число, що більше за 10, застосовується так, як ніби воно рівне `10`). Значення, які менші за 1, позначають, що жодного пробільного символу вжито не буде.

    Якщо передане значення є рядком, то такий рядок (або перші 10 знаків цього рядка, якщо він довший) вставляється перед кожним вкладеним об'єктом чи масивом.

    Якщо `space` не є ані рядком, ані числом (в т.ч. як примітивом, так об'єктом-обгорткою) – наприклад, дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи не вказаний, то пробіли не застосовуються.

### Повернене значення

Рядок у форматі JSON, що відображає значення переданого об'єкта, або `undefined`.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається в одному з наступних випадків:
    - `value` містить циклічне посилання.
    - Зустрічається значення {{jsxref("BigInt")}}.

## Опис

Метод `JSON.stringify()` перетворює значення на JSON-запис, що представляє це значення. Значення зводяться до рядкового представлення у наступний спосіб:

- Об'єкти {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} і {{jsxref("BigInt")}} (доступні за допомогою [`Object()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) під час перетворення на рядок зводяться до відповідних примітивних значень, згідно зі звичаєвою семантикою перетворення. Об'єкти {{jsxref("Symbol")}} (доступні за допомогою [`Object()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)) обробляються як звичайні об'єкти.
- Спроби серіалізувати значення {{jsxref("BigInt")}} призведуть до викидання винятку. Проте якщо BigInt має метод `toJSON()` (внаслідок втручання у прототип: `BigInt.prototype.toJSON = ...`), то такий метод зможе надати результат серіалізації. Таке обмеження дає змогу мати певність, що коректна логіка серіалізації (і, вельми ймовірно, відповідна їй логіка десеріалізації) завжди явно надана користувачем.
- Значення {{jsxref("undefined")}}, {{jsxref("Function")}} і {{jsxref("Symbol")}} не є дійсними значеннями JSON. Якщо будь-які такі значення зустрічаються під час перетворення, то вони або упускаються (коли знайдені в об'єкті), або замінюються на [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) (коли знайдені в масиві). `JSON.stringify()` може повернути `undefined`, якщо передати йому "чисті" значення, як то `JSON.stringify(() => {})` чи `JSON.stringify(undefined)`.
- Числа {{jsxref("Infinity")}} і {{jsxref("NaN")}}, а також значення [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null), – вважаються рівними `null`. (Але на відміну від значення з попереднього пункту, ці значення ніколи не будуть упущені.)
- Масиви серіалізуються як масиви (оточені квадратними дужками). Лише індекси масиву від 0 і до `length - 1` (включно) серіалізуються; решта властивостей ігноруються.
- Особливий необроблений об'єкт JSON, створений за допомогою {{jsxref("JSON.rawJSON()")}}, серіалізується як необроблений текст JSON, який у ньому вміщено (за допомогою звертання до його властивості `rawJSON`).
- Для інших об'єктів:

  - Усі властивості з ключами типу {{jsxref("Symbol")}} будуть цілковито проігноровані, навіть коли застосований параметр `replacer`](#parametr-replacer).

  - Якщо значення має метод `toJSON()`, то такий метод відповідає за те, які дані будуть серіалізовані. Замість серіалізації об'єкта буде серіалізовано значення, повернене викликом методу `toJSON()`. `JSON.stringify()` викликає `toJSON` з одним параметром, `key` (ключем), котрий має таку саму семантику, як параметр `key` функції [`replacer`](#parametr-replacer):

    - якщо цей об'єкт є значенням властивості, то ім'я властивості
    - якщо це масив, то індекс в масиві, у вигляді рядка
    - якщо `JSON.stringify()` напряму викликається на об'єкті, то порожній рядок

    Об'єкти {{jsxref("Date")}} реалізовують метод [`toJSON()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON), що повертає рядок (такий само, як [`date.toISOString()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)). Отже – вони зводяться до рядків.

  - Обробляються лише [власні перелічувані властивості](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties). А отже, {{jsxref("Map")}}, {{jsxref("Set")}} тощо – стануть `"{}"`. Можна застосувати параметр [`replacer`](#parametr-replacer), аби серіалізувати їх у щось більш корисне.

    Властивості обробляються за таким само алгоритмом, як в [`Object.keys()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), що має чітко визначений порядок і є стабільним для різних реалізацій. Наприклад, `JSON.stringify` для одного об'єкта завжди поверне однаковий рядок, а `JSON.parse(JSON.stringify(obj))` поверне об'єкт з таким само порядком ключів, як у вихідного об'єкта (виходячи з припущення, що об'єкт є цілком JSON-серіалізовним).

### Параметр replacer

Параметр `replacer` може бути або функцією, або масивом.

Коли це масив, то елементи такого масиву вказують імена властивостей об'єкта, котрі повинні бути включені в повернений рядок JSON. Враховуються лише рядкові й числові значення; значення-символи ігноруються.

Коли це функція, то така функція отримує два параметри: `key` (ключ) та `value` (значення), що приводяться до рядкового вигляду. Об'єкт, в котрому знайдений такий ключ, доступний функції `replacer` як контекст `this`.

Функція `replacer` також викликається для вихідного об'єкта, і при такому виклику `key` є порожнім рядком (`""`). Потім вона викликається для кожної властивості об'єкта чи масиву, котрий приводиться до рядка. Індекси масиву надаються в `key` у рядковій формі. Значення поточної властивості при перетворенні на рядок замінюється значенням, поверненим функцією `replacer`. А отже:

- Якщо повернути число, рядок, булеве значення чи `null`, то таке значення серіалізується безпосередньо і використовується як значення властивості. (Крім того, повернення BigInt призведе до викидання помилки.)
- Якщо повернути {{jsxref("Function")}}, {{jsxref("Symbol")}} чи {{jsxref("undefined")}}, то властивість не буде включена у вивід.
- Якщо повернути будь-який інший об'єкт, то такий об'єкт буде рекурсивно перетворений на рядок, викликаючи функцію `replacer` на кожній своїй властивості.

> **Примітка:** При розборі JSON, згенерованого з використанням функцій `replacer`, з високою імовірністю буде потрібен параметр [`reviver`](/uk/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#zastosuvannia-parametra-reviver) (відновлювач) для виконання зворотних перетворень.
> Зазвичай індекс елементів масиву не зсувається (навіть тоді, коли елемент є недійсним значенням, як то функція, замість цього він стає `null`, а не упускається). Застосування функції `replacer` дозволяє контролювати порядок елементів масиву, повертаючи інакший масив.

### Параметр space

Параметр `space` може використовуватися для контролю відступів у рядку результату.

- Якщо цей аргумент є числом, то наступні рівні вкладеності матимуть відступ, збільшений на таку кількість символів пробілу.
- Якщо цей аргумент є рядком, то наступні рівні матимуть відступ, збільшений на такий рядок.

Кожний рівень відступу ніколи не буде більшим за 10. Числові значення `space` обмежені 10, а рядкові значення обрізаються до 10 символів.

## Приклади

### Застосування JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(1906, 0, 2, 15, 4, 5));
// '"1906-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String("false"), new Boolean(false)]);
// '[3,"false",false]'

// Елементи масиву з рядковими ключами не є перелічними і не мають сенсу в JSON
const a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] });
// '{"x":[10,null,null,null]}'

// Стандартні структури даних
JSON.stringify([
  new Set([1]),
  new Map([[1, 2]]),
  new WeakSet([{ a: 1 }]),
  new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'

// Типізовані масиви
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([
  new Uint8Array([1]),
  new Uint8ClampedArray([1]),
  new Uint16Array([1]),
  new Uint32Array([1]),
]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({
  x: 5,
  y: 6,
  toJSON() {
    return this.x + this.y;
  },
});
// '11'

// Символи:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, (k, v) => {
  if (typeof k === "symbol") {
    return "символ";
  }
});
// undefined

// Неперелічувані властивості:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt-значення викидають виняток
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Використання функції як замінювача

```js
function replacer(key, value) {
  // Вибракування властивостей
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: "ВебДоки",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

Якщо необхідно, аби `replacer` розрізняла вихідний об'єкт і ключ, що є порожнім рядком (адже в обох випадках буде порожній рядок як ключ і, можливо, об'єкт як значення), то доведеться відстежувати кількість ітерацій (якщо перша ітерація минула, то це точно порожній рядковий ключ).

```js
function makeReplacer() {
  let isInitial = true;
  return (key, value) => {
    if (isInitial) {
      isInitial = false;
      return value;
    }
    if (key === "") {
      // Упустити всі властивості з іменем "" (крім вихідного об'єкта)
      return undefined;
    }
    return value;
  };
}
const replacer = makeReplacer();
console.log(JSON.stringify({ "": 1, b: 2 }, replacer)); // "{"b":2}"
```

### Використання масиву як замінювача

```js
const foo = {
  foundation: "ВебДоки",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', залишаємо лише властивості "week" та "month"
```

### Використання параметра space

Зробити відступ виводу на один пробіл:

```js
JSON.stringify({ a: 2 }, null, " ");
// '{
//  "a": 2
// }'
```

Застосування символу табуляції імітує стандартне оформлення коду:

<!-- markdownlint-disable MD010 -->

```js
console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
/*
{
	"uno": 1,
	"dos": 2
}
*/
```

<!-- markdownlint-enable MD010 -->

### Поведінка toJSON()

Визначення на об'єкті `toJSON()` дає змогу перевизначити його поведінку при серіалізації.

```js
const obj = {
  data: "data",

  toJSON(key) {
    return key ? `Зараз я — вкладений об'єкт за ключем '${key}'` : this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj });
// '{"obj":"Зараз я — вкладений об'єкт за ключем 'obj'"}'

JSON.stringify([obj]);
// '["Зараз я — вкладений об'єкт за ключем '0'"]'
```

### Проблема з серіалізацією циклічних посилань

Зауважте, що оскільки [формат JSON (англ.)](https://www.json.org/) не підтримує посилання на об'єкти (хоча [існує чернетка IETF (англ.)](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), буде викинуто виняток {{jsxref("TypeError")}} під час спроби закодувати об'єкт з циклічними посиланнями.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Серіалізація циклічного посилання викине "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Для серіалізації циклічних посилань можна застосувати бібліотеку, котра їх підтримує (наприклад, [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) Дугласа Крокфорда), або ж можна реалізувати рішення самотужки — для цього знадобиться знайти й замінити (або видалити) циклічні посилання значеннями, які піддаються серіалізації.

При застосуванні `JSON.stringify()` для глибинного копіювання об'єкта, можливо, варто натомість використати [`structuredClone()`](/uk/docs/Web/API/structuredClone), що підтримує циклічні посилання. API рушія JavaScript, як то [`v8.serialize()` (англ.)](https://nodejs.org/api/v8.html#v8serializevalue), також підтримують циклічні посилання.

### Застосування JSON.stringify() з localStorage

На випадок, якщо потрібно зберегти створений користувачем об'єкт, з можливістю відновити його навіть після закриття браузера, нижче наведено патерн застосування `JSON.stringify()`:

```js
// Створення прикладу JSON-об'єкта
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Перетворення об'єкта на JSON-рядок із JSON.stringify(),
// потім збереження його в localStorage за ім'ям `session`
localStorage.setItem("session", JSON.stringify(session));

// Приклад того, як перетворити рядок, створений за допомогою
// JSON.stringify() і записаний в localStorage, назад на JSON-об'єкт
const restoredSession = JSON.parse(localStorage.getItem("session"));

// Тепер змінна restoredSession містить об'єкт, який був раніше
// записаний в localStorage
console.log(restoredSession);
```

### JSON.stringify() з правильним формуванням

Рушії, що реалізовують [специфікацію JSON.stringify з правильним формуванням (англ.)](https://github.com/tc39/proposal-well-formed-stringify), опрацьовують поодинокі сурогати (будь-які кодові одиниці від U+D800 до U+DFFF) із застосуванням керівних послідовностей Unicode, замість вживання їх буквально (повернення поодиноких сурогатів). До цих оновлень `JSON.stringify` міг повертати поодинокі сурогати, якщо такі сурогати знаходилися в початковому рядку. Такі рядки потім неможливо було коректно перекодувати в UTF-8 чи UTF-16:

```js
JSON.stringify("\uD800"); // '"�"'
```

Проте з цим оновленням `JSON.stringify` відбиває поодинокі сурогати за допомогою екранованих послідовностей JSON, які _можна_ коректно перекодувати в рядок UTF-8 чи UTF-16:

```js
JSON.stringify("\uD800"); // '"\\ud800"'
```

Це оновлення має бути зворотно сумісним, поки результат `JSON.stringify` передається до такого API, як `JSON.parse`, що прийматиме будь-який валідний JSON-текст, оскільки вони будуть вважати екрановані поодинокі сурогати Unicode рівними самим сурогатам. _Лише_ під час прямої інтерпретації результатів виконання `JSON.stringify` слід уважно опрацьовувати два можливі варіанти кодування таких кодових одиниць.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл сучасної поведінки `JSON.stringify` (символ, як слід сформований Unicode, необроблений JSON) у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.rawJSON()")}}
