---
title: "Атрибут HTML – step"
slug: Web/HTML/Attributes/step
page-type: html-attribute
browser-compat: html.elements.input.step
---

{{HTMLSidebar}}

Атрибут **`step`** (крок) – це число, що задає гранулярність, якій повинно відповідати значення, або ключове слово `any` (будь-який). Він дійсний для числових типів введення, включно з {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} і {{HTMLElement("input/range", "range")}}.

`step` задає _інтервал крокування_ при натисканні кнопок зі стрілками вгору і вниз, переміщенні повзунка вліво і вправо на діапазоні та валідуванні різних типів дат. Якщо він не вказаний явно, то `step` усталено дорівнює 1 для `number` і `range`, а також 1 одиниці типу (хвилина, тиждень, місяць, день) для типів введення дати чи часу. Значення повинно бути додатним числом - цілим або дробовим - або спеціальним значенням `any`, що означає, що крокування не передбачено, і дозволено будь-яке значення (з урахуванням інших обмежень, таких як [`min`](/uk/docs/Web/HTML/Attributes/min) і [`max`](/uk/docs/Web/HTML/Attributes/max)).

Усталене значення крокування для полів `number` – 1, завдяки чому дозволяються лише цілі числа, _якщо не_ задана основа крокування, що не є цілим числом. Усталене значення крокування для `time` – одна секунда, причому 900 – дорівнює 15 хвилинам.

## Синтаксис

<table class="no-markdown">
  <caption>
    Усталені значення step
  </caption>
  <thead>
    <tr>
      <th>Тип поля</th>
      <th>Значення</th>
      <th>Приклад</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>1 (день)</td>
      <td><code>&#x3C;input type="date" min="2019-12-25" step="1"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>1 (місяць)</td>
      <td><code>&#x3C;input type="month" min="2019-12" step="12"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>1 (тиждень)</td>
      <td><code>&#x3C;input type="week" min="2019-W23" step="2"></code></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>60 (секунд)</td>
      <td><code>&#x3C;input type="time" min="09:00" step="900"></code></td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>1 (секунда)</td>
      <td>
        <code
          >&#x3C;input type="datetime-local" min="2019-12-25T19:30"
          step="7"></code
        >
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>1</td>
      <td>
        <code>&#x3C;input type="number" min="0" step="0.1" max="10"></code>
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>1</td>
      <td><code>&#x3C;input type="range" min="0" step="2" max="10"></code></td>
    </tr>
  </tbody>
</table>

Якщо `any` не задано явно, то дійсні значення типів полів `number`, дати та часу, а також `range`, рівносильні основі крокування – значенню [`min`](/uk/docs/Web/HTML/Attributes/min) та цілим прирощенням значення кроку, аж до значення [`max`](/uk/docs/Web/HTML/Attributes/max), якщо воно задане. Наступний приклад призводить до того, що будь-яке ціле число, від 10 й більше, є дійсним:

```html
<input type="number" min="10" step="2" />
```

Якщо пропустити `step`, то дійсним є будь-яке дійсне число, але дробові числа, такі як 4.2, не є дійсними, оскільки `step` усталено дорівнює 1. Щоб 4.2 було дійсним:

- або `step` треба задати `any`, 0.1 або 0.2,
- або значення `min` повинно бути числом, що закінчується на .2, наприклад, 0.2, 1.2 або -5.2.

## Приклади

### Вплив `min` на step

Значення `min` визначає дійсні значення, навіть якщо атрибут `step` не вказано. Це тому, що `step` усталено дорівнює 1.

У цьому прикладі додається велика червона межа навколо недійсних полів:

```css
input:invalid {
  border: solid red 3px;
}
```

Потім визначається поле з мінімальним значенням 1.2 і значенням кроку 2:

```html
<input id="myNumber" name="myNumber" type="number" step="2" min="1.2" />
```

Серед дійсних значень – 1.2, 3.2, 5.2, 7.2, 9.2, 11.2 і так далі. Дійсними є лише дробові числа з непарною цілою частиною та дробовою частиною .2. Якщо присутній обертач чисел, то він генерує дійсні дробові значення від 1.2 і більше, з прирощенням 2.

{{EmbedLiveSample("vplyv-min-na-step","100%",55)}}

> **Примітка:** Коли дані, введені користувачем, не відповідають налаштуванням крокування, значення вважається недійсним при перевірці обмежень і буде відповідати псевдокласам {{cssxref(":invalid")}} та {{cssxref(":out-of-range")}}.

Більше інформації – у [Валідації клієнтського боку](/uk/docs/Web/HTML/Constraint_validation) та {{domxref("ValidityState.stepMismatch", "stepMismatch")}}.

## Занепокоєння щодо доступності

Слід надавати інструкції для користувачів з поясненням того, як заповнити форму та використовувати окремі її контрольні елементи. Позначити всі обов'язкові та необов'язкові поля, формати даних та додати іншу доречну інформацію. При використанні атрибута `min` слід пересвідчитись, що вимога щодо мінімального значення – зрозуміла користувачу. Додати інструкції всередині {{htmlelement('label')}} може бути достатньо. Якщо інструкції надаються поза підписами, що дозволяє більш гнучкі розташування та дизайн, слід розглянути використання [`aria-labelledby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) або [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`max`](/uk/docs/Web/HTML/Attributes/max)
- [`min`](/uk/docs/Web/HTML/Attributes/min)
- [Валідація обмежень](/uk/docs/Web/HTML/Constraint_validation)
- [Валідація форм](/uk/docs/Learn/Forms/Form_validation)
- {{domxref('validityState.stepMismatch')}}
- {{cssxref(':out-of-range')}}
- {{htmlelement('input')}}
- Типи {{HTMLElement("input/date", "date")}}, {{HTMLElement("input/month", "month")}}, {{HTMLElement("input/week", "week")}}, {{HTMLElement("input/time", "time")}}, {{HTMLElement("input/datetime-local", "datetime-local")}}, {{HTMLElement("input/number", "number")}} і {{HTMLElement("input/range", "range")}}, а також {{htmlelement('meter')}}
