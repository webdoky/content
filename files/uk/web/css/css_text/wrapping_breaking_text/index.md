---
title: Переведення на новий рядок і розривання тексту
slug: Web/CSS/CSS_text/Wrapping_breaking_text
page-type: guide
---

{{CSSRef}}

Цей посібник пояснює різні способи того, як можна в CSS спрямувати переповнений текст.

## Що таке переповнений текст?

У CSS, коли є нерозривний рядок, як то дуже довге слово, то усталено такий рядок вилізе за межі будь-якого контейнера, котрий замалий для цього рядка за рядковою віссю. Це можна спостерігати в прикладі нижче: довге слово простягається за межі рамки, в котрій вміщено.

```html live-sample___inline-overflow
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("inline-overflow")}}

CSS покаже переповнення саме так, тому що якась інша поведінка могла б призвести до втрати даних. У CSS втрата даних означає, що частина вмісту зникає. Тож початкове значення {{cssxref("overflow")}} – `visible`, і переповнений текст можна бачити. Загалом краще мати змогу помітити переповнення, навіть якщо це має неохайний вигляд. Якби речі зникали або обрізалися, що сталося б, якби `overflow` мала значення `hidden`, то цього можна було б не помітити при попередньому перегляді сайту. Неохайне переповнення принаймні легко помітити, і в найгіршому випадку відвідувач матиме змогу побачити й прочитати вміст, навіть якщо він буде дещо дивним на вигляд.

У наступному прикладі можна побачити, що буде, якщо `overflow` отримає значення `hidden`.

```html live-sample___inline-overflow-hidden
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___inline-overflow-hidden
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow: hidden;
}
```

{{EmbedLiveSample("inline-overflow-hidden")}}

## Знаходження розміру min-content

Для знаходження мінімального розміру рамки, котра вмістить свій вміст без переповнень, слід задати властивості рамки {{cssxref("width")}} і {{cssxref("inline-size")}} з однаковим значенням – {{cssxref("min-content")}}.

```html live-sample___min-content
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___min-content
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: min-content;
}
```

{{EmbedLiveSample("min-content")}}

Застосування `min-content`, таким чином, є одним з варіантів роботи з рамками переповнення. Якщо можливо дозволити рамці зростати до мінімального розміру, необхідного вмістові, але не більше, то застосування цього ключового слова дасть саме такий розмір.

## Розривання довгих слів

Коли треба, аби рамка мала фіксований розмір, або коли треба пересвідчитись, що довгі слова не будуть вилазити за край, то може стати в пригоді властивість {{cssxref("overflow-wrap")}}. Вона розриває слово, коли воно задовге, аби вміститися в рядок саме по собі.

```html live-sample___overflow-wrap
<div class="box">
  Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___overflow-wrap
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("overflow-wrap")}}

> [!NOTE]
> Властивість `overflow-wrap` діє так само, як нестандартна властивість `word-wrap`. Властивість `word-wrap` нині обробляється браузерами як псевдонім для її стандартного аналога.

Альтернативна властивість, котру можна спробувати – {{cssxref("word-break")}}. Вона розриває слово у тій точці, в якій починається переповнення. Вона також збереже його цілим, якщо розміщення слова на новому рядку дозволить показати його без розриву.

У наступному прикладі можна порівняти дію цих двох властивостей на однакові рядки тексту.

```html live-sample___word-break
<div class="box box1">A Very LongWordThatHasNoBreakingPossibilities</div>
<div class="box box2">A Very LongWordThatHasNoBreakingPossibilities</div>
```

```css live-sample___word-break
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 30ch;
  margin-block-end: 1em;
}
.box1 {
  word-break: break-all;
}
.box2 {
  overflow-wrap: break-word;
}
```

{{EmbedLiveSample("word-break", "", "210px")}}

Це може бути корисним, коли треба запобігти появі великої прогалини, коли для рядка недостатньо місця. Або коли є інший елемент, зразу після якого не хочеться робити розрив.

