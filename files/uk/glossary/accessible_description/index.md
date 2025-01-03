---
title: Доступний опис
slug: Glossary/Accessible_description
page-type: glossary-definition
---

{{GlossarySidebar}}

**Доступний опис** – це опис елемента користувацького інтерфейсу, що надає додаткову інформацію, яка допомагає користувачам допоміжних технологій розуміти елемент UI та його контекст. Він зв'язаний з елементом HTML або SVG і надає користувачам додатковий контекст про призначення цього елемента на додачу до сповіщеного {{glossary("accessible name", "доступною назвою")}}. Це особливо важливо для користувачів, що покладаються на допоміжні технології штибу {{glossary("Screen_reader", "читачів з екрана")}}. Доступний опис елемента є частиною {{glossary("accessibility tree", "дерева доступності")}}.

Наприклад, доступна назва елемента {{htmlelement("table")}} надається його першим елементом {{htmlelement("caption")}}. У разі складних таблиць даних описом можуть слугувати одне чи два речення. Це може бути абзац одразу перед або після таблиці, як візуально, так і в порядку коду. Якщо цей текст деінде в коді, або щоб зв'язування було явним, для зв'язування таблиці з її описом можна скористатися атрибутом [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

Подібно до цього, коли користувача просять створити пароль, елемент `<label>` для {{htmlelement("input")}} типу `password` надає доступну назву. Добрий доступний опис містить вимоги для пароля у такий спосіб, який видимий усім користувачам. Його можна явно зв'язати з полем за допомогою атрибута цього поля `aria-describedby`, що додає його до дерева доступності як 'description' цього вузла.

Описи зводяться до текстових рядків. У нашому прикладі з паролем, якщо значення атрибута `aria-describedby` поля – це `id` елемента HTML {{htmlelement("ul")}} зі списком вимог, то описом стає зчеплений докупи текст і текстові еквіваленти кожного з елементів списку.

Можна перевірити доступний опис кожного елемента на сторінці: погляньте на вкладку доступності в інструментах розробника свого браузера, яка показує інформацію щодо доступності наразі вибраного елемента.

## Обчислення доступного опису

У разі елементів HTML, якщо елемент не має доступного опису, то опис необхідно програмно зв'язати з відповідним елементом. Об'єктна модель доступності (AOM) обчислює доступний опис, почергово перевіряючи наступні варіанти, поки щось не буде визначено:

1. Атрибут [`aria-describedby`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

2. Атрибут [`aria-description`](/uk/docs/Web/Accessibility/ARIA/Attributes/aria-description).

3. Специфічні для мови можливості, що беруть участь в обчисленні опису, якщо ще не використані для визначення {{glossary("accessible name", "доступної назви")}}. Наприклад:

   - Елемент {{htmlelement("summary")}} описується вмістом вкладеного в нього елемента {{htmlelement("details")}}.
   - Кнопки {{htmlelement("input")}} (з атрибутом типу `button`, `submit` або `reset`) описуються значенням свого атрибута `value`.
   - У SVG це вміст елемента [`<desc>`](/uk/docs/Web/SVG/Element/desc), якщо він є, а інакше – текст, вміщений у нащадках, що є текстовими контейнерами (наприклад, [`<text>`](/uk/docs/Web/SVG/Element/text)), якщо він ще не вжитий для {{glossary("accessible name", "доступної назви")}}.

4. Якщо ніщо з переліченого вище не задало опису, вживається атрибут [`title`](/uk/docs/Web/HTML/Global_attributes/title), якщо він не є {{glossary("accessible name", "доступною назвою")}} цього елемента.

5. Якщо нічого з переліченого вище не визначає доступного опису, то доступний опис – порожній.

Кроки для визначення доступного опису в HTML визначені в [Доступному описі HTML-AAM](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)). Доступний опис елементів SVG обчислюється майже так само та визначений у [Доступному описі SVG-AAM](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)).

## Дивіться також

- [Обчислення доступних назви й опису 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Доступність](/uk/docs/Web/Accessibility)
- [Навчання доступності](/uk/docs/Learn/Accessibility)
- [Тестування вебдоступності](https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D0%B2%D0%B5%D0%B1%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D1%96) на Вікіпедії
- [З вебдоступністю на думці](https://webaim.org/)
- [ARIA](/uk/docs/Web/Accessibility/ARIA)
- [Ініціатива вебдоступності W3C (WAI)](https://www.w3.org/WAI/)
- [Доступні багаті Інтернет-застосунки (WAI-ARIA)](https://w3c.github.io/aria/)
- Споріднені терміни глосарія:
  - {{Glossary("Accessibility", "Доступність")}}
  - {{Glossary("Accessibility tree", "Дерево доступності")}}
  - {{Glossary("Accessible name", "Доступна назва")}}
  - {{Glossary("ARIA")}}
