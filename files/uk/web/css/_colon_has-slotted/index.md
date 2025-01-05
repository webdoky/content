---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.has-slotted
---

{{CSSRef}}{{SeeCompatTable}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:has-slotted`** (має вставлене) дає збіг, коли вміст елемента {{HTMLElement("slot")}} не є порожнім або не використовує усталене значення (дивіться докладніше на сторінці [Використання шаблонів і слотів](/uk/docs/Web/API/Web_components/Using_templates_and_slots)).

> [!NOTE] Навіть текстового вузла, що складається з єдиного пробілу, достатньо для застосування `:has-slotted`.

Це працює лише в межах CSS, розміщеного всередині [тіньового DOM](/uk/docs/Web/API/Web_components/Using_shadow_DOM).

```css
/* Вибирає вміст елемента <slot>, який має вміст, що не є усталеним */
:has-slotted {
  color: green;
}

/* Вибирає вміст елемента <slot>, який не має вмісту або має усталений */
:not(:has-slotted) {
  color: red;
}
```

## Синтаксис

```css-nolint
:has-slotted {
  /* ... */
}
```

## Приклади

Цей приклад містить два елементи `<slot>`, один з яких має призначений вміст, а інший – ні.

### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: rebeccapurple;
      }
    </style>
    <slot name="one">Замісник 1</slot>
    <slot name="two">Замісник 2</slot>
  </template>
  <span slot="one">Вставлений вміст</span>
</p>
```

### Результат

Елемент `<slot>`, якому було призначено вміст, дав збіг зі псевдокласом `:has-slotted` і має застосоване значення `color` `rebeccapurple`.

{{EmbedLiveSample("prostyi-pryklad",100,300)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент HTML {{HTMLElement("template")}}
- Елемент HTML {{HTMLElement("slot")}}
- {{CSSXRef("::slotted")}}
