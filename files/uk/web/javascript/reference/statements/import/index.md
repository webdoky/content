---
title: import
slug: Web/JavaScript/Reference/Statements/import
page-type: javascript-statement
browser-compat: javascript.statements.import
---

{{jsSidebar("Statements")}}

Оголошення статичного імпорту **`import`** застосовуються для імпорту незмінних живих {{Glossary("binding", "зв'язувань")}}, які, своєю чергою, [експортуються](/uk/docs/Web/JavaScript/Reference/Statements/export) іншим модулем. Імпортовані зв'язування називаються _живими_, оскільки вони оновлюються модулем, який їх експортує, проте їм не можуть бути присвоєні значення в модулі, що їх імпортує.

Для того, аби отримати змогу вжити оголошення `import` у файлі з вихідним кодом, цей файл повинен бути інтерпретований середовищем виконання як [модуль](/uk/docs/Web/JavaScript/Guide/Modules). В HTML цього можна досягти шляхом додавання `type="module"` до тега {{HTMLElement("script")}}. Модулі автоматично інтерпретуються в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode).

Також існує подібний до функції динамічний [`import()`](/uk/docs/Web/JavaScript/Reference/Operators/import), який не вимагає наявності атрибута `type="module"` на скриптах.

## Синтаксис

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Назва, що вказує на усталений експорт із модуля. Повинна бути дійсним ідентифікатором JavaScript.
- `module-name`
  - : Модуль, з якого відбувається імпорт. Дозволяються лише літерали з одинарними та подвійними лапками. Обчислення вказівника залежить від середовища. Більшість середовищ узгоджені з браузерами та розв'язують специфікатори як URL, відносні щодо URL поточного модуля (дивіться [`import.meta.url`](/uk/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, пучкарі та інші небраузерні середовища нерідко визначають власні додаткові можливості, тож слід шукати їхню власну документацію, аби дізнатися конкретні правила. Також більше інформації можна знайти в розділі [розв'язання специфікаторів модулів](#rozviazannia-spetsyfikatoriv-moduliv).
- `name`
  - : Назва об'єкта модуля, яку під час звертання до імпортів буде вжито як свого роду простір імен. Повинна бути дійсним ідентифікатором JavaScript.
- `exportN`
  - : Назви експортованих значень до імпорту. Така назва може бути як ідентифікатором, так і рядковим літералом — залежить від того, що саме модуль `module-name` оголосив до експорту. Якщо це рядковий літерал — йому слід призначити псевдонім, який уже буде дійсним ідентифікатором.
- `aliasN`
  - : Псевдонім, що вказує на іменовані імпорти. Має бути дійсним ідентифікатором JavaScript.

Після `"module-name"` може писатися набір [атрибутів імпорту](/uk/docs/Web/JavaScript/Reference/Statements/import/with), що починається з ключового слова `with`.

## Опис

Оголошення `import` можуть знаходитися лише всередині модулів, і лише на найвищому рівні (тобто не всередині блоків, функцій тощо). Якщо оголошення `import` зустрічається у немодульному контексті (як от у скриптових файлах, `eval`, `new Function`, які після розбору мають оформитися у "скрипт" чи "функцію") — викидається помилка `SyntaxError`. Аби завантажити модуль у немодульному контексті — слід використовувати [динамічний імпорт](/uk/docs/Web/JavaScript/Reference/Operators/import).

Жодне з імпортованих зв'язувань не може перебувати в тій же області видимості, що й будь-яке інше оголошення, включно з {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} і оголошенням `import`.

Оголошення `import` сконструйовані таким чином, щоб бути синтаксично жорсткими (зокрема: допускаються лише літеральні рядкові вказівники, і лише на верхньому рівні — адже всі зв'язування є ідентифікаторами). Це дає можливість статично аналізувати модулі та синхронно їх компонувати, іще до їхнього виконання. Це — ключова особливість, необхідна аби зробити модулі асинхронними за природою, що дає змогу працювати функціональності штибу [`await` верхнього рівня](/uk/docs/Web/JavaScript/Guide/Modules#await-verkhnoho-rivnia).

### Форми оголошень імпорту

Існує чотири форми оголошень `import`:

- [Іменований імпорт](#imenovanyi-import): `import { export1, export2 } from "module-name";`
- [Усталений імпорт](#ustalenyi-import): `import defaultExport from "module-name";`
- [Імпорт простору імен](#import-prostoru-imen): `import * as name from "module-name";`
- [Імпорт заради побічних ефектів](#importuvannia-modulia-lyshe-zarady-yoho-pobichnykh-efektiv): `import "module-name";`

Нижче наведено приклади для пояснення синтаксису.

#### Іменований імпорт

Нехай дано певне значення під назвою `myExport`, експортоване з модуля `my-module` або явно за допомогою інструкції {{jsxref("Statements/export", "export")}}, або неявно – як `export * from "another.js"`. Такий код додасть значення `myExport` у поточну область.

```js
import { myExport } from "/modules/my-module.js";
```

З одного й того ж модуля можна імпортувати декілька імен.

```js
import { foo, bar } from "/modules/my-module.js";
```

Можна перейменувати експорт під час імпортування його значення. Наприклад, цей код додає значення `shortName` у поточну область видимості.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Модуль також може експортувати рядковий літерал, який не є дійсним ідентифікатором. В цьому випадку знадобиться звертатися до нього за псевдонімом, аби мати змогу користуватися ним у поточному модулі.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> Інструкція `import { x, y } from "mod"` не є еквівалентною до `import defaultExport from "mod"` і потім деструктурування `x` та `y` із `defaultExport`. Усталений та іменований імпорт — це різні синтаксичні конструкції модулів JavaScript.

#### Усталений імпорт

Усталений експорт слід імпортувати за допомогою відповідного йому синтаксису усталеного імпорту. Найпростіший варіант безпосередньо імпортує усталене значення:

```js
import myDefault from "/modules/my-module.js";
```

Оскільки усталений експорт не вказує імені явно, можна призначити ідентифікаторові будь-яке ім'я, за бажанням.

Також можливо вказувати усталений імпорт разом з імпортом простору імен чи іменованими імпортами. Проте в таких випадках усталений імпорт слід вказувати першим. Наприклад:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default та myDefault вказують на одне й те ж зв'язування
```

...або ж:

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Імпортування значення, яке називається `default`, має ефект, ідентичний усталеному імпортові. Йому необхідно призначати псевдонім, оскільки `default` — це зарезервоване слово.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Імпорт простору імен

Наступний код вставляє `myModule`, який містить всі значення, експортовані з модуля `/modules/my-module.js`, у поточну область.

```js
import * as myModule from "/modules/my-module.js";
```

В цьому випадку `myModule` є об'єктом _простору імен_, який вміщує всі експортовані значення як звичайні властивості. Наприклад, якщо імпортований вище модуль містить експорт `doAllTheAmazingThings()`, його можна було б викликати таким чином:

```js
myModule.doAllTheAmazingThings();
```

Значення `myModule` — це [запечатаний](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) об'єкт, [чиїм прототипом є `null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty). Усталений експорт доступний за ключем, що зветься `default`. Більше інформації про це – в розділі [об'єкта простору імен модуля](/uk/docs/Web/JavaScript/Reference/Operators/import#obiekt-prostoru-imen-modulia).

> [!NOTE]
> JavaScript не підтримує довільні імпорти, як от `import * from "module-name"`, через високу ймовірність конфліктів імен.

#### Імпортування модуля лише заради його побічних ефектів

Імпорт цілого модуля лише заради його побічних ефектів, без імпортування чогось конкретного. Це запускає глобальний код модуля, проте не імпортує жодних значень.

```js
import "/modules/my-module.js";
```

Такий підхід часто використовується для [поліфілів](/uk/docs/Glossary/Polyfill), які модифікують глобальні змінні.

### Підняття

Оголошення імпорту – [піднімаються](/uk/docs/Glossary/Hoisting). В цьому випадку це означає, що імпортовані значення доступні в коді модуля навіть до рядка, що їх оголошує, і що побічні ефекти імпортованого модуля виробляються до запуску решти коду поточного модуля.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings імпортується на наступному рядку

import * as myModule from "/modules/my-module.js";
```

### Розв'язання специфікаторів модулів

Специфікація ECMAScript не визначає того, як специфікатори модулів повинні розв'язуватись, і покладає це на середовище виконання (наприклад, браузери, Node.js, Deno). Логіка браузерів задана [специфікацією HTML](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier), і вона стала _фактичною_ базою для реалізацій у всіх інших середовищах.
Поширене визнання специфікаторів трьох типів, реалізованих специфікацією HTML, Node та багатьма іншими:

- _Відносні специфікатори_, що починаються з `/`, `./` або `../`, розв'язуються відносно URL поточного модуля.
- _Абсолютні специфікатори_, що є валідними URL, розв'язуються як є.
- _Голі специфікатори_ не належать до двох попередніх типів.
  Найпомітніший підступ з відносними специфікаторами, особливо для тих, хто знайомий з поняттями [CommonJS](https://wiki.commonjs.org/wiki/CommonJS), полягає в тому, що браузери забороняють, аби один специфікатор неявно розв'язувався до кількох потенційних кандидатів. У CommonJS, якщо є `main.js` and `utils/index.js`, то всі три записи нижче імпортують "усталений експорт" з `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Пропущено назву файлу "index.js"
const utils = require("./utils/index"); // Пропущено лише розширення ".js"
const utils = require("./utils/index.js"); // Найбільш явна форма
```

У Вебі це затратно, тому що якщо написати `import x from "./utils"`, то браузер повинен надіслати запити щодо `utils`, `utils/index.js`, `utils.js` і, можливо, багатьох інших URL, поки не знайде модуль, який можна імпортувати. Таким чином, у специфікації HTML специфікатор усталено може бути лише URL, що розв'язується відносно URL поточного модуля. Не можна пропустити розширення файлу чи ім'я файлу `index.js`. Така логіка була успадкована реалізацією ESM у Node, але не є частиною специфікації ECMAScript.
Зверніть увагу, що це не означає, що `import x from "./utils"` у Вебі ніколи не працює. Браузер все одно надсилає запит за URL, і якщо сервер може відповісти коректним вмістом, то такий імпорт спрацює. Це вимагає того, щоб сервер мав реалізацію певної власної логіки розв'язання, тому що зазвичай запити без розширень вважаються запитами на файли HTML.
Абсолютні специфікатори можуть бути [URL](/uk/docs/Web/URI) будь-якого роду, що розв'язуються до вихідного коду, який можна імпортувати. Перш за все:

- [URL HTTP](/uk/docs/Web/HTTP) завжди підтримуються у Вебі, оскільки більшість сценаріїв зразу мають URL HTTP. Вони нативно підтримуються Deno (який з самого початку заснував усю свою систему модулів на URL HTTP), але мають лише експериментальну підтримку в Node – завдяки [кастомним завантажувачам HTTPS](https://nodejs.org/api/module.html#import-from-https).
- URL `file:` підтримуються багатьма небраузерними середовищами виконання, наприклад, Node, оскільки сценарії зразу мають URL `file:`, але не підтримуються браузерами через безпекові міркування.
- [URL даних](/uk/docs/Web/URI/Schemes/data) підтримуються багатьма середовищами виконання, серед яких браузери, Node, Deno тощо. Вони корисні для вбудовування маленьких модулів безпосередньо у вихідний код. Підтримуються [типи MIME](/uk/docs/Web/HTTP/MIME_types), що позначають вихідний код, який можна імпортувати, як то `text/javascript` для JavaScript, `application/json` для модулів JSON, `application/wasm` для модулів WebAssembly тощо. (Вони можуть все ж потребувати [атрибутів імпортування](/uk/docs/Web/JavaScript/Reference/Statements/import/with).)

  ```js
  // URL HTTP
  import x from "https://example.com/x.js";
  // URL даних
  import x from "data:text/javascript,export default 42;";
  // URL даних для модулів JSON
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  URL даних `text/javascript` тлумачаться як модулі, але не можуть скористатися відносними імпортами, оскільки схема URL `data:` не є ієрархічною. Тобто `import x from "data:text/javascript,import y from './y.js';"` викине помилку, адже відносний специфікатор `'./y.js'` не може бути розв'язаний.

- [URL `node:`](https://nodejs.org/api/esm.html#node-imports) розв'язуються до вбудованих модулів Node.js. Вони підтримуються Node та іншими середовищами виконання, що заявляють про сумісність з Node, як от Bun.
  Голі специфікатори, популяризовані CommonJS, розв'язуються в директорії `node_modules`. Наприклад, якщо є `import x from "foo"`, то середовище виконання шукає пакет `foo` всередині будь-якої з директорій `node_modules` у батьківських щодо поточного модуля директоріях. Така логіка може відтворюватися в браузерах за допомогою [карт імпортування](/uk/docs/Web/JavaScript/Guide/Modules#import-moduliv-za-dopomohoiu-kart-importuvannia), які також дають змогу налаштувати розв'язання в інші способи.
  Алгоритм розв'язання модуля також можна виконати програмно, скориставшись функцією [`import.meta.resolve`](/uk/docs/Web/JavaScript/Reference/Operators/import.meta/resolve), визначеною специфікацією HTML.

## Приклади

### Стандартний імпорт

У цьому прикладі створюється модуль, придатний для повторного використання, який експортує функцію для отримання всіх простих чисел всередині вказаного діапазону.

```js
// getPrimes.js
/**
 * Повертає список простих чисел, що менші за передане `max`.
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

```js
import { getPrimes } from "/modules/getPrimes.js";

console.log(getPrimes(10)); // [2, 3, 5, 7]
```

### Імпортовані значення можуть модифікуватися лише експортером

Імпортований ідентифікатор є _живим зв'язуванням_, оскільки модуль, що експортує його, може також присвоїти йому нове значення, і тоді імпортоване значення зміниться. Проте модуль, що імпортує його, присвоїти йому нове значення не може. Попри це, будь-який модуль, що користується імпортованим об'єктом, може змінювати його, і таке змінене значення буде спостерігатися в усіх модулях, що імпортують той самий об'єкт.

Крім цього, нове значення можна спостерігати крізь [об'єкт простору імен модуля](/uk/docs/Web/JavaScript/Reference/Operators/import#obiekt-prostoru-imen-modulia).

```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2; my-module оновив своє значення
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // Приймаючий модуль може лише читати значення, проте не перезаписувати його.
}, 1000);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Statements/export", "export")}}
- [`import()`](/uk/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/uk/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Атрибути імпорту](/uk/docs/Web/JavaScript/Reference/Statements/import/with)
- [Попередній огляд модулів ES6 та інше, з ES2015, ES2016 і далі](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) на blogs.windows.com (2016)
- [Заглиблення в ES6: Модулі](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) на hacks.mozilla.org (2015)
- [Модулі ES: Занурення в малюнках](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) на hacks.mozilla.org (2018)
- [Дослідження JS, Г. 16: Модулі](https://exploringjs.com/es6/ch_modules.html) від доктора Акселя Раушмаєра
- [Експорт та імпорт](https://uk.javascript.info/import-export) на uk.javascript.info
