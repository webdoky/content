---
title: ":default"
slug: Web/CSS/:default
page-type: css-pseudo-class
browser-compat: css.selectors.default
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:default`** (усталений) вибирає елементи форм, що є усталеними в групі пов'язаних елементів.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-default.html", "tabbed-shorter")}}

Те, з чим дає збіг цей селектор, визначено в [§4.16.3 Псевдокласах Стандарту HTML](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default) – він може давати збіг з елементами {{htmlelement("button")}}, [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio) і {{htmlelement("option")}}:

- Усталений елемент варіанту – перший, що має атрибут `selected`, або перший увімкнений варіант у порядку DOM. Елементи {{htmlelement("select")}} з `multiple` можуть мати більше одного `selected` варіанту, тому всі такі елементи дають збіг з `:default`.
- `<input type="checkbox">` і `<input type="radio">` дають збіг, якщо мають атрибут `checked`.
- {{htmlelement("button")}} дає збіг, коли є [усталеною кнопкою подання](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission) у {{htmlelement("form")}}: перший `<button>` за порядком DOM, що належить формі. Це також стосується типів {{htmlelement("input")}}, що подають форми, як то `image` і `submit`.

## Синтаксис

```css
:default {
  /* ... */
}
```

## Приклади

### HTML

```html
<fieldset>
  <legend>Улюблена пора року</legend>

  <input type="radio" name="season" id="spring" value="spring" />
  <label for="spring">Весна</label>

  <input type="radio" name="season" id="summer" value="summer" checked />
  <label for="summer">Літо</label>

  <input type="radio" name="season" id="fall" value="fall" />
  <label for="fall">Осінь</label>

  <input type="radio" name="season" id="winter" value="winter" />
  <label for="winter">Зима</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Результат

{{EmbedLiveSample("pryklady")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Вебформи – Робота з користувацькими даними](/uk/docs/Learn/Forms)
- [Оформлення вебформ](/uk/docs/Learn/Forms/Styling_web_forms)
- Пов'язані елементи HTML: {{htmlelement("button")}}, [`<input type="checkbox">`](/uk/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/uk/docs/Web/HTML/Element/input/radio) і {{htmlelement("option")}}
