---
title: Кастомні властивості як каскадні змінні CSS
slug: Web/CSS/CSS_cascading_variables
page-type: css-module
spec-urls: https://drafts.csswg.org/css-variables/
---

{{CSSRef}}

Модуль **Кастомних властивостей як каскадних змінних CSS** додає підтримку каскадних змінних у властивостях CSS і дає змогу створювати кастомні властивості для визначення цих змінних, а також механізми для їх використання як значень інших властивостей CSS.

При роботі з CSS нерідко доводиться багаторазово використовувати одні й ті самі в межах одного проєкту значення, наприклад, ширини, що добре підходять для макету, або набір кольорів колірної схеми.
Один зі способів організації повторень у списках стилів – визначити значення один раз і використовувати його багато разів у інших місцях.
Кастомні властивості дають змогу створювати та визначати кастомні властивості, що можуть бути використані повторно, спрощуючи складні або повторювані правила та роблячи їх зрозумілішими та зручнішими для підтримки.
Наприклад, `--dark-grey-text` і `--dark-background` легше зрозуміти, ніж шістнадцяткові кольори, такі як `#323831`, а також контекст того, як ви їх використовуєте, стає більш очевидним.

## Кастомні властивості в дії

Щоб побачити, як можна використовувати кастомні властивості, пересуньте повзуна зліва направо.

```html hidden
<div class="container">
  <div id="color-1">--hue</div>
  <div id="color-2">--hue + 10</div>
  <div id="color-3">--hue + 20</div>
  <div id="color-4">--hue + 30</div>
  <div id="color-5">--hue + 40</div>
  <div id="color-6">--hue + 50</div>
  <div id="color-7">--hue + 60</div>
  <div id="color-8">--hue + 70</div>
</div>
<input type="range" min="0" max="360" value="0" step="0.1" id="hue" />
```

```js hidden
const hue = document.querySelector("#hue");

const updateHue = () => {
  document.documentElement.style.setProperty("--hue", hue.value);
};

hue.addEventListener("input", updateHue);
```

```css hidden
.container {
  display: grid;
  font-family: sans-serif;
  color: white;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1rem;
}
.container div {
  border-radius: 0.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  margin: 0;
}

:root {
  --hue: 0;
}

#color-1 {
  background-color: hsl(var(--hue) 50% 50%);
}
#color-2 {
  background-color: hsl(calc(var(--hue) + 10) 50% 50%);
}
#color-3 {
  background-color: hsl(calc(var(--hue) + 20) 50% 50%);
}
#color-4 {
  background-color: hsl(calc(var(--hue) + 30) 50% 50%);
}
#color-5 {
  background-color: hsl(calc(var(--hue) + 40) 50% 50%);
}
#color-6 {
  background-color: hsl(calc(var(--hue) + 50) 50% 50%);
}
#color-7 {
  background-color: hsl(calc(var(--hue) + 60) 50% 50%);
}
#color-8 {
  background-color: hsl(calc(var(--hue) + 70) 50% 50%);
}
```

{{EmbedLiveSample("",600,160)}}

У цих колірних зразках значення {{cssxref("background-color")}} задано за допомогою функції {{cssxref("color_value/hsl", "hsl()")}} {{cssxref("&lt;color&gt;")}} як `hsl(var(--hue) 50% 50%)`.
Кожний колірний зразок збільшує значення {{cssxref("hue", "барви")}} на 10 градусів, наприклад, `calc(var(--hue) + 10)`, `calc(var(--hue) + 20)` і так далі.
При зміні значення повзуна від 0 до 360 значення [кастомної властивості](/uk/docs/Web/CSS/--*) `--hue` оновлюється за допомогою {{cssxref("calc")}}, а також оновлюється колір фону кожної рамки в межах сітки.

## Довідка

### Властивості

- {{cssxref("--*")}}

### Функції

- {{cssxref("var")}}

## Посібники

- [Використання кастомних властивостей (змінних) CSS](/uk/docs/Web/CSS/Using_CSS_custom_properties)

  - : Пояснює, як використовувати кастомні властивості в CSS і JavaScript, а також містить поради щодо обробки невизначених і неприпустимих значень, запасних варіантів та успадкування.

- [Недійсні кастомні властивості](/uk/docs/Web/CSS/CSS_syntax/Error_handling#nediisni-kastomni-vlastyvosti)
  - : Пояснює те, як браузери обробляють значення властивостей, коли значення кастомної властивості належить до неприпустимого для цієї властивості типу.

## Споріднені концепції

- Модуль [API властивостей і значень CSS](/uk/docs/Web/CSS/CSS_properties_and_values_API)
  - Директива [`@property`](/uk/docs/Web/CSS/@property)
  - Метод [`CSS.registerProperty()`](/uk/docs/Web/API/CSS/registerProperty_static)

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Каскаду та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)
- Функція [`env()` CSS](/uk/docs/Web/CSS/env)
- Функція [`calc()` CSS](/uk/docs/Web/CSS/calc)
- Метод [`getPropertyValue()`](/uk/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
