---
title: rotate()
slug: Web/CSS/transform-function/rotate
page-type: css-function
browser-compat: css.types.transform-function.rotate
---

{{CSSRef}}

[Функція](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS) **`rotate()`** (обертати) визначає перетворення, котре обертає елемент навколо фіксованої точки на площині, не деформуючи цей елемент. Її результат належить до типу даних {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-rotate.html")}}

Фіксована точка, навколо котрої обертається елемент, також відома як **центр перетворення**. Усталено вона розташована в центрі елемента, а власний центр перетворення можна задати за допомогою властивості {{cssxref("transform-origin")}}.

## Синтаксис

Величина обертання, спричиненого `rotate()`, задається у вигляді {{cssxref("&lt;angle&gt;", "кута")}}. Якщо кут додатний, то обертання відбувається за годинниковою стрілкою, а якщо від'ємний, то проти. Обертання на 180° зветься _центральною симетрією_.

```css
rotate(a)
```

### Значення

- _a_
  - : Значення {{cssxref("&lt;angle&gt;")}}, що представляє кут обертання. Напрям обертання залежить від напряму письма.
    В контексті письма зліва направо додатний кут позначає обертання за годинниковою стрілкою, а від'ємний – проти. В контексті письма справа наліво додатний кут позначає обертання проти годинникової стрілки, а від'ємний – за.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/uk/docs/Web/CSS/transform-function#dekartovi-koordynaty">Декартові координати</a> на <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://uk.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%80%D1%96%D0%B4%D0%BD%D1%96_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82%D0%B8">Однорідні координати</a> на <a href="https://uk.wikipedia.org/wiki/%D0%94%D1%96%D0%B9%D1%81%D0%BD%D0%B0_%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B0_%D0%BF%D0%BB%D0%BE%D1%89%D0%B8%D0%BD%D0%B0">ℝℙ^2</a></th>
      <th scope="col">Декартові координати на <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Однорідні координати на <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} \cos(a) & -\sin(a) \\ \sin(a) & \cos(a) \end{array} \right)</annotation></semantics></math>
      </td>
      <td>
        <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & -\sin(a) & 0 \\ \sin(a) & \cos(a) & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics></math>
      </td>
      <td rowspan="2">
        <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & -\sin(a) & 0 \\ \sin(a) & \cos(a) & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics></math>
      </td>
      <td rowspan="2">
        <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} \cos(a) & -\sin(a) & 0 & 0 \\ \sin(a) & \cos(a) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics></math>
      </td>
    </tr>
    <tr>
      <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Приклади

### Найпростіший приклад

#### HTML

```html
<div>Звичайний</div>
<div class="rotated">Обернений</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate(45deg); /* Рівносильно rotateZ(45deg) */
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("naiprostishyi-pryklad", "auto", 180)}}

### Поєднання обертання з іншим перетворенням

Коли хочеться застосувати до елемента декілька перетворень, слід поводитись обережно з порядком задання таких перетворень. Наприклад, якщо перед перенесенням обернути елемент, то перенесення відбудеться вздовж нової осі обертання!

#### HTML

```html
<div>Normal</div>
<div class="rotate">Обернений</div>
<div class="rotate-translate">Обернений + Перенесений</div>
<div class="translate-rotate">Перенесений + Обернений</div>
```

#### CSS

```css
div {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  background-color: lightgray;
}

.rotate {
  background-color: transparent;
  outline: 2px dashed;
  transform: rotate(45deg);
}

.rotate-translate {
  background-color: pink;
  transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
  background-color: gold;
  transform: translateX(180px) rotate(45deg);
}
```

#### Результат

{{EmbedLiveSample("poiednannia-obertannia-z-inshym-peretvorenniam", "auto", 320)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивість {{cssxref("transform")}}
- Властивість {{cssxref("rotate")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`rotate3d()`](/uk/docs/Web/CSS/transform-function/rotate3d)
