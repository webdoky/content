---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
tags:
  - JSON
  - JavaScript
  - Method
  - Objects
  - Reference
  - stringify
  - Polyfill
browser-compat: javascript.builtins.JSON.stringify
---

{{JSRef}}

Метод **`JSON.stringify()`** (перетворити на рядок) перетворює JavaScript-об'єкт або значення на рядок JSON, додатково замінюючи значення, якщо була вказана необов'язкова функція-замінювач, або ж додатково вибираючи лише вказані властивості, якщо було передано замінювач-масив.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## Синтаксис

```js
JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, replacer, space);
```

### Параметри

- `value` (значення)
  - : Значення, яке буде перетворено на рядок JSON.
- `replacer` (замінювач) {{optional_inline}}
  - : Функція, яка змінює поведінку процесу перетворення значення на рядок, або ж масив із рядків чи чисел, котрий перелічує властивості `value`, котрі повинні бути включені у вивід. Якщо цей параметр дорівнює {{JSxRef("null")}}, або просто не заданий, в отриманий рядок будуть включені всі властивості об'єкта.
- `space` (пробіл) {{optional_inline}}

  - : {{JSxRef("String", "Рядок")}} або {{JSxRef("Number", "Число")}}, що буде використано для вставки пробільних символів у отриманий рядок JSON з міркувань розбірливості.

    Якщо передане значення має тип `Number`, то воно означатиме кількість пробільних символів, використаних для створення відступів. Ця кількість обмежена 10-ма (якщо передане число більше за 10, кількість пробілів все одно буде `10`). Значення, які менші за 1, позначають, що жодного пробільного символу вжито не буде.

    Якщо передане значення має тип `String`, цей рядок (або перші 10 знаків цього рядка, якщо він довший) буде використано замість пробілів.

    Якщо цей параметр не задано (або якщо його значення дорівнює {{JSxRef("null")}}), пробільні символи не використовуватимуться.

### Повернене значення

Рядок у форматі JSON, що відображає значення переданого об'єкта, або `undefined`.

### Винятки

- Викидає виняток {{JSxRef("TypeError")}} ("cyclic object value") коли трапляється циклічне посилання.
- Викидає {{JSxRef("TypeError")}} ("BigInt value can't be serialized in JSON") у випадку спроби серіалізувати значення {{jsxref("BigInt")}} у рядок.

## Опис

Метод `JSON.stringify()` перетворює значення аргументу на рядкове значення, записане JSON-нотацією:

