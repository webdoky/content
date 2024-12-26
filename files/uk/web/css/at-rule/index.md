---
title: Директиви
slug: Web/CSS/At-rule
page-type: guide
spec-urls: https://drafts.csswg.org/css-conditional/
---

{{CSSRef}}

**Директиви** – це [інструкції CSS](/uk/docs/Web/CSS/Syntax#instruktsii-css), що вказують CSS, як поводитися. Вони починаються зі знаку «равлика», `@` (U+0040 COMMERCIAL AT), за яким слідує ідентифікатор, і включають усе до наступної крапки з комою, `;` (U+003B SEMICOLON), або наступного [блоку CSS](/uk/docs/Web/CSS/Syntax#bloky-oholoshen-css), залежно від того, що зустрінеться першим.

## Синтаксис

### Директиви-інструкції

```css
/* Загальна структура */
@identifier (RULE);

/* Приклад: вказує браузеру використовувати множину символів UTF-8 */
@charset "utf-8";
```

Директиви-інструкції закінчуються крапкою з комою. Є декілька директив-інструкцій, що визначаються їх ідентифікаторами, кожна з власним синтаксисом:

- {{cssxref("@charset")}}
  - : Алгоритм (має синтаксичну форму директиви, але не є визначенням), що визначає запасний набір символів, що використовується списком стилів ([Синтаксис CSS](/uk/docs/Web/CSS/CSS_syntax)).
- {{cssxref("@import")}}
  - : Вказує рушієві CSS включити зовнішній список стилів ([Каскадність та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)).
- {{cssxref("@layer")}}
  - : Визначає порядок пріоритету у випадку кількох каскадних шарів ([Каскадність та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)). Також вживається як [директива-блок](#layer) для визначення стилів шару.
- {{cssxref("@namespace")}}
  - : Визначає усталений простір імен для списку стилів або префікс простору імен, з яким селектор дає збіг лише тоді, коли простір імен і решта складових селектора збігаються ([Простори імен CSS](/uk/docs/Web/CSS/CSS_namespaces)).

### Директиви-блоки

```css
@identifier (RULE) {
}
```

Директиви-блоки закінчуються блоком `{}`, що містить вкладені правила, інші директиви, або ж властивості чи оголошення дескрипторів.

- {{cssxref("@counter-style")}}
  - : Визначає особливі стилі лічильника та розширює наперед визначені стилі списку ([Стилі лічильників CSS](/uk/docs/Web/CSS/CSS_counter_styles)).
- {{cssxref("@container")}}
  - : Умовна групувальна директива, що застосовує свій вміст, якщо контейнер відповідає умовам [`<container-condition>`](/uk/docs/Web/CSS/@container#container-condition) ([Утримання CSS](/uk/docs/Web/CSS/CSS_containment)).
- {{cssxref("@font-face")}}
  - : Визначає розташування ресурсів шрифтів, як локальних, так і зовнішніх, поруч з характеристиками стилю, для яких ці ресурси вживаються, з оголошеним значенням {{cssxref("font-family")}} ([Шрифти CSS](/uk/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@font-feature-values")}} (а також `@swash`, `@ornaments`, `@annotation`, `@stylistic`, `@styleset` і `@character-variant`)
  - : Контролює виведення шрифту для кожного сімейства шрифту, визначаючи специфічні для шрифту альтернативи, або особливі назви, для додавання індексів у {{cssxref("font-variant-alternates")}} в OpenType ([Шрифти CSS](/uk/docs/Web/CSS/CSS_fonts)).
- {{cssxref("@keyframes")}} (а також її псевдонім `@-webkit-keyframes`)
  - : Визначає названу анімацію, визначаючи стилі CSS для проміжних кроків (або ключових кадрів) у послідовності анімування ([Анімації CSS](/uk/docs/Web/CSS/CSS_animations)).
- {{cssxref("@layer")}}
  - : Створює названий каскадний шар з правилами CSS для цього шару всередині ([Каскадність і успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)). Також вживається як [директива-інструкція](#layer) для визначення порядку пріоритету у разі кількох каскадних шарів
- {{cssxref("@media")}}
  - : Умовна групувальна директива, що застосовує свій вміст тільки тоді, коли пристрій відповідає критеріям умови, визначеної за допомогою _медійного запиту_ ([Умовні директиви CSS](/uk/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@page")}}
  - : Задає аспекти сторінки для друку, наприклад, її розміри, орієнтацію та поля ([Сторінкове медіа CSS](/uk/docs/Web/CSS/CSS_paged_media)).
- {{cssxref("@position-try")}}
  - : Визначає варіанти власного розташування, що можуть вживатися для визначення запасних варіантів позиціювання та вирівнювання для елементів з якірним позиціюванням ([Якірне позиціювання CSS](/uk/docs/Web/CSS/CSS_anchor_positioning)).
- {{cssxref("@property")}}
  - : Визначає [особливу властивість CSS](/uk/docs/Web/CSS/Using_CSS_custom_properties), що дає змогу перевіряти типи та накладати обмеження для властивості, задати усталені значення та визначити те, чи успадковує ця особлива властивість значення ([Особливі властивості CSS як каскадні змінні](/uk/docs/Web/CSS/CSS_cascading_variables)).
- {{cssxref("@scope")}}
  - : Визначає область видимості, в якій стилі застосовуються до вибраних елементів, а також самі ці стилі, що застосовуються в цій області ([Каскадність і успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)).
  - : Визначає початкові значення властивостей для початку переходу, коли елемент отримує своє перше оновлення стилів, наприклад, при переході від `display: none` ([Переходи CSS](/uk/docs/Web/CSS/CSS_transitions)).
- {{cssxref("@supports")}}
  - : Умовна групувальна директива, що застосовує свій вміст, якщо браузер підтримує можливості CSS, вказані у певній умові ([Умовні директиви CSS](/uk/docs/Web/CSS/CSS_conditional_rules)).
- {{cssxref("@view-transition")}}
  - : Вмикає в документі [переходи перегляду](/uk/docs/Web/API/View_Transitions_API), а також у цільовому документі, як переходи відбуваються між документами.

## Покажчик

- {{cssxref("@charset")}}
- {{cssxref("@color-profile")}}
- {{cssxref("@container")}}
- {{cssxref("@counter-style")}}
- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}
- {{cssxref("@font-palette-values")}}
- {{cssxref("@import")}}
- {{cssxref("@keyframes")}}
- {{cssxref("@layer")}}
- {{cssxref("@media")}}
- {{cssxref("@namespace")}}
- {{cssxref("@page")}}
- {{cssxref("@position-try")}}
- {{cssxref("@property")}}
- {{cssxref("@scope")}}
- {{cssxref("@starting-style")}}
- {{cssxref("@supports")}}
- {{cssxref("@view-transition")}}

## Специфікації

{{Specifications}}

## Дивіться також

- [Функції директив CSS](/uk/docs/Web/CSS/At-rule-functions)
- [Вкладеність директив CSS](/uk/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [Інструкції CSS](/uk/docs/Web/CSS/Syntax#instruktsii-css)
- Інтерфейс [CSSRule](/uk/docs/Web/API/CSSRule)
- Модуль [Умовних директив CSS](/uk/docs/Web/CSS/CSS_conditional_rules)
- [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
- [Специфічність](/uk/docs/Web/CSS/Specificity)
- [Успадкування](/uk/docs/Web/CSS/Inheritance)
