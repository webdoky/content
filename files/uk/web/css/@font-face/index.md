---
title: "@font-face"
slug: Web/CSS/@font-face
page-type: css-at-rule
browser-compat: css.at-rules.font-face
---

{{CSSRef}}

[Директива](/uk/docs/Web/CSS/At-rule) [CSS](/uk/docs/Web/CSS) **`@font-face`** (гарнітура шрифту) задає власний шрифт для виведення тексту; цей шрифт може бути як завантажений із віддаленого сервера, так і локально встановлений на власному комп'ютері користувача.

## Синтаксис

```css
@font-face {
  font-family: "Trickster";
  src: local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1), url("trickster-outline.otf")
      format("opentype"), url("trickster-outline.woff") format("woff");
}
```

### Дескриптори

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
  - : Задає метрику розміру верхнього виносу шрифту.
- {{cssxref("@font-face/descent-override", "descent-override")}}
  - : Задає метрику розміру нижнього виносу шрифту.
- {{cssxref("@font-face/font-display", "font-display")}}
  - : Задає те, як гарнітура шрифту виводиться, залежно від того, чи вона завантажена й готова до використання, а також того, коли це відбувається.
- {{cssxref("@font-face/font-family", "font-family")}}
  - : Задає назву, котра буде використовуватися як значення гарнітури шрифту у властивостях шрифту.
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
  - : Значення {{cssxref("font-stretch")}}. Приймає два значення для задання діапазону, котрий підтримується гарнітурою, наприклад, `font-stretch: 50% 200%;`
- {{cssxref("@font-face/font-style", "font-style")}}
  - : Значення {{cssxref("font-style")}}. Приймає два значення для задання діапазону, котрий підтримується гарнітурою, наприклад, `font-style: oblique 20deg 50deg;`
- {{cssxref("@font-face/font-weight", "font-weight")}}

  - : Значення {{cssxref("font-weight")}}. Приймає два значення для задання діапазону, котрий підтримується гарнітурою, наприклад, `font-weight: 100 400;`

    > **Примітка:** Дескриптор font-variant був прибраний зі специфікації у 2018 році. Підтримуються значення властивості {{cssxref("font-variant")}}, але немає рівносильного дескриптора.

- {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
  - : Дає змогу контролювати передові типографські можливості в шрифтах OpenType.
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
  - : Дає змогу на низькому рівні контролювати варіації шрифтів TrueType та OpenType, шляхом задання чотирилітерних назв осей можливостей для видозміни, поруч з їхніми значеннями.
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
  - : Задає метрику розриву між рядками шрифту.
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
  - : Задає множник для контурів гліфів та метрики, пов'язані з таким шрифтом. Завдяки цьому легше узгоджувати дизайн різних шрифтів при візуалізації з однаковим розміром шрифту.
- {{cssxref("@font-face/src", "src")}}
  - : Задає посилання на ресурси шрифту, включно з підказками щодо формату шрифту та його технології. Цей дескриптор є обов'язковою умовою дійсності директиви @font-face.
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
  - : Діапазон кодових точок Unicode, що використовуватимуться зі шрифту.

## Опис

Поширене використання `url()` і `local()` вкупі, щоб використовувалася локально встановлена в користувача копія шрифту, коли вона доступна, а завантаження копії шрифту було запасним варіантом, коли він не знайдений на пристрої користувача.

Якщо використана функція `local()` із заданням назви шрифту для пошуку на пристрої користувача, і {{Glossary("User agent", "користувацький агент")}} знаходить збіг, то використовується знайдений локальний шрифт. Інакше – завантажується й використовується ресурс шрифту, заданий за допомогою функції `url()`.

Браузери пробують завантажувати ресурси в порядку їх оголошення, тож зазвичай `local()` слід писати перед `url()`. Обидві функції є необов'язковими, тож може бути блок правил, що містить одне чи більше входжень `local()`, але без `url()`.
Якщо потрібні більш конкретні шрифти, зі значеннями `format()` або `tech()`, то вони повинні бути задані _до_ версій, котрі не мають цих значень, адже інакше буде першим випробуваний і застосований менш конкретний варіант.

Даючи розробникам змогу задавати власні шрифти, `@font-face` уможливлює проєктування вмісту без обмеження так званими "безпечними для Вебу" шрифтами (тобто шрифтами, котрі так поширені, що вважаються загальнодоступними). Змога задати назву встановленого локально шрифту для його пошуку та застосування – уможливлює налаштування шрифту понад базові можливості, до того ж – без покладання на зв'язок з Інтернетом.

> **Примітка:** Запасні стратегії завантаження шрифтів, для старих браузерів, описані на [сторінці дескриптора `src`](/uk/docs/Web/CSS/@font-face/src#fallbacks_for_older_browsers).

Директива `@font-face` може використовуватися не лише на зовнішньому рівні CSS, а й також всередині будь-якої [директиви умовного групування CSS](/uk/docs/Web/CSS/At-rule#umovne-hrupuvannia-pravyl).

### Типи MIME шрифтів

| Формат                 | Тип MIME     |
| ---------------------- | ------------ |
| TrueType               | `font/ttf`   |
| OpenType               | `font/otf`   |
| Web Open Font Format   | `font/woff`  |
| Web Open Font Format 2 | `font/woff2` |

### Примітки

- Шрифти у Вебі підлягають таким же доменним обмеженням (файли шрифтів повинні бути на тому ж домені, що й сторінка, котра їх використовує), якщо для їх послаблення не вжито [контроль доступу HTTP](/uk/docs/Web/HTTP/CORS).
- `@font-face` не може бути оголошена всередині селектора CSS. Наприклад, наступне не спрацює:

  ```css example-bad
  .className {
    @font-face {
      font-family: "MyHelvetica";
      src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
        url("MgOpenModernaBold.ttf");
      font-weight: bold;
    }
  }
  ```

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Задання шрифту для стягнення

Цей приклад задає використання віддаленого шрифту, застосовуючи його до всього тіла документа:

```html
<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Зразок вебшрифту</title>
    <style media="screen, print">
      @font-face {
        font-family: "Bitstream Vera Serif Bold";
        src: url("https://webdoky.github.io/css-examples/web-fonts/VeraSeBd.ttf");
      }

      body {
        font-family: "Bitstream Vera Serif Bold", serif;
      }
    </style>
  </head>
  <body>
    Це – Bitstream Vera Serif Bold.
  </body>
</html>
```

Вивід цього коду прикладу матиме такий вигляд:

{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

### Задання взаємозамінних локальних шрифтів

У цьому прикладі застосовується локальна копія "Helvetica Neue Bold" з пристрою користувача; якщо користувач не має такого шрифту (відбувається перевірка і повної назви, і Postscript-назви), то замість цього застосовується віддалений шрифт під назвою "MgOpenModernaBold.ttf":

```css
@font-face {
  font-family: "MyHelvetica";
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
  font-weight: bold;
}
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Про WOFF](/uk/docs/Web/Guide/WOFF)
- [Генератор @font-face – FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
- [Прекрасні шрифти з допомогою @font-face](https://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Бібліотека шрифтів](https://fontlibrary.org/)