- Якщо значення має метод [`toJSON()`](#povedinka-tojson), то він відповідатиме за те, які саме дані буде серіалізовано.
- Об'єкти {{JSxRef("Boolean")}}, {{JSxRef("Number")}} та {{JSxRef("String")}} під час серіалізації зводяться до власних примітивних значень, згідно з традиційною семантикою таких перетворень.
- {{JSxRef("undefined")}}, {{JSxRef("Function", "функції")}} та {{JSxRef("Symbol", "символи")}} не є валідними значеннями JSON. Якщо якесь із цих значень трапляється під час перетворення, то воно або опускається (в об'єктах), або ж замінюється на {{JSxRef("null")}} (якщо трапляється в масиві). `JSON.stringify()` може повернути `undefined`, якщо передати в нього їхні "чисті" значення, як от `JSON.stringify(function() {})` або `JSON.stringify(undefined)`.
- Всі властивості об'єкту, які мають за ключі {{JSxRef("Symbol", "символи")}}, будуть повністю проігноровані, навіть у разі передачі функції `replacer`.
- Екземпляри {{JSxRef("Date")}} реалізовують функцію `toJSON()` шляхом повертання рядка (так само як це робить `date.toISOString()`). Таким чином, вони будуть сприйматися як рядки.
- Числа {{JSxRef("Infinity")}} і {{JSxRef("NaN")}}, так само як і значення {{JSxRef("null")}}, — вважаються `null`.
- Всі інші екземпляри {{JSxRef("Object", "об'єктів")}} (включно з {{JSxRef("Map")}}, {{JSxRef("Set")}}, {{JSxRef("WeakMap")}} та {{JSxRef("WeakSet")}}) серіалізуватимуть лише свої перелічувані властивості.

## Приклади

### Застосування JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify('foo'); // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// Елементи масиву з рядковими ключами не є перелічними і не мають сенсу в JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux'; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] });
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
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Неперелічувані властивості:
JSON.stringify(
  Object.create(null, {
    x: { value: 'x', enumerable: false },
    y: { value: 'y', enumerable: true },
  }),
);
// '{"y":"y"}'

// BigInt-значення викидають виняток
JSON.stringify({ x: 2n });
// TypeError: BigInt value can't be serialized in JSON
```

### Параметр `replacer`

Параметр `replacer` (замінювач) може бути як функцією, так і масивом.

**Як функція**, він отримає два аргументи: _ключ_ та _значення_, що перетворюються. Об'єкт, на якому було знайдено цей ключ, передається у функцію як значення `this`.

Спочатку функція `replacer` викликається з порожнім рядком замість ключа, позначаючи об'єкт, який серіалізується. Після цього вона викликається на кожній з властивостей об'єкта чи масиву, який перетворюється.

Вона повинна повертати значення, яке буде додано до рядка JSON, так, як описано нижче:

- Якщо повертається {{JSxRef("Number", "число")}}, {{JSxRef("String", "рядок")}}, {{JSxRef("Boolean", "булеве")}} або {{JSxRef("null")}}, значенням властивості буде рядкова версія цього примітиву.
- Якщо повертається {{JSxRef("Function", "функція")}}, {{JSxRef("Symbol", "символ")}} або {{JSxRef("undefined")}}, ця властивість _не буде_ включена у вивід.
- Якщо ж повертається будь-який інший об'єкт, то його буде рекурсивно серіалізовано, з викликом функції `replacer` на кожній з його властивостей.

> **Зауваження:** Не можна використовувати функцію `replacer` для видалення значень з масиву. Якщо вона повертає `undefined` або функцію, то натомість в масиві опиниться `null`.

> **Зауваження:** Якщо ви хочете, щоб `replacer` розрізняв початковий об'єкт і властивість з порожнім рядковим ключем (оскільки обидва дадуть порожній рядок як значення ключа і, потенційно, об'єкт як значення властивості), вам знадобиться відстежувати кількість ітерацій (якщо це _не перша_ ітерація функції, значить — це справді порожній рядковий ключ).

#### Приклад функції `replacer`

```js
function replacer(key, value) {
  // Вибракування властивостей
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

const foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 45,
  transport: 'car',
  month: 7,
};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
```

#### Приклад масиву `replacer`

Якщо як `replacer` передано масив, то елементи такого масиву будуть позначати імена властивостей об'єкта, які слід залишити в отриманому рядку JSON.

```js
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', залишаємо лише властивості "week" та "month"
```

### Параметр `space`

Аргумент `space` (пробіл) може використовуватись для задання відступів в кінцевому рядку.

- **Якщо це число**, то кожен з наступних рівнів серіалізації матиме відступ розміром з вказану кількість пробільних символів (до 10).
- **Якщо це рядок**, наступні рівні серіалізації матимуть цей рядок як відступ (або ж перші 10 символів цього рядка).

```js
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
```

Застосування символу табуляції імітує стандартне оформлення коду:

```js
JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// повертає рядок:
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### Поведінка toJSON()

Якщо об'єкт, який серіалізується, містить властивість із назвою `toJSON`, і значення цієї властивості є функцією, то метод `toJSON()` змінює поведінку серіалізації, а саме: замість серіалізації самого об'єкту буде перетворений результат виклику методу `toJSON()`. Функція `JSON.stringify()` викликає метод `toJSON` з одним параметром, куди передається одне з цих значень:

- Назва властивості, якщо цей об'єкт є значенням властивості.
- Індекс масиву (як рядок), якщо цей об'єкт є масивом
- Порожній рядок, якщо `JSON.stringify()` було викликано безпосередньо на цьому об'єкті

Наприклад:

```js
const obj = {
  data: 'data',

  toJSON(key) {
    if (key) return `Зараз я — вкладений об'єкт за ключем '${key}'`;
    else return this;
  },
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj }); // Скорочення імен властивостей (ES2015).
// '{"obj":"Зараз я — вкладений об'єкт за ключем 'obj'"}'

JSON.stringify([obj]);
// '["Зараз я — вкладений об'єкт за ключем '0'"]'
```

### Проблема з JSON.stringify() під час серіалізації циклічних посилань

Зауважте, що оскільки [формат JSON (англ.)](https://www.json.org/) не підтримує посилання на об'єкти (хоча [існує чернетка IETF (англ.)](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)), буде викинуто виняток {{JSxRef("TypeError")}} під час спроби закодувати об'єкт з циклічними посиланнями.

```js example-bad
const circularReference = {};
circularReference.myself = circularReference;

