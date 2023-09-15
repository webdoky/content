---
title: Стандартні вбудовані об'єкти
slug: Web/JavaScript/Reference/Global_Objects
page-type: landing-page
---

{{jsSidebar("Objects")}}

У цьому розділі задокументовано всі стандартні вбудовані об'єкти JavaScript, включно з їх методами та властивостями.

Не варто плутати термін "глобальні об'єкти" (або "стандартні вбудовані об'єкти") із **глобальним об'єктом**. Тут під "глобальними об'єктами" слід розуміти **об'єкти у глобальній області видимості**.

Сам **глобальний об'єкт** доступний із використанням оператора {{jsxref("Operators/this", "this")}} у глобальній області видимості. Насправді глобальна область видимості **складається з** властивостей цього глобального об'єкта, включно з успадкованими полями, якщо такі є.

Інші об'єкти у глобальній області видимості є або [створеними користувацьким скриптом](/uk/docs/Web/JavaScript/Guide/Working_with_objects#stvorennia-novykh-obiektiv), або ж надані керівним застосунком. Ті керівні об'єкти, котрі доступні в контексті браузера, задокументовані у [довіднику з API](/uk/docs/Web/API).

Більше інформації про відмінності між [DOM](/uk/docs/Web/API/Document_Object_Model) і ядром [JavaScript](/uk/docs/Web/JavaScript) можна знайти в [технологічному огляді JavaScript](/uk/docs/Web/JavaScript/JavaScript_technologies_overview).

## Стандартні об'єкти за категоріями

### Властивості-значення

Ці глобальні властивості повертають просте значення. Вони не мають власних властивостей чи методів.

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Властивості-функції

Ці глобальні функції (ті функції, які радше викликаються глобально, аніж як методи об'єкта) — прямо повертають результат тому, хто їх викликав.

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}

### Корінні об'єкти

Ці об'єкти представляють корінні конструкції мови.

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Об'єкти помилок

Об'єкти помилок — це особливий тип фундаментального об'єкта. Сюди входить базовий тип {{jsxref("Error")}}, а також декілька спеціалізованих типів помилок.

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Числа та дати

Це базові об'єкти для представлення чисел, дат і математичних обчислень.

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}

### Обробка тексту

Ці об'єкти служать для представлення рядків із текстом і маніпуляцій із ними.

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Колекції з індексом

Це колекції з даними, вміст яких упорядковано за значенням індексу. Охоплюють масиви (в тому числі типізовані) та подібні до масивів об'єкти.

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Колекції з ключами

Це колекції, що використовують так звані ключі для доступу до даних. Ітеровані колекції ({{jsxref("Map")}} та {{jsxref("Set")}}) містять елементи, що легко доступні для перебирання у порядку їхнього вставляння.

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Структуровані дані

Ці об'єкти представляють і взаємодіють зі структурованими буферами даних, а також із закодованими за допомогою Об'єктної Нотації JavaScript (JSON) даними.

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Керування пам'яттю

Ці об'єкти взаємодіють з механізмом збирання сміття.

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Об'єкти абстракцій контролю

Абстракції контролю допомагають структурувати код, особливо якщо він асинхронний (зокрема без використання глибоко вкладених функцій зворотного виклику).

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Рефлексія

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Інтернаціоналізація

Додатки до ядра ECMAScript із функціональністю, що чутлива до мови.

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}
