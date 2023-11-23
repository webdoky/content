---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
page-type: css-property
browser-compat: css.properties.grid-template-columns
---

{{CSSRef}}

Властивість CSS **`grid-template-columns`** визначає імена ліній і функції калібрування доріжок {{glossary("grid column", "сіткових колонок")}}.

{{EmbedInteractiveExample("pages/css/grid-template-columns.html")}}

## Синтаксис

```css
/* Значення – ключове слово */
grid-template-columns: none;

/* Значення <track-list> */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* Значення <auto-track-list> */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [linename1] 100px [linename2]
  repeat(auto-fit, [linename3 linename4] 300px)
  100px;
grid-template-columns:
  [linename1 linename2] 100px
  repeat(auto-fit, [linename1] 300px) [linename3];

/* Глобальні значення */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Значення

- `none` (жодного)
  - : Вказує на те, що немає явної сітки. Усі колонки будуть породжені неявно, а їх розміри будуть визначені властивістю {{cssxref("grid-auto-columns")}}.
- `[linename]` (ім'я ряду)
  - : [`<custom-ident>`](/uk/docs/Web/CSS/custom-ident), що вказує ім'я для лінії в відповідному місці. Відступ може бути будь-яким дійсним рядком, окрім зарезервованих слів `span` і `auto`. Лінії можуть мати декілька імен, розділених пробілом, всередині квадратних дужок, наприклад: `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}} (довжина)
  - : Невід'ємна довжина, що задає ширину колонки.
- {{cssxref("&lt;percentage&gt;")}} (відсотки)
  - : Є невід'ємним значенням {{cssxref("percentage", "&lt;percentage&gt;")}}, відносним щодо рядного розміру контейнера сітки. Якщо розмір контейнера сітки залежить від розміру її доріжок, то відсотки мусять оброблятися як значення `auto`.
    Внутрішній розмір доріжки можна припасувати до розміру контейнера сітки й збільшити сумарний розмір доріжки на найменшу величину, котра дасть змогу відповідати відсотковому значенню.
- {{cssxref("&lt;flex&gt;")}}

  - : Є невід'ємною величиною з одиницею вимірювання `fr`, що задає флексфактор доріжки. Кожна доріжка з розмірністю `<flex>` займає частку решти простору, пропорційну її флексфактору.

    З'явившись поза записом `minmax()`, значення `<flex>` призводить до автоматичного мінімуму (тобто `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Є ключовим словом, що представляє [внесок максимального вмісту (англ.)](https://www.w3.org/TR/css-sizing-3/#max-content) елементів сітки, що займають доріжку сітки. Наприклад, якщо перший елемент доріжки сітки містить речення _"Repetitio est mater studiorum"_, а другий елемент містить речення _"Dum spiro, spero"_, то внесок максимального вмісту буде визначений розміром найбільшого речення з усіх елементів сітки – _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Є ключовим словом, що представляє [внесок мінімального вмісту (англ.)](https://www.w3.org/TR/css-sizing-3/#min-content) елементів сітки, що займають доріжку сітки. Наприклад, якщо перший елемент доріжки сітки містить речення _"Repetitio est mater studiorum"_, а другий елемент містить речення _"Dum spiro, spero"_, то внесок мінімального вмісту буде визначений розміром найбільшого слова з усіх речень в елементах сітки – _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Є функційним записом, що визначає діапазон розмірів, котрі більші чи дорівнюють _min_ і менші чи дорівнюють _max_. Якщо _max_ менше за _min_, то _max_ ігнорується, і функція обробляється як _min_. Значення`<flex>`, встановлене як максимум, задає флексфактор доріжки. Воно є недійсним, якщо задано як мінімум.
- `auto`

  - : Бувши встановленим як максимум, представляє найбільший розмір {{cssxref("max-content")}} елементів доріжки.

    Бувши встановленим як мінімум, представляє найбільший мінімальний розмір елементів доріжки (заданий за допомогою {{cssxref("min-width")}} і {{cssxref("min-height")}} елементів). Зазвичай це, хоч і не завжди, розмір {{cssxref("min-content")}}.

    Бувши застосованим поза записом {{cssxref("minmax", "minmax()")}}, `auto` представляє діапазон між мінімумом і максимумом, описаний вище. У більшості випадків поводиться подібно до `minmax(min-content,max-content)`.

    > **Примітка:** Розміри доріжок `auto` (і лише розміри доріжок `auto`) можуть бути розтягнені властивостями {{cssxref("align-content")}} і {{cssxref("justify-content")}}. Таким чином, усталено доріжка з розміром `auto` займатиме увесь незайнятий у контейнері сітки простір.

- `{{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`

  - : Представляє формулу `max(minimum, min(limit, max-content))`, де _minimum_ представляє мінімум `auto` (котрий нерідко, хоч і не завжди, рівний мінімумові {{cssxref("min-content")}}), а _limit_ – функція калібрування доріжки, передана як аргумент у fit-content(). По суті, обчислюється як менше серед `minmax(auto, max-content)` і `minmax(auto, limit)`.

- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Представляє повторюваний фрагмент списку доріжки й дає змогу визначити багато колонок, що утворюють циклічний патерн, у більш компактному вигляді.
- [`masonry`](/uk/docs/Web/CSS/CSS_grid_layout/Masonry_layout) {{Experimental_Inline}}
  - : Значення masonry вказує на те, що ця вісь повинна компонуватися згідно з алгоритмом кладки.
- [`subgrid`](/uk/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Значення `subgrid` вказує на те, що сітка займе за цією віссю розширену частку своєї батьківської сітки. Замість явного задання, розміри рядів і колонок сітки будуть взяті з означення батьківської сітки.

> **Застереження:** Значення `masonry` походить із Рівня 3 Специфікації сітки й наразі має лише експериментальну реалізацію в Firefox, приховану за прапорцем.
>
> Значення `subgrid` походить з Рівня 2 Специфікації сітки й наразі має реалізацію лише в Firefox, починаючи від версії 71.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання розмірів колонок сітки

#### HTML

```html
<div id="grid">
  <div id="areaA">А</div>
  <div id="areaB">Б</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample("zadannia-rozmiriv-kolonok-sitky", "100%", "20px")}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Пов'язані властивості CSS: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Посібник з сіткового компонування: _[Базові концепції сіткового компонування – сіткові доріжки](/uk/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#sitkovi-dorizhky)_
- Відеоурок: _[Визначення сітки (англ.)](https://gridbyexample.com/video/series-define-a-grid/)_
- [Subgrid](/uk/docs/Web/CSS/CSS_grid_layout/Subgrid)
