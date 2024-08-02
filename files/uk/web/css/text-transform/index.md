---
title: text-transform
slug: Web/CSS/text-transform
page-type: css-property
browser-compat: css.properties.text-transform
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`text-transform`** (перетворення тексту) задає регістр тексту елемента. Вона може застосовуватися для виведення тексту суто великими або суто малими літерами, або з кожним словом з великої літери. Також вона може покращити розбірливість рубі.

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

Властивість `text-transform` враховує специфічні для мови правила відображення, як то наступні:

- У тюркських мовах, як то турецькій (`tr`), азербайджанській (`az`), кримськотатарській (`crh`), татарській (`tt`) і башкирській (`ba`), є два різновиди `i`, з крапкою і без неї, і дві пари регістрів: `i`/`İ` і `ı`/`I`.
- У німецькій мові (`de`) `ß` у верхньому регістрі стає `SS`.
- У нідерландській мові (`nl`) диграф `ij` стає `IJ`, навіть із `text-transform: capitalize`, котра просто робить першу літеру слова великою.
- У грецькій мові (`el`) голосні літери втрачають наголос, коли усе слово постає з великих літер (`ά`/`Α`), окрім диз'юнктивної іти (`ή`/`Ή`). Крім цього, дифтонги з наголосом на першій голосній втрачають це наголос і набувають дієрезису на другій (`άι`/`ΑΪ`).
- У грецькій мові (`el`) мала літера сигма має два варіанти: `σ` і `ς`. `ς` вживається лише тоді, коли сигма стоїть в кінці слова. При застосуванні `text-transform: lowercase` до великої сигми (`Σ`) браузер мусить обрати правильний малий варіант на основі контексту.
- в ірландській мові (`ga`) частина префіксних літер залишається малими, коли базова перша літера стає великою, тож, наприклад, `text-transform: uppercase` перетворить `ar aon tslí` на `AR AON tSLÍ`, а не, як можна було б очікувати, на `AR AON TSLÍ` (лише в Firefox). У певних випадках переведення у верхній регістр також прибирає дефіс: `an t-uisce` перетворюється на `AN tUISCE` (причому дефіс коректно повертається із `text-transform: lowercase`).

Мова зазначається в атрибуті HTML [`lang`](/uk/docs/Web/HTML/Global_attributes/lang) або атрибуті XML [`xml:lang`](/uk/docs/Web/SVG/Attribute/xml:lang).

