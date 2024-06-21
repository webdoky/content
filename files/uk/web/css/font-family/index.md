---
title: font-family
slug: Web/CSS/font-family
page-type: css-property
browser-compat: css.properties.font-family
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`font-family`** (сімейство шрифту) встановлює для обраного елемента список за пріоритетом з одного або кількох сімейств шрифту та (або) загальних імен сімейств.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Значення розділяються комами для означення того, що вони є альтернативними по відношенню одне до одного. Браузер обере перший шрифт зі списку, що є встановленим або що може бути стягнений за допомогою директиви {{CSSxRef("@font-face")}}.

Часто зручно використати властивість-скорочення {{CSSxRef("font")}} для встановлення `font-size` та супутніх властивостей за раз.

Слід завжди включати принаймні одне загальне ім'я сімейства у список `font-family`, оскільки немає гарантій, що будь-який вказаний шрифт виявиться доступним. Загальне ім'я сімейства слугуватиме запасним шрифтом, якщо це знадобиться.

Властивість `font-family` вказує список шрифтів у порядку спадання пріоритету. Вибір шрифту _не буде_ зупинятися на першому шрифті в списку, що присутній в системі користувача. Натомість можна сказати, що вибір шрифту виконується _посимвольно_, тож якщо доступний шрифт не має гліфа для потрібного символу, алгоритм добору перебирає наступні шрифти. Коли шрифт доступний лише для певних [стилів](/uk/docs/Web/CSS/font-style), [варіантів](/uk/docs/Web/CSS/font-variant) або [розмірів](/uk/docs/Web/CSS/font-size), то відповідні властивості CSS можуть впливати на вибір сімейства шрифту.

## Синтаксис

```css
/* Ім'я сімейства шрифту та загальне ім'я сімейства */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* Виключно загальне ім'я сімейства */
font-family: serif; /* із засічками */
font-family: sans-serif; /* без засічок */
font-family: monospace; /* моноширинний */
font-family: cursive; /* курсивний */
font-family: fantasy; /* фантастичний */
font-family: system-ui; /* шрифт користувацького інтерфейсу системи */
font-family: ui-serif; /* шрифт користувацького інтерфейсу системи, із засічками */
font-family: ui-sans-serif; /* шрифт користувацького інтерфейсу системи, без засічок */
font-family: ui-monospace; /* шрифт користувацького інтерфейсу системи, моноширинний */
font-family: ui-rounded; /* шрифт користувацького інтерфейсу системи, заокруглений */
font-family: emoji; /* емодзі */
font-family: math; /* математичний */
font-family: fangsong; /* імітація Сун */

/* Глобальні значення */
font-family: inherit; /* успадковане значення */
font-family: initial; /* початкове значення */
font-family: revert-layer; /* відкат значення шару */
font-family: revert; /* відкат значення */
font-family: unset; /* невстановлене значення */
```

Властивість `font-family` перелічує одне або кілька сімейств шрифту, розділених комами. Кожне сімейство шрифту вказується або як значення `<family-name>`, або як значення `<generic-name>`.

Приклад нижче перелічує два сімейства шрифту, перше із `<family-name>`, а друге із `<generic-name>`:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Значення

- `<family-name>`

  - : Ім'я сімейства шрифту. Це повинно бути або одне {{cssxref("string", "рядкове")}} значення, або розділена пробілами послідовність значень {{cssxref("custom-ident")}}. Рядкові значення повинні бути в лапках, але можуть вміщати будь-які символи Unicode. Кастомні ідентифікатори в лапки не беруться, але певні символи в них потребують екранування.

    Доброю практикою є брати в лапки імена сімейств шрифту, що містять пробіли, цифри або розділові знаки, відмінні від дефісів.

    Дивіться також [Дійсні імена сімейств](#diisni-imena-simeistv).

- `<generic-name>`

  - : Загальні сімейства шрифту – механізм запасного варіанту, спосіб втілення певного задуму автора стилю, коли жоден із вказаних шрифтів не є доступним. Загальні імена сімейств – ключові слова, і не повинні обмежуватись лапками. Загальне сімейство шрифту повинне бути останнім елементом списку імен сімейств шрифту. Визначеними є наступні ключові слова:

    - `serif` (із засічками)

      - : Гліфи мають штрихи оздоблення, розширені або загострені кінці, або ж мають справді засічені закінчення.

        Наприклад: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif` (без засічок)

      - : Гліфи мають закінчення штрихів без оздоблення.

        Наприклад: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace` (моноширинний)

      - : Усі гліфи мають однакову фіксовану ширину.

        Наприклад: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive` (курсивний)

      - : Гліфи у курсивних шрифтах зазвичай мають або злиття штрихів, або інші особливості курсивних гарнітур.

        Наприклад: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy` (фантастичний)

      - : Фантастичні шрифти – перш за все декоративні шрифти, що містять чудернацьке зображення символів.

        Наприклад: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui` (шрифт користувацького інтерфейсу системи)
      - : Гліфи беруться з усталеного шрифту користувацького інтерфейсу даної платформи. Оскільки типографічні традиції широко різняться по світу, це узагальнене значення передбачено для гарнітур, які не можна поставити у відповідність іншим загальним сімействам.
    - `ui-serif`
      - : Усталений шрифт користувацького інтерфейсу із засічками.
    - `ui-sans-serif`
      - : Усталений шрифт користувацького інтерфейсу без засічок.
    - `ui-monospace`
      - : Усталений моноширинний шрифт користувацького інтерфейсу.
    - `ui-rounded`
      - : Усталений шрифт користувацького інтерфейсу, що має заокруглення.
    - `math` (математичний)
      - : Це призначено для певних потреб представлення математичних засобів: надрядкового та підрядкового запису, дужок, що охоплюють кілька рядків, вкладених виразів, а також гліфів із подвійним штрихом та конкретним значенням.
    - `emoji` (емодзі)
      - : Шрифти, розроблені безпосередньо для зображення емодзі.
    - `fangsong` (імітація Сун)
      - : Стиль китайських символів, що є проміжним між стилем із засічками Сун та курсивним стилем Кайшу. Часто використовується для урядових документів.

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Деякі загальновживані сімейства шрифту

```css
.serif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.sansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.monospace {
  font-family: "Lucida Console", Courier, monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.emoji {
  font-family: emoji;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```html hidden
<div class="serif">Це приклад шрифту з засічками.</div>

<div class="sansserif">Це приклад шрифту без засічок.</div>

<div class="monospace">Це приклад моноширинного шрифту.</div>

<div class="cursive">Це приклад курсивного шрифту.</div>

<div class="fantasy">Це приклад фантастичного шрифту.</div>

<div class="math">Це приклад математичного шрифту.</div>

<div class="emoji">Це приклад шрифту емодзі.</div>

<div class="fangsong">Це приклад шрифту імітації Сун.</div>
```

{{EmbedLiveSample("deiaki-zahalnovzhyvani-simeistva-shryftu", 600, 220)}}

### Дійсні імена сімейств

Дійсними є наступні оголошення:

```css example-good
font-family: "Goudy Bookletter 1911", sans-serif;
```

Наступні оголошення – недійсні:

```css-nolint example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

Наступний приклад технічно є дійсним, але таке не рекомендується:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- [Принципи стилізації тексту та шрифту](/uk/docs/Learn/CSS/Styling_text/Fundamentals)
