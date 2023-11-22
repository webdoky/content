---
title: Base64
slug: Glossary/Base64
page-type: glossary-definition
---

{{GlossarySidebar}}

**Base64** (за основою 64) – це група споріднених кодувань [перетворення з двійкової у текстову форму](https://en.wikipedia.org/wiki/Binary-to-text_encoding), що представляють двійкові дані у вигляді рядка {{glossary("ASCII")}} за допомогою перекладу їх у представлення з системою числення 64. Термін _Base64_ походить від конкретного [кодування передачі вмісту MIME](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding).

Коли термін "Base64" вживається сам по собі на позначення певного алгоритму, він зазвичай означає версію Base64, описану у [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648), розділі 4, яка використовує наступний алфавіт для представлення розрядних цифр системи числення 64, разом із `=` як символом відступу:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

Поширена варіація – "безпечний для URL Base64", котрий пропускає відступ і замінює `+/` на `-_`, щоб уникнути символів, які можуть створювати проблеми у сегментах шляху URL і параметрах запиту.

Схеми кодування Base64 заведено використовувати для кодування двійкових даних для зберігання чи передачі засобами, що можуть працювати лише з текстом ASCII (або певною надмножиною ASCII, що все одно не здатна приймати довільні двійкові дані). Це забезпечує, що дані залишаються незмінними під час транспортування. Поширені застосування Base64:

- Електронна пошта через [MIME](https://uk.wikipedia.org/wiki/MIME)
- Зберігання складних даних у [XML](/uk/docs/Web/XML)
- Кодування двійкових даних, щоб їх можна було включити в [URL-адресу `data:`](/uk/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)

## Збільшення розміру при кодуванні

Кожна цифра Base64 представляє 6 біт даних. Отже, три 8-бітові байти вихідного рядка чи двійкового файлу (3×8 біт = 24 біти) можна представити чотирма 6-бітовими цифрами Base64 (4×6 = 24 біти).

Це означає, що версія рядка чи файлу в Base64 зазвичай приблизно на третину більша за вихідні дані (точний приріст розміру залежить від різних факторів, таких як абсолютна довжина рядка, остача від ділення його довжини на 3 та те, чи використовуються символи відступу).

## Підтримка в JavaScript

Для розкодування та кодування рядків Base64 браузери надають дві функції JavaScript:

- [`btoa`](/uk/docs/Web/API/btoa) – створює рядок ASCII, закодований Base64, з рядка двійкових даних ("btoa" слід читати як "binary to ASCII", "двійкове в ASCII").
- [`atob`](/uk/docs/Web/API/atob) – розкодовує рядок, закодований Base64 ("atob" слід читати як "ASCII to binary", "ASCII у двійкове").

> **Примітка:** Base64 – це двійкове кодування, а не текстове, але `btoa` та `atob` були додані до вебплатформи до того, як вона почала підтримувати двійкові типи даних. В результаті ці дві функції використовують рядки для представлення двійкових даних, при чому кодова точка кожного символу представляє значення кожного байта. Це призвело до поширеного неправильного розуміння, ніби `btoa` можна використовувати для кодування довільних текстових даних – наприклад, створення Base64 `data:` URL текстового чи HTML-документа.
>
> Проте відповідність між байтами та кодовими точками надійно виконується лише для кодових точок до `0x7f`. Крім того, кодові точки понад `0xff` призведуть до викидання помилки `btoa`, через перевищення максимального значення для 1 байта. Наступний розділ детально описує, як обійти це обмеження при кодуванні довільного тексту Unicode.

## "Проблема Unicode"

Оскільки `btoa` тлумачить кодові точки вихідного рядка як значення байтів, виклик `btoa` для рядка призведе до викидання помилки "Character Out Of Range" ("символ поза допустимим діапазоном"), якщо кодова точка символу перевищує `0xff`. Для випадків використання, де потрібно закодувати довільний текст Unicode, необхідно спочатку перетворити рядок на його складові байти в UTF-8, а потім закодувати ці байти.

Найпростіше рішення – використати `TextEncoder` і `TextDecoder` для перетворення між UTF-8 та однобайтовими представленнями рядка:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

## Перетворення довільних двійкових даних

Функції `bytesToBase64` та `base64ToBytes` з попереднього розділу можна використовувати безпосередньо для перетворення між рядками Base64 і [`Uint8Array`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).

Інший варіант: асинхронне перетворення між URL з даними Base64 можливе безпосередньо у вебплатформі за допомогою API [`FileReader`](/uk/docs/Web/API/FileReader) і [`fetch`](/uk/docs/Web/API/Fetch_API):

```js
async function bytesToBase64DataUrl(bytes, type = "application/octet-stream") {
  return await new Promise((resolve, reject) => {
    const reader = Object.assign(new FileReader(), {
      onload: () => resolve(reader.result),
      onerror: () => reject(reader.error),
    });
    reader.readAsDataURL(new File([bytes], "", { type }));
  });
}

async function dataUrlToBytes(dataUrl) {
  const res = await fetch(dataUrl);
  return new Uint8Array(await res.arrayBuffer());
}

// Використання
await bytesToBase64DataUrl(new Uint8Array([0, 1, 2])); // "data:application/octet-stream;base64,AAEC"
await dataUrlToBytes("data:application/octet-stream;base64,AAEC"); // Uint8Array [0, 1, 2]
```