У прикладі нижче є поле для галочки та підпис. Скажімо, вам хочеться, аби підпис розривався, якщо він задовгий для рамки. Проте не хочеться, аби розрив відбувався зразу після поля.

```html live-sample___word-break-checkbox
<div class="field">
  <input id="one" type="checkbox" /><label for="one">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>
<div class="field field-br">
  <input id="two" type="checkbox" /><label for="two">
    LongWordThatHasNoBreakingPossibilities
  </label>
</div>
```

```css live-sample___word-break-checkbox
.field {
  inline-size: 150px;
  border: 1px solid #ccc;
  margin-block-end: 1em;
  padding: 10px;
}
.field-br {
  word-break: break-all;
}
```

{{EmbedLiveSample("word-break-checkbox", "", "210px")}}

## Додавання дефісів

Для додавання дефісів при розриві слів, слід застосувати властивість CSS {{cssxref("hyphens")}}. При застосуванні значення `auto` браузер вільний автоматично розривати слова у відповідних точках для дефісів, згідно з будь-якими правилами, які він обере. Щоб мати якийсь контроль над цим процесом, можна задати значення `manual`, а тоді вставити в рядок символ жорсткого (U+2010) або м'якого (U+00AD) розриву. A hard break character can be added using `‐` or `&#x2010;`, and a soft break character can be added using the `&shy;`, `&#173;`, or `&#xad;` HTML character codes. Жорсткий розрив завжди відбудеться, навіть коли це не обов'язково. М'який розрив (`&shy;`) відбувається лише тоді, коли розрив потрібен.

```html live-sample___hyphens
<div class="box">
  Llanfair&shy;pwllgwyngyll&shy;gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___hyphens
.box {
  inline-size: 150px;
  overflow-wrap: break-word;
  hyphens: manual;
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
}
```

{{EmbedLiveSample("hyphens")}}

Також можна вжити властивість {{cssxref("hyphenate-character")}}, щоб в кінці рядка (перед розривом) використовувався вибраний рядок, а не усталений для конкретної мови символ дефіса. Значення `auto` обирає правильне значення для позначення розриву слова згідно з типографічними поняттями поточної мови вмісту.

CSS надає додатковий контроль над дефісами: властивість {{cssxref("hyphenate-limit-chars")}} може бути використана для задання мінімальної довжини слова, яка дозволяє додавання дефіса, а також мінімальної кількості символів перед і після дефіса.

## Елемент `<wbr>`

Коли відомо, де довгий рядок повинен бути розірваний, то також можна вставити елемент HTML {{HTMLElement("wbr")}}. Це може бути корисно випадках штибу виведення на сторінці довгого URL. Потім можна додати властивість, аби розірвати рядок в доречних місцях, аби його було легше читати.

У прикладі нижче текст розривається в місці розташування {{HTMLElement("wbr")}}.

```html live-sample___wbr
<div class="box">
  Llanfair<wbr />pwllgwyngyll<wbr />gogerychwyrndrobwllllantysiliogogogoch
</div>
```

```css live-sample___wbr
.box {
  border: 4px solid #f76707;
  border-radius: 5px;
  padding: 10px;
  inline-size: 150px;
}
```

{{EmbedLiveSample("wbr")}}

## Дивіться також

- Елемент HTML {{HTMLElement("wbr")}}
- Властивість CSS {{cssxref("word-break")}}
- Властивість CSS {{cssxref("overflow-wrap")}}
- Властивість CSS {{cssxref("white-space")}}
- Властивість CSS {{cssxref("text-wrap")}}
- Властивість CSS {{cssxref("hyphens")}}
- Властивість CSS {{cssxref("hyphenate-character")}}
- Властивість CSS {{cssxref("hyphenate-limit-chars")}}
- [Переповнювання і втрата даних у CSS](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
