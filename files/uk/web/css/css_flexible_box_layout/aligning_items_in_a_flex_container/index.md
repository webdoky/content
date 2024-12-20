---
title: Вирівнювання елементів у гнучкому контейнері
slug: Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
page-type: guide
---

{{CSSRef}}

Одна з причин такої корисності флексбоксу – те, що він дає змогу як слід вирівнювати елементи, а також надає швидкий спосіб вертикального центрування елементів. У цьому посібнику детально розглядається те, як у флексбоксі працюють властивості вирівнювання.

## Застосування вирівнювання у флексбоксі

Флексбокс надає кілька властивостей для контролю вирівнювання та проміжків, а `align-items` та `justify-content` – основа для центрування елементів. Аби центрувати елемент, використовується властивість {{cssxref("align-items")}}, щоб вирівняти його на {{glossary("cross axis", "поперечній осі")}}, котра в цьому випадку є [блоковою віссю](/uk/docs/Glossary/Flow_relative_values), що йде по вертикалі. Використовується {{cssxref("justify-content")}}, щоб вирівняти елемент на головній осі, котра в цьому випадку є рядною віссю, що йде по горизонталі.

![Поперечна вісь – це вертикальна вісь, а головна вісь – це горизонтальна вісь.](align1.png)

Змініть розмір контейнера чи вкладеного елемента в кодовому прикладі нижче. Вкладений елемент завжди залишається по центру.

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
}
.box div {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("intro")}}

## Властивості для контролю вирівнювання у флексбоксі

У цих настановах розглядаються наступні властивості:

- {{cssxref("justify-content")}}: Керує вирівнюванням всіх елементів на головній осі.
- {{cssxref("align-items")}}: Керує вирівнюванням всіх елементів на поперечній осі.
- {{cssxref("align-self")}}: Керує вирівнюванням окремого гнучкого елемента на поперечній осі.
- {{cssxref("align-content")}}: Керує простором між гнучкими лініями на поперечній осі.
- {{cssxref("gap")}}, {{cssxref("column-gap")}} та {{cssxref("row-gap")}}: Використовуються для створення вертикальних і горизонтальних розривів між гнучкими елементами.

Іще одна тема для розгляду – те, як автоматичні зовнішні поля можуть бути використані для вирівнювання у гнучких контейнерах.

## Вирівнювання елементів на поперечній осі

Властивість {{cssxref("align-items")}}, коли задана на гнучкому контейнері, і властивість {{cssxref("align-self")}}, коли задана на гнучких елементах, керують вирівнюванням гнучких елементів на поперечній осі. Поперечна вісь йде вздовж стовпців, якщо {{cssxref("flex-direction")}} – `row`, і вздовж рядів, якщо `flex-direction` – `column`.

У цьому базовому гнучкому прикладі використовується вирівнювання на поперечній осі. Коли до контейнера додається `display: flex`, дочірні елементи стають гнучкими елементами, вишикуваними в ряд. Усталено вони всі розтягуються, щоб відповідати висоті найвищого елемента, оскільки саме він визначає висоту елементів на поперечній осі. Якщо гнучкий контейнер має задану висоту, то елементи розтягуються до цієї висоти, незалежно від того, скільки вмісту в кожному з них.

![Три елементи, один з яких має додатковий текст, внаслідок чого є вищим за решту.](align2.png)

![Три елементи, розтягнені до 200 пікселів висоти кожен](align3.png)

Причиною того, що елементи отримують однакову висоту, є те, що початкове значення `align-items`, властивості, котра керує вирівнюванням на поперечній осі, – `stretch` (розтягування).

Можна використати інші значення, аби керувати вирівнюванням елементів:

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

У прикладі нижче значення `align-items` – `stretch`. Спробуйте інші значення і перевірте, як елементи шикуватимуться відносно одне одного у flex-контейнері.

```html live-sample___align-items
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три <br />має <br />додатковий <br />текст</div>
</div>
```

