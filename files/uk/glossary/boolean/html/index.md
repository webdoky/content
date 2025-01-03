---
title: Булів атрибут (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
---

{{GlossarySidebar}}

**Булів атрибут** у {{Glossary("HTML")}} – це {{glossary("attribute", "атрибут")}}, що представляє значення `true` або `false`. Якщо тег HTML містить булів атрибут – незалежно від значення цього атрибуту – атрибут на цьому елементі отримує значення `true`. Якщо тег HTML не містить цей атрибут, то цей атрибут отримує значення `false`.

Якщо такий атрибут присутній, то він може набувати одну з наступних форм:

- просто назва атрибута; наприклад, `attribute`, що означає, що неявне значення такого атрибута – порожній рядок
- атрибут зі значенням порожнього рядка; наприклад, `attribute=""`
- атрибут зі значенням самої назви атрибута, без пробілів на початку та в кінці та з ігноруванням регістру; наприклад, `attribute="attribute"`, `attribute="ATTRIBUTE"`

> [!NOTE]
> Рядки "true" та "false" є недійсними значеннями. Щоб задати атрибутові значення `false`, слід його взагалі пропустити. Попри те, що сучасні браузери розглядають _будь-яке_ рядкове значення як `true`, на цю логіку не варто покладатися.

Ось приклад булевого атрибута HTML `checked`:

```html
<!-- Наступні поля для галочок матимуть галочки при початковій візуалізації -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="checked" />
<input type="checkbox" checked="Checked" />

<!-- Наступне поле для галочки не матиме галочки при початковій візуалізації -->
<input type="checkbox" />
```

## Дивіться також

- [Булеві атрибути](/uk/docs/Web/HTML/Attributes#boolean_attributes)
- [Булеві атрибути](https://html.spec.whatwg.org/#boolean-attributes) в специфікації HTML
- Споріднені терміни глосарія:
  - {{Glossary("Attribute", "Атрибут")}}
  - {{Glossary("Enumerated", "Перелічений атрибут")}}
