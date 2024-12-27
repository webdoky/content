---
title: "<style> – елемент стилістичної інформації"
slug: Web/HTML/Element/style
page-type: html-element
browser-compat: html.elements.style
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<style>`** (стиль) містить стилістичну інформацію про документ або його частину. Він містить CSS, який застосовується до вмісту документа, що містить елемент `<style>`.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Елемент `<style>` повинен додаватися всередині {{htmlelement("head")}} документа. Загалом, краще розміщувати стилі в зовнішніх списках стилів і застосовувати їх за допомогою елементів {{htmlelement("link")}}.

Якщо додати в документ кілька елементів `<style>` і `<link>`, вони будуть застосовуватися до DOM в тому порядку, в якому вони включені в документ — переконайтеся, що включаєте їх у правильному порядку, щоб уникнути непередбачуваних проблем із каскадом.

Так само, як елементи `<link>`, елементи `<style>` можуть містити атрибути `media`, які містять [медійні запити](/uk/docs/Web/CSS/CSS_media_queries), що дають змогу вибірково застосовувати до документа внутрішні списки стилів, залежно від медійних можливостей, таких як ширина області перегляду.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- `blocking` {{Experimental_Inline}}
  - : Цей атрибут явно вказує на те, що певні операції повинні бути заблоковані при отриманні критичних підресурсів. [Імпортовані](/uk/docs/Web/CSS/@import) списки стилів, як правило, вважаються критичними підресурсами, тоді як [background-image](/uk/docs/Web/CSS/background-image) і шрифти — ні.
    - `render`: Візуалізація вмісту на екрані заблокована.
- `media`
  - : Цей атрибут визначає те, до яких носіїв застосовуватиметься стиль. Його значення є [медійним запитом](/uk/docs/Web/CSS/CSS_media_queries/Using_media_queries), який усталено дорівнює `all`, якщо цей атрибут відсутній.
- `nonce`
  - : Криптографічний однораз (число одноразового використання), призначений для того, щоб дозволити вбудовані стилі в [Content-Security-Policy style-src](/uk/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). Сервер повинен згенерувати унікальне значення одноразу щоразу, коли передає політику. Критично важливо надати однораз, який не можна вгадати, оскільки без цього обхід політики ресурсу є тривіальним.
- `title`
  - : Цей атрибут задає набори [альтернативних списків стилів](/uk/docs/Web/CSS/Alternative_style_sheets).

### Нерекомендовані атрибути

- `type` {{deprecated_inline}}
  - : Цей атрибут не повинен бути заданий: якщо він заданий, то єдиними допустимими значеннями є порожній рядок і регістронезалежний збіг з `text/css`.

## Приклади

### Простий список стилів

У наступному прикладі до документа застосовується дуже простий список стилів:

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <title>Тестова сторінка</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Це мій абзац.</p>
  </body>
</html>
```

#### Результат

{{EmbedLiveSample('prostyi-spysok-styliv', '100%', '100')}}

### Кілька елементів style

У цьому прикладі додано два елементи `<style>` — зверніть увагу на те, як конфліктні оголошення в пізнішому елементі `<style>` переважають ті, що в ранішому, якщо вони мають рівну [специфічність](/uk/docs/Web/CSS/Specificity).

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <title>Тестова сторінка</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Це мій абзац.</p>
  </body>
</html>
```

#### Result

{{EmbedLiveSample('kilka-elementiv-style', '100%', '100')}}

### Додання медійного запиту

Цей приклад заснований на попередньому, з доданням атрибута `media` до другого елемента `<style>`, тому він застосовується лише тоді, коли ширина області перегляду менша за 500px.

```html
<!doctype html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <title>Тестова сторінка</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Це мій абзац.</p>
  </body>
</html>
```

#### Результат

{{EmbedLiveSample('dodannia-mediinoho-zapytu', '100%', '100')}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#vmist-metadanykh">Вміст метаданих</a>, а якщо є атрибут <code>scoped</code>: <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">потоковий вміст</a>.
      </td>
    </tr>
    <tr>
      <th>Дозволений вміст</th>
      <td>
        Текстовий вміст, що відповідає атрибуту <code>type</code>, тобто <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Пропуск тега</th>
      <td>Жодний тег пропускати не можна.</td>
    </tr>
    <tr>
      <th>Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають <a href="/uk/docs/Web/HTML/Content_categories#vmist-metadanykh">вміст метаданих</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Немає відповідної ролі</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Жодної дозволеної ролі</td>
    </tr>
    <tr>
      <th>Інтерфейс DOM</th>
      <td>{{domxref("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Елемент {{HTMLElement("link")}}, який дає змогу застосовувати до документа зовнішні списки стилів.
- [Альтернативні списки стилів](/uk/docs/Web/CSS/Alternative_style_sheets)
