---
title: text-decoration
slug: Web/CSS/text-decoration
page-type: css-shorthand-property
browser-compat: css.properties.text-decoration
---

{{CSSRef}}

Властивість-[скорочення](/uk/docs/Web/CSS/Shorthand_properties) [CSS](/uk/docs/Web/CSS) **`text-decoration`** задає вигляд оздоблювальних ліній на тексті. Це скорочення властивостей {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, а також новішої властивості {{cssxref("text-decoration-thickness")}}.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

Оздоблення тексту наносяться на всіх текстових нащадків. Це означає, що коли елемент задає оздоблення тексту, то дочірній елемент не може прибрати оздоблення. Наприклад, в розмітці `<p>This text has <em>some emphasized words</em> in it.</p>` правило стилю `p { text-decoration: underline; }` зробило б увесь абзац підкресленим. Правило стилю `em { text-decoration: none; }` нічого б не змінило; увесь абзац і надалі був би підкресленим. Проте правило `em { text-decoration: overline; }` призвело б до появи другого оздоблення на "певних акцентованих словах".

## Складові властивості

Ця властивість є скороченням наступних властивостей CSS:

- [`text-decoration-color`](/uk/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/uk/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/uk/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/uk/docs/Web/CSS/text-decoration-thickness)

## Синтаксис

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Глобальні значення */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

Властивість `text-decoration` задається у вигляді одного чи більшої кількості розділених пробілами значень, що представляють різні докладні властивості text-decoration.

### Значення

- {{cssxref("text-decoration-line")}}
  - : Задає застосований різновид оздоблення, як то `underline` (підкреслення) чи `line-through` (закреслення).
- {{cssxref("text-decoration-color")}}
  - : Задає колір оздоблення.
- {{cssxref("text-decoration-style")}}
  - : Задає стиль лінії, що використовується в оздобленні, як то `solid` (суцільна), `wavy` (хвиляста) чи `dashed` (штрихова).
- {{cssxref("text-decoration-thickness")}}
  - : Задає товщину лінії, що використовується в оздобленні.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Демонстрація значень text-decoration

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">Цей текст має лінію під собою.</p>
<p class="over">Цей текст має лінію над собою.</p>
<p class="line">Цей текст має лінію, що проходить крізь нього.</p>
<p>
  Це <a class="plain" href="#">посилання не буде підкресленим</a>, на противагу
  усталеному виглядові посилань. Будьте обережними з усуненням оздоблення тексту
  на якорях, адже користувачі нерідко покладаються на підкреслення як позначення
  гіперпосилань.
</p>
<p class="underover">Цей текст має лінії над <em>і</em> під собою.</p>
<p class="thick">
  Цей текст має справді товсте фіолетове підкреслення, в браузерах, що це
  підтримують.
</p>
<p class="blink">
  Цей текст може вам блимати, залежно від браузера, що використовується.
</p>
```

#### Результат

{{EmbedLiveSample('pryklady','auto','520')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Окремі властивості text-decoration: {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("text-decoration-thickness")}}.
- Властивості {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}} і {{cssxref("text-underline-position")}} також впливають на text-decoration, але не включені в скорочення.
- Атрибут {{cssxref("list-style")}} контролює вигляд елементів у списках HTML {{HTMLElement("ol")}} та {{HTMLElement("ul")}}.
