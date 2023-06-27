---
title: ":nth-child()"
slug: Web/CSS/:nth-child
page-type: css-pseudo-class
browser-compat: css.selectors.nth-child
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:nth-child()`** (дочірній номер N) дає збіг з елементами на основі їх позицій серед групи сестринських елементів.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-child.html", "tabbed-shorter")}}

> **Примітка:** В записі `element:nth-child()` підрахунок дочірніх елементів включає дочірні елементи усіх типів; проте збіг вважається збігом лише тоді, коли елемент _на відповідній дочірній позиції_ дає збіг з рештою компонент селектора.

## Синтаксис

`:nth-child()` приймає єдиний аргумент, що описує патерн для пошуку збігу серед індексів елементів у списку дочірніх. Індекси елементів починаються з 1.

```
:nth-child( <nth> [ of <complex-selector-list> ]? )
```

### Значення – ключові слова

- `odd` (непарний)
  - : Представляє елементи, чия числова позиція в наборі дочірніх елементів – непарна: 1, 3, 5 тощо.
- `even` (парний)
  - : Представляє елементи, чия числова позиція в наборі дочірніх елементів – парна: 2, 4, 6 тощо.

### Функційний запис

- `<An+B>`

  - : Представляє елементи, чий номер місця в наборі сестринських елементів дає збіг з патерном `An+B` для кожного невід'ємного значення `n`, де:

    - `A` – цілий числовий крок,
    - `B` – цілий числовий відступ,
    - `n` – всі невід'ємні цілі числа, починаючи від 0.

    Такий запис можна читати так: елемент списку номер `An+B`. І `A`, і `B` – мусять мати значення типу {{cssxref("&lt;integer&gt;")}}.

### Запис `of <selector>`

Шляхом передачі селектора як аргументу можна вибрати **nth** (n-ний) елемент, що відповідає цьому селектору. Наприклад, наступний селектор відповідає першим трьом елементам списку, які мають `class="important"`.

```css
:nth-child(-n+3 of li.important) ;
```

Це відрізняється від переміщення селектора за межі функції, як у наступному прикладі:

```css
li.important:nth-child(-n + 3) {
}
```

Цей селектор вибирає елементи списку, якщо вони є серед перших трьох дочірніх елементів і відповідають селектору `li.important`.

## Приклади

### Приклади селекторів

- `tr:nth-child(odd)` чи `tr:nth-child(2n+1)`
  - : Представляє непарні ряди таблиці HTML: 1, 3, 5 тощо.
- `tr:nth-child(even)` чи `tr:nth-child(2n)`
  - : Представляє парні ряди таблиці HTML: 2, 4, 6 тощо.
- `:nth-child(7)`
  - : Представляє сьомий елемент.
- `:nth-child(5n)`
  - : Представляє елементи номер **5** \[=5×1], **10** \[=5×2], **15** \[=5×3] **тощо.** Перше значення, повернене як результат формули, – **0** \[=5x0], що не дасть збігу, адже елементи індексуються від 1, тим часом `n` починається від 0. Це може здаватися, на перший погляд, дивним, але має більше змісту, коли врахувати, що частина формули `B` – `>0`, як в наступному прикладі.
- `:nth-child(n+7)`
  - : Представляє сьомий і всі наступні елементи: **7** \[=0+7], **8** \[=1+7], **9** \[=2+7] **тощо.**
- `:nth-child(3n+4)`
  - : Представляє елементи **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4] **тощо.**
- `:nth-child(-n+3)`
  - : Представляє перші три елементи. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Представляє кожний елемент `<p>` у групі сестринських елементів. Такий запис вибирає ті самі елементи, що й простий селектор `p` (але має вищу за нього специфічність).
- `p:nth-child(1)` чи `p:nth-child(0n+1)`
  - : Представляє кожний `<p>`, котрий є першим елементом в групі сестринських. Це те саме, що селектор {{cssxref(":first-child")}} (з такою само специфічністю).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Представляє елементи `<p>` в групі сестринських – від восьмого до п'ятнадцятого.

### Розгорнутий приклад

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, БЕЗ <code>&lt;em&gt;</code> серед дочірніх
  елементів.
</h3>
<p>Вибрані дочірні елементи 1, 3, 5 і 7.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, ІЗ <code>&lt;em&gt;</code> серед дочірніх
  елементів.
</h3>
<p>
  Вибрані дочірні елементи 1, 5 і 7.<br />
  3 враховується під час підрахунку, бо є дочірнім елементом, але не
  вибирається, бо не є <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>Це `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, ІЗ <code>&lt;em&gt;</code> серед дочірніх
  елементів.
</h3>
<p>
  Вибрані дочірні елементи 1, 4, 6 і 8.<br />
  3 не враховується при підрахунку і не вибирається, бо є
  <code>&lt;em&gt;</code>, а не <code>&lt;span&gt;</code>, і
  <code>nth-of-type</code> вибирає лише дочірні елементи відповідного типу.
  <code>&lt;em&gt;</code> повністю пропускається й ігнорується.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>Це `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid tomato;
  display: inline-block;
  margin-bottom: 3px;
}
```

```css
.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: tomato;
}
```

#### Результат

{{EmbedLiveSample('rozghornutyi-pryklad', 550, 550)}}

### Застосування 'of &lt;selector&gt;'

У цьому прикладі присутній невпорядкований список імен, деякі з яких були позначені (**noted**) за допомогою `class="noted"`. Вони були виділені товстою нижньою межею.

#### HTML

