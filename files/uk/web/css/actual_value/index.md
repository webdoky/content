---
title: Фактичне значення
slug: Web/CSS/actual_value
page-type: guide
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#actual-value
---

{{CSSRef}}

**Фактичне значення** властивості [CSS](/uk/docs/Web/CSS) – це [вжите значення](/uk/docs/Web/CSS/used_value) цієї властивості після застосування будь-яких необхідних наближень. Наприклад, {{glossary("user agent", користувацький агент)}}, який може візуалізувати межі лише з цілочисловою шириною, може округлити товщину межі до найближчого цілого.

## Обчислення фактичного значення властивості

{{glossary("user agent", "Користувацький агент")}} виконує для обчислення фактичного (остаточного) значення властивості чотири кроки:

1. По-перше, на основі результату [каскадування](/uk/docs/Web/CSS/Cascade), [успадкування](/uk/docs/Web/CSS/Inheritance) або за допомогою [початкового значення](/uk/docs/Web/CSS/initial_value) визначається [задане значення](/uk/docs/Web/CSS/specified_value).
2. Далі, згідно зі специфікацією (наприклад, елемент `span` з `position: absolute` отримає обчислене значення `display`, змінене на `block`) вираховується [обчислене значення](/uk/docs/Web/CSS/computed_value).
3. Потім, обчислюється компонування, що приводить до [вжитого значення](/uk/docs/Web/CSS/used_value).
4. Врешті решт, вжите значення перетворюється згідно з обмеженнями локального оточення, приводячи до фактичного значення.

## Специфікації

{{Specifications}}

## Дивіться також

- Ключові концепції CSS:
  - [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
  - [Директиви](/uk/docs/Web/CSS/At-rule)
  - [Коментарі](/uk/docs/Web/CSS/Comments)
  - [Специфічність](/uk/docs/Web/CSS/Specificity)
  - [Успадкування](/uk/docs/Web/CSS/Inheritance)
  - [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Способи компонування](/uk/docs/Web/CSS/Layout_mode)
  - [Моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)
  - [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значення
    - [Початкові значення](/uk/docs/Web/CSS/initial_value)
    - [Обчислені значення](/uk/docs/Web/CSS/computed_value)
    - [Вжиті значення](/uk/docs/Web/CSS/used_value)
  - [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
  - [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
  - [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
