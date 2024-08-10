---
title: Своєрідні властивості (--*) – змінні CSS
slug: Web/CSS/--*
page-type: guide
browser-compat: css.properties.custom-property
---

{{CSSRef}}

Імена властивостей, що починаються з `--`, наприклад, `--example-name`, є _своєрідними властивостями_, котрі містять значення, що можуть бути використані в інших оголошеннях за допомогою функції {{cssxref("var", "var()")}}.

Сфера застосування своєрідних властивостей обмежена елементом (елементами), на котрих вони оголошені, а також їм властива каскадність: значення певної своєрідної властивості береться з оголошення, обраного каскадним алгоритмом.

{{CSSInfo}}

## Синтаксис

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Це значення захоплює будь-яку послідовність з однієї чи більше лексем, поки не зустрінеться неприпустима лексема. Воно представляє усю повноту того, що дійсне оголошення може мати за своє значення.

> **Примітка:** Імена своєрідних властивостей чутливі до регістру: `--my-color` вважатиметься окремою своєрідною властивістю поруч із `--My-color`.

## Приклад

### HTML

```html
<p id="firstParagraph">Цей абзац повинен мати синє тло та жовтий текст.</p>
<p id="secondParagraph">Цей абзац повинен мати жовте тло та синій текст.</p>
<div id="container">
  <p id="thirdParagraph">Цей абзац повинен мати зелене тло та жовтий текст.</p>
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

- Функція {{cssxref("var", "var()")}}
- Директива {{cssxref("@property")}}
- Посібник [Використання кастомних властивостей (змінних) CSS](/uk/docs/Web/CSS/Using_CSS_custom_properties)
- Модуль [Кастомних властивостей як каскадних змінних CSS](/uk/docs/Web/CSS/CSS_cascading_variables)
