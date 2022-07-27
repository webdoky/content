---
title: 'Кастомні властивості (--*): CSS змінні'
slug: Web/CSS/--*
tags:
  - CSS
  - CSS Custom Properties
  - Guide
  - Reference
browser-compat: css.properties.custom-property
---
{{CSSRef}}

Імена властивостей, що починаються з `--`, наприклад, `--example-name`, є _кастомними властивостями_, котрі містять значення, що можуть бути використані в інших оголошеннях за допомогою функції {{cssxref("var", "var()")}}.

Сфера застосування кастомних властивостей обмежена елементом (елементами), на котрих вони оголошені, а також їм властива каскадність: значення певної кастомної властивості береться з оголошення, обраного каскадним алгоритмом.

{{CSSInfo}}

## Синтаксис

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : Це значення захоплює будь-яку послідовність з одного чи більше токенів, поки послідовність не містить неприпустимого токена. Воно представляє усю повноту того, що валідне оголошення може мати своїм значенням.

> **Зверніть увагу:** Імена кастомних властивостей чутливі до регістру — `--my-color` вважатиметься окремою кастомною властивістю поруч із `--My-color`.

### Формальний синтаксис

{{CSSSyntax}}

## Приклад

### HTML

```html
<p id="firstParagraph">Цей параграф повинен мати синє тло та жовтий текст.</p>
<p id="secondParagraph">Цей параграф повинен мати жовте тло та синій текст.</p>
<div id="container">
  <p id="thirdParagraph">Цей параграф повинен мати зелене тло та жовтий текст.</p>
</div>
```

### CSS

```css
:root {
  --first-color: #16f;
  --second-color: #ff7;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #290;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Результат

{{EmbedLiveSample('pryklad', 500, 130)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Використання CSS змінних](/uk/docs/Web/CSS/Using_CSS_custom_properties)
- Функція {{cssxref("var", "var()")}}
