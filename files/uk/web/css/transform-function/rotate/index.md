---
title: rotate()
slug: Web/CSS/transform-function/rotate
page-type: css-function
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
browser-compat: css.types.transform-function.rotate
---

{{CSSRef}}

[Функція](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS) **`rotate()`** (обертати) визначає перетворення, котре обертає елемент навколо фіксованої точки на площині, не деформуючи цей елемент. Її результат належить до типу даних {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-rotate.html")}}

Фіксована точка, навколо котрої обертається елемент, також відома як **центр перетворення**. Усталено вона розташована в центрі елемента, а власний центр перетворення можна задати за допомогою властивості {{cssxref("transform-origin")}}.

## Синтаксис

Кількість обертання, спричиненого `rotate()`, задається у вигляді {{cssxref("&lt;angle&gt;", "кута")}}. Якщо кут додатний, то обертання відбувається за годинниковою стрілкою, а якщо від'ємний, то проти. Обертання на 180° зветься _центральною симетрією_.

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
      <th scope="col">Декартові координати на ℝ^2</th>
      <th scope="col">Однорідні координати на ℝℙ^2</th>
      <th scope="col">Декартові координати на ℝ^3</th>
      <th scope="col">Однорідні координати на ℝℙ^3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo></mtd
                ></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
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

Коли хочеться застосувати до елемента декілька перетворень, слід поводитись обережно з порядком задання таких перетворень. Наприклад, якщо обернути до перекладу, то переклад відбудеться за новою віссю обертання!

#### HTML

```html
<div>Normal</div>
<div class="rotate">Обернений</div>
<div class="rotate-translate">Обернений + Перекладений</div>
<div class="translate-rotate">Перекладений + Обернений</div>
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
