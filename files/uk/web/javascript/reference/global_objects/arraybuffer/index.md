---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
page-type: javascript-class
browser-compat: javascript.builtins.ArrayBuffer
---

{{JSRef}}

Об'єкт **`ArrayBuffer`** (масив-буфер) використовується для представлення узагальненого буфера двійкових даних.

Це масив байтів, який в інших мовах нерідко називають "байтовим масивом". Не можна працювати зі вмістом `ArrayBuffer` безпосередньо; замість цього слід створювати [об'єкти типізованих масивів](/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) або об'єкт {{jsxref("DataView")}}, які представляють цей буфер у конкретному форматі, і використовувати їх для читання та запису вмісту буфера.

Конструктор [`ArrayBuffer()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) створює новий `ArrayBuffer` із заданою довжиною в байтах. Також можна отримати масив-буфер з наявних даних, наприклад, із рядка [Base64](/uk/docs/Glossary/Base64) або [з локального файлу](/uk/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` – це [переносний об'єкт](/uk/docs/Web/API/Web_Workers_API/Transferable_objects).

## Опис

### Зміна розміру ArrayBuffer

Об'єкти `ArrayBuffer` легко можуть мати змінний розмір, завдяки наданню налаштування `maxByteLength` при виклику конструктора {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}. Дізнатися, чи має `ArrayBuffer` змінний розмір, і який його максимум, можна шляхом звертання до його властивостей {{jsxref("ArrayBuffer/resizable", "resizable")}} і {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} відповідно. Новий розмір `ArrayBuffer` змінного розміру можна задати за допомогою виклику {{jsxref("ArrayBuffer/resize", "resize()")}}. Нові байти ініціалізуються 0.

Завдяки цим можливостям зміна розміру `ArrayBuffer` ефективніша: без них довелось би створювати копію буфера з новим розміром. Це також дає JavaScript паритет щодо WebAssembly у цьому відношенні (лінійна пам'ять Wasm може змінювати розмір за допомогою [`WebAssembly.Memory.prototype.grow()`](/uk/docs/WebAssembly/JavaScript_interface/Memory/grow)).

### Перенесення ArrayBuffer

Об'єкти `ArrayBuffer` можна переносити між різними контекстами виконання, наприклад, [вебворкерами](/uk/docs/Web/API/Web_Workers_API) чи [сервісними воркерами](/uk/docs/Web/API/Service_Worker_API), за допомогою [алгоритму структурованого клонування](/uk/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Це робиться шляхом передачі `ArrayBuffer` як [переносного об'єкта](/uk/docs/Web/API/Web_Workers_API/Transferable_objects) у виклику {{domxref("Worker.postMessage()")}} чи {{domxref("ServiceWorker.postMessage()")}}. У чистому JavaScript також можна передавати власність пам'яті з одного `ArrayBuffer` до іншого за допомогою його методів {{jsxref("ArrayBuffer/transfer", "transfer()")}} чи {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}}.

Коли `ArrayBuffer` переноситься, його вихідна копія стає _від'єднаною_ – це означає, що нею більше не можна скористатися. В будь-яку мить є лише одна копія `ArrayBuffer`, яка має фактичний доступ до цільової ділянки пам'яті. Від'єднані буфери мають такі властивості:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} стає 0 (і в буфера, і в пов'язаних з ним представлень – типізованих масивів)
- Методи, такі як {{jsxref("ArrayBuffer/resize", "resize()")}} і {{jsxref("ArrayBuffer/slice", "slice()")}}, викидають {{jsxref("TypeError")}} при виклику. Методи пов'язаних представлень типізованих масивів також викидають `TypeError`.

Перевірити, чи є `ArrayBuffer` від'єднаним, можна за його властивістю {{jsxref("ArrayBuffer/detached", "detached")}}.

## Конструктор

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Створює новий об'єкт `ArrayBuffer`.

## Статичні властивості

- {{jsxref("ArrayBuffer/@@species", "ArrayBuffer[@@species]")}}
  - : Функція-конструктор, що використовується для створення похідних об'єктів.

## Статичні методи

- {{jsxref("ArrayBuffer.isView()")}}
  - : Повертає `true`, якщо `arg` – це одне з представлень ArrayBuffer, таких як [об'єкти типізованих масивів](/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) або {{jsxref("DataView")}}. Інакше повертає `false`.

## Властивості примірників

Ці властивості визначені на `ArrayBuffer.prototype` і спільні для всіх екземплярів `ArrayBuffer`.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : Розмір, у байтах, цього `ArrayBuffer`. Це значення задається, коли цей масив конструюється, і може бути змінено лише за допомогою методу {{jsxref("ArrayBuffer.prototype.resize()")}}, якщо `ArrayBuffer` має змінний розмір.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : Функція-конструктор, що створила цей екземпляр об'єкта. Для екземплярів `ArrayBuffer` початковим значенням є функція-конструктор {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}}.
- {{jsxref("ArrayBuffer.prototype.detached")}}
  - : Лише для зчитування. Повертає `true`, якщо цей `ArrayBuffer` був від'єднаний (переданий), або `false` – якщо ні.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : Доступна лише для зчитування максимальна довжина, в байтах, до якої може бути змінений розмір `ArrayBuffer`. Це значення задається, коли цей масив конструюється, і не може бути змінене.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Лише для зчитування. Повертає `true`, якщо розмір цього `ArrayBuffer` може бути змінений, або `false` – якщо ні.
- `ArrayBuffer.prototype[@@toStringTag]`
  - : Початковим значенням властивості [`@@toStringTag`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) є рядок `"ArrayBuffer"`. Ця властивість використовується в {{jsxref("Object.prototype.toString()")}}.

## Методи примірників

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Змінює розмір цього `ArrayBuffer` на вказаний розмір, у байтах.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Повертає новий `ArrayBuffer`, вміст якого – копія байтів цього `ArrayBuffer` від `begin` (включно) до `end` (не включно). Якщо `begin` або `end` – від'ємні, вони вказують на індекс з кінця масиву, а не з початку.
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
  - : Створює новий `ArrayBuffer` з тим самим байтовим вмістом, що й цей буфер, а потім від'єднує поточний буфер.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
  - : Створює новий `ArrayBuffer` з незмінним розміром і тим же байтовим вмістом, що й цей буфер, а тоді від'єднує поточний буфер.

## Приклади

### Створення ArrayBuffer

У цьому прикладі створюється 8-байтовий буфер з представленням {{jsxref("Int32Array")}}, яке на нього посилається:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл `ArrayBuffer` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Посібник [Типізовані масиви JavaScript](/uk/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/uk/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
