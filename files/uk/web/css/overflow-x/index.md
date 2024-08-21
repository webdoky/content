---
title: overflow-x
slug: Web/CSS/overflow-x
page-type: css-property
browser-compat: css.properties.overflow-x
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`overflow-x`** (переливання X) задає те, що виводиться, коли вміст переливається через лівий і правий краї елемента блокового рівня. Це може бути або нічого, або смуга прокручення, або вміст, що переливається. Ця властивість також може бути задана за допомогою властивості-скорочення [`overflow`](/uk/docs/Web/CSS/overflow).

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## Синтаксис

```css
/* Значення – ключові слова */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* Глобальні значення */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

Властивість `overflow-x` задається у вигляді єдиного значення – ключового слова {{CSSXref("overflow_value", "&lt;overflow&gt;")}}.

Якщо {{cssxref("overflow-y")}} має значення `hidden`, `scroll` або `auto` а `overflow-x` – `visible` (усталене значення), то це значення неявно буде обчислено як `auto`.

### Значення

- `visible` (видимий)
  - : Вміст, що не вміщається, не обрізається і може бути видимим за межами рамки внутрішніх полів елемента з лівого та правого боків. Рамка елемента не є {{glossary("scroll container", "прокрутним контейнером")}}.
- `hidden` (прихований)
  - : Вміст, що не вміщається, обрізається, якщо це необхідно, аби вмістити його в рамку внутрішніх відступів елемента по горизонталі. Смуг прокручення немає.
- `clip` (обрізати)
  - : Вміст, що не вміщається, обрізається в межах _краю обрізання надлишку_ елемента, котрий заданий за допомогою властивості [`overflow-clip-margin`](/uk/docs/Web/CSS/overflow-clip-margin). Як наслідок, вміст переповнює рамку внутрішніх полів елемента на значення {{cssxref("&lt;length&gt;")}} властивості `overflow-clip-margin`, або на `0px`, якщо ця властивість не задана. Різниця між `clip` і `hidden` полягає в тому, що ключове слово `clip` також забороняє будь-яке прокручення, ігноруючи програмне прокручення. Новий контекст форматування не створюється. Аби створити контекст форматування, слід скористатися `overflow: clip` вкупі з {{cssxref("display", "display: flow-root", "#flow-root")}}. Рамка елемента не є прокрутним контейнером.
- `scroll` (прокручувати)
  - : Вміст, що не вміщається, обрізається, якщо це необхідно, аби вмістити його в рамку внутрішніх відступів елемента по горизонталі. Браузери показують смуги прокручення в горизонтальному напрямку, незалежно від того, чи був будь-який вміст фактично обрізаний. (Це не дає смугам прокручення з'являтися та зникати у разі змін вмісту.) Принтери можуть все ж надрукувати вміст, що не вмістився.
- `auto` (автоматично)
  - : Вміст, що не вміщається, обрізається в межах рамки внутрішніх полів елемента, але до нього можна докрутити за допомогою смуг прокручення. На відміну від `scroll`, користувацькі агенти показують смуги прокручення, _лише якщо_ вміст не вміщається. Якщо вміст вписується в рамку внутрішніх полів елемента, то він виглядає так само, як і з ключовим словом `visible`, але все одно створює новий контекст форматування. Настільні браузери показують смуги прокручення, якщо вміст переливається через край.

> [!NOTE]
> Ключове значення `overlay` є історичним псевдонімом `auto`. З `overlay` смуги прокручення малюються поверх вмісту, замість того, щоб займати простір.

## Формальне визначення

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### HTML

```html
<ul>
  <li>
    <code>overflow-x:hidden</code> — приховує текст поза рамкою
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:scroll</code> — завжди додає смугу прокручення
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code> — показує текст за межами рамки, якщо це
    необхідно
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code> — у більшості браузерів рівносильно
    <code>scroll</code>
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}
#div2 {
  overflow-x: scroll;
}
#div3 {
  overflow-x: visible;
}
#div4 {
  overflow-x: auto;
}
```

### Результат

{{EmbedLiveSample("pryklady", "100%", "270")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- Модуль [Переповнення CSS](/uk/docs/Web/CSS/CSS_overflow)
- [Цеглинки CSS: Вміст, що переливається через край](/uk/docs/Learn/CSS/Building_blocks/Overflowing_content)
