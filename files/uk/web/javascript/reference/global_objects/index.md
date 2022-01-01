---
title: Стандартні вбудовані об'єкти
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - JavaScript
  - Landing page
  - Overview
  - Reference
---

{{JSSidebar("Objects")}}

У цьому розділі задокументовано всі стандартні вбудовані об'єкти JavaScript, включно з їх методами та властивостями.

Не варто плутати термін "глобальні об'єкти" (або стандартні вбудовані об'єкти) із **глобальним об'єктом**. Тут під "глобальні об'єкти" слід розуміти **об'єкти у глобальній області видимості**.

Сам **глобальний об'єкт** доступний із використанням оператора {{JSxRef("Operators/this", "this")}} у глобальній області видимості. Насправді глобальна область видимості **складається з** властивостей цього глобального об'єкта, включно з успадкованими полями, якщо такі є.

Інші об'єкти у глобальній області видимості є або [створеними користувацьким скриптом](/uk/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects), або ж надані застосунком хоста. Ті хост-об'єкти, що доступні в контексті браузера, задокументовано у [довіднику з API](/uk/docs/Web/API).

Більше інформації про відмінності між [DOM](/uk/docs/Web/API/Document_Object_Model) і ядром [JavaScript](/uk/docs/Web/JavaScript), можна знайти в [технологічному огляді JavaScript](/uk/docs/Web/JavaScript/JavaScript_technologies_overview).

## Стандартні об'єкти за категоріями

### Властивості-значення

Ці глобальні властивості повертають просте значення. Вони не мають власних властивостей чи методів.

- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}
- {{JSxRef("globalThis")}}

### Властивості-функції

Ці глобальні функції (ті функції, які радше викликаються глобально, аніж як методи об'єкту) — прямо повертають результат тому, хто їх викликав.

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{Non-Standard_Inline}} {{JSxRef("Global_Objects/uneval", "uneval()")}}
- {{JSxRef("Global_Objects/isFinite", "isFinite()")}}
- {{JSxRef("Global_Objects/isNaN", "isNaN()")}}
- {{JSxRef("Global_Objects/parseFloat", "parseFloat()")}}
- {{JSxRef("Global_Objects/parseInt", "parseInt()")}}
- {{JSxRef("Global_Objects/encodeURI", "encodeURI()")}}
- {{JSxRef("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
- {{JSxRef("Global_Objects/decodeURI", "decodeURI()")}}
- {{JSxRef("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
- **Застарілі**

  - {{Deprecated_Inline}} {{JSxRef("Global_Objects/escape", "escape()")}}
  - {{Deprecated_Inline}} {{JSxRef("Global_Objects/unescape", "unescape()")}}

### Базові об'єкти

Це фундаментальні, базові об'єкти, на яких засновуються всі інші об'єкти, а саме: загальні об'єкти, булеві об'єкти, функції та символи.

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Об'єкти помилок

Об'єкти помилок — це особливий тип фундаментального об'єкта. Сюди входить базовий тип {{JSxRef("Error")}}, а також декілька спеціалізованих типів помилок.

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("InternalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}

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
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}

### Колекції з ключами

Це колекції, що використовують так звані ключі для доступу до даних. Колекції з перебиранням ({{JSxRef("Map")}} та {{JSxRef("Set")}}) містять елементи, що легко доступні для перебирання у порядку їхнього вставляння.

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Структуровані дані

Ці об'єкти представляють і взаємодіють зі структурованими буферами даних, а також із закодованими за допомогою Об'єктної Нотації JavaScript (JSON) даними.

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("DataView")}}
- {{JSxRef("JSON")}}

### Абстрактні об'єкти контролю

Абстракції контролю допомагають структурувати код, особливо якщо він асинхронний (зокрема без використання глибоко вкладених функцій зворотного виклику).

- {{JSxRef("Promise")}}
- {{JSxRef("Generator")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncFunction")}}
- {{JSxRef("Global_Objects/AsyncGenerator", "AsyncGenerator")}}
- {{JSxRef("Global_Objects/AsyncGeneratorFunction", "AsyncGeneratorFunction")}}

### Рефлексія

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Інтернаціоналізація

Додатки до ядра ECMAScript, для функціональності, що чутлива до мови.

- {{JSxRef("Intl")}}
- {{JSxRef("Global_Objects/Intl/Collator", "Intl.Collator")}}
- {{JSxRef("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/ListFormat", "Intl.ListFormat")}}
- {{JSxRef("Global_Objects/Intl/NumberFormat", "Intl.NumberFormat")}}
- {{JSxRef("Global_Objects/Intl/PluralRules", "Intl.PluralRules")}}
- {{JSxRef("Global_Objects/Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
- {{JSxRef("Global_Objects/Intl/Locale", "Intl.Locale")}}

### WebAssembly

- {{JSxRef("WebAssembly")}}
- {{JSxRef("WebAssembly.Module")}}
- {{JSxRef("WebAssembly.Instance")}}
- {{JSxRef("WebAssembly.Memory")}}
- {{JSxRef("WebAssembly.Table")}}
- {{JSxRef("WebAssembly.CompileError")}}
- {{JSxRef("WebAssembly.LinkError")}}
- {{JSxRef("WebAssembly.RuntimeError")}}

### Інші

- {{JSxRef("Functions/arguments", "arguments")}}