> [!NOTE]
> Підтримка специфічних щодо мов випадків – різна в різних браузерах, тож перевірте [таблицю сумісності з браузерами](#sumisnist-iz-brauzeramy).

## Синтаксис

```css
/* Значення – ключові слова */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* Глобальні значення */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`

  - : Ключове слово, котре перетворює кожну першу _літеру_ кожного слова на велику. Решта символів залишається як є (зберігає свій вихідний регістр, вписаний у текст елемента). Під літерою тут розуміється символ, котрий є частиною загальних категорій Unicode Літери й або Числа; таким чином, будь-які розділові знаки або символи на початку слів – ігноруються.

    > [!NOTE]
    > Не слід очікувати того, що `capitalize` виконуватиме специфічні для мови правила великих літер (як то пропуск артиклів у англійській).

    > [!NOTE]
    > Ключове слово `capitalize` було недостатньо специфіковано в CSS 1 та CSS 2.1. Це призвело до відмінностей між браузерами щодо того, як визначається перша літера (Firefox вважав `-` і `_` літерами, а інші браузери – ні. І WebKit, і Gecko помилково вважали символи на основі літер, як то `ⓐ`, справжніми літерами.) Чітко визначивши коректну логіку, специфікація Тексту CSS рівня 3 упорядковує цей безлад. Рядок `capitalize` у таблиці сумісності з браузерами містить версії рушіїв, з яких вони почали підтримувати таку чітко визначену логіку.

- `uppercase`
  - : Ключове слово, котре перетворює всі літери на великі.
- `lowercase`
  - : Ключове слово, котре перетворює всі літери на малі.
- `none`
  - : Ключове слово, котре запобігає зміні регістру всіх символів.
- `full-width`
  - : Ключове слово, котре примушує вписувати символи – перш за все ієрогліфи та латинські літери – у квадрат, даючи їм змогу вирівнятися щодо поширених у Східній Азії систем письма (як то китайської та японської).
- `full-size-kana`
  - : Це ключове слово загалом вживається для тексту анотацій {{htmlelement("ruby")}} і перетворює усі малі символи кана на рівносильні повнорозмірні кана, задля компенсування проблем розбірливості малих розмірів шрифту, що зазвичай використовуються в рубі.

## Доступність

Великі розділи тексту зі властивістю `text-transform` зі значенням `uppercase` може бути важко читати людям з когнітивними негараздами, як то дислексією.

- [MDN розуміння WCAG, пояснення Настанов 1.4](/uk/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C розуміння WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Формальний опис

{{CSSInfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Приклад з використанням "none"

```html
<p>
  Рядок на початку
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong><span>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</span></strong>
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

Це демонструє відсутність перетворення тексту.

{{EmbedLiveSample('pryklad-z-vykorystanniam-none', '100%', '100px')}}

### Приклад з використанням "capitalize" (загальний)

```html
<p>
  Рядок на початку
  <strong>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Це демонструє додавання до тексту великих літер

{{EmbedLiveSample('pryklad-z-vykorystanniam-capitalize-zahalnyi', '100%', '100px')}}

### Приклад з використанням "capitalize" (розділові знаки)

```html
<p>
  Рядок на початку
  <strong
    >(це) "є" [така] –собі– -перевірка- «роботи» *css* _text_ ¿transform?
    ?¡capitalize!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(це) "є" [така] –собі– -перевірка- «роботи» *css* _text_ ¿transform?
      ?¡capitalize!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Це демонструє те, як ігноруються розділові знаки на початку слів. Це ключове слово цілиться на першу літеру, котра є першим у слові символом Unicode, що є частиною категорії Літери або Числа.

{{EmbedLiveSample('pryklad-z-vykorystanniam-capitalize-rozdilovi-znaky', '100%', '100px')}}

### Приклад з використанням "capitalize" (символи)

```html
<p>
  Рядок на початку
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Це демонструє те, як ігноруються символи на початку. Це ключове слово цілиться на першу літеру, котра є першим у слові символом Unicode, що є частиною категорії Літери або Числа.

{{EmbedLiveSample('pryklad-z-vykorystanniam-capitalize-symvoly', '100%', '100px')}}

### Приклад з використанням "capitalize" (нідерландський диграф ij)

```html
<p>
  Рядок на початку
  <strong lang="nl"
    >Нідерландське слово: "ijsland" починається з диграфу.</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >Нідерландське слово: "ijsland" починається з диграфу.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

Це демонструє те, як нідерландський диграф _ij_ повинен оброблятися як одна літера.

{{EmbedLiveSample('pryklad-z-vykorystanniam-capitalize-niderlandskyi-dyhraf-ij', '100%', '100px')}}

### Приклад з використанням "uppercase" (загальний)

```html
<p>
  Рядок на початку
  <strong>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</strong>
</p>
<p>
  text-transform: uppercase
  <strong><span>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</span></strong>
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Це демонструє переведення тексту в верхній регістр.

{{EmbedLiveSample('pryklad-z-vykorystanniam-uppercase-zahalnyi', '100%', '100px')}}

### Приклад з використанням "uppercase" (грецькі голосні)

```html
<p>
  Рядок на початку
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

Це демонструє те, що грецькі голосні, окрім диз'юнктивної _іти_, не повинні мати наголосу, і наголос на першій з пари голосних стає дієрезисом на другій голосній.

{{EmbedLiveSample('pryklad-z-vykorystanniam-uppercase-hretski-holosni', '100%', '100px')}}

### Приклад з використанням "lowercase" (загальний)

```html
<p>
  Рядок на початку
  <strong>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span>Щастям б'єш жук їх глицю в фон й ґедзь пріч.</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Це демонструє переведення тексту в нижній регістр

{{EmbedLiveSample('pryklad-z-vykorystanniam-lowercase-zahalnyi', '100%', '100px')}}

### Приклад з використанням "lowercase" (грецька Σ)

```html
<p>
  Рядок на початку
  <strong
    >Σ – ЦЕ грецька ЛІТЕРА, котра КІЛЬКА РАЗІВ ЗУСТРІЧАЄТЬСЯ В ΟΔΥΣΣΕΥΣ.</strong
  >
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ – ЦЕ грецька ЛІТЕРА, котра КІЛЬКА РАЗІВ ЗУСТРІЧАЄТЬСЯ В ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Це демонструє те, як грецький символ сигми (`Σ`) перетворюється на звичайну малу сигму (`σ`) або на варіант для кінця слова (`ς`), залежно від контексту.

{{EmbedLiveSample('pryklad-z-vykorystanniam-lowercase-hretska-σ', '100%', '100px')}}

### Приклад з використанням "lowercase" (литовська мова)

```html
<p>
  Рядок на початку
  <strong>Ĩ – це литовська ЛІТЕРА, як і J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span lang="lt">Ĩ – це литовська ЛІТЕРА, як і J́</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

Це демонструє те, як литовські літери `Ĩ` і `J́` зберігають свої крапки, коли переводяться в нижній регістр.

{{EmbedLiveSample('pryklad-z-vykorystanniam-lowercase-lytovska-mova', '100%', '100px')}}

### Приклад з використанням "full-width" (загальний)

```html
<p>
  Рядок на початку
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Частина символів існує у двох форматах: нормальної та повної ширини, з різними кодовими точками Unicode. Повноширинна версія використовується для красивого їх вписування в текст на азійських ієрогліфах.

{{EmbedLiveSample('pryklad-z-vykorystanniam-full-width-zahalnyi', '100%', '175px')}}

### Приклад з використанням "full-width" (японська півширинна катакана)

```html
<p>
  Рядок на початку
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

Японська півширинна катакана вживалася для представлення катакани 8-бітними кодами символів. На відміну від звичайних (повноширинних) символів катакани, літера зі знаком дзвінкості представляється у вигляді двох кодових точок: тіла літери й знака дзвінкості. `full-width` поєднує їх в одну кодову точку, коли перетворює такі символи на повноширинні.

{{EmbedLiveSample('pryklad-z-vykorystanniam-full-width-iaponska-pivshyrynna-katakana', '100%', '175px')}}

### Приклад з використанням "full-size-kana"

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{EmbedLiveSample('pryklad-z-vykorystanniam-full-size-kana', '100%', '175px')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("font-variant")}}
