---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
page-type: javascript-statement
browser-compat: javascript.statements.async_function
---

{{jsSidebar("Statements")}}

Оголошення **`async function`** створює {{Glossary("binding", "зв'язування")}} нової асинхронної функції з її новою назвою. Всередині її тіла дозволене вживання ключового слова `await`, що дає змогу записувати асинхронну (засновану на промісах) поведінку в чистішому стилі та уникати необхідності явно задавати ланцюжки промісів.

Асинхронні функції також можна оголошувати за допомогою [виразів `async function`](/uk/docs/Web/JavaScript/Reference/Operators/async_function).

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## Синтаксис

```js-nolint
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> **Примітка:** Між `async` і `function` не може бути символів кінця рядка, бо інакше буде [автоматично вставлено](/uk/docs/Web/JavaScript/Reference/Lexical_grammar#avtomatychne-vstavliannia-krapok-z-komoiu) крапку з комою, що зробить `async` ідентифікатором, а все решту — оголошенням `function`.

### Параметри

- `name`
  - : Назва функції.
- `param` {{optional_inline}}
  - : Ім'я формального параметра функції. Про синтаксис параметрів читайте в [довідці функцій](/uk/docs/Web/JavaScript/Guide/Functions#parametry-funktsii).
- `statements` {{optional_inline}}
  - : Інструкції, що формують тіло функції. Може застосовуватись функціонал `await`.

### Повернене значення

{{jsxref("Promise", "Проміс")}}, який буде вирішено зі значенням, поверненим з асинхронної функції, або відхилено з винятком, викинутим із (або не обробленим всередині) асинхронної функції.

## Опис

Асинхронні функції можуть містити нуль чи більше виразів {{jsxref("Operators/await", "await")}}. Вираз `await` змушує функції, які повертають проміси, поводити себе так, наче вони синхронні, шляхом призупинення виконання до моменту, коли повернений проміс буде сповнено або відхилено. Значення, повернене з виконаного промісу, обробляється як значення, повернене виразом `await`. Вживання `async` та `await` дає змогу застосовувати звичайні блоки `try` / `catch` навколо асинхронного коду.

> **Примітка:** Ключове слово `await` дійсне лише всередині асинхронної функції в коді на JavaScript. Якщо його вжити за межами тіла асинхронної функції, програма викине {{jsxref("SyntaxError")}}.
>
> Самостійний `await` можна використовувати всередині [модулів JavaScript.](/uk/docs/Web/JavaScript/Guide/Modules)

> **Примітка:** Мета `async`/`await` — спростити синтаксис, необхідний для користування API, заснованим на промісах. Поведінка `async`/`await` — схожа до комбінації [генераторів](/uk/docs/Web/JavaScript/Guide/Iterators_and_generators) із промісами.

Асинхронні функції завжди повертають проміс. Якщо повернене з асинхронної функції значення не є явним промісом, воно буде неявно обгорнуте в нього.

Для прикладу, зверніть увагу на наступний код:

```js
async function foo() {
  return 1;
}
```

Він є аналогічним до такого фрагмента:

```js
function foo() {
  return Promise.resolve(1);
}
```

> **Примітка:**
>
> Попри те, що значення, повернене з асинхронної функції поводить себе так, наче воно загорнене у `Promise.resolve`, вони не еквівалентні.
>
> Асинхронна функція поверне нове _посилання_, тоді як `Promise.resolve` повертає те саме посилання, якщо переданим значенням є проміс.
>
> Це може спричинити проблеми, якщо необхідно перевірити рівність промісу і поверненого з асинхронної функції значення.
>
> ```js
> const p = new Promise((res, rej) => {
>   res(1);
> });
>
> async function asyncReturn() {
>   return p;
> }
>
> function basicReturn() {
>   return Promise.resolve(p);
> }
>
> console.log(p === basicReturn()); // true
> console.log(p === asyncReturn()); // false
> ```

Можна сприймати тіло асинхронної функції так, як наче воно поділене на частини виразами `await`. Код верхнього рівня, аж до першого виразу `await` включно (якщо такий є), — виконується синхронно. В такому разі асинхронна функція без виразу `await` вся виконається синхронно. Проте якщо всередині тіла функції є принаймні один вираз `await`, асинхронна функція завжди виконуватиметься асинхронно.

Наприклад:

```js
async function foo() {
  await 1;
}
```

Такий вираз також еквівалентний щодо наступного фрагмента:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Код після кожного виразу `await` можна сприймати так, як наче він існує всередині функції зворотного виклику `.then`. Таким чином, ланцюжок промісів поступово формується з кожним повторним входом у функцію. Повернене значення стає кінцевою ланкою ланцюжка.

В наступному прикладі відбувається очікування на виконання двох промісів. Процес виконання функції `foo` відбувається у три етапи.

1. Перший рядок тіла функції `foo` виконується асинхронно, причому вираз `await` стає зайнятим очікуванням на виконання промісу. Виконання функції `foo` на цьому зупиняється, і керування передається назад у функцію, яка викликала `foo`.
2. Через деякий час, коли перший проміс сповнюється чи відхиляється, керування передається назад у `foo`. Результат виконання першого промісу (за умови, що проміс не було відхилено) повертається з виразу `await`. В цьому випадку `1` присвоюється змінній `result1`. Виконання функції продовжується, і обчислюється другий вираз `await`. І знову, процес виконання функції `foo` зупиняється, і керування передається назовні.
3. Через деякий час, коли вже другий проміс або сповнено, або відхилено, керування повертається до функції `foo`. Результат виконання другого промісу повертається з другого виразу `await`. Тут змінній `result2` присвоюється значення `2`. Керування передається виразу `return` (якщо такий є). В цьому конкретному випадку повертається усталене значення `undefined` як вирішене значення промісу.

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

Слід зауважити, що ланцюжок промісів будується не одразу. Натомість він конструюється етапами, по ходу успішного повернення керування з асинхронної функції – і передачі його назад до неї. Як наслідок, слід бути обережним з плином обробки помилок під час роботи з одночасними асинхронними операціями.

Наприклад, в наведеному нижче коді викинеться помилка неопрацьованого відхилення промісу, навіть якщо далі по ходу виконання ланцюжка промісів було встановлено обробник `.catch`. Це відбувається через те, що `p2` не буде "підключено до" ланцюжка промісів доти, доки керування не повернеться із `p1`.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Так робити не слід! Натомість краще вжити Promise.all чи Promise.allSettled.
}
foo().catch(() => {}); // Спроба проковтнути всі помилки...
```

