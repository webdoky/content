---
title: <percentage>
slug: Web/CSS/percentage
page-type: css-type
browser-compat: css.types.percentage
---

{{CSSRef}}

[Тип даних](/uk/docs/Web/CSS/CSS_Types) [CSS](/uk/docs/Web/CSS) **`<percentage>`** (відсотки) представляє відсоткове значення. Він нерідко використовується для визначення розмірів, відносних щодо батьківського елемента. Чимало властивостей використовують відсотки, серед них {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}} і {{CSSxRef("font-size")}}.

> **Примітка:** Лише обчислені значення можуть успадкуватися. Таким чином, навіть коли відсоткове значення використовується у батьківській властивості, в успадкованій властивості буде доступно реальне значення (як то ширина в пікселях для значення {{CSSxRef("&lt;length&gt;")}}), а не відсоткове.

## Синтаксис

Тип даних `<percentage>` складається з {{CSSxRef("&lt;number&gt;")}}, після якого стоїть знак процента (`%`). Перед цим може (необов'язково) стояти один знак `+` або `-`, хоч від'ємні значення чинні не для всіх властивостей. Як і для всіх розмірів CSS, між символом і числом пробілів бути не повинно.

## Інтерполяція

При анімації значення типу даних `<percentage>` {{Glossary("interpolation", "інтерполюються")}} як дійсні числа з рухомою комою. Швидкість інтерполяції визначається [функцією пом'якшення](/uk/docs/Web/CSS/easing-function), зв'язаною з анімацією.

## Приклади

### Ширина і лівий зовнішній відступ

```html
<div style="background-color:navy;">
  <div style="width:50%; margin-left:20%; background-color:chartreuse;">
    Ширина: 50%, Лівий зовнішній відступ: 20%
  </div>
  <div style="width:30%; margin-left:60%; background-color:pink;">
    Ширина: 30%, Лівий зовнішній відступ: 60%
  </div>
</div>
```

Наведений вище HTML виведе:

{{EmbedLiveSample('shyryna-i-livyi-zovnishnii-vidstup', '600', 140)}}

### Font-size

```html
<div style="font-size:18px;">
  <p>Повнорозмірний текст (18px)</p>
  <p><span style="font-size:50%;">50% (9px)</span></p>
  <p><span style="font-size:200%;">200% (36px)</span></p>
</div>
```

Наведений вище HTML виведе:

{{EmbedLiveSample('font-size', 'auto', 160)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("&lt;length-percentage&gt;")}}
- [Значення та одиниці вимірювання CSS](/uk/docs/Web/CSS/CSS_Values_and_Units)
