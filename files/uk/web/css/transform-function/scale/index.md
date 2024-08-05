---
title: scale()
slug: Web/CSS/transform-function/scale
page-type: css-function
browser-compat: css.types.transform-function.scale
---

{{CSSRef}}

**`scale()`** - це [CSS](/uk/docs/Web/CSS) [функція](/uk/docs/Web/CSS/CSS_Functions) що визначає перетворення, яке змінює розмір елемента у 2D площині. Оскільки ступінь масштабування визначається вектором [sx, sy], це впливатиме на вертикальні та горизонтальні розміри. Як результат - тип даних {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-scale.html")}}

Перетворення масштабу характеризується двовимірним вектором. Його координати визначають ступінь масштабування в кожному напрямку. Якщо обидві координати рівні, масштабування рівномірне (_ізотропне_), а співвідношення сторін зберігається (це [гомотетичне перетворення](https://en.wikipedia.org/wiki/Homothetic_transformation)).

Якщо значення координати знаходиться за межами діапазону \[-1, 1], елемент збільшується відповідно до значення; якщо всередині діапазону - зменшується. Відʼємне значення у цьому вимірі призводить до [точкового відображення](https://en.wikipedia.org/wiki/Point_reflection). Значення `1` - не впливає.

> [!NOTE]
> Функція `scale()` працює лише у 2D. Для 3D масштабування, скористайтеся
> [`scale3d()`](/uk/docs/Web/CSS/transform-function/scale3d).

## Синтаксис

Функція `scale()` може приймати одне або два значення, які показують величину масштабування у кожному напрямку.

```css
scale(sx)

scale(sx, sy)
```

### Значення

- `sx`
  - : {{cssxref("&lt;number&gt;")}} або {{cssxref("&lt;percentage&gt;")}} представляє абсцису (горизонталь, x-компоненту) вектора масштабування.
- `sy`
  - : {{cssxref("&lt;number&gt;")}} або {{cssxref("&lt;percentage&gt;")}} представляє ординату (вертикаль, y-компоненту) вектора масштабування.
    Якщо параметрів не визначено, то значення за замовчуваннями - `sx`, тобто елемент зберігається незмінним {{glossary("aspect ratio")}}.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/uk/docs/Web/CSS/transform-function#cartesian_coordinates">Декартові координати</a> на <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Однорідні координати</a> на <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Декартові координати на <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Однорідні координати на <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} sx & 0 \\ 0 & sy \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Доступність

Анімації масштабування/збільшення викликають проблеми із доступністю, тому що вони є звичним тригером певних типів труднощів. Якщо потрібно додати таку анімацію на свій веб-сайт, бажано надати користувачам можливість відключати їх, і краще загально на сайті.

Також подумайте про можливість використання мультимедійної функції {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} для написання [медіа-запитів](/uk/docs/Web/CSS/CSS_media_queries), які прибирають анімацію в залежності від налаштувань користувача.

Дізнайтеся більше:

- [Тлумачення MDN WCAG, пояснення та рекомендації 2.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Тлумачення критерію успіху 2.3.3 | W3C тлумачення WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Приклади

### Масштабування по осях X та Y пропорційно

#### HTML

```html
<div>Звичайний</div>
<div class="scaled">Масштабований</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* Еквівалентно scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("Scaling_the_X_and_Y_dimensions_together", "200", "200")}}

### Масштабування по осях X та Y непропорційно з перенесенням початку координат

#### HTML

```html
<div>Звичайний</div>
<div class="scaled">Масштабований</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* Еквівалентно scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("Scaling_X_and_Y_dimensions_separately_and_translating_the_origin", "200", "200")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("zoom")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- Інші окремі властивості перетворення {{cssxref("translate")}} та {{cssxref("rotate")}}