```css live-sample___align-items
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}
.box div {
  width: 100px;
  height: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### Вирівнювання одного певного елемента за допомогою `align-self`

Властивість `align-items` встановлює значення властивості `align-self` на всіх гнучких елементах як на групі. Отже, можна явно оголосити властивість {{cssxref("align-self")}}, аби точково вплинути на один елемент. Властивість `align-self` приймає такі ж значення, як `align-items`, і на додачу – `auto`, котре скидає значення до визначеного гнучким контейнером.

У наступному живому прикладі гнучкий контейнер має `align-items: flex-start`, тобто всі елементи вирівнюються до початку поперечної осі. За допомогою селектора `first-child` першому елементу задано `align-self: stretch`. Іншому елементу з класом `selected` задано `align-self: center`. Змініть значення `align-items` або значення `align-self` на окремих елементах, щоб побачити, як це працює.

```html live-sample___align-self
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div class="selected">Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___align-self
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self", "", "250px")}}

### Переміна головної осі

Досі розглядалась логіка вирівнювання, коли `flex-direction` має усталене значення `row`, а мова написання тексту – зверху вниз, з горизонтальною головною віссю та вертикальною поперечною віссю.

Коли `flex-direction` задано `column`, головна вісь стає вертикальною, а поперечна – горизонтальною. Властивості `align-items` та `align-self` вирівнюють елементи вздовж поперечної осі, котра тепер горизонтальна!

![Три елементи, серед котрих перший вишикуваний до початку гнучкого контейнера, другий – до центру, третій – до кінця гнучкого контейнера. Вирівнювання на вертикальній осі.](align4.png)

Коли зберігається той той самий напрям письма, але `flex-direction` змінено на `column`, властивості `align-items` та `align-self` вирівнюють елементи ліворуч та праворуч замість верху та низу; ці властивості й далі вирівнюють елементи вздовж поперечної осі, але поперечна ось тепер горизонтальна!

![Три елементи, серед яких перший вишикуваний до початку гнучкого контейнера, другий – до центру, третій – до кінця гнучкого контейнера. Вирівнювання на горизонтальній осі.](align5.png)

В прикладі нижче можна це спробувати у гнучкому контейнері із `flex-direction: column`, що у решті є ідентичним до попереднього прикладу.

```html live-sample___align-self-column
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div class="selected">Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___align-self-column
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self-column", "", "300px")}}

## Вирівнювання вмісту на поперечній осі за допомогою властивості `align-content`

Досі йшлося переважно про вирівнювання усіх елементів або окремих елементів усередині області, визначеної {{glossary("flex_container", "гнучким контейнером")}}, що містить одну лінію гнучких елементів. Коли гнучким елементам дозволяється переноситися на кілька ліній, властивість {{cssxref("align-content")}} може бути використана для керування розподілом простору між цими лініями, що також відомо як **пакування гнучких ліній**.

Щоб діяла `align-content`, довжина поперечної осі (в цьому випадку – висота) гнучкого контейнера повинна бути більшою, ніж потрібно для показу елементів. Далі вона працює на всіх елементах як єдиному цілому. Значення `align-content` визначають, що відбувається з рештою доступного простору, та вирівнювання всіх елементів у контейнері.

Властивість `align-content` приймає наступні значення:

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: start`
- `align-content: end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: space-evenly`
- `align-content: stretch`
- `align-content: normal` (behaves as `stretch`)
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

У живому прикладі нижче гнучкий контейнер має висоту `400 пікселів`, а це більше, ніж потрібно для показу елементів. Значення `align-content` – `space-between`, тож доступний простір розподілений _між_ гнучкими рядами, котрі розташовані рівномірно між початком та кінцем контейнера на поперечній осі.

Спробуйте інші значення і перевірте, як працює властивість `align-content`.

```html live-sample___align-content
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
  <div>П'ять</div>
  <div>Шість</div>
  <div>Сім</div>
  <div>Вісім</div>
</div>
```

```css live-sample___align-content
.box {
  width: 450px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content", "", "380px")}}

Іще раз повернімось до значення `flex-direction` `column`, аби перевірити, як ця властивість поводиться при роботі з колонками. Як і раніше, потрібно більше простору на поперечній осі, щоб мати трохи вільного місця, не зайнятого елементами.

```html live-sample___align-content-column
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
  <div>П'ять</div>
  <div>Шість</div>
  <div>Сім</div>
  <div>Вісім</div>
