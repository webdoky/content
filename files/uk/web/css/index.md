---
title: CSS – Каскадні списки стилів
slug: Web/CSS
page-type: landing-page
---

{{CSSRef}}

**Каскадні списки стилів** (**CSS**) — це мова [стилів](docs/Web/API/StyleSheet), що використовується для задання вигляду документів, написаних мовою [HTML](/uk/docs/Web/HTML) або [XML](/uk/docs/Web/XML/Guides/XML_introduction) (включно із діалектами XML, як-от [SVG](/uk/docs/Web/SVG), [MathML](/uk/docs/Web/MathML) чи {{Glossary("XHTML")}}). CSS описує, який вигляд елементи матимуть на екрані, папері, у мовленні чи в іншому вигляді.

CSS належить до ключових мов **відкритого вебу** і стандартизована між вебпереглядачами згідно зі [специфікаціями W3C](https://www.w3.org/Style/CSS/#specs). У минулому розробка різних частин специфікації CSS велася послідовно, що давало змогу випускати свіжі рекомендації у форматі редакцій. Ви могли чути про CSS1, CSS 2.1 чи навіть CSS3. Ніколи не буде жодних CSS3 чи CSS4; натомість тепер усе є "просто" CSS, а номери версій є в окремих модулів CSS.

Після виходу CSS2.1 обсяг специфікації помітно зростав. Прогрес різних модулів CSS почав настільки сильно відрізнятись, що стало більш ефективним [розробляти та випускати рекомендації для кожного модуля окремо](https://www.w3.org/Style/CSS/current-work). Замість оформлення редакцій специфікації CSS, W3C тепер періодично робить знімок [найсвіжішого стабільного стану специфікації CSS](https://www.w3.org/TR/css/) і поступу окремих модулів. Модулі CSS тепер мають номери версій, або рівні, як то [Модуль кольору CSS рівня 5](https://drafts.csswg.org/css-color-5/).

## Підручники для початківців

- [Ваш перший вебсайт – Стилізація вмісту](/uk/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : Ця стаття пропонує короткий огляд того, що таке CSS та як його використовувати, призначена для тих, хто цілковитий новачок у веброзробці.
- [Основи стилізації CSS](/uk/docs/Learn_web_development/Core/Styling_basics)
  - : Модуль Основ CSS нашого розділу [Навчання веброзробки](/uk/docs/Learn_web_development) вчить основ CSS з самого початку.
- [Стилізація тексту CSS](/uk/docs/Learn_web_development/Core/Text_styling)
  - : Тепер погляньмо на основи, серед яких задання шрифту, грубості, курсиву, міжрядкового та міжсимвольного інтервалів, тіней та інших можливостей тексту. Цей модуль завершується поглядом на застосування до вашої сторінки кастомних шрифтів, а також стилізацію списків і посилань.
- [Компонування CSS](/uk/docs/Learn_web_development/Core/CSS_layout)
  - : Тепер час розглянути те, як правильно розкласти рамки відносно одна одної та області перегляду браузера. Цей модуль розглядає пливуни, позиціювання, інші сучасні інструменти компонування та створення чуйних дизайнів, які адаптуються до різних пристроїв, розмірів екрана та роздільної здатності.

## Довідка

[Довідка CSS](/uk/docs/Web/CSS/Reference) – це вичерпна довідка для загартованих веброзробників описує кожну властивість і кожну концепцію CSS, серед яких:

- [Синтаксис та форми мови](/uk/docs/Web/CSS/CSS_syntax/Syntax)
- [Специфічність](/uk/docs/Web/CSS/Specificity), [успадкування](/uk/docs/Web/CSS/CSS_cascade/Inheritance) та [каскадність](/uk/docs/Web/CSS/CSS_cascade/Cascade)
- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors), включно з [псевдоелементами](/uk/docs/Web/CSS/CSS_pseudo-elements), [вкладеністю](/uk/docs/Web/CSS/CSS_nesting), [контекстністю](/uk/docs/Web/CSS/CSS_scoping) і [тіньовими частинами](/uk/docs/Web/CSS/CSS_shadow_parts)
- [Директиви CSS](/uk/docs/Web/CSS/CSS_syntax/At-rule), у тому числі [медійні](/uk/docs/Web/CSS/CSS_media_queries) та [контейнерні](/uk/docs/Web/CSS/CSS_containment) запити
- Модуль [Значень та одиниць вимірювання CSS](/uk/docs/Web/CSS/CSS_Values_and_Units), що вміщає [числові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), [текстові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types) і [функційні записи](/uk/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) і [перекриття зовнішніх полів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Контейнерний блок](/uk/docs/Web/CSS/CSS_display/Containing_block)
- [Нагромаджувальні](/uk/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) та [блоково-форматувальні](/uk/docs/Web/CSS/CSS_display/Block_formatting_context) контексти
- [Початкові](/uk/docs/Web/CSS/CSS_cascade/initial_value), [обчислені](/uk/docs/Web/CSS/CSS_cascade/computed_value), [вжиті](/uk/docs/Web/CSS/CSS_cascade/used_value) та [фактичні](/uk/docs/Web/CSS/CSS_cascade/actual_value) значення
- [Властивості-скорочення CSS](/uk/docs/Web/CSS/Shorthand_properties)
- [Гнучка рамка CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout), [багатоколонкове](/uk/docs/Web/CSS/CSS_multicol_layout) та [сіткове](/uk/docs/Web/CSS/CSS_grid_layout) компонування
- [Анімація](/uk/docs/Web/CSS/CSS_animations), [переходи](/uk/docs/Web/CSS/CSS_transitions) та [перетворення](/uk/docs/Web/CSS/CSS_transforms)

## Книга рецептів

[Книга рецептів CSS](/uk/docs/Web/CSS/Layout_cookbook) прагне зібрати докупи рецепти загальноприйнятих шаблонів компонування та іншого, що може знадобитись під час розробки ваших вебсайтів. Окрім надання коду, котрий можна використовувати як стартову точку власних проєктів, ці рецепти показують різні способи застосування специфікацій компонування, і рішень, котрі можуть бути прийняті розробником.

## Інструменти CSS-розробки

- Для перевірки валідності CSS можна застосовувати [Службу перевірки CSS від W3C](https://jigsaw.w3.org/css-validator/). Це незамінний інструмент зневадження.
- [Інструменти розробника Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html) дають змогу переглядати CSS сторінки на льоту за допомогою [Інспектора](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) та [Редактора стилів](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html).
- [Розширення веброзробника](https://addons.mozilla.org/uk/firefox/addon/web-developer/) для Firefox дає змогу відстежувати та редагувати CSS відображених вебсайтів на льоту.

## Метаінформація про вади

- Firefox: [Вада Firefox 1323667](https://bugzil.la/1323667)

## Дивіться також

- мови вебу, до яких часто застосовують CSS: [HTML](/uk/docs/Web/HTML), [SVG](/uk/docs/Web/SVG), [MathML](/uk/docs/Web/MathML), {{Glossary("XHTML")}} та [XML](/uk/docs/Web/XML/Guides/XML_introduction).
- [Питання про CSS на Stack Overflow](https://stackoverflow.com/questions/tagged/css)
