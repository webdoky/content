---
title: Атрибут HTML – max
slug: Web/HTML/Attributes/max
page-type: html-attribute
browser-compat:
  - html.elements.input.max
  - html.elements.meter.max
  - html.elements.progress.max
---

{{HTMLSidebar}}

Атрибут **`max`** (максимум) визначає максимальне значення, що є прийнятним і дійсним для поля, що містить цей атрибут. Якщо [`value`](/uk/docs/Web/HTML/Element/input#value-znachennia) елемента перевищує значення `max`, то елемент провалює [валідацію](/uk/docs/Learn/Forms/Form_validation). Це значення повинно бути більшим або рівним значенню атрибута [`min`](min). Якщо атрибут `max` присутній, але його значення не задане або недійсне, то не застосовується жодне значення `max`. Якщо атрибут `max` є дійсним, а непорожнє значення поля перевищує максимальне значення, дозволене атрибутом `max`, то валідація обмежень зупиняє подачу форми.

Атрибут `max`, дійсний для числових типів полів, серед яких {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} і {{HTMLElement("input/range", "range")}}, а також елементи {{htmlelement('progress')}} і {{htmlelement('meter')}}, є числом, яке задає найбільше допустиме значення, при якому елемент форми вважається дійсним.

Якщо значення поля перевищує дозволений максимум, то властивість {{domxref('validityState.rangeOverflow')}} буде істинною, а контрольний елемент дасть збіг з псевдокласами {{cssxref(':out-of-range')}} і {{cssxref(':invalid')}}.

### Синтаксис

<table class="no-markdown">
  <caption>
    Синтаксис значень
    <code>max</code>
    для різних типів полів
  </caption>
  <thead>
    <tr>
      <th>Тип поля</th>
      <th>Синтаксис</th>
      <th>Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td><code>yyyy-mm-dd</code></td>
      <td><code>&#x3C;input type="date" max="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td><code>yyyy-mm</code></td>
      <td><code>&#x3C;input type="month" max="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td><code>yyyy-W##</code></td>
      <td><code>&#x3C;input type="week" max="2019-W23" step=""></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td><code>hh:mm</code></td>
      <td><code>&#x3C;input type="time" max="17:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td><code>yyyy-mm-ddThh:mm</code></td>
      <td>
        <code>&#x3C;input type="datetime-local" max="2019-12-25T23:59"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="number" min="0" step="5" max="100"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code>&#x3C;input type="range" min="60" step="5" max="100"></code>
      </td>
    </tr>
  </tbody>
</table>

> **Примітка:** Коли дані, введені користувачем, не відповідають заданому максимальному значенню, то значення поля вважається недійсним, а поле дає збіг з псевдокласами {{cssxref(':invalid')}} і {{cssxref(':out-of-range')}}.

Дивіться докладніше у [Валідації на клієнтському боці](/uk/docs/Web/HTML/Constraint_validation) та {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}}.

У випадку елемента {{htmlelement('progress')}} атрибут `max` описує кількість роботи, яку вимагає завдання, що описується елементом `progress`. Якщо цей атрибут присутній, то він повинен мати за значення дійсне число з рухомою комою, більше нуля. У випадку елемента {{htmlelement('meter')}} атрибут `max` визначає верхню числову межу вимірюваного діапазону. Це значення повинно бути більшим за мінімальне значення (атрибут [`min`](/uk/docs/Web/HTML/Attributes/min)), якщо воно задане. В обох випадках у випадку відсутності цього атрибута береться усталене значення 1.

<table class="no-markdown">
  <caption>
    Синтаксис значень
    <code>max</code> для інших елементів
  </caption>
  <thead>
    <tr>
      <th>Тип поля</th>
      <th>Синтаксис</th>
      <th>Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("progress")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;progress id="file" max="100" value="70"> 70%
          &#x3C;/progress></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("meter")}}</td>
      <td><a href="/uk/docs/Web/CSS/number">&#x3C;number></a></td>
      <td>
        <code
          >&#x3C;meter id="fuel" min="0" max="100" low="33" high="66"
          optimum="80" value="40"> at 40/100&#x3C;/meter></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Занепокоєння щодо доступності

Надавайте користувачам інструкції, щоб їм було легше заповнити форму та користуватися окремими її елементами. Позначайте всі обов'язкові та необов'язкові поля, формати даних та іншу доречну інформацію. При використанні атрибута `max` переконайтеся, що такий максимум зрозумілий користувачам. Достатньо може бути додавання інструкцій в {{htmlelement('label', 'підписах')}}. Якщо інструкції надаються поза підписами, що дає змогу застосовувати до них гнучкіші позиціювання та дизайн, розгляньте варіант використання [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) або [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`step`](/uk/docs/Web/HTML/Attributes/step)
- [`min`](/uk/docs/Web/HTML/Attributes/min)
- інші атрибути лічильників: [`low`](/uk/docs/Web/HTML/Attributes/low), [`high`](/uk/docs/Web/HTML/Attributes/high), [`optimum`](/uk/docs/Web/HTML/Attributes/optimum)
- [Валідація обмежень](/uk/docs/Web/HTML/Constraint_validation)
- [Валідація форм](/uk/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.rangeOverflow')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- Типи {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} and {{HTMLElement("input/range", "range")}}, а також {{htmlelement('meter')}}