</div>
```

```css live-sample___align-content-column
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 300px;
  align-content: space-between;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content-column", "", "380px")}}

## Вирівнювання вмісту на головній осі

Після вирівнювання на поперечній осі – варто розглянути головну ось. Для вирівнювання на ній доступна єдина властивість — `justify-content`. Причина цього – те, що на головній осі елементи обробляються лише як група. За допомогою `justify-content` можна керувати тим, що відбувається із доступним простором, якщо доступно більше простору, ніж необхідно для показу елементів.

У прикладі вище з `display: flex` на контейнері елементи показані як ряд, вишикуваний на початку контейнера. Так відбувається, тому що початкове значення `justify-content` – `normal`, яке поводиться неначе `start`. Будь-який доступний додатковий простір залишається в кінці ряду елементів.

![Три елементи, кожен 100 пікселів завширшки, у 500-піксельному контейнері. Доступний простір – в кінці ряду елементів.](align6.png)

Значення `baseline` на цій осі не має жодного змісту. В решті властивість `justify-content` приймає ті ж значення, що й `align-content`.

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: start`
- `justify-content: end`
- `justify-content: left`
- `justify-content: right`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: space-evenly`
- `justify-content: stretch` (поводиться як start)
- `justify-content: normal` (поводиться як stretch, яке поводиться як start)

У прикладі нижче значення `justify-content` – `space-between`. Доступний простір, не зайнятий елементами, розподілений у проміжках між елементами. Крайній лівий та правий елементи розташовані безпосередньо на початку та в кінці рядка, відповідно.

```html live-sample___justify-content
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___justify-content
.box {
  display: flex;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content")}}

Якщо головна вісь збігається із блоковим напрямком (значення `flex-direction` – `column`), то `justify-content` розподілятиме простір між елементами у відповідному вимірі доти, доки у гнучкому контейнері більше не залишиться простору для розподілу.

```html live-sample___justify-content-column
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___justify-content-column
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-column", "", "380px")}}

### Вирівнювання та напрямки письма

Не забуваймо, що для усіх методів вирівнювання дія значень `start` та `end` залежить від режиму письма. Якщо значення `justify-content` – `flex-start`, а режим письма – зліва направо, як в українській мові, то елементи будуть шикуватися з лівого боку контейнера.

![Три елементи, вишикувані зліва](basics5.png)

Втім, якщо режим письма – справа наліво, як в арабській мові, елементи шикуватимуться починаючи з правого боку контейнера.

![Три елементи, вишикувані справа](basics6.png)

Живий приклад нижче має властивість `direction`, встановлену у значення `rtl`, щоб примусити елементи до плину справа наліво. Це можна прибрати, або встановити значення властивості `justify-content`, щоб перевірити поведінку flexbox в умовах, коли початок рядків знаходиться справа.

