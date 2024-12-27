---
title: Вкладеність CSS і специфічність
slug: Web/CSS/CSS_nesting/Nesting_and_specificity
page-type: guide
---

{{CSSRef}}

{{cssxref('specificity', 'Специфічність')}} селектора вкладеності `&` обчислюється за допомогою найбільшої специфічності в пов'язаному з ним списку селекторів. Це ідентично тому, як обчислюється специфічність при використанні функції {{cssxref(':is',':is()')}}.

```html
<b class="foo">
  <c>Синій текст</c>
</b>
```

## Синтаксис вкладеності `&`

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## Синтаксис `:is()`

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

У цьому прикладі селектор ідентифікатора (`#a`) має специфічність [`1-0-0`](/uk/docs/Web/CSS/Specificity#vahovi-katehorii-selektoriv), тоді як селектор типу (`b`) має специфічність `0-0-1`. Селектор вкладеності [`&`](/uk/docs/Web/CSS/Nesting_selector) та псевдоклас `:is()` обидва мають специфічність `1-0-0`, навіть якщо селектор ідентифікатора `#a` ніколи не використовується.

Селектор класу `.foo` має специфічність `0-1-0`. Це призводить до сумарної специфічності `1-0-1` для `& c` та `0-1-1` для `.foo c`, що означає, що `color: blue;` перемагає.

## Дивіться також

- Модуль [Вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting)
- [Селектор вкладеності `&`](/uk/docs/Web/CSS/Nesting_selector)
- [Використання вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Вкладеність директив](/uk/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
