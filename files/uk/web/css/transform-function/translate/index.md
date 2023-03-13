---
title: translate()
slug: Web/CSS/transform-function/translate
page-type: css-function
browser-compat: css.types.transform-function.translate
---

{{CSSRef}}

[Функція](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS) **`translate()`** (перекласти) змінює положення елемента по горизонталі чи по вертикалі. Її результат має тип даних {{cssxref("&lt;transform-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-translate.html")}}

Таке перетворення характеризується двовимірним вектором. Його координати визначають те, наскільки елемент пересувається за кожною з осей координат.

## Синтаксис

```css
/* Одинарне значення <length-percentage> */
transform: translate(200px);
transform: translate(50%);

/* Подвійне значення <length-percentage> */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### Значення

- Одинарне значення `<length-percentage>`
  - : Таке значення – {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що представляє координату за віссю абсцис (по горизонталі, осі X) вектора перекладу. Ордината (значення по вертикалі, осі Y) вектора перекладу вважатиметься `0`. Наприклад, `translate(2px)` рівносильно `translate(2px, 0)`. Відсоткове значення береться від ширини референтної рамки, визначеної властивістю {{cssxref("transform-box")}}.
- Подвійне значення `<length-percentage>`
  - : Таке значення описує два значення {{cssxref("&lt;length&gt;")}} чи {{cssxref("&lt;percentage&gt;")}}, що представляють і абсцису (координату X), і ординату (координату Y) вектора перекладу. Відсоткове значення на першій позиції береться від ширини, а на другій – від висоти референтної рамки, визначеної властивістю {{cssxref("transform-box")}}.

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
            <p>
               Переклад не є лінійним перетворенням у ℝ^2 і не може бути представлене за допомогою матриці Декартових координат.
            </p>
         </td>
         <td>
            <math>
               <mrow>
                  <mo>(</mo>
                  <mtable>
                     <mtr>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mi>tx</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mi>ty</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                     </mtr>
                  </mtable>
                  <mo>)</mo>
               </mrow>
            </math>
         </td>
         <td rowspan="2">
            <math>
               <mrow>
                  <mo>(</mo>
                  <mtable>
                     <mtr>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mi>tx</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mi>ty</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                     </mtr>
                  </mtable>
                  <mo>)</mo>
               </mrow>
            </math>
         </td>
         <td rowspan="2">
            <math>
               <mrow>
                  <mo>(</mo>
                  <mtable>
                     <mtr>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mi>tx</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd
                           >
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mi>ty</mi>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd
                           >
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                     </mtr>
                     <mtr>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>0</mn>
                        </mtd>
                        <mtd>
                           <mn>1</mn>
                        </mtd>
                     </mtr>
                  </mtable>
                  <mo>)</mo>
               </mrow>
            </math>
         </td>
      </tr>
      <tr>
         <td><code>[1 0 0 1 tx ty]</code></td>
      </tr>
   </tbody>
</table>

### Формальний синтаксис

```css
translate({{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;length-percentage&gt;")}}?)
```

## Приклади

### Використання одновісного перекладу

#### HTML

```html
<div>Статичний</div>
<div class="moved">Переміщений</div>
<div>Статичний</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Рівносильно: translateX(10px) і translate(10px, 0) */
  transform: translate(10px);
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("vykorystannia-odnovisnoho-perekladu", 250, 250)}}

### Поєднання перекладу за осями X та Y

#### HTML

```html
<div>Статичний</div>
<div class="moved">Переміщений</div>
<div>Статичний</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Результат

{{EmbedLiveSample("poiednannia-perekladu-za-osiamy-x-ta-y", 250, 250)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