```html live-sample___justify-content-writing-mode
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___justify-content-writing-mode
.box {
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-writing-mode")}}

## Вирівнювання та `flex-direction`

Напрям `start` лінії також зміниться, якщо змінити властивість `flex-direction`, наприклад, задавши `row-reverse` замість `row`.

У наступному прикладі `flex-direction: row-reverse` і `justify-content: flex-end` визначають напрямок та місце розташування елементів у гнучкому контейнері. Для мови зліва направо елементи вишиковуються зліва. Спробуйте змінити `flex-direction: row-reverse` на `flex-direction: row`. Ви побачите, що елементи перемістяться на правий бік, а візуальний порядок елементів зміниться на протилежний.

```html live-sample___justify-content-reverse
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
</div>
```

```css live-sample___justify-content-reverse
.box {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-reverse")}}

Це може трохи спантеличувати, втім, слід запам'ятати правило: поки не вказано інакше, гнучкі елементи розкладаються у тому напрямку, в якому ставлять літери тієї мови, яку має документ в цілому, вздовж рядкової, горизонтальної осі. `start` і `flex-start` будуть там, де почалось би речення тексту.

![Діаграма, що показує початок зліва та кінець справа.](align8.png)

Можна перемкнутись на показ у блоковому (вертикальному) напрямку для мови документа, встановивши `flex-direction: column`. Тоді `start` і `flex-start` будуть там, де був би верх першого абзацу тексту.

![Діаграма, що показує початок згори й кінець внизу.](align10.png)

Якщо змінити `flex-direction` на одне зі зворотних значень, то елементи розставлятимуться починаючи від кінця осі у зворотному порядку до написання слів мовою документа. Надалі `start` і `flex-start` означатимуть кінець тієї осі – тож місце, де б відбувалось перенесення (при роботі з рядами), або кінець останнього параграфа тексту (при роботі з колонками).

![Діаграма, що показує початок справа і кінець зліва.](align9.png)

![Діаграма, що показує кінець згори й початок знизу](align11.png)

## Використання автоматичних зовнішніх полів для вирівнювання головної осі

Немає властивостей `justify-items` чи `justify-self` на головній осі, оскільки елементи на цій осі обробляються як єдина група. Втім, можливо виконати певне окреме вирівнювання для відділення елемента чи групи елементів від решти за допомогою автоматичних зовнішніх полів вкупі із flexbox.

Загальноприйнятим патерном є панель навігації, на котрій певні ключові елементи вишикувані до правого краю, а головна група – до лівого. Можна було б припустити, це має бути приклад використання властивості `justify-self`. Однак погляньмо на зображення нижче. Наприклад, розгляньмо зображення нижче, з трьома елементами з одного боку та двома з іншого. Якби властивість `justify-self` працювала на гнучких елементах і була задана на елементі _d_, вона також змінила б вирівнювання елемента _e_, який іде наступним, що може бути як доречним, так і небажаним.

![П'ять елементів у двох групах. Три зліва, два справа.](align7.png)

Замість цього елемент _d_ можна зсунути вправо за допомогою зовнішніх полів CSS.

У цьому живому прикладі елемент 4 відділений від перших трьох елементів шляхом задання {{cssxref("margin-left")}} зі значенням `auto`, що займає ввесь доступний простір на своїй осі. Саме так працює центрування блоку за допомогою {{cssxref("margin")}} auto зліва та справа. Кожен бік намагається зайняти якомога більше простору, тому блок виштовхується в середину.
У цьому живому прикладі гнучкі елементи вишикувані в ряд з базовими значеннями flex, а клас `push`, заданий для четвертого елемента, застосовує до нього `margin-left: auto`. Спробуйте видалити клас для четвертого елемента або додати його до іншого елемента, щоб побачити, як це працює.

```html live-sample___auto-margins
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div class="push">Чотири</div>
  <div>П'ять</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## Утворення розривів між елементами

Щоб створити розрив між гнучкими елементами, слід використати властивості {{cssxref("gap")}}, {{cssxref("column-gap")}} та {{cssxref("row-gap")}}. Властивість {{cssxref("column-gap")}} утворює розриви між елементами в ряду. Властивість {{cssxref("row-gap")}} утворює розриви між гнучкими рядами, коли властивість {{cssxref("flex-wrap")}} має значення `wrap`.

Властивість {{cssxref("gap")}} – це скорочення, що задає і `row-gap`, і `column-gap`.
Розрив між гнучкими елементами або між гнучкими лініями залежить від напрямку. Якщо властивість {{cssxref("flex-direction")}} утворює ряди, то перше значення визначає розрив між гнучкими лініями, а друге – між елементами всередині кожної лінії. У випадку колонок (коли `flex-direction` задано `column` або `column-reverse`), перше значення визначає розрив між гнучкими елементами, а друге – між гнучкими лініями.

```html live-sample___gap
<div class="box">
  <div>Один</div>
  <div>Два</div>
  <div>Три</div>
  <div>Чотири</div>
  <div>П'ять</div>
  <div>Шість</div>
</div>
```

```css live-sample___gap
.box {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}
.box > * {
  flex: 1;
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gap")}}

## Дивіться також

- Модуль [Рамкового вирівнювання CSS](/uk/docs/Web/CSS/CSS_box_alignment)
- Модуль [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)
- [Рамкове вирівнювання у флексбоксі](/uk/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Рамкове вирівнювання в сітковому компонуванні](/uk/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
