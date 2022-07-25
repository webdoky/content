---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Statement
  - dynamic import
  - import
browser-compat: javascript.statements.import
---
{{jsSidebar("Statements")}}

Оголошення статичного імпорту **`import`** застосовуються для імпорту незмінних живих прив'язок, які, своєю чергою, [експортуються](/en-US/docs/Web/JavaScript/Reference/Statements/export) іншим модулем.

Імпортовані модулі знаходяться у {{JSxRef("Strict_mode","суворому режимі")}} незалежно від того, чи було їх явно оголошено такими. Інструкцію `import` не можна використовувати всередині вбудованих скриптів, якщо такий скрипт не містить атрибута `type="module"`. Імпортовані прив'язки називаються "живими", оскільки вони оновлюються модулем, який їх експортує.

Також існує подібний до функції динамічний [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import), який не вимагає наявності атрибута `type="module"` на скриптах.

Зворотна сумісність забезпечується за допомогою атрибута `nomodule` на тезі {{HTMLElement("script")}}.

## Синтаксис

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Назва, що вказує на усталений експорт із модуля. Повинна бути дійсним ідентифікатором JavaScript.
- `module-name`
  - : Модуль, з якого відбувається імпорт. Обчислення вказівника залежить від середовища. Часто це відносний чи абсолютний URL до файлу `.js`, що містить модуль. В середовищі Node імпорти без розширення часто вказують на пакунки у `node_modules`. Деякі пакувальні програми можуть допускати імпортування файлів без розширення — краще перевіряти налаштування середовища. Дозволяються лише рядки, виділені одинарними чи подвійними лапками.
- `name`
  - : Назва об'єкта модуля, який під час звертання до імпортів буде вжито як свого роду простір імен. Повинен бути дійсним ідентифікатором JavaScript.
- `exportN`
  - : Назви експортованих значень до імпорту. Така назва може бути як ідентифікатором, так і рядковим літералом — залежить від того, що саме модуль `module-name` оголосив до експорту. Якщо це рядковий літерал — йому слід призначити псевдонім, який уже буде дійсним ідентифікатором.
- `aliasN`
  - : Псевдонім, що вказує на іменовані імпорти. Має бути дійсним ідентифікатором JavaScript.

## Опис

Параметр `name` позначає ім'я "модульного об'єкта", що буде вжито як свого роду простір імен, для звертання до експортованих значень. Параметри `export` вказують окремі названі експортні об'єкти, в той час, як синтаксис `import * as name` імпортує їх всіх. Нижче буде наведено приклади уточнення цього синтаксису.

Оголошення `import` допускаються лише нагорі модуля, і лише у модульних файлах. Якщо оголошення `import` зустрічається у немодульному контексті (як от у скриптових файлах, `eval`, `new Function`, які після розбору мають оформитися у "скрипт" чи "функцію") — викидається помилка `SyntaxError`. Аби завантажити модуль у немодульному контексті — слід використовувати [динамічний імпорт](/en-US/docs/Web/JavaScript/Reference/Operators/import).

