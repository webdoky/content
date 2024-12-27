---
title: ":state()"
slug: Web/CSS/:state
page-type: css-pseudo-class
browser-compat: css.selectors.state
---

{{CSSRef}}

[Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes) [CSS](/uk/docs/Web/CSS) **`:state()`** дає збіг з [кастомними елементами](/uk/docs/Web/API/Web_components/Using_custom_elements), які мають вказаний кастомний стан.

## Синтаксис

Псевдоклас `:state()` приймає як аргумент кастомний ідентифікатор, що представляє стан кастомного елемента для збігу.

```css-nolint
:state(<кастомний ідентифікатор>) {
  /* ... */
}
```

## Опис

Елементи можуть переходити між станами у зв'язку з діями користувача та іншими чинниками.
Наприклад, елемент може перебувати в стані "hover", коли користувач навів на нього курсор, або посилання може перебувати в стані "visited" після клацання користувачем.
Елементи, що пропонуються браузерами, можна стилізувати на основі цих станів за допомогою псевдокласів CSS, як от [`:hover`](/uk/docs/Web/CSS/:hover) і [`:visited`](/uk/docs/Web/CSS/:visited).
Подібно до цього, [автономні кастомні елементи](/uk/docs/Web/API/Web_components/Using_custom_elements#typy-kastomnykh-elementiv) (кастомні елементи, що не походять від вбудованих елементів) можуть розкривати власні стани, що дає сторінкам, які використовують ці елементи, можливість стилізувати їх за допомогою псевдокласу CSS `:state()`.

Стани кастомного елемента представляються у вигляді рядкових значень.
Ці значення додаються та вилучаються з об'єкта [`CustomStateSet`](/uk/docs/Web/API/CustomStateSet), що пов'язаний з відповідним елементом.
Псевдоклас CSS `:state()` дає збіг з елементом тоді, коли ідентифікатор, переданий як аргумент, присутній у `CustomStateSet` цього елемента.

Також псевдокласом `:state()` можна користуватися, щоб шукати збіг з кастомними станами всередині реалізації кастомного елемента.
Це досягається шляхом застосування `:state()` всередині псевдокласу-функції [`:host()`](/uk/docs/Web/CSS/:host_function), яка дає збіг зі станом лише всередині тіньового DOM поточного кастомного елемента.

Крім цього, псевдоелемент [`::part()`](/uk/docs/Web/CSS/::part), після якого стоїть псевдоклас `:state()`, дає змогу шукати збіг у [тіньових частинах](/uk/docs/Web/CSS/CSS_shadow_parts) кастомного елемента, які перебувають у певному стані. (**Тіньові частини** – це частини тіньового дерева кастомного елемента, які явно відкриті для сторінки, що їх вміщає, для потреб стилізації.)

## Приклади

### Збіг з кастомним станом

Цей CSS демонструє, як зробити межу автономного кастомного елемента `<labeled-checkbox>` `red` (червоною), коли він перебуває в стані "checked".

```css
labeled-checkbox {
  border: dashed red;
}
labeled-checkbox:state(checked) {
  border: solid;
}
```

Живий приклад цього коду в дії шукайте в прикладі [Збігу з кастомним станом кастомного елемента поля з галочкою](/uk/docs/Web/API/CustomStateSet#zbih-z-kastomnym-stanom-kastomnoho-elementa-polia-z-halochkoyu) на сторінці `CustomStateSet`.

### Збіг з кастомним станом у тіньовому DOM кастомного елемента

Цей приклад демонструє, як можна використати псевдоклас `:state()` всередині псевдокласу-функції [`:host()`](/uk/docs/Web/CSS/:host_function), щоб шукати збіг з кастомними станами всередині реалізації кастомного елемента.

Наступний CSS вставляє сірий `[x]` перед елементом, коли цей елемент перебуває в стані "checked".

```css
:host(:state(checked))::before {
  content: "[x]";
}
```

Живий приклад цього коду в дії шукайте в прикладі [Збігу з кастомним станом кастомного елемента поля з галочкою](/uk/docs/Web/API/CustomStateSet#zbih-z-kastomnym-stanom-kastomnoho-elementa-polia-z-halochkoyu) на сторінці `CustomStateSet`.

### Збіг з кастомним станом у тіньовій частині

Цей приклад показує, як псевдоклас `:state()` можна використати для націлення на [тіньові частини](/uk/docs/Web/CSS/CSS_shadow_parts) кастомного елемента.

Тіньові частини визначаються та називаються за допомогою атрибута [`part`](/uk/docs/Web/HTML/Global_attributes/part).
Наприклад, нехай буде кастомний елемент з ім'ям `<question-box>`, який використовує кастомний елемент `<labeled-checkbox>` як тіньову частину з іменем `checkbox`:

```js
shadowRoot.innerHTML = `<labeled-checkbox part='checkbox'>Так</labeled-checkbox>`;
```

CSS нижче показує, як псевдоелемент `::part()` можна використати для пошуку збігу з тіньовою частиною `'checkbox'`.
Далі він показує, як можна скористатися псевдоелементом `::part()`, після якого стоїть псевдоклас `:state()`, для пошуку збігу з цією ж частиною, коли вона перебуває в стані "checked".

```css
question-box::part(checkbox) {
  color: red;
}

question-box::part(checkbox):state(checked) {
  color: green;
}
```

Живий приклад цього коду в дії шукайте в прикладі [Збігу з кастомним станом кастомного елемента поля з галочкою](/uk/docs/Web/API/CustomStateSet#zbih-z-kastomnym-stanom-kastomnoho-elementa-polia-z-halochkoyu) на сторінці `CustomStateSet`.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`CustomStateSet`](/uk/docs/Web/API/CustomStateSet)
- [Псевдоклас](/uk/docs/Web/CSS/Pseudo-classes)
- [Навчання – Псевдокласи та псевдоелементи](/uk/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- [Кастомні стани та селектори CSS кастомних станів псевдокласів](/uk/docs/Web/API/Web_components/Using_custom_elements#kastomni-stany-ta-selektory-css-kastomnykh-staniv-psevdoklasiv) у [Використанні кастомних елементів](/uk/docs/Web/API/Web_components/Using_custom_elements)
