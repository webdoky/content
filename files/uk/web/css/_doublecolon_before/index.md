---
title: "::before"
slug: Web/CSS/::before
page-type: css-pseudo-element
browser-compat: css.selectors.before
---

{{CSSRef}}

У CSS **`::before`** (перед, до) створює [псевдоелемент](/uk/docs/Web/CSS/Pseudo-elements), який додається перед вибраним елементом. Його часто застосовують для вставлення в елемент декоративного контенту за допомогою властивості {{cssxref("content")}}. Усталено він є рядковим (inline) елементом.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-before.html", "tabbed-standard")}}

> [!NOTE]
> Псевдоелементи, створені за допомогою `::before` та `::after`, є блоками, які генеруються так, ніби вони є безпосередніми дочірніми елементами того елемента, до якого застосовані, або "елемента, що породжує". Таким чином, вони не можуть бути застосовані до _[заміщених елементів](/uk/docs/Web/CSS/Replaced_element)_, як-от {{htmlelement("img")}}, вміст яких перебуває поза межами моделі форматування CSS.

## Синтаксис

```css-nolint
::before {
  content: /* значення */;
  /* властивості */
}
```

Якщо властивість [`content`](/uk/docs/Web/CSS/content) не задана, має невалідне значення або має значення `normal` чи `none`, то псевдоелемент `::before` не відображається. Він тоді поводиться так, ніби йому задано `display: none`.

> [!NOTE]
> У специфікації [Селекторів рівня 3](https://drafts.csswg.org/selectors-3/#gen-content) було введено подвійне двокрапкове позначення `::before`, щоб відрізняти [псевдокласи](/uk/docs/Web/CSS/Pseudo-classes) від [псевдоелементів](/uk/docs/Web/CSS/Pseudo-elements). Браузери також підтримують позначення з однією двокрапкою `:before`, яке було запроваджене в CSS2.

## Доступність

Не рекомендується використовувати псевдоелемент `::before` для додавання контенту, оскільки його доступність для читачів з екрана не є надійною.

## Приклади

### Додавання лапок

Приклад використання псевдоелементів `::before` і {{Cssxref("::after")}} — додавання лапок. Скористаємось псевдоелементами, щоб додати символи лапок.

#### HTML

```html
<q>Декілька цитат</q>, — сказав він, <q>краще, ніж жодної.</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### Результат

{{EmbedLiveSample('dodavannia-lapok', '500', '50')}} ?

### Приклад з оформленням

Стилізувати текст або зображення у властивості {{cssxref("content")}} можна майже яким завгодно способом.

#### HTML

```html
<span class="ribbon">Зверніть увагу на розташування помаранчевого блока.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Подивіться на цей помаранчевий блок.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Результат

{{EmbedLiveSample('pryklad-z-oformlenniam', 450, 60)}}

### Список завдань

У цьому прикладі за допомогою псевдоелементів створюється список завдань. Цей підхід часто застосовується для додавання до інтерфейсу користувача невеликих деталей та покращення користувацького досвіду.

#### HTML

```html
<ul>
  <li>Купити молоко</li>
  <li>Прогулятися з собакою</li>
  <li>Зайнятися спортом</li>
  <li>Написати код</li>
  <li>Послухати музику</li>
  <li>Перепочити</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

Ось наведений вище код у дії. Зверніть увагу, що піктограми тут не використовуються, і символ галочки насправді є `::before`, стилізованим у CSS. Тож, швидше переходьте до справ.

#### Результат

{{EmbedLiveSample('spysok-zavdan', 400, 300)}}

### Спеціальні символи

Оскільки це CSS, а не HTML, **не можна** використовувати розміткові сутності в значеннях content. Якщо потрібно скористатися спеціальним символом і неможливо ввести його безпосередньо в рядок content CSS, скористайтеся еквівалентом Unicode, що складається зі зворотної скісної риски, після якої – шістнадцяткове значення Unicode.

#### HTML

```html
<ol>
  <li>Розбийте яйця в миску</li>
  <li>Додайте молоко</li>
  <li>Додайте борошно</li>
  <li aria-current="step">
    Ретельно перемішайте до отримання однорідного тіста
  </li>
  <li>Вилийте порцію тіста на розігріту, змащену олією плоску сковороду</li>
  <li>Смажте, поки верхня частина млинця не втратить блиск</li>
  <li>Переверніть і смажте ще кілька хвилин</li>
  <li>Подавайте з улюбленою начинкою</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::after {
  content: " \21E6"; /* Шістнадцяткове значення Unicode - біла стрілка ліворуч*/
  display: inline;
}
```

#### Результат

{{EmbedLiveSample('spetsialni-symvoly', 400, 200)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
