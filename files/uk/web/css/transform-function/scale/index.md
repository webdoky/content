---
title: scale()
slug: Web/CSS/transform-function/scale
page-type: css-function
browser-compat: css.types.transform-function.scale
---

{{CSSRef}}

**`scale()`** (масштабувати) - це [функція](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS), що визначає перетворення, яке змінює розмір елемента на двовимірній площині. Оскільки ступінь масштабування визначається вектором [sx, sy], це впливає на вертикальні та горизонтальні розміри. Результат – тип даних {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-scale.html")}}

Перетворення масштабування характеризується двовимірним вектором. Його координати визначають ступінь масштабування в кожному напрямку. Якщо обидві координати рівні, масштабування рівномірне (_ізотропне_), а співвідношення сторін зберігається (це [гомотетичне перетворення](https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BC%D0%BE%D1%82%D0%B5%D1%82%D1%96%D1%8F)).

Якщо значення координати знаходиться поза межами діапазону \[-1, 1], елемент збільшується відповідно до значення; якщо всередині діапазону - зменшується. Відʼємне значення у цьому вимірі призводить до [центрально-симетричного відображення](https://uk.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D1%81%D0%B8%D0%BC%D0%B5%D1%82%D1%80%D1%96%D1%8F). Значення `1` - ніяк не діє.

> [!NOTE]
> Функція `scale()` працює лише на площині. Для тривимірного масштабування користуйтеся
> [`scale3d()`](/uk/docs/Web/CSS/transform-function/scale3d).

## Синтаксис

Функція `scale()` може приймати одне або два значення, які показують величину масштабування у кожному напрямку.

```css
scale(sx)

scale(sx, sy)
```

### Значення

- `sx`
  - : {{cssxref("&lt;number&gt;")}} або {{cssxref("&lt;percentage&gt;")}}, що представляє абсцису (горизонталь, x-компоненту) вектора масштабування.
- `sy`
  - : {{cssxref("&lt;number&gt;")}} або {{cssxref("&lt;percentage&gt;")}}, що представляє ординату (вертикаль, y-компоненту) вектора масштабування.
    Якщо цей параметр не визначено, то усталене його значення – `sx`, що дає масштабування зі збереженням {{glossary("aspect ratio", "співвідношення сторін")}}.

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

Анімації масштабування/збільшення викликають проблеми із доступністю, тому що вони є звичним тригером певних типів труднощів. Якщо потрібно додати такі анімації на свій вебсайт, бажано надати користувачам можливість відключати їх, і краще зразу на рівні цілого сайту.

Також подумайте про можливість використання медійної можливості {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}: за її допомогою можна написати [медіазапит](/uk/docs/Web/CSS/CSS_media_queries), що вимикатиме анімацію, якщо в налаштуваннях користувача обрано зменшення кількості анімації.

Дізнайтеся більше:

- [Тлумачення MDN WCAG, пояснення та рекомендації 2.3](/uk/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Тлумачення критерію успіху 2.3.3 | W3C тлумачення WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Приклади

### Масштабування за осями X та Y разом

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

{{EmbedLiveSample("masshtabuvannia-za-osiamy-x-ta-y-razom", "200", "200")}}

### Масштабування за осями X та Y окремо, а також перенесення початку координат

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

{{EmbedLiveSample("masshtabuvannia-za-osiamy-x-ta-y-okremo-a-takozh-perenesennia-pochatku-koordynat", "200", "200")}}

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