// Серіалізація циклічного посилання викине "TypeError: cyclic object value"
JSON.stringify(circularReference);
```

Для серіалізації циклічних посилань можна застосувати бібліотеку, котра їх підтримує (наприклад, [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) Дугласа Крокфорда), або ж можна реалізувати рішення самотужки — для цього знадобиться знайти й замінити (або видалити) циклічні посилання значеннями, які піддаються серіалізації.

### Проблема з використанням звичайного JSON.stringify як JavaScript-коду

Історично так склалося, що JSON не був цілком точною підмножиною JavaScript. Літерні кодові одиниці U+2028 LINE SEPARATOR та U+2029 PARAGRAPH SEPARATOR можуть траплятись буквально всередині рядкових літералів та імен властивостей у тексті JSON. Проте вони не можуть траплятися в буквальному вигляді в такому самому контексті в тексті коду на JavaScript, тільки як керівні послідовності Unicode: `\u2028` і `\u2029`. Нещодавно це змінилось — тепер обидві кодові одиниці можуть траплятись в буквальному вигляді як в JSON, так і в JavaScript.

Таким чином, якщо вимагається сумісність зі старішими JavaScript-рушіями, то стає небезпечним прямо підставляти рядок — результат виконання `JSON.stringify` — в `eval`, чи `new Function` або як частину [JSONP](https://uk.wikipedia.org/wiki/JSONP) URL. Для цього можна використати наступний допоміжний код:

```js
function jsFriendlyJSONStringify(s) {
  return JSON.stringify(s)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

const s = {
  a: String.fromCharCode(0x2028),
  b: String.fromCharCode(0x2029),
};
try {
  eval('(' + JSON.stringify(s) + ')');
} catch (e) {
  console.log(e); // "SyntaxError: unterminated string literal"
}

// Без необхідності ловити виняток
eval('(' + jsFriendlyJSONStringify(s) + ')');

// console.log у Firefox знімає екранування з символів Unicode
// під час друкування в консоль, тож застосуємо alert
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

> **Зауваження:** Властивості об'єктів, які не є масивами, не мають жодних гарантій щодо послідовності їхньої серіалізації. Не слід покладатися на порядок властивостей однакових об'єктів всередині серіалізованої версії.

```js
const a = JSON.stringify({ foo: 'bar', baz: 'quux' });
//'{"foo":"bar","baz":"quux"}'
const b = JSON.stringify({ baz: 'quux', foo: 'bar' });
//'{"baz":"quux","foo":"bar"}'
console.log(a !== b); // true

// Деякі мемоізаційні функції використовують JSON.stringify для серіалізації аргументів,
// що може призвести до промаху в кеші, якщо трапляються однакові об'єкти, як це показано вище
```

### Приклад застосування JSON.stringify() з localStorage

На випадок, якщо потрібно зберегти створений користувачем об'єкт, з можливістю відновити його навіть після закриття браузера, нижче наведено патерн застосування `JSON.stringify()`:

```js
// Створення прикладу JSON-об'єкту
const session = {
  screens: [],
  state: true,
};
session.screens.push({ name: 'screenA', width: 450, height: 250 });
session.screens.push({ name: 'screenB', width: 650, height: 350 });
session.screens.push({ name: 'screenC', width: 750, height: 120 });
session.screens.push({ name: 'screenD', width: 250, height: 60 });
session.screens.push({ name: 'screenE', width: 390, height: 120 });
session.screens.push({ name: 'screenF', width: 1240, height: 650 });

// Перетворення об'єкту на JSON-рядок із JSON.stringify(),
// потім збереження його в localStorage за ім'ям `session`
localStorage.setItem('session', JSON.stringify(session));

// Приклад того, як перетворити рядок, створений за допомогою
// JSON.stringify() і записаний в localStorage, назад на JSON-об'єкт
const restoredSession = JSON.parse(localStorage.getItem('session'));

// Тепер змінна restoredSession містить об'єкт, який був раніше
// записаний в localStorage
console.log(restoredSession);
```

### JSON.stringify() з правильним формуванням

Рушії, що реалізовують [специфікацію JSON.stringify з правильним формуванням (англ.)](https://github.com/tc39/proposal-well-formed-stringify), опрацьовують поодинокі сурогати — будь-які кодові одиниці від U+D800 до U+DFFF — із застосуванням керівних послідовностей Unicode, замість вживання їх буквально. До цих оновлень `JSON.stringify` міг повертати поодинокі сурогати, якщо такі сурогати знаходилися в початковому рядку. Такі рядки потім неможливо було коректно перекодувати в UTF-8 чи UTF-16:

```js
JSON.stringify('\uD800'); // '"�"'
```

Проте з цим оновленням `JSON.stringify` відбиває поодинокі сурогати за допомогою екранованих послідовностей JSON, які _можна_ коректно перекодувати в рядок UTF-8 чи UTF-16:

```js
JSON.stringify('\uD800'); // '"\\ud800"'
```

Це оновлення має бути зворотно сумісним, поки результат `JSON.stringify` передається до такого API, як `JSON.parse`, що прийматиме будь-який валідний JSON-текст, оскільки вони будуть вважати юнікодні екрановані поодинокі сурогати рівними самим сурогатам. _Лише_ під час прямої інтерпретації результатів виконання `JSON.stringify` слід уважно опрацьовувати два можливі варіанти кодування таких кодових одиниць.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл сучасної поведінки `JSON.stringify` (символи і як слід сформований юнікод) у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-json)
- {{JSxRef("JSON.parse()")}}
