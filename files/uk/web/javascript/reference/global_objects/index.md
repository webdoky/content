---
title: Стандартні вбудовані об'єкти
slug: Web/JavaScript/Reference/Global_Objects
page-type: landing-page
---

{{JSSidebar("Objects")}}

У цьому розділі задокументовано всі стандартні вбудовані об'єкти JavaScript, включно з їх методами та властивостями.

Не варто плутати термін "глобальні об'єкти" (або "стандартні вбудовані об'єкти") із **глобальним об'єктом**. Тут під "глобальними об'єктами" слід розуміти **об'єкти у глобальній області видимості**.

Сам **глобальний об'єкт** доступний із використанням оператора {{JSxRef("Operators/this", "this")}} у глобальній області видимості. Насправді глобальна область видимості **складається з** властивостей цього глобального об'єкта, включно з успадкованими полями, якщо такі є.

Інші об'єкти у глобальній області видимості є або [створеними користувацьким скриптом](/uk/docs/Web/JavaScript/Guide/Working_with_objects#stvorennia-novykh-obiektiv), або ж надані керівним застосунком. Ті керівні об'єкти, котрі доступні в контексті браузера, задокументовані у [довіднику з API](/uk/docs/Web/API).

Більше інформації про відмінності між [DOM](/uk/docs/Web/API/Document_Object_Model) і ядром [JavaScript](/uk/docs/Web/JavaScript) можна знайти в [технологічному огляді JavaScript](/uk/docs/Web/JavaScript/JavaScript_technologies_overview).

## Стандартні об'єкти за категоріями

### Властивості-значення

Ці глобальні властивості повертають просте значення. Вони не мають власних властивостей чи методів.

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Властивості-функції

Ці глобальні функції (ті функції, які радше викликаються глобально, аніж як методи об'єкта) — прямо повертають результат тому, хто їх викликав.

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
- {{JSxRef("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}

### Корінні об'єкти

Ці об'єкти представляють корінні конструкції мови.

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Об'єкти помилок

Об'єкти помилок — це особливий тип фундаментального об'єкта. Сюди входить базовий тип {{JSxRef("Error")}}, а також декілька спеціалізованих типів помилок.

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-Standard_Inline}}

### Числа та дати

Це базові об'єкти для представлення чисел, дат і математичних обчислень.

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}

### Обробка тексту

Ці об'єкти служать для представлення рядків із текстом і маніпуляцій із ними.

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Колекції з індексом

Це колекції з даними, вміст яких упорядковано за значенням індексу. Охоплюють масиви (в тому числі типізовані) та подібні до масивів об'єкти.

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Колекції з ключами

Це колекції, що використовують так звані ключі для доступу до даних. Ітеровані колекції ({{JSxRef("Map")}} та {{JSxRef("Set")}}) містять елементи, що легко доступні для перебирання у порядку їхнього вставляння.

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Структуровані дані

Ці об'єкти представляють і взаємодіють зі структурованими буферами даних, а також із закодованими за допомогою Об'єктної Нотації JavaScript (JSON) даними.

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Керування пам'яттю

Ці об'єкти взаємодіють з механізмом збирання сміття.

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Об'єкти абстракцій контролю

Абстракції контролю допомагають структурувати код, особливо якщо він асинхронний (зокрема без використання глибоко вкладених функцій зворотного виклику).

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}

### Рефлексія

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Інтернаціоналізація

Додатки до ядра ECMAScript із функціональністю, що чутлива до мови.

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}