Оголошення `async function` [піднімаються](/uk/docs/Glossary/Hoisting) нагору своєї області видимості й можуть викликатися на всьому її протязі.

## Приклади

### Асинхронні функції та порядок виконання

```js
function resolveAfter2Seconds() {
  console.log("початок повільного промісу");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("повільно");
      console.log("повільний проміс виконано");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("початок швидкого промісу");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("швидко");
      console.log("швидкий проміс виконано");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart починається ==");

  // 1. Запустити таймер, вивести, коли він добіжить кінця
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Запустити наступний таймер після очікування на попередній
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart завершено ==");
}

async function sequentialWait() {
  console.log("== sequentialWait починається ==");

  // 1. Запустити два таймери, не чекаючи на жодний з них
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Чекати завершення повільного таймера, а тоді вивести результат
  console.log(await slow);
  // 3. Чекати завершення швидкого таймера, а тоді вивести результат
  console.log(await fast);

  console.log("== sequentialWait завершено ==");
}

async function concurrent1() {
  console.log("== concurrent1 починається ==");

  // 1. Одночасно запустити два таймери, і чекати завершення обох
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Вивести результати разом
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 завершено ==");
}

async function concurrent2() {
  console.log("== concurrent2 починається ==");

  // 1. Запустити два таймери одночасно, а вивести зразу після завершення кожного з них
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 завершено ==");
}

sequentialStart(); // за 2 секунди виводить "повільно", а ще через 1 – "швидко"

// дочекатися завершення вище
setTimeout(sequentialWait, 4000); // за 2 секунди виводить "повільно", а тоді "швидко"

// чекати знову
setTimeout(concurrent1, 7000); // те саме, що й sequentialWait

// чекати знову
setTimeout(concurrent2, 10000); // за 1 секунду виводить "швидко", а через ще 1 – "повільно"
```

#### Вираз await та одночасність

У випадку послідовного старту у функції `sequentialStart` виконання зупиняється на 2 секунди на першому `await`, і потім іще на секунду на другому `await`. Другий таймер не створюється, поки не сплине час першого, тому загалом код завершує роботу за 3 секунди.

У випадку одночасного старту у функції `sequentialWait` обидва таймери створюються, а потім очікуються виразами `await`. Таймери виконують відлік одночасно, тобто код завершить роботу радше за 2, ніж за 3 секунди. Інакше кажучи — тоді, коли завершить відлік найповільніший таймер. Втім, виклики `await` все-таки виконуються послідовно, тобто другий `await` чекатиме на завершення першого. В цьому випадку результат швидшого таймера обробляється після завершення роботи повільнішого.

Якщо потрібно безпечним чином виконати інші задачі після того, як дві або більше задач запущені одночасно та завершені, необхідно застосувати `await` до виклику {{jsxref("Promise.all()")}} або {{jsxref("Promise.allSettled()")}}.

> **Застереження:** Функції `sequentialWait` та `concurrent1` не є функціонально еквівалентними.
>
> Якщо у функції `sequentialWait` `швидкий` проміс відхиляється перед сповненням `повільного` промісу, то буде викинуто помилку необробленого відхилення промісу, незалежно від наявності умови `catch` у місці виклику.
>
> У функції `concurrent1` `Promise.all` зв'язує ланцюжок промісів за один прохід, тобто операція негайно завершить роботу в разі помилки незалежно від послідовності відхилення промісів, і помилка завжди відбуватиметься всередині налаштованого ланцюжка промісів, що дає змогу її обробити у звичайний спосіб.

### Переписування ланцюжка промісів за допомогою асинхронної функції

API, який повертає {{jsxref("Promise", "проміс")}}, буде в результаті утворювати ланцюжки промісів, і це розбиває функцію на декілька частин. Якщо розглянути наступний код:

```js
function getProcessedData(url) {
  return downloadData(url) // повертає проміс
    .catch((e) => downloadFallbackData(url)) // повертає проміс
    .then((v) => processDataInWorker(v)); // повертає проміс
}
```

Це можна переписати як одну асинхронну функцію, як це показано нижче:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Крім того, можна з'єднувати в ланцюжок проміси з `catch()`:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

Зауважте, що в обох версіях переписаної функції немає інструкції `await` після ключового слова `return`, хоча це теж було б вірно. Повернене з асинхронної функції значення неявно обгортається у {{jsxref("Promise.resolve")}} — якщо саме значення не є промісом (як це є в прикладах).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Посібник [Функції](/uk/docs/Web/JavaScript/Guide/Functions)
- Посібник [Використання промісів](/uk/docs/Web/JavaScript/Guide/Using_promises)
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [Вираз `async function`](/uk/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Декорування асинхронних функцій у JavaScript](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) на innolitics.com (2016)
