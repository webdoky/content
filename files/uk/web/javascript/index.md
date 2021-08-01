---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Лендінг
  - Вчити
  - l10n:priority
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (**JS**) &mdash; це невибаглива до ресурсів мова програмування з {{Glossary("First-class Function", "функціями першого класу")}}, код якої інтерпретується, або компілюється ["на льоту"](https://en.wikipedia.org/wiki/Just-in-time_compilation). Хоча JavaScript насамперед відома як скриптова мова для вебсторінок, вона також використовується у [багатьох небраузерних середовищах](https://en.wikipedia.org/wiki/JavaScript#Other_usage), як от: {{Glossary("Node.js")}}, [Apache CouchDB](https://couchdb.apache.org/) та [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html). JavaScript — це {{Glossary("Prototype-based programming", "прототип-орієнтована")}}, однопотокова динамічна мова, що має декілька парадигм та підтримує об'єктноорієнтований, та декларативні (зокрема функційне програмування) стилі. Більше [про JavaScript](/en-US/docs/Web/JavaScript/About_JavaScript).

Цей розділ присвячено саме мові JavaScript, і він не торкається тонкощів роботи з вебсторінками, чи іншими оточенням для виконання JavaScript. Конкретну інформацію стосовно {{Glossary("API")}} вебсторінок дивіться, будь ласка, [веб API](/en-US/docs/Web/API) та {{Glossary("DOM")}}.

Стандартами для JavaScript є [Специфікація мови ECMAScript](https://tc39.es/ecma262/) та [Специфікація API ECMAScript для Інтернаціоналізації](https://tc39.es/ecma402/) (ECMA-402). Дана JavaScript документація заснована на останніх чорнових версіях ECMA-262 та ECMA-402. І у разі, якщо деякі [пропозиції нового ECMAScript функціоналу](https://github.com/tc39/proposals) уже реалізовано у браузерах, документація та приклади у статтях на MDN можуть використовувати деякі з цих нових особливостей.

Не плутайте JavaScript з [мовою програмування Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>). Так, обидві мови "Java" та "JavaScript" є товарними знаками чи зареєстрованими торговими марками Oracle у Сполучених Штатах та інших країнах. Проте ці дві мови програмування мають великі розбіжності у синтаксисі, семантиці та областях застосування.

> **Callout:** **Хочете стати фронтенд розробником?**
>
> Ми зібрали докупи курс, що містить всю необхідну інформацію, що знадобиться вам
> для роботи над досягненням цієї мети
>
> [**Почати**](/en-US/docs/Learn/Front-end_web_developer)

## Посібники

Вчіться програмувати на JavaScript з нашими настановами та посібниками.

### Для абсолютних початківців

Зверніться до [тематики "JavaScript" у нашому навчальному розділі](/en-US/docs/Learn/JavaScript), якщо ви маєте бажання вчити JavaScript, але не маєте попереднього досвіду роботи з JavaScript чи програмування загалом. Повний список модулів, доступних там, виглядає так:

- [Перші кроки з JavaScript](/en-US/docs/Learn/JavaScript/First_steps)
  - : Відповідає на деякі базові питання, як-от: "що таке JavaScript?", "на що вона схожа?", та "що вона може?"; включно з обговоренням ключових особливостей JavaScript, таких як: змінні, стрічки, числа та масиви.
- [Будівельні блоки JavaScript](/en-US/docs/Learn/JavaScript/Building_blocks)
  - : Продовжує пояснення основних фундаментальних концепцій JavaScript, звертаючи увагу на загальновживані блоки коду, як-от: умовні інструкції, цикли, функції та події.
- [Вступ до об'єктів у JavaScript](/en-US/docs/Learn/JavaScript/Objects)
  - : Важливо розуміти об'єктноорієнтовану природу JavaScript, якщо ви хочете далі пізнавати цю мову програмування, і писати ефективніший код. Щоб допомогти вам у цьому, ми підготували цей модуль.
- [Асинхронність у JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
  - : Описує асинхронність у JavaScript, чому це важливо, і як її можна застосовувати для ефективної обробки операцій, що можуть блокувати виконання програми (наприклад, запит ресурсів від сервера).
- [Клієнтські веб-API](/en-US/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Досліджує, що собою являють ці інтерфейси, і як використовувати деякі з найбільш поширених веб-API, з якими вам доведеться мати справу при розробці.

  ### Настанови з JavaScript

- [Настанови з JavaScript](/en-US/docs/Web/JavaScript/Guide)
  - : Значно деталізованіші настанови з мови JavaScript, корисні для тих, хто вже має досвід програмування на JavaScript, чи іншій мові.

  ### Середній рівень

  - [Розуміння клієнтських фреймворків JavaScript](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : JavaScript фреймвоки &mdash; неодмінна частина сучасної клієнтської веброзробки, що забезпечує розробників перевіреними інструментами для побудови масштабованих інтерактивних вебзастосунків. Цей модуль надає деякі фундаментальні базисні знання про те, як працюють клієнтські фреймворки, і як вони вписуються в ваш інструментарій, перед тим як  розглянути найбільш популярні із них на сьогодні у наступних посібниках.
- [Повторний вступ у JavaScript](/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : Загальний огляд, націлений на тих, хто _вважає_, що знає JavaScript.
- [Структури даних у JavaScript](/en-US/docs/Web/JavaScript/Data_structures)
  - : Огляд наявних структур даних у JavaScript.
- [Порівняння на схожість і однаковість](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript надає три різних способи для порівняння значень: строга рівність через використання `===`, вільна рівність з `==`, та метод {{jsxref("Global_Objects/Object/is", "Object.is()")}}.
- [Замикання](/en-US/docs/Web/JavaScript/Closures)
  - : Замикання являє собою сполучення функції та лексичного оточення, всередині якого ця функція була об'явлена.

  ### Передовий рівень

- [Наслідування та ланцюжок прототипів](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Роз'яснення прототипного наслідування (яке часто недооцінюють та невірно розуміють).
- [Суворий режим](/en-US/docs/Web/JavaScript/Reference/Strict_mode)
  - : Суворий режим встановлює неможливість використання змінної до її ініціалізації. Це обмежений варіант ECMAScript 5, який було створено для поліпшення швидкості виконання програми, та спрощення процесу зневадження.
- [Типізовані масиви JavaScript](/en-US/docs/Web/JavaScript/Typed_arrays)
  - : Типізовані масиви JavaScript надають інструмент для доступу до необроблених бінарних даних.
- [Управління пам'яттю](/en-US/docs/Web/JavaScript/Memory_Management)
  - : Життєвий цикл пам'яті, та збирання сміття у JavaScript.
- [Модель багатопотоковості, та Цикл подій](/en-US/docs/Web/JavaScript/EventLoop)
  - : JavaScript має модель багатопотоковості, засновану на "циклі подій".

  ## Довідник

Перегляньте повний [довідник JavaScript](/en-US/docs/Web/JavaScript/Reference).

- [Стандартні об'єкти](/en-US/docs/Web/JavaScript/Reference/Global_Objects)
  - : Докладно про стандартні вбудовані об'єкти: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Date")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, та інші.
- [Вирази та оператори](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Дізнайтеся більше про поведінку операторів мови JavaScript {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, [пріоритет операторів](/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), та інші.
- [Інструкції та об'явлення](/en-US/docs/Web/JavaScript/Reference/Statements)
  - : Дізнайтеся, як працюють {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}}, та інші інструкції та ключові слова JavaScript.
- [Функції](/en-US/docs/Web/JavaScript/Reference/Functions)
  - : Дізнайтеся, як працювати зі функціями у  JavaScript для створення ваших застосунків.

  ## Інструменти та ресурси

Допоміжні інструменти, що полегшують написання і допомагають у зневадження вашого **JavaScript**-коду.

- [Інструменти розробника Firefox](/en-US/docs/Tools)
  - : [Вебконсоль](/en-US/docs/Tools/Web_Console), [Інструмент профілювання JavaScript](/en-US/docs/Tools/Performance), [Debugger](/en-US/docs/Tools/Debugger), та інші.
- [Оболонка JavaScript](/en-US/docs/Web/JavaScript/Shells)
  - : JavaScript-оболонка, що дозволяє швидко перевіряти фрагменти коду на JavaScript.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Прекрасний ресурс для веброзробників, що прагнуть навчатися. Вчіть JavaScript всередині інтерактивного оточення, з короткими лекціями та інтерактивними тестами, які дають оцінку в автоматичному режимі. Перші 40 уроків вільні, а повний курс доступний за невелику одноразову плату.
- [TogetherJS](https://togetherjs.com/)
  - : Співпраця, що створена простою. Після додавання TogetherJS до сайту, його користувачі зможуть допомагати один одному на вебсайті у реальному часі!
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Запитання на Stack Overflow з міткою "JavaScript".
- [JSFiddle](https://jsfiddle.net/)
  - : Редагуйте JavaScript, CSS, HTML, і отримуйте живі результати. Застосовуйте зовнішні ресурси, і співпрацюйте зі своєю командою онлайн.
- [Plunker](https://plnkr.co/)
  - : Plunker &mdash; це онлайн-спільнота для створення, співпраці, та обміну вашими ідеями для веброзробки. Редагуйте ваші JavaScript-, CSS- і HTML-файли, та отримуйте живі результати й файлову структуру.
- [JSBin](https://jsbin.com/)
  - : JS Bin &mdash; це колаборативний опенсорсний інструмент зневадження для веброзробки.
- [Codepen](https://codepen.io/)
  - : Codepen &mdash; це інший інструмент для колаборативної веброзробки, що використовується як майданчик для розміщення живих результатів.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz &mdash; це іще один онлайн-майданчик та інструмент зневадження, який може розміщувати та розгортати повно стекові застосунки із використанням React, Angular, та ін.
- [RunJS](https://runjs.app/)
  - : RunJS &mdash; це ПК-весія майданчику/чернетки для роботи з JavaScript, яка надає можливість виконувати код, із доступом до API браузеру та Node.
