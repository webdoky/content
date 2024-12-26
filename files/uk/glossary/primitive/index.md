---
title: Примітив
slug: Glossary/Primitive
page-type: glossary-definition
---

{{GlossarySidebar}}

У {{Glossary("JavaScript")}} **примітив** (примітивне значення, примітивний тип даних) – це дані, що не є {{Glossary("object", "об'єктом")}} і не мають {{glossary("method", "методів")}} або {{Glossary("property/javascript", "властивостей")}}. Існує 7 примітивних типів даних:

- {{Glossary("string", "рядок")}}
- {{Glossary("number", "число")}}
- {{Glossary("bigint")}}
- {{Glossary("boolean", "булів тип")}}
- {{Glossary("undefined")}}
- [символ](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null")}}

У більшості випадків примітивне значення представлене безпосередньо на найнижчому рівні реалізації мови.

Усі примітиви є _беззмінними_ (імутабельними); тобто їх не можна змінити. Важливо не плутати сам примітив зі змінною, якій призначено примітивне значення. Змінній можна присвоїти нове значення, проте наявне значення не можна змінити так, як змінюють об'єкти, масиви та функції. Мова не надає засобів для зміни примітивних значень.

Примітиви не мають методів, але все одно поводяться так, ніби мають. Коли на примітиві відбувається звертання до властивості, JavaScript натомість _автоматично запаковує_ значення в об'єкт-обгортку та звертається до властивості на ньому. Наприклад, `"foo".includes("f")` неявно створює об'єкт-обгортку [`String`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String) і викликає на цьому об'єкті `String.prototype.includes()`. Ця логіка автоматичного запаковування непомітна в коді JavaScript, проте є гарною ментальною моделлю для різної логіки – наприклад, того, чому "внесення змін" до примітивів не працює (тому що `str.foo = 1` присвоює значення властивості `foo`, що належить саме об'єкту-обгортці, а не `str`).

## Дивіться також

- [Типи даних JavaScript](/uk/docs/Web/JavaScript/Data_structures)
- [Примітивний тип даних](https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D1%96%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9_%D1%82%D0%B8%D0%BF_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85) (Вікіпедія)
- Споріднені терміни глосарія:
  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "рядок")}}
  - {{Glossary("number", "число")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean", "булів тип")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - [символ](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
