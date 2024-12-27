---
title: Обчислене значення
slug: Web/CSS/computed_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#computed-value
---

{{CSSRef}}

**Обчислене значення** властивості [CSS](/uk/docs/Web/CSS) – значення, що передається від батьківського елемента до дочірнього при успадкуванні. Воно обчислюється на основі [заданого значення](/uk/docs/Web/CSS/specified_value) наступним чином:

1. Обробляються особливі значення {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} і {{cssxref("unset")}}.
2. Виконуються обчислення, необхідні для отримання значення, описаного в ряду "Обчислене значення" таблиці визначення властивості.

Обчислення, необхідні для отримання обчисленого значення властивості, зазвичай включають перетворення відносних значень (як то значень в одиницях вимірювання `em` або процентах) на абсолютні. Наприклад, якщо елемент має задані значення `font-size: 16px` і `padding-top: 2em`, то обчислене значення `padding-top` буде `32px` (удвічі більшим за розмір шрифту).

Проте для частини властивостей (тих, чиї відсотки відносні щодо чогось, що може потребувати макета для визначення, як то `width`, `margin-right`, `text-indent` і `top`) задані відсоткові значення перетворюються на обчислені відсоткові значення. Крім цього, безрозмірні числа, задані у властивості `line-height`, стають обчисленим значенням, як задано. Відносні величини, що залишаються в обчисленому значенні, стають абсолютними, коли з'ясовується [застосоване значення](/uk/docs/Web/CSS/used_value)

> [!NOTE]
> API DOM {{domxref("Window.getComputedStyle", "getComputedStyle()")}} повертає [вирішене значення](/uk/docs/Web/CSS/resolved_value), котре може бути як обчисленим значенням, так і [застосованим значенням](/uk/docs/Web/CSS/used_value), залежно від конкретної властивості.

## Специфікації

{{Specifications}}

## Дивіться також

- {{domxref("window.getComputedStyle")}}
- Ключові концепції CSS:
  - [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
  - [Директиви](/uk/docs/Web/CSS/At-rule)
  - [Коментарі](/uk/docs/Web/CSS/Comments)
  - [Специфічність](/uk/docs/Web/CSS/Specificity)
  - [Успадкування](/uk/docs/Web/CSS/Inheritance)
  - [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Режими компонування](/uk/docs/Web/CSS/Layout_mode)
  - [Моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)
  - [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значення
    - [Початкові значення](/uk/docs/Web/CSS/initial_value)
    - [Застосовані значення](/uk/docs/Web/CSS/used_value)
    - [Вирішені значення](/uk/docs/Web/CSS/resolved_value)
    - [Фактичні значення](/uk/docs/Web/CSS/actual_value)
  - [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
  - [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
  - [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
