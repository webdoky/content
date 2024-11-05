---
title: <output> – елемент виведення
slug: Web/HTML/Element/output
page-type: html-element
browser-compat: html.elements.output
---

{{HTMLSidebar}}

Елемент [HTML](/uk/docs/Web/HTML) **`<output>`** (виведення) – це елемент-контейнер, у який сайт або застосунок може вставити результати обчислення або наслідок дії користувача.

## Атрибути

Цей елемент приймає [глобальні атрибути](/uk/docs/Web/HTML/Global_attributes).

- [`for`](/uk/docs/Web/HTML/Attributes/for)
  - : Розділений пробілами список [`id`](/uk/docs/Web/HTML/Global_attributes/id) інших елементів, який вказує на те, що ці елементи доклали вихідних значень для обчислень (або ще якось вплинули на них).
- `form`

  - : Елемент {{HTMLElement("form")}}, з яким пов'язане виведення (його _форма-власник_). Значення цього атрибута повинно бути [`id`](/uk/docs/Web/HTML/Global_attributes/id) елемента `<form>` у тому ж документі. (Якщо цей атрибут не задано, то `<output>` пов'язано з його предком `<form>`, якщо такий є.)

    Цей атрибут дає змогу пов'язувати елементи `<output>` з елементами `<form>` у будь-якому місці документа, а не лише всередині `<form>`. Він також може переважити елемент-предок `<form>`. Назва та вміст елемента `<output>` не надсилаються вкупі з формою.

- `name`
  - : Назва елемента. Використовується в API {{domxref("HTMLFormElement.elements", "form.elements")}}.

Значення, назва та вміст `<output>` НЕ надсилаються під час надсилання форми.

## Доступність

Чимало браузерів реалізують цей елемент як регіон [`aria-live`](/uk/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Так допоміжна технологія оголошує результати взаємодії з користувацьким інтерфейсом, розміщені всередині нього, не вимагаючи перемикання фокуса з елементів керування, що виробляють ці результати.

## Приклади

У наступному прикладі форма надає повзун, значення якого може змінюватися в межах від `0` до `100`, і елемент {{HTMLElement("input")}}, в який можна ввести друге число. Два числа додаються, а результат відображається в елементі `<output>` кожного разу, коли змінюється значення будь-якого з елементів керування.

```html
<form id="example-form">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

```js
const form = document.getElementById("example-form");
const a = form.elements["a"];
const b = form.elements["b"];
const result = form.elements["result"];
function updateResult() {
  const aValue = parseInt(a.value);
  const bValue = parseInt(b.value);
  result.value = aValue + bValue;
}
form.addEventListener("input", updateResult);
updateResult();
```

### Результат

{{EmbedLiveSample('pryklady')}}

## Технічний підсумок

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/uk/docs/Web/HTML/Content_categories">Категорії вмісту</a>
      </th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#potokovyi-vmist">Потоковий вміст</a>, <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">оповідальний вміст</a>, <a href="/uk/docs/Web/HTML/Content_categories#perelicheni">перелічений</a>, <a href="/uk/docs/Web/HTML/Content_categories#pidpysni">підписний</a>, <a href="/uk/docs/Web/HTML/Content_categories#skydani">скиданий</a> <a href="/uk/docs/Web/HTML/Content_categories#formovyi-vmist">формовий елемент</a>, відчутний вміст.
      </td>
    </tr>
    <tr>
      <th scope="row">Дозволений вміст</th>
      <td>
        <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">Оповідальний вміст.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тега</th>
      <td>Немає; і початковий, і кінцевий теги – обов'язкові.</td>
    </tr>
    <tr>
      <th scope="row">Дозволені батьківські елементи</th>
      <td>
        Всі елементи, що приймають <a href="/uk/docs/Web/HTML/Content_categories#opovidalnyi-vmist">оповідальний вміст</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявна роль ARIA</th>
      <td><a href="/uk/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a></td>
    </tr>
    <tr>
      <th scope="row">Дозволені ролі ARIA</th>
      <td>Всі</td>
    </tr>
    <tr>
      <th scope="row">Інтерфейс DOM</th>
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}
