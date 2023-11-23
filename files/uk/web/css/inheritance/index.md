---
title: Успадкування
slug: Web/CSS/Inheritance
page-type: guide
---

{{CSSRef}}

У CSS **успадкування** контролює те, що відбувається, коли на елементі не задано значення властивості.

Властивості CSS можна поділити на два різновиди:

- **успадковані властивості**, котрі усталено отримують [обчислене значення](/uk/docs/Web/CSS/computed_value) батьківського елемента
- **неуспадковані властивості**, котрі усталено отримують власне [початкове значення](/uk/docs/Web/CSS/initial_value)

Зверніться до визначення [властивостей CSS](/uk/docs/Web/CSS/Reference#pokazhchyk), аби дізнатися, чи успадковується усталено конкретна властивість ("Успадковується: так"), чи ні ("Успадковується: ні").

## Успадковані властивості

Коли для **успадкованої властивості** на елементі не було задано значення, елемент отримує [обчислене значення](/uk/docs/Web/CSS/computed_value) цієї властивості з батьківського елемента. Лише кореневий елемент документа отримує [початкове значення](/uk/docs/Web/CSS/initial_value), доступне в описі властивості.

Типовий приклад успадкованої властивості – властивість [`color`](/uk/docs/Web/CSS/color). Розгляньмо наступні правила стилю та розмітку:

```css
p {
  color: green;
}
```

```html
<p>Цей абзац містить <em>виділений текст</em>.</p>
```

{{EmbedLiveSample("uspadkovani-vlastyvosti","",40)}}

Слова "виділений текст" будуть зеленими, адже елемент `em` успадкував значення властивості [`color`](/uk/docs/Web/CSS/color) від елемента `p`. Він _не_ отримує початкового значення властивості (котре є кольором, що використовується на кореневому елементі, коли сторінка не задає кольору).

## Неуспадковані властивості

Коли для **неуспадкованої властивості** на елементі не було задано значення, елемент отримує [початкове значення](/uk/docs/Web/CSS/initial_value) цієї властивості (задане в її описі).

Типовий приклад неуспадкованої властивості – властивість {{Cssxref("border")}}. Розгляньмо наступні правила стилю та розмітку:

```css
p {
  border: medium solid;
}
```

```html
<p>Цей абзац містить <em>виділений текст</em>.</p>
```

{{EmbedLiveSample("neuspadkovani-vlastyvosti","",40)}}

Слова "виділений текст" не матимуть обрамлення (адже початкове значення [`border-style`](/uk/docs/Web/CSS/border-style) – `none`).

## Примітки

Ключове слово [`inherit`](/uk/docs/Web/CSS/inherit) дає розробникам змогу явно задавати успадкування. Воно працює і для успадкованих, і для неуспадкованих властивостей.

Контролювати успадкування всіх властивостей водночас можна за допомогою властивості-скорочення [`all`](/uk/docs/Web/CSS/all), котра застосовує своє значення до всіх властивостей. Наприклад:

```css
p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}
```

Це повертає стиль властивості [`font`](/uk/docs/Web/CSS/font) абзацу до усталеного значення користувацького агента, якщо немає користувацької таблиці стилів, у випадку чого використовується значення з неї. А потім цей код подвоює розмір шрифту та застосовує [`font-weight`](/uk/docs/Web/CSS/font-weight) зі значенням `"bold"`.

### Відкидання успадкування, приклад

Якщо у попередньому прикладі з [`border`](/uk/docs/Web/CSS/border) явно задати успадкування за допомогою `inherit`, вийде таке:

```css
p {
  border: medium solid;
}

em {
  border: inherit;
}
```

```html
<p>Цей абзац містить <em>виділений текст</em>.</p>
```

{{EmbedLiveSample("vidkydannia-uspadkuvannia-pryklad","",40)}}

Помітне додаткове обрамлення навколо слів "виділений текст".

## Дивіться також

- Значення CSS для контролю успадкування: [`inherit`](/uk/docs/Web/CSS/inherit), [`initial`](/uk/docs/Web/CSS/initial), [`revert`](/uk/docs/Web/CSS/revert), [`revert-layer`](/uk/docs/Web/CSS/revert-layer) та [`unset`](/uk/docs/Web/CSS/unset)
- [Знайомство з каскадністю CSS](/uk/docs/Web/CSS/Cascade)
- [Каскадність, специфічність та успадкування](/uk/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- Ключові концепції CSS:
  - [Синтаксис CSS](/uk/docs/Web/CSS/Syntax)
  - [Директиви](/uk/docs/Web/CSS/At-rule)
  - [Коментарі](/uk/docs/Web/CSS/Comments)
  - [Специфічність](/uk/docs/Web/CSS/Specificity)
  - [Рамкова модель](/uk/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Режими компонування](/uk/docs/Web/CSS/Layout_mode)
  - [Моделі візуального форматування](/uk/docs/Web/CSS/Visual_formatting_model)
  - [Перекриття зовнішніх відступів](/uk/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Значення
    - [Початкові значення](/uk/docs/Web/CSS/initial_value)
    - [Обчислені значення](/uk/docs/Web/CSS/computed_value)
    - [Застосовані значення](/uk/docs/Web/CSS/used_value)
    - [Фактичні значення](/uk/docs/Web/CSS/actual_value)
  - [Синтаксис визначення значень](/uk/docs/Web/CSS/Value_definition_syntax)
  - [Властивості-скорочення](/uk/docs/Web/CSS/Shorthand_properties)
  - [Заміщені елементи](/uk/docs/Web/CSS/Replaced_element)
