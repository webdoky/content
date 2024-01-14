---
title: "::first-line"
slug: Web/CSS/::first-line
page-type: css-pseudo-element
browser-compat: css.selectors.first-line
---

{{CSSRef}}

[Псевдоелемент](/uk/docs/Web/CSS/Pseudo-elements) [CSS](/uk/docs/Web/CSS) **`::first-line`** (перша лінія) застосовує стилі до першої лінії [блокового контейнера](/uk/docs/Web/CSS/Visual_formatting_model#blokovi-konteinery).

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-first-line.html", "tabbed-shorter")}}

Дія `::first-line` обмежена довжиною та вмістом першої лінії тексту в елементі. Довжина першої лінії залежить від багатьох чинників, серед яких ширина елемента, ширина документа та розмір шрифту тексту. Псевдоелемент `::first-line` не діє, коли перший дочірній елемент, який був би початком першої лінії, є рядковим елементом блокового рівня, наприклад, рядковою таблицею.

> **Примітка:** [Селектори рівня 3](https://drafts.csswg.org/selectors-3/#first-line) запровадили запис із подвійною двокрапкою (`::`), щоб відрізняти [псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) від [псевдоелементів](/uk/docs/Web/CSS/Pseudo-elements), які записуються з однією двокрапкою `:`. Браузери приймають як `::first-line`, так і `:first-line` – варіант, запроваджений у CSS2.

Для потреб {{CSSXref("background")}} CSS псевдоелемент `::first-line` подібний до елемента рядкового рівня, тобто у шикованій наліво першій лінії фон не може розтягуватися аж до правого зовнішнього відступу.

## Припустимі властивості

Лише невелика підмножина властивостей CSS може застосовуватися до псевдоелемента `::first-line`:

- Усі властивості, пов'язані зі шрифтом: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} і {{Cssxref("font-family")}}
- Усі властивості, пов'язані зі тлом: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}} і {{cssxref("background-blend-mode")}}
- Властивість {{cssxref("color")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} і {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} і {{cssxref("vertical-align")}}.

## Синтаксис

```css
::first-line {
  /* ... */
}
```

## Приклади

### HTML

```html
<p>
  Стилі будуть застосовані лише до першої лінії цього абзацу. Після цього весь
  текст буде оформлений як зазвичай. Розумієте, що я маю на увазі?
</p>

<span>
  Перша лінія цього тексту не отримає спеціального оформлення, оскільки він не є
  елементом блокового рівня.
</span>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* ЗАСТЕРЕЖЕННЯ: НЕ РОБІТЬ ТАК */
  /* Чимало властивостей недійсні для псевдоелементів ::first-line */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Результат

{{EmbedLiveSample('pryklady', 350, 160)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("::first-letter")}}
