---
title: Довідник CSS
slug: Web/CSS/Reference
page-type: landing-page
---

{{CSSRef}}

Використовуйте цей **Довідник CSS** для орієнтування в [алфавітному покажчику](#pokazhchyk) усіх стандартних властивостей [CSS](/uk/docs/Web/CSS), [псевдокласів](/uk/docs/Web/CSS/Pseudo-classes), [псевдоелементів](/uk/docs/Web/CSS/Pseudo-elements), [типів даних](/uk/docs/Web/CSS/CSS_Types), [функційних записів](/uk/docs/Web/CSS/CSS_Functions) і [директив](/uk/docs/Web/CSS/At-rule). Крім того, можна переглянути [ключові концепції CSS](#kontseptsii) та список [селекторів, упорядкований за типами](#selektory). Крім того, включений стислий [Довідник DOM-CSS / CSSOM](#dom-css--cssom).

## Базовий синтаксис правил

### Синтаксис стилістичних правил

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Де :

```css
selectors-list ::=
    selector[:pseudo-class] [::pseudo-element]
    [, selectors-list]

properties-list ::=
    [property : value] [; properties-list]
```

Дивіться покажчик [_селекторів_](#selektory), [_псевдокласів_](#psevdo) і _[псевдоелементів](#psevdo)_ нижче. Синтаксис кожного заданого _значення_ залежить від типу даних, визначеного для кожної вказаної _властивості_.

#### Приклади стилістичних правил

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Знайомство з синтаксисом селекторів початкового рівня – шукайте в нашому [посібнику з селекторів CSS](/uk/docs/Learn/CSS/Building_blocks/Selectors). Майте на увазі, що будь-яка [синтаксична](/uk/docs/Web/CSS/Syntax) помилка у визначенні правила робить недійсним усе правило. Недійсні правила ігноруються браузерами. Зверніть увагу на те, що визначення правил CSS цілком [засновані на тексті (англ.)](https://www.w3.org/TR/css-syntax-3/#intro) ({{Glossary("ASCII")}}), натомість DOM-CSS / CSSOM (система управління правилами) [заснована на об'єктах (англ.)](https://www.w3.org/TR/cssom/#introduction).

### Синтаксис директив

Оскільки структура директив широко відрізняється, шукайте синтаксис конкретних директив на сторінці [Директива](/uk/docs/Web/CSS/At-rule).

## Покажчик

> **Примітка:** Цей покажчик не включає ексклюзивні для SVG [атрибути відображення](/uk/docs/Web/SVG/Attribute/Presentation), котрі можна використовувати як властивості CSS на елементах [SVG](/uk/docs/Web/SVG).

> **Примітка:** Імена властивостей у цьому покажчику **не** містять імен JavaScript, котрі відрізняються від стандартних імен CSS.

{{CSS_Ref}}

## Селектори

Далі – різні [селектори](/uk/docs/Web/CSS/CSS_selectors), що дають стилям змогу бути умовними на основі різних можливостей елементів у DOM.

### Базові селектори

**Базові селектори** – фундаментальні селектори; це найбазовіші селектори, котрі часто поєднуються для створення інших, складніших селекторів.

- [Загальний селектор](/uk/docs/Web/CSS/Universal_selectors) `*`
- [Селектор типу](/uk/docs/Web/CSS/Type_selectors) `elementname`
- [Селектор класу](/uk/docs/Web/CSS/Class_selectors) `.classname`
- [Селектор ідентифікатора](/uk/docs/Web/CSS/ID_selectors) `#idname`
- [Селектор атрибута](/uk/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### Групування селекторів

- [Список селекторів](/uk/docs/Web/CSS/Selector_list) `A, B`
  - : Вибираються як елементи `A`, так і елементи `B`. Це підхід до групування, що вибирає декілька елементів збігу.

### Комбінатори

Комбінатори – селектори, що встановлюють взаємини між двома чи більше простими селекторами, як то "`A` є дочірнім щодо `B`", чи "`A` поруч з `B`", утворюючи складний селектор.

- [Комбінатор наступної сестри](/uk/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - : Задає, що як елементи, обрані `A`, так і елементи, вибрані `B`, мають один батьківський елемент і що елемент, вибраний `B`, стоїть безпосередньо після елемента, вибраного `A`, по горизонталі.
- [Комбінатор пізніших сестер](/uk/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - : Задає, що як елементи, обрані `A`, так і елементи, вибрані `B`, поділяють один батьківський елемент і що елемент, вибраний `A`, стоїть до, але не обов'язково безпосередньо до, елемента, вибраного `B`.
- [Дочірній комбінатор](/uk/docs/Web/CSS/Child_combinator) `A > B`
  - : Задає, що елемент, вибраний `B`, є безпосереднім нащадком елемента, вибраного `A`.
- [Комбінатор нащадків](/uk/docs/Web/CSS/Descendant_combinator) `A B`
  - : Задає, що елемент, вибраний `B`, є нащадком елемента, вибраного `A`, але не обов'язково безпосереднім.
- [Колонковий комбінатор](/uk/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : Задає, що елемент, вибраний `B`, розташований в колонці таблиці, заданій `A`. Елементи, що простягаються на кілька колонок, вважаються членами всіх таких колонок.

### Псевдо

- [Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) `:`
  - : Задають особливий стан вибраних елементів.
- [Псевдоелементи](/uk/docs/Web/CSS/Pseudo-elements) `::`
  - : Представляють сутності, що не включені в HTML.

> **Callout:**
>
> Дивіться також [селектори в специфікації Селекторів](https://drafts.csswg.org/selectors/) і [специфікацію псевдоелементів](https://drafts.csswg.org/css-pseudo/).

## Концепції

### Синтаксис і семантика

- [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
- [Директиви](/uk/docs/Web/CSS/At-rule)
- [Каскадність](/uk/docs/Web/CSS/Cascade)
- [Коментарі](/uk/docs/Web/CSS/Comments)
- [Дескриптор](/uk/docs/Glossary/CSS_Descriptor)
- [Успадкування](/uk/docs/Web/CSS/Inheritance)
- [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
- [Специфічність](/uk/docs/Web/CSS/Specificity)
- [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
- [Одиниці вимірювання й типи значень CSS](/uk/docs/Web/CSS/CSS_Values_and_Units)
- [Функційні записи CSS](/uk/docs/Web/CSS/CSS_Functions)

### Значення

- [Дієве значення](/uk/docs/Web/CSS/actual_value)
- [Обчислене значення](/uk/docs/Web/CSS/computed_value)
- [Початкове значення](/uk/docs/Web/CSS/initial_value)
- [Вирішене значення](/uk/docs/Web/CSS/resolved_value)
- [Задане значення](/uk/docs/Web/CSS/specified_value)
- [Застосоване значення](/uk/docs/Web/CSS/used_value)

### Компонування

- [Контекст блокового форматування](/uk/docs/Web/Guide/CSS/Block_formatting_context)
- [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Контейнерний блок](/uk/docs/Web/CSS/Containing_block)
- [Спосіб компонування](/uk/docs/Web/CSS/Layout_mode)
- [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
- [Контекст нагромадження](/uk/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Модель візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### Головні типи об'єктів

- {{DOMxRef("Document.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` (селектор і стиль)
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}` (лише стиль)
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### Важливі методи

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## Дивіться також

- [Розширення CSS від Mozilla](/uk/docs/Web/CSS/Mozilla_Extensions) (з префіксом `-moz-`)
- [Розширення CSS у WebKit](/uk/docs/Web/CSS/WebKit_Extensions) (здебільшого з префіксом `-webkit-`)

## Зовнішні посилання

- [Покажчики CSS (w3.org – англ.)](https://www.w3.org/TR/CSS/#indices)
