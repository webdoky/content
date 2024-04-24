---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
page-type: javascript-namespace
browser-compat: javascript.builtins.JSON
---

{{JSRef}}

Об'єкт – простір імен **`JSON`** містить статичні методи для розбору значень та перетворення значень в [запис об'єктів JavaScript](https://json.org/) ({{Glossary("JSON")}}).

## Опис

На відміну від більшості глобальних об'єктів, `JSON` не є конструктором. Його не можна використовувати з оператором [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new) або викликати об'єкт `JSON` як функцію. Всі властивості та методи `JSON` є статичними (так само в об'єкта {{jsxref("Math")}}).

### Різниця між JavaScript і JSON

JSON – це синтаксис для серіалізації об'єктів, масивів, чисел, рядків, булевих значень і [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null). Він заснований на синтаксисі JavaScript, але відрізняється від нього: більшість JavaScript _не_ є JSON. Наприклад:

- Об'єкти та масиви
  - : Назви властивостей повинні бути рядками в подвійних лапках; [коми в кінці](/uk/docs/Web/JavaScript/Reference/Trailing_commas) заборонені.
- Числа
  - : Нулі на початку – заборонені. Після десяткової крапки має бути принаймні одна цифра. `NaN` та `Infinity` – не підтримуються.

Будь-який текст JSON є дійсним виразом JavaScript, але лише після перегляду [надмножини JSON](https://github.com/tc39/proposal-json-superset). До цього перегляду символи U+2028 LINE SEPARATOR та U+2029 PARAGRAPH SEPARATOR були дозволені в літералах рядків та ключах властивостей в JSON, але таке ж використання в літералах рядків JavaScript викликало {{jsxref("SyntaxError")}}.

Серед інших відмінностей – дозволені лише рядки в подвійних лапках, немає підтримки {{jsxref("undefined")}} і коментарів. Для тих, хто хоче використовувати більш дружній для людини формат налаштувань на основі JSON, є [JSON5](https://json5.org/), який використовує компілятор Babel, а також більш поширений формат [YAML](https://uk.wikipedia.org/wiki/YAML).

Той самий текст може представляти різні значення в об'єктному літералі JavaScript і JSON. Більше про це – в розділі [Запис літералів об'єктів і JSON](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer#zapys-literaliv-obiektiv-i-json).

### Повна граматика JSON

Дійсний синтаксис JSON формально описаний наступною граматикою, вираженою в форматі [Доповненої нотації Бекуса – Наура](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form), і скопійований зі [стандарту IETF JSON (RFC)](https://datatracker.ietf.org/doc/html/rfc8259):

```plain
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
```

Несуттєві {{Glossary("whitespace", "пробіли")}} можуть зустрічатися всюди, крім всередині `JSONNumber` (числа не вміщають пробілів) і `JSONString` (там вони тлумачаться як відповідні символи в рядку, або ж викликають помилку). Символ табуляції ([U+0009](https://symbl.cc/en/0009/)), повернення каретки ([U+000D](https://symbl.cc/en/000D/)), переведення рядка ([U+000A](https://symbl.cc/en/000A/)) і пробіл ([U+0020](https://symbl.cc/en/0020/)) – єдині допустимі пробільні символи.

## Статичні властивості

- `JSON[@@toStringTag]`
  - : Початкове значення властивості [`@@toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) – рядок `"JSON"`. Ця властивість використовується в {{jsxref("Object.prototype.toString()")}}.

## Статичні методи

- {{jsxref("JSON.isRawJSON()")}} {{experimental_inline}}
  - : Перевіряє, чи є значення об'єктом, поверненим {{jsxref("JSON.rawJSON()")}}.
- {{jsxref("JSON.parse()")}}
  - : Розібрати порцію рядкового тексту як JSON, необов'язково перетворюючи отримане значення та його властивості, і повернути значення.
- {{jsxref("JSON.rawJSON()")}} {{experimental_inline}}
  - : Створює об'єкт "необробленого JSON", що вміщає уривок тексту JSON. При серіалізації в JSON об'єкт необробленого JSON тлумачиться як вже готовий уривок JSON. Цей текст повинен бути дійсним JSON.
- {{jsxref("JSON.stringify()")}}
  - : Повернути рядок JSON, що відповідає переданому значенню, необов'язково включаючи лише певні властивості або замінюючи значення властивостей у спосіб, визначений користувачем.

## Приклади

### Приклад JSON

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

Метод {{jsxref("JSON.parse()")}} можна використовувати для перетворення рядка JSON вище на об'єкт JavaScript:

```js
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
```

### Серіалізація чисел без втрат

JSON може вміщати числові літерали довільної точності. Однак не можна представити з повною точністю в JavaScript усі числа JSON, оскільки JavaScript використовує представлення з рухомою комою, яке має фіксовану точність. Наприклад, у JavaScript `12345678901234567890 === 12345678901234567000`, оскільки ці числа мають одне й те ж представлення з рухомою комою. Це означає, що в JavaScript немає числа, яке точно відповідало б числу JSON `12345678901234567890`.

Припустімо, що є точне представлення деякого числа (чи то через {{jsxref("BigInt")}}, чи через власну бібліотеку):

```js
const data = {
  // Тут для зберігання точного значення використовується BigInt,
  // але можна використовувати також власну бібліотеку чисел високої точності,
  // якщо число може бути не цілим.
  gross_gdp: 12345678901234567890n,
};
```

Є потреба його серіалізувати, а потім розібрати на точно те саме число. Є кілька складнощів:

- З боку серіалізації, щоб отримати число в JSON, необхідно передати в `JSON.stringify` саме число, або через функцію `replacer`, або через метод `toJSON`. Але в обох випадках точність втрачається вже під час перетворення цього числа. Якщо передати рядок в `JSON.stringify`, він буде серіалізований як рядок, а не як число.
- З боку розбору, не всі числа можна представити точним чином. Наприклад, `JSON.parse("12345678901234567890")` повертає `12345678901234568000`, оскільки число округлюється до найближчого числа, яке можна представити. Навіть якщо скористатися функцією `reviver`, число вже буде округлене до відповідного числа до того, як функція `reviver` буде викликана.

Загалом, є два способи забезпечити перетворення чисел у JSON і розбір назад без втрат: один з них залучає число JSON, а інший – рядок JSON. JSON – це _комунікаційний формат_, тож якщо використовується JSON, то, ймовірно, відбувається комунікація з іншою системою (запит HTTP, збереження у базі даних тощо). Найкраще рішення в конкретній ситуації залежить від системи-одержувача.

#### Використання рядків JSON

Якщо система-одержувач не має таких же можливостей обробки JSON, як JavaScript, і не підтримує числа високої точності, можна серіалізувати число як рядок, а потім обробити його як рядок на стороні одержувача. Також цей варіант є єдиним можливим у старих версіях JavaScript.

Щоб задати те, як власні типи даних (в тому числі `BigInt`) повинні бути серіалізовані в JSON, потрібно або додати до власного типу даних метод `toJSON`, або скористатися функцією `replacer` {{jsxref("JSON.stringify()")}}.

```js
// Використання методу toJSON()
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Використання JSON.stringify() з замінювачем
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

В обох випадках текст JSON матиме вигляд `{"gross_gdp":"12345678901234567890"}`, де значення є рядком, а не числом. Потім на стороні одержувача можна розібрати JSON і обробити рядок.

#### Використання чисел JSON

Якщо одержувач повідомлення нативно підтримує числа високої точності (наприклад, цілі числа Python), передача чисел у вигляді чисел JSON, очевидно, є кращим підходом, адже тоді одержувач може безпосередньо розібрати їх у тип високої точності, а не розбирати рядок з JSON, а потім розбирати число з рядка. У JavaScript можна серіалізувати довільні типи даних у числа JSON без втрати точності, не створюючи спершу числове значення (що призвело б до втрати точності) шляхом використання {{jsxref("JSON.rawJSON()")}}, щоб точно вказати, яким має бути вихідний текст JSON.

```js
// Використання методу toJSON()
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Використання JSON.stringify() з замінювачем
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

Текст, переданий до `JSON.rawJSON`, тлумачиться як вже готовий уривок JSON, тому він не буде серіалізований як рядок. Таким чином, текст JSON буде мати вигляд `{"gross_gdp":12345678901234567890}`, де значення є числом. Цей JSON одержувач може розібрати без будь-якої додаткової обробки, за умови того, що система-одержувач не має таких же обмежень точності, як JavaScript.

При розбиранні JSON, що містить числа високої точності, в JavaScript, слід дотримуватись особливої обережності, тому що коли `JSON.parse()` закликає функцію `reviver`, то отримане значення вже розібране (і вже втратило точність). Можна скористатися параметром `context.source` функції `reviver` {{jsxref("JSON.parse()")}}, щоб самостійно розібрати число заново.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Або скористатися конструктором власної бібліотеки чисел високої точності
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Date.prototype.toJSON()")}}
- [Порівнювач JSON](https://json-diff.com/)
- [Прикрашальник і редактор JSON](https://jsonbeautifier.org/)
- [Розбирач JSON](https://jsonparser.org/)
- [Валідатор JSON](https://tools.learningcontainer.com/json-validator/)
