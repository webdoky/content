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

Несуттєві {{Glossary("whitespace", "пробіли")}} можуть зустрічатися всюди, крім всередині `JSONNumber` (числа не вміщають пробілів) і `JSONString` (там вони тлумачаться як відповідні символи в рядку, або ж викликають помилку). Символ табуляції ([U+0009](https://unicode-table.com/en/0009/)), повернення каретки ([U+000D](https://unicode-table.com/en/000D/)), переведення рядка ([U+000A](https://unicode-table.com/en/000A/)) і пробіл ([U+0020](https://unicode-table.com/en/0020/)) – єдині допустимі пробільні символи.

## Статичні властивості

- `JSON[@@toStringTag]`
  - : Початкове значення властивості [`@@toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) – рядок `"JSON"`. Ця властивість використовується в {{jsxref("Object.prototype.toString()")}}.

## Статичні методи

- {{jsxref("JSON.parse()")}}
  - : Розібрати порцію рядкового тексту як JSON, необов'язково перетворюючи отримане значення та його властивості, і повернути значення.
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
