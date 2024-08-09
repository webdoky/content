---
title: ":user-invalid"
slug: Web/CSS/:user-invalid
page-type: css-pseudo-class
browser-compat: css.selectors.user-invalid
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) CSS **`:user-invalid`** (недійсне від користувача) представляють всі елементи форм, до яких була застосована валідація та чиє значення не є дійсним на основі їхніх [обмежень валідації](/uk/docs/Learn/Forms#validatsiia-obmezhen), після того, як користувач мав з ними взаємодію.

Псевдоклас `:user-invalid` повинен збігатися з елементом, який має збіг з {{CSSxRef(":invalid")}}, {{CSSxRef(":out-of-range")}}, або водночас порожнім і {{CSSxRef(":required")}}, між спробою подати форму і повторною взаємодією з формовим елементом.

## Синтаксис

```css
:user-invalid {
  /* ... */
}
```

## Приклади

### Задання на :user-invalid кольору та символу

У наступному прикладі червона межа та ❌ виводяться лише тоді, коли користувач провзаємодіяв з полем.
Спробуйте надрукувати щось, відмінне від адреси електронної пошти, щоб побачити це в дії.

```html
<form>
  <label for="email">Електронна пошта *: </label>
  <input id="email" name="email" type="email" required />
  <span></span>
</form>
```

```css
input:user-invalid {
  border: 2px solid red;
}

input:user-invalid + span::before {
  content: "✖";
  color: red;
}
```

{{EmbedLiveSample("zadannia-na-user-invalid-koloru-ta-symvolu", 140, 100)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{CSSxRef(":valid")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":user-valid")}}