```html
<ul>
  <li class="noted">Найден</li>
  <li>Домінік</li>
  <li class="noted">Щастибог</li>
  <li>Арсена</li>
  <li>Наслава</li>
  <li>Йовілла</li>
  <li class="noted">Колодара</li>
  <li>Держислав</li>
  <li>Орест</li>
  <li class="noted">Віталія</li>
  <li>Георгій</li>
  <li>Уличан</li>
  <li>Феодосія</li>
  <li class="noted">Барбара</li>
  <li>Ілля</li>
  <li>Осипа</li>
  <li class="noted">Трояна</li>
  <li>Царук</li>
  <li>Колодій</li>
  <li class="noted">Ядвіга</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}
li {
  margin: 0.125rem;
  padding: 0.25rem;
}
li {
  border: 1px solid tomato;
}
.noted {
  border-bottom: 5px solid tomato;
}
```

В наступному CSS обираються **парні** елементи списку, які мають `class="noted"`.

```css
li:nth-child(even of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Результат

Елементи з `class="noted"` мають товсту нижню межу, а елементи 3, 10 і 17 мають суцільний фон, оскільки вони є _парними_ елементами списку з `class="noted"`.

{{EmbedLiveSample('zastosuvannia-of-selector', 550, 120)}}

### Запис of selector і запис selector nth-child

У цьому прикладі присутні два невпорядковані списки імен. Перший показує дію `li:nth-child(-n + 3 of .noted)`, а другий – дію `li.noted:nth-child(-n + 3)`.

#### HTML

```html
<ul class="one">
  <li class="noted">Найден</li>
  <li>Домінік</li>
  <li class="noted">Щастибог</li>
  <li>Арсена</li>
  <li>Наслава</li>
  <li>Йовілла</li>
  <li class="noted">Колодара</li>
  <li>Держислав</li>
  <li>Орест</li>
  <li class="noted">Віталія</li>
</ul>
<ul class="two">
  <li class="noted">Найден</li>
  <li>Домінік</li>
  <li class="noted">Щастибог</li>
  <li>Арсена</li>
  <li>Наслава</li>
  <li>Йовілла</li>
  <li class="noted">Колодара</li>
  <li>Держислав</li>
  <li>Орест</li>
  <li class="noted">Віталія</li>
</ul>
```

#### CSS

```css hidden
* {
  font-family: sans-serif;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}
li {
  margin: 0.125rem;
  padding: 0.25rem;
}
li {
  border: 1px solid tomato;
}
.noted {
  border-bottom: 5px solid tomato;
}
```

```css
ul.one > li:nth-child(-n + 3 of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
ul.two > li.noted:nth-child(-n + 3) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### Результат

Перший список застосовує стиль до перших трьох елементів списку, що мають `class="noted"`, незалежно від того, чи є вони першими трьома елементами списку загалом.

Другий список – застосовує стиль до елементів з `class="noted"`, якщо вони є серед перших трьох елементів списку.

{{EmbedLiveSample('zapys-of-selector-i-zapys-selector-nth-child', 550, 150)}}

### Використання of selector для виправлення смугастих таблиць

Звичайною практикою для таблиць є використання _зебрових смуг_ – чергування світлих і темних кольорів фону для рядків, що полегшує читання таблиць і робить їх більш доступними. Якщо рядок прихований, смуги зливаються – і ефект псується. У цьому прикладі показано дві таблиці з прихованим (`hidden`) рядком. Друга з них використовує `of :not([hidden])` для обробки прихованих рядків.

#### HTML

```html-nolint hidden
<div class="wrapper">
```

```html-nolint
<table class="broken">
  <thead>
    <tr><th>Ім'я</th><th>Вік</th><th>Країна</th></tr>
  </thead>
  <tbody>
    <tr><td>Зофія</td><td>23</td><td>Польща</td></tr>
    <tr><td>Олівія</td><td>48</td><td>США</td></tr>
    <tr hidden><td>Ноа</td><td>36</td><td>Великобританія</td></tr>
    <tr><td>Ноюс</td><td>27</td><td>Литва</td></tr>
    <tr><td>Амелія</td><td>55</td><td>Канада</td></tr>
    <tr><td>Лео</td><td>66</td><td>Фінляндія</td></tr>
  </tbody>
</table>
<table class="fixed">
  <thead>
    <tr><th>Ім'я</th><th>Вік</th><th>Країна</th></tr>
  </thead>
  <tbody>
    <tr><td>Зофія</td><td>23</td><td>Польща</td></tr>
    <tr><td>Олівія</td><td>48</td><td>США</td></tr>
    <tr hidden><td>Ноа</td><td>36</td><td>Великобританія</td></tr>
    <tr><td>Ноюс</td><td>27</td><td>Литва</td></tr>
    <tr><td>Амелія</td><td>55</td><td>Канада</td></tr>
    <tr><td>Лео</td><td>66</td><td>Фінляндія</td></tr>
  </tbody>
</table>
```

```html hidden
</div>
```

#### CSS

```css hidden
.wrapper {
  display: flex;
  justify-content: space-around;
}
td {
  padding: 0.125rem 0.5rem;
}
```

```css
.broken > tbody > tr:nth-child(even) {
  background-color: silver;
}
```

```css
.fixed > tbody > tr:nth-child(even of :not([hidden])) {
  background-color: silver;
}
```

#### Результат

У першій таблиці просто використовується `:nth-child(even)`. Третій рядок має атрибут `hidden`. Тому в цьому випадку третій рядок не видно, а другий і четвертий рядки вважаються парними, хоча візуально це не так.

У другій таблиці для вибору лише тих `tr`, які **не** приховані за допомогою `:nth-child(even of :not([hidden]))`, використовується _запис of_.

{{EmbedLiveSample('vykorystannia-of-selector-dlia-vypravlennia-smuhastykh-tablyts', 550, 180)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref(":nth-of-type")}}
- {{Cssxref(":nth-last-child")}}
