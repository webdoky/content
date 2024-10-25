---
title: Атрибут HTML – required
short-title: required
slug: Web/HTML/Attributes/required
page-type: html-attribute
browser-compat:
  - html.elements.input.required
  - html.elements.select.required
  - html.elements.textarea.required
---

{{HTMLSidebar}}

[Булів](/uk/docs/Glossary/Boolean/HTML) атрибут **`required`** (обов'язковий), якщо присутній, вказує, що користувач повинен задати значення в полі, перш ніж форма-власник цього поля може бути подана.

Атрибут `required` підтримується типами {{HTMLElement("input")}}: {{HTMLElement("input/text","text")}}, {{HTMLElement("input/search","search")}}, {{HTMLElement("input/url","url")}}, {{HTMLElement("input/tel","tel")}}, {{HTMLElement("input/email","email")}}, {{HTMLElement("input/password","password")}}, {{HTMLElement("input/date","date")}}, {{HTMLElement("input/month","month")}}, {{HTMLElement("input/week","week")}}, {{HTMLElement("input/time","time")}}, {{HTMLElement("input/datetime-local","datetime-local")}}, {{HTMLElement("input/number","number")}}, {{HTMLElement("input/checkbox","checkbox")}}, {{HTMLElement("input/radio","radio")}}, {{HTMLElement("input/file","file")}}, а також контрольними елементами форм {{HTMLElement("select")}} і {{HTMLElement("textarea")}}. Коли він присутній на будь-якому з цих типів полів та елементів, то такий елемент дає збіг зі псевдокласом {{cssxref(':required')}}. Якщо цей атрибут не задано, то збіг буде з псевдокласом {{cssxref(':optional')}}.

Цей атрибут не підтримується і не має змісту на полях типів {{HTMLElement("input/range","range")}} і {{HTMLElement("input/color","color")}}, адже вони обидва мають усталені значення. Усталене значення для типу `color` – `#000000`. Усталене значення типу `range` – це середина між `min` і `max`, причому `min` і `max` у більшості браузерів усталено мають значення 0 і 100 відповідно, коли не оголошені. Атрибут `required` також не підтримується на полях типу {{HTMLElement("input/hidden","hidden")}}: не можна очікувати того, що користувачі заповнять приховане поле форми. Врешті-решт, `required` не підтримується на жодному з кнопкових типів полів, серед яких також {{HTMLElement("input/image","image")}}.

У випадку однойменної групи кнопок {{HTMLElement("input/radio","radio")}}, якщо хоч одна радіокнопка в групі має атрибут `required`, то в цій групі повинна бути вибрана радіокнопка, хоч це й не обов'язково повинна бути та, до котрої застосовано атрибут. Щоб полегшити підтримку коду, рекомендується або включати атрибут `required` в кожну однойменну радіокнопку в групі, або ж взагалі не включати його.

У випадку однойменної групи полів типу {{HTMLElement("input/checkbox","checkbox")}} – обов'язковими є лише ті поля для галочок, що мають атрибут `required`.

> [!NOTE]
> Якщо задати [`aria-required="true"`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-required), то це повідомляє читачам з екрана, що елемент (будь-який елемент) є обов'язковим, але на фактичну обов'язковість це не впливає.

### Взаємодія між атрибутами

У зв'язку з тим, що поле лише для прочитання не може бути змінено, атрибут `required` не має жодного впливу на поля, на яких також задано [`readonly`](/uk/docs/Web/HTML/Attributes/readonly).

### Зручність

При доданні атрибута `required` слід надавати видиме позначення поруч з контрольним елементом, що сповіщатиме користувачів про те, що {{HTMLElement("input")}}, {{HTMLElement("select")}} або {{HTMLElement("textarea")}} є обов'язковим. На додачу до цього, слід використовувати псевдоклас {{cssxref(':required')}}, оформлюючи елементи так, аби було видно, що вони обов'язкові. Це покращує зручність для зрячих користувачів. Допоміжні технології повинні сповіщати користувачів, що контрольний елемент є обов'язковим, на основі атрибута required, але додавання `aria-required="true"` також не завадить, якщо комбінація браузера та читача з екрана ще не підтримує `required`.

### Валідація обмежень

Якщо елемент є обов'язковим, а його значення — порожній рядок, то елемент переживає стан {{domxref('ValidityState.valueMissing','valueMissing')}} і буде відповідати псевдокласу {{cssxref(':invalid')}}.

## Занепокоєння щодо доступності

Слід надавати користувачам позначення того, що контрольний елемент є обов'язковим. Варто пересвідчитись, що це позначення є багатогранним: за допомогою тексту, кольору, знаків та атрибута, щоб усі користувачі розуміли вимоги, незалежно від власних колірної сліпоти, когнітивних особливостей і використання читача з екрана.

## Приклад

### HTML

```html
<form>
  <div class="group">
    <input type="text" />
    <label>Нормальне поле</label>
  </div>
  <div class="group">
    <input type="text" required />
    <label>Обов'язкове поле</label>
  </div>
  <input type="submit" />
</form>
```

### Результат

{{EmbedLiveSample('pryklad')}}

## Дивіться також

- {{domxref('validityState.valueMissing')}}
- {{cssxref(':required')}} та {{cssxref(':optional')}}
- {{htmlelement('input')}}
- {{htmlelement('select')}}
