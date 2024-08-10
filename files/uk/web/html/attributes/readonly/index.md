---
title: "Атрибут HTML: readonly"
slug: Web/HTML/Attributes/readonly
page-type: html-attribute
browser-compat:
  - html.elements.input.readonly
  - html.elements.textarea.readonly
---

{{HTMLSidebar}}

Булів атрибут **`readonly`** (лише для зчитування), коли присутній, робить елемент незмінним, що означає, що користувач не може редагувати його.

{{EmbedInteractiveExample("pages/tabbed/attribute-readonly.html", "tabbed-shorter")}}

## Огляд

Якщо атрибут `readonly` заданий на елементі поля, то, оскільки користувач не може редагувати поле, такий елемент не бере участі в перевірці обмежень.

Атрибут `readonly` підтримується типами {{HTMLElement("input")}} `{{HTMLElement("input/text","text")}}`, `{{HTMLElement("input/search","search")}}`, `{{HTMLElement("input/url","url")}}`, `{{HTMLElement("input/tel","tel")}}`, `{{HTMLElement("input/email","email")}}`, `{{HTMLElement("input/password","password")}}`, `{{HTMLElement("input/date","date")}}`, `{{HTMLElement("input/month","month")}}`, `{{HTMLElement("input/week","week")}}`, `{{HTMLElement("input/time","time")}}`, `{{HTMLElement("input/datetime-local","datetime-local")}}` і `{{HTMLElement("input/number","number")}}`, а також контрольним елементом форм {{HTMLElement("textarea")}}. Коли він присутній на будь-якому з них, спрацьовує збіг з псевдокласом {{cssxref(':read-only')}}. Якщо його немає, то спрацьовує збіг з псевдокласом {{cssxref(':read-write')}}.

Цей атрибут не підтримується та не стосується {{HTMLElement("select")}} і типів полів, які й так не можуть змінюватися, наприклад, `{{HTMLElement("input/checkbox","checkbox")}}` і `{{HTMLElement("input/radio","radio")}}`, або за визначенням не можуть зразу з'являтися зі значенням, наприклад, `{{HTMLElement("input/file","file")}}`. `{{HTMLElement("input/range","range")}}` і `{{HTMLElement("input/color","color")}}`, оскільки обидва ці типи мають усталені значення. Також не підтримується на `{{HTMLElement("input/hidden","hidden")}}`, адже не можна очікувати, що користувач заповнить поле, що є прихованим. Він також не підтримується на будь-якому з типів кнопок, включно з `image`.

> **Примітка:** Лише текстові контрольні елементи можуть стати лише для зчитування, адже для решти контрольних елементів (як то полів для галочки та кнопок) немає змістовної відмінності між станами лише для зчитування та вимкненості, тому атрибут `readonly` не застосовується.

Коли поле має атрибут `readonly`, то до нього також застосовується псевдоклас {{cssxref(":read-only")}}. І навпаки, поля, які підтримують атрибут `readonly`, але не мають його, відповідають псевдокласу {{cssxref(":read-write")}}.

### Взаємодія між атрибутами

Різниця між [`disabled`](/uk/docs/Web/HTML/Attributes/disabled) і `readonly` полягає в тому, що поля лише для зчитування все одно можуть працювати та є фокусовними, натомість вимкнені поля не можуть отримати фокус та не подаються разом із формою та, як правило, не працюють як контрольні елементи, поки не будуть увімкнені.

У зв'язку з тим, що поле лише для зчитування не може бути змінено шляхом взаємодії з ним користувача, атрибут [`required`](/uk/docs/Web/HTML/Attributes/required) не має жодної дії на поля, на котрих також заданий атрибут `readonly`.

Єдиний спосіб динамічно змінити значення атрибута `readonly` — це за допомогою сценарію.

> **Примітка:** Атрибут `required` не дозволяється на полях, на яких заданий атрибут `readonly`.

### Використовність

Браузери показують атрибут `readonly`.

### Валідація обмежень

Якщо елемент – лише для зчитування, то значення такого елемента не може бути оновлено користувачем та не бере участі у валідації обмежень.

## Приклад

### HTML

```html
<div class="group">
  <input type="text" value="Якесь значення" readonly="readonly" id="text" />
  <label for="text">Текстове поле</label>
</div>
<div class="group">
  <input type="date" value="2020-01-01" readonly="readonly" id="date" />
  <label for="date">Дата</label>
</div>
<div class="group">
  <input type="email" value="Якесь значення" readonly="readonly" id="email" />
  <label for="email">Електронна пошта</label>
</div>
<div class="group">
  <input type="password" value="Якесь значення" readonly="readonly" id="pwd" />
  <label for="pwd">Пароль</label>
</div>
<div class="group">
  <textarea readonly="readonly" id="ta">Якесь значення</textarea>
  <label for="ta">Повідомлення</label>
</div>
```

### Результат

{{EmbedLiveSample('pryklad')}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{cssxref(':read-only')}} та {{cssxref(':read-write')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
