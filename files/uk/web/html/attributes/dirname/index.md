---
title: Атрибут HTML – dirname
slug: Web/HTML/Attributes/dirname
page-type: html-attribute
browser-compat:
  - html.elements.textarea.dirname
  - html.elements.input.dirname
---

{{HTMLSidebar}}

Атрибут **`dirname`** (назва напрямку) може вживатися на елементах {{htmlelement("textarea")}} і {{htmlelement("input")}}; він описує напрям текстового вмісту елемента під час подання форми.
Браузер використовує значення цього атрибута для з'ясування того, чи є текст, введений користувачем, орієнтованим зліва направо, чи справа наліво.
Коли цей атрибут вжито, то напрям тексту елемента включається до даних, що подаються в формі, вкупі зі значенням атрибута `dirname` як іменем поля.

## Примітки щодо використання

Атрибут `dirname` може вживатися на будь-яких елементах {{htmlelement("textarea")}}, а також будь-яких елементах {{htmlelement("input")}}, що мають тип {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}} або {{htmlelement("input/email", "email")}}.

Формат подання даних такий: `{dirname_value}={direction}`, де `{dirname_value}` – значення атрибута `dirname`, а `{direction}` – напрям тексту.
Наприклад, якщо користувач ввів "Привіт" в елемент з атрибутами `name="comment"` і `dirname="comment-direction"`, то закодовані в URL дані, що подаються в формі для запитів `GET`, будуть `comment=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82&comment-direction=ltr`.
Напрям – одне з наступного:

- `rtl`
  - : Текст, уведений користувачем, має напрям справа наліво.
- `ltr`
  - : Текст, уведений користувачем, має напрям зліва направо.

Якщо не заданий жодний напрям тексту, то користувацький агент використає напрям батьківського елементу, що вміщає форму, а якщо його не задано, то усталений напрям користувацького агента.

## Приклади

### Напрям елемента textarea

У цьому прикладі атрибут `dir="auto"` на елементі textarea дає змогу визначити напрям тексту автоматично на основі тексту, введеного користувачем:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Надіслати мої привітання</button>
</form>
```

Коли користувач подає форму, то користувацький агент додає два поля: одне з іменем `comment` і значенням "سيب", інше з іменем `comment-direction` і значенням "rtl".
Закодоване в URL тіло запиту має такий вигляд:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Напрям елемента input

У цьому прикладі атрибут `dir="auto"` на елементі input дає змогу з'ясовувати напрям тексту автоматично, на основі тексту, введеного користувачем:

```html
<form method="get" action="https://www.example.com/submit">
  <input
    type="text"
    name="comment-input"
    dir="auto"
    dirname="comment-direction"
    value="Привіт" />
  <button type="submit">Надіслати мої привітання</button>
</form>
```

Коли користувач подає форму, то користувацький агент додає два поля: одне з іменем `comment-input` і значенням "Привіт", а інше з іменем `comment-direction` і значенням "ltr":

```url
https://www.example.com/submit?comment-input=%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82&comment-direction=ltr
```

### Успадкування напряму

Елементи `<input>` і `<textarea>` у наступному прикладі не мають атрибута `dir`, тому успадковують явно вказаний напрям батьківського елемента, який дорівнює `rtl`:

```html
<div dir="rtl">
  <form method="get" action="https://www.example.com/submit">
    <input
      type="text"
      name="user"
      dirname="user-direction"
      value="Ім'я користувача зліва направо" />
    <textarea name="comment" dirname="comment-direction">
      Коментар зліва направо
    </textarea>
    <button type="submit">Оприлюднити коментар</button>
  </form>
</div>
```

Закодоване в URL тіло запиту має такий вигляд:

```url
https://www.example.com/submit?user=%D0%86%D0%BC'%D1%8F%20%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87%D0%B0%20%D0%B7%D0%BB%D1%96%D0%B2%D0%B0%20%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BE&user-direction=rtl&comment=%D0%9A%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%20%D0%B7%D0%BB%D1%96%D0%B2%D0%B0%20%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BE&comment-direction=rtl
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Атрибут `dir`](/uk/docs/Web/HTML/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