Оголошення `import` сконструйовані таким чином, щоб бути синтаксично жорсткими (зокрема: допускаються лише літеральні рядкові вказівники, і лише на верхньому рівні, і за умови, що всі прив'язки являються ідентифікаторами). Це дає можливість статично аналізувати модулі та синхронно їх компонувати, іще до їхнього обчислення. Це — ключова особливість, необхідна аби зробити модулі асинхронними по своїй природі, що забезпечує такий функціонал, як [`await` верхнього рівня](/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await).

### Імпорт всього вмісту модуля

Отак до поточної області видимості вставляється `myModule`, що містить увесь експорт із модуля, розміщеного в файлі `/modules/my-module.js`.

```js
import * as myModule from '/modules/my-module.js';
```

В цьому випадку доступ до експорту означає використання назви модуля (в цьому випадку "myModule") як простору імен. Наприклад, якщо імпортований вище модуль містить експорт функції `doAllTheAmazingThings()`, її можна буде викликати таким чином:

```js
myModule.doAllTheAmazingThings();
```

`myModule` — це об'єкт, прототип якого дорівнює `null`, і його усталений експорт буде доступним за ключем `default` (усталено).

### Імпорт поодинокого експорту із модуля

Припустімо, є об'єкт чи значення під назвою `myExport`, експортоване зі модуля `my-module` або неявно (оскільки експортується весь модуль, наприклад — конструкцією `export * from 'another.js'`), або явно (за допомогою інструкції {{JSxRef("Statements/export", "export")}}). Наведений далі код вносить `myExport` у поточну область видимості.

```js
import {myExport} from '/modules/my-module.js';
```

### Імпортування декількох експортів із модуля

Цей код вставляє обидва значення `foo` і `bar` у поточну область видимості.

```js
import {foo, bar} from '/modules/my-module.js';
```

### Імпортування експорту зі зручнішим псевдонімом

Можна перейменувати експорт під час імпортування його значення. Наприклад, цей код вставляє значення `shortName` у поточну область видимості.

```js
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
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

### Перейменування кількох експортів під час імпортування

Можна імпортувати декілька експортів з модуля, зі зручними псевдонімами.

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
```

### Імпортування модуля лише заради його побічних ефектів

Можна імпортувати цілий модуль лише зарази його побічних ефектів, не імпортуючи при цьому нічого. Так запускається глобальний код модуля, хоча й не імпортується жодне значення.

```js
import '/modules/my-module.js';
```

Якщо у проєкті застосовуються пакунки, які експортують ESM — їх також можна імпортувати лише заради побічних ефектів. Таким чином запуститься лише код файлу точки входу пакунка (а також будь-яких файлів, які ним імпортуються).

### Імпортування усталених значень

Допускається мати усталений {{JSxRef("Statements/export", "export")}} (це може бути об'єкт, функція, клас тощо). В такому разі інструкція `import` може вживатися для імпорту таких усталених значень.

У найпростішому вигляді імпортується безпосередньо усталений експорт:

```js
import myDefault from '/modules/my-module.js';
```

Також можна використовувати синтаксис роботи з усталеними значеннями зі наведеними вище способами (імпортами просторів імен або іменованими імпортами). В таких випадках усталений імпорт слід оголошувати першим. Наприклад:

```js
import myDefault, * as myModule from '/modules/my-module.js';
// myModule використовується як простір імен
```

or

```js
import myDefault, {foo, bar} from '/modules/my-module.js';
// конкретні, іменовані імпорти
```

Імпортування значення, яке називається `default`, має ефект, ідентичний усталеному імпортові. Йому необхідно призначати псевдонім, оскільки `default` — це зарезервоване слово.

```js
import { default as myDefault } from '/modules/my-module.js';
```

## Приклади

### Стандартний імпорт

Наведений нижче код ілюструє, як імпортувати файли зі стороннього модуля для допомоги в обробці JSON AJAX-запиту.

#### Модуль: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

#### Основна програма: main.js

```js
import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com',
    (data) => { doSomethingUseful(data); });
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{JSxRef("Statements/export", "export")}}
- [Динамічні імпорти](/en-US/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- Лімін Зу, Браян Терлсон і команда Microsoft Edge:
  [Попередній огляд модулів ES6 та інше, з ES2015, ES2016 і далі (англ.)](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- Допис із хаками від Джейсона Орендорффа: [Поглиблено про ES6: Модулі (англ.)](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- Допис із хаками від Лін Кларк: [Модулі ES: поглиблено і з малюнками (англ.)](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- Книга Акселя Раушмаєра: ["Дослідження JS: Модулі" (англ.)](https://exploringjs.com/es6/ch_modules.html)
- Сучасний підручник з JavaScript (uk.javascript.info): [Експорт та імпорт](https://uk.javascript.info/import-export)
