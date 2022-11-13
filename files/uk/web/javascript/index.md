---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Learn
  - "l10n:priority"
translation_of: Web/JavaScript
---

{{JsSidebar}}

**JavaScript** (**JS**) – це невибаглива до ресурсів мова програмування з {{Glossary("First-class Function", "функціями першого класу")}}, код якої інтерпретується, або компілюється ["на льоту"](https://uk.wikipedia.org/wiki/JIT-%D0%BA%D0%BE%D0%BC%D0%BF%D1%96%D0%BB%D1%8F%D1%86%D1%96%D1%8F). Хоча JavaScript насамперед відома як скриптова мова для вебсторінок, вона також використовується у [багатьох небраузерних середовищах](https://uk.wikipedia.org/wiki/JavaScript#%D0%97%D0%B0%D1%81%D1%82%D0%BE%D1%81%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F), як от: {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) та [Adobe Acrobat](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript — це [прототипна](/uk/docs/Glossary/Prototype-based_programming), [однопотокова](/uk/docs/Glossary/Thread) [динамічна](/uk/docs/Glossary/Dynamic_typing) мова, що має декілька парадигм та підтримує об'єктноорієнтований та декларативні (зокрема функційне програмування) стилі. Більше [про JavaScript](/uk/docs/Web/JavaScript/About_JavaScript).

Цей розділ присвячено саме мові JavaScript, він не стосується тонкощів роботи з вебсторінками чи іншими середовищами виконання JavaScript. Інформацію стосовно конкретних {{Glossary("API")}} вебсторінок дивіться у [веб API](/uk/docs/Web/API) та {{Glossary("DOM")}}.

Стандартами для JavaScript є [Специфікація мови ECMAScript (англ.)](https://tc39.es/ecma262/) та [Специфікація API ECMAScript для інтернаціоналізації (англ.)](https://tc39.es/ecma402/) (ECMA-402). Щойно один браузер реалізовує певну функціональність, ми намагаємося її задокументувати. Це означає, що якщо певні [пропозиції нової функціональності ECMAScript](https://github.com/tc39/proposals) уже реалізовані у браузерах, то документація та приклади у статтях на MDN можуть використовувати деякі з цих нових особливостей. У більшості випадків таке трапляється між [стадіями (англ.)](https://tc39.es/process-document/) 3 та 4, а крім того – зазвичай до офіційного оприлюднення специфікації.

Не плутайте JavaScript з [мовою програмування Java](https://uk.wikipedia.org/wiki/Java). Так, обидві мови, «Java» та «JavaScript», є товарними знаками чи зареєстрованими торговими марками Oracle у Сполучених Штатах та інших країнах. Проте ці дві мови програмування мають великі розбіжності у синтаксисі, семантиці та галузях застосування.

> **Callout:** **Хочете стати фронтенд розробником?**
>
> Ми зібрали докупи курс, що містить всю необхідну інформацію, яка знадобиться вам
> для роботи над досягненням цієї мети
>
> [**Почати**](/uk/docs/Learn/Front-end_web_developer)

## Посібники

Вчіться програмувати на JavaScript за допомогою наших настанов та посібників.

### Для абсолютних початківців

Якщо є бажання вчити JavaScript, але немає жодного попереднього досвіду роботи з JavaScript чи програмування загалом — зверніться до [тематики "JavaScript" у нашому навчальному розділі](/uk/docs/Learn/JavaScript). Повний список модулів, доступних там, має такий вигляд:

- [Перші кроки з JavaScript](/uk/docs/Learn/JavaScript/First_steps)
  - : Відповідає на деякі базові питання, як-от: "що таке JavaScript?", "на що вона схожа?" та "що вона може?"; включно з обговоренням ключових особливостей JavaScript, таких як: змінні, рядки, числа та масиви.
- [Будівельні блоки JavaScript](/uk/docs/Learn/JavaScript/Building_blocks)
  - : Продовжує пояснення основних фундаментальних концепцій JavaScript, звертаючи увагу на загальновживані блоки коду, як-от: умовні інструкції, цикли, функції та події.
- [Вступ до об'єктів у JavaScript](/uk/docs/Learn/JavaScript/Objects)
  - : Важливо розуміти об'єктноорієнтовану природу JavaScript, якщо ви хочете далі пізнавати цю мову програмування і писати ефективніший код. Щоб допомогти вам у цьому, ми підготували цей модуль.
- [Асинхронність у JavaScript](/uk/docs/Learn/JavaScript/Asynchronous)
  - : Описує асинхронність у JavaScript, чому вона важлива, і як її можна застосовувати для ефективної обробки операцій, що можуть блокувати виконання програми (наприклад, запит ресурсів від сервера).
- [Клієнтські веб-API](/uk/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Досліджує, що собою являють ці інтерфейси, і як використовувати деякі з найбільш поширених веб-API, з якими доводиться мати справу при розробці.

### Настанови з JavaScript

- [Настанови з JavaScript](/uk/docs/Web/JavaScript/Guide)
  - : Значно деталізованіші настанови з мови JavaScript, корисні для тих, хто вже має досвід програмування на JavaScript чи іншій мові.

### Середній рівень

- [Розуміння клієнтських фреймворків JavaScript](/uk/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript фреймворки – неодмінна частина сучасної клієнтської веброзробки, що забезпечує розробників перевіреними інструментами для побудови масштабованих інтерактивних вебзастосунків. Цей модуль надає деякі фундаментальні знання про те, як влаштовані клієнтські фреймворки, і як вони вписуються в ваш інструментарій, перед тим як розглянути найбільш популярні із них на сьогодні у наступних посібниках.
- [Огляд мови JavaScript](/uk/docs/Web/JavaScript/Language_Overview)
  - : Огляд базових мови та семантики JavaScript для тих, хто прийшов з інших мов програмування і хоче різко набрати темп вивчення.
- [Структури даних у JavaScript](/uk/docs/Web/JavaScript/Data_structures)
  - : Огляд наявних структур даних у JavaScript.
- [Порівняння на схожість і однаковість](/uk/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript надає три різних способи для порівняння значень: строга рівність через використання `===`, вільна рівність з `==` та метод {{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Замикання](/uk/docs/Web/JavaScript/Closures)
  - : Замикання — це сполучення функції та лексичного середовища, всередині якого ця функція була оголошена.

### Поглиблене вивчення

- [Наслідування та ланцюжок прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Роз'яснення прототипного наслідування (яке часто недооцінюють та невірно розуміють).
- [Суворий режим](/uk/docs/Web/JavaScript/Reference/Strict_mode)
  - : Суворий режим встановлює неможливість використання змінної до її ініціалізації. Це обмежений варіант мови, який було створено для пришвидшення виконання програми та спрощення процесу зневадження.
- [Типізовані масиви JavaScript](/uk/docs/Web/JavaScript/Typed_arrays)
  - : Типізовані масиви JavaScript надають інструмент для доступу до необроблених бінарних даних.
- [Керування пам'яттю](/uk/docs/Web/JavaScript/Memory_Management)
  - : Життєвий цикл пам'яті та збирання сміття у JavaScript.
- [Модель багатопотоковості та цикл подій](/uk/docs/Web/JavaScript/EventLoop)
  - : JavaScript має модель багатопотоковості, засновану на "циклі подій".

## Довідник

Перегляньте повний [довідник JavaScript](/uk/docs/Web/JavaScript/Reference).

- [Стандартні об'єкти](/uk/docs/Web/JavaScript/Reference/Global_Objects)
  - : Докладно про стандартні вбудовані об'єкти: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, та інші.
- [Вирази та оператори](/uk/docs/Web/JavaScript/Reference/Operators)
  - : Дізнайтеся більше про поведінку операторів мови JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, [пріоритет операторів](/uk/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) та інші.
- [Інструкції та оголошення](/uk/docs/Web/JavaScript/Reference/Statements)
  - : Дізнайтеся, як працюють {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} та інші інструкції й ключові слова JavaScript.
- [Функції](/uk/docs/Web/JavaScript/Reference/Functions)
  - : Дізнайтеся, як працювати з функціями у JavaScript для створення ваших застосунків.

## Інструменти і ресурси

Допоміжні інструменти, що допомагають писати та зневаджувати код на **JavaScript**.

- [Інструменти розробника Firefox (англ.)](<[/uk/docs/Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)>)
  - : [Вебконсоль (англ.)](<[/uk/docs/Tools/Web_Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)>), [Профайлер JavaScript (англ.)](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html), [Налагоджувач (англ.)](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) та інші.
- [Оболонка JavaScript](/uk/docs/Web/JavaScript/JavaScript_technologies_overview#obolonky)
  - : JavaScript-оболонка, що дозволяє швидко перевіряти фрагменти коду на JavaScript.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Прекрасний ресурс для веброзробників, що прагнуть навчатися. Вивчайте JavaScript в інтерактивному середовищі, з короткими лекціями та інтерактивними тестами, які дають оцінку в автоматичному режимі. Перші 40 уроків безкоштовні, а повний курс доступний за невелику одноразову плату.
- [TogetherJS](https://togetherjs.com/)
  - : Проста взаємодопомога. Після додавання TogetherJS до сайту його користувачі зможуть допомагати один одному на вебсайті у реальному часі!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Запитання на Stack Overflow з міткою "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Редагуйте JavaScript, CSS і HTML – та одразу переглядайте результати. Залучайте зовнішні ресурси та співпрацюйте зі своєю командою онлайн.
- [Plunker](https://plnkr.co/)
  - : Plunker – це онлайн-спільнота для створення, співпраці та обміну вашими ідеями для веброзробки. Редагуйте ваші JavaScript-, CSS- і HTML-файли – та одразу переглядайте результати й файлову структуру.
- [JSBin](https://jsbin.com/)
  - : JS Bin – це інструмент з відкритим кодом для спільного зневадження для веброзробки.
- [Codepen](https://codepen.io/)
  - : Codepen – це інший інструмент для колаборативної веброзробки, що використовується як майданчик для розміщення коду і перегляду результатів його роботи в реальному часі.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz – це іще один онлайн-майданчик та інструмент зневадження, який може розміщувати та розгортати повностекові застосунки із використанням React, Angular тощо.
- [RunJS](https://runjs.app/)
  - : RunJS – це комп'ютерна версія ігрового майданчика/чернетки для роботи з JavaScript, яка надає можливість виконувати код, із доступом до API браузера та Node.
