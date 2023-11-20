---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
page-type: html-attribute
browser-compat: html.global_attributes.enterkeyhint
---

{{HTMLSidebar("Global_attributes")}}

[Глобальний атрибут](/uk/docs/Web/HTML/Global_attributes) **`enterkeyhint`** (підказка клавіші Enter) – це [перелічений](/uk/docs/Glossary/Enumerated) атрибут, що визначає те, який підпис дії (або піктограму) представити на клавіші Enter на віртуальних клавіатурах.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Опис

[Формові контрольні елементи](/uk/docs/Learn/Forms) (як то елементи [`<textarea>`](/uk/docs/Web/HTML/Element/textarea) і [`<input>`](/uk/docs/Web/HTML/Element/input)) та елементи, що користуються [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable), можуть задавати атрибут [`inputmode`](/uk/docs/Web/HTML/Global_attributes/inputmode), аби контролювати те, якого роду віртуальна клавіатура буде використовуватися. Щоб іще більше покращити досвід користувачів, клавішу Enter можна налаштувати окремо, надавши атрибут `enterkeyhint`, котрий вказує, як підписати клавішу Enter (або яку піктограму показати). Клавіша Enter зазвичай представляє те, що користувач має зробити далі; типові дії – це: надіслати текст, вставити новий рядок, здійснити пошук.

Якщо атрибут `enterkeyhint` не заданий, то користувацький агент може використати контекстову інформацію з [`inputmode`](/uk/docs/Web/HTML/Global_attributes/inputmode), [`type`](/uk/docs/Web/HTML/Element/input#typy-input) або [`pattern`](/uk/docs/Web/HTML/Element/input#pattern-patern), щоб показати годящий підпис (або піктограму) клавіші Enter.

### Значення

Атрибут `enterkeyhint` – це [перелічений](/uk/docs/Glossary/Enumerated) атрибут, він приймає лише наступні значення:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Значення</th>
      <th>Опис</th>
      <th>Приклад підпису (залежить від користувацького агента та мови користувача)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Зазвичай додавання нового рядка.</td>
      <td><kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>
        Зазвичай означає, що далі нема чого вводити, і що редактор метода введення (IME) буде закритий.
      </td>
      <td><kbd>Done</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>
        Зазвичай означає, що користувач буде переведений до місця призначення тексту, котрий надруковано.
      </td>
      <td><kbd>Open</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>
        Зазвичай переводить користувача до наступного поля, що приймає текст.
      </td>
      <td><kbd>Next</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>
        Зазвичай переводить користувача до попереднього поля, що приймає текст.
      </td>
      <td><kbd>Previous</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>
        Зазвичай переводить користувача до результатів пошуку для введеного тексту.
      </td>
      <td><kbd>Search</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Зазвичай доставляє текст до його цілі.</td>
      <td><kbd>Send</kbd></td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Властивість [`HTMLElement.enterKeyHint`](/uk/docs/Web/API/HTMLElement/enterKeyHint), що відбиває цей атрибут
- Глобальний атрибут [`inputmode`](/uk/docs/Web/HTML/Global_attributes/inputmode)
- Глобальний атрибут [`contenteditable`](/uk/docs/Web/HTML/Global_attributes/contenteditable)
- Атрибути [`type`](/uk/docs/Web/HTML/Element/input#typy-input) і [`pattern`](/uk/docs/Web/HTML/Element/input#pattern-patern) на елементах [`<input>`](/uk/docs/Web/HTML/Element/input)
