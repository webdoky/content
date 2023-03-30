---
title: ":not()"
slug: Web/CSS/:not
page-type: css-pseudo-class
browser-compat: css.selectors.not
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:not()`** ("не") представляє елементи, котрі не відповідають заданому спискові селекторів. Оскільки він запобігає вибору певних елементів, його звуть _псевдокласом заперечення_.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

Псевдоклас `:not()` приносить низку [неочікуваних вивертів, хитрощів та неочікуваних результатів](#opys), про котрі слід знати перед його використанням.

## Синтаксис

Псевдоклас `:not()` вимагає розділеного комами списку з одного чи більше селекторів за його аргумент. Цей список не повинен містити іще одного селектора заперечення та [псевдоелементів](/uk/docs/Web/CSS/Pseudo-elements).

```
:not( <complex-selector-list> )
```

## Опис

Є декілька незвичних ефектів та наслідків використання `:not()`, котрі слід мати на увазі при його використанні:

- За допомогою цього псевдокласу можна написати безглуздий селектор. Наприклад, `:not(*)`, дає збіг з усіма елементами, котрі не є елементами, що очевидно є безглуздям, тож відповідні правила ніколи не будуть застосовані.
- Цей псевдоклас може збільшити [специфічність](/uk/docs/Web/CSS/Specificity) правила. Наприклад, `#foo:not(#bar)` дасть збіг з тим же елементом, що і `#foo`, але матиме вищу специфічність у зв'язку з двома селекторами `id`.
- Специфічність псевдокласу `:not()` замінюється специфічністю найспецифічнішого селектора в розділеному комами аргументі псевдокласу; в результаті виходить така ж специфічність, як якби це було записано [`:not(:is(argument))`](/uk/docs/Web/CSS/:is).
- `:not(.foo)` дасть збіг з усім, що не є `.foo`, _включно з {{HTMLElement("html")}} і {{HTMLElement("body")}}._
- Цей селектор дасть збіг з усім, що "не є X". Це може бути неочікуваним при використанні [комбінатора нащадків](/uk/docs/Web/CSS/Descendant_combinator), оскільки є декілька шляхів для вибору цільового елемента. Наприклад, `body :not(table) a` все одно застосується до посилань всередині {{HTMLElement("table")}}, оскільки {{HTMLElement("tr")}}, {{HTMLElement("tbody")}}, {{HTMLElement("th")}}, {{HTMLElement("td")}}, {{HTMLElement("caption")}} тощо є збігом для частини селектора `:not(table)`.
- Можна заперечувати декілька селекторів водночас. Наприклад: `:not(.foo, .bar)` – рівносильно `:not(.foo):not(.bar)`.
- Якщо будь-який з селекторів, переданих у псевдоклас `:not()`, є недійсним або не підтримується браузером, то недійсним стане все правило. Дієвий спосіб обійти цю логіку – використовувати псевдоклас [`:is()`](/uk/docs/Web/CSS/:is), котрий приймає поблажливий список селекторів. Наприклад, `:not(.foo, :invalid-pseudo-class)` зробить недійсним усе правило, натомість `:not(:is(.foo, :invalid-pseudo-class))` дасть збіг з будь-яким елементом (_включно з {{HTMLElement("html")}} і {{HTMLElement("body")}}_), котрий не є `.foo`.

## Приклади

### Базовий набір прикладів :not()

#### HTML

```html
<p>Я – абзац.</p>
<p class="fancy">Я такий дуже файний!</p>
<div>Я – НЕ абзац.</div>
<h2>
  <span class="foo">foo всередині h2</span>
  <span class="bar">bar всередині h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* Елементи <p>, котрі не мають класу `.fancy` */
p:not(.fancy) {
  color: green;
}

/* Елементи, котрі не є елементами <p> */
body :not(p) {
  text-decoration: underline;
}

/* Елементи, котрі не є ані <div>, ані `.fancy` */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* Елементи, котрі не є ані <div>, ані `.fancy` */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* Елементи всередині <h2>, котрі не є <span> з класом `.foo` */
h2 :not(span.foo) {
  color: red;
}
```

#### Результат

{{EmbedLiveSample('bazovyi-nabir-prykladiv-z-not', '100%', 320)}}

### :not() із недійсними селекторами

Цей приклад демонструє використання `:not()` з недійсними селекторами та те, як запобігти нечинності всього селектора.

#### HTML

```html
<div>Я – div</div>
<p class="foo">Я – абзац із .foo</p>
<p class="bar">Я – абзац із .bar</p>
```

#### CSS

```css
/* Недійсне правило, нічого не робить */
:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}
/* Вибрати всі елементи без класу `foo`, що може включати елементи <html> і <body> */
:is(:not(.foo), :not(:invalid-pseudo-class)) {
  text-decoration: underline;
}
/* Вибрати всі елементи <p> без класу `foo` */
p:is(:not(.foo), :not(:invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}
```

#### Результат

{{EmbedLiveSample('not-iz-nediisnymy-selektoramy', '100%', 320)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes)
- [Псевдокласи та псевдоелементи](/uk/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- Інші функційні псевдокласи CSS:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}
