---
title: Псевдокласи
slug: Web/CSS/Pseudo-classes
page-type: landing-page
spec-urls:
  - https://html.spec.whatwg.org/multipage/#pseudo-classes
  - https://drafts.csswg.org/selectors/
  - https://drafts.csswg.org/css-ui/
---

{{CSSRef}}

**_Псевдоклас_** [CSS](/uk/docs/Web/CSS) – це ключове слово, додане до селектора, що дає змогу стилізувати конкретний стан вибраного елемента (чи елементів). Наприклад, псевдоклас {{CSSxRef(":hover")}} може використовуватися для кнопки, коли вказівник користувача наведено на неї, і ця вибрана кнопка може бути стилізована.

```css
/* Будь-яка кнопка, над якою перебуває вказівник користувача */
button:hover {
  color: blue;
}
```

Псевдоклас складається з двокрапки (`:`), після якої стоїть назва псевдокласу (наприклад, `:hover`). Функційні псевдокласи також вміщають пару дужок для визначення своїх аргументів (наприклад, `:dir()`). Елемент, до якого прикріплено псевдоклас, визначається як _якірний елемент_ (наприклад, `button` у випадку `button:hover`).

Псевдокласи дають змогу застосовувати стиль до елемента не лише на основі вмісту дерева документа, а й також на основі зовнішніх чинників, як от: історії навігатора (наприклад, {{CSSxRef(":visited")}}), стану його вмісту (наприклад, {{CSSxRef(":checked")}} для деяких елементів форми) або положення миші (наприклад, {{CSSxRef(":hover")}}, який дозволяє визначити, чи перебуває миша над елементом, чи ні).

> [!NOTE]
> На противагу псевдокласам, [псевдоелементи](/uk/docs/Web/CSS/Pseudo-elements) можуть використовуватися для стилізації _конкретної частини_ елемента.

## Псевдокласи стану виведення елементів

Завдяки цим псевдокласам можливий вибір елементів на основі стану їхнього виведення.

- {{CSSxRef(":fullscreen")}}
  - : Дає збіг з елементами, що наразі перебувають у повноекранному режимі.
- {{CSSxRef(":modal")}}
  - : Дає збіг з елементами, що перебувають у стані, в якому вони виключають взаємодію з елементами поза ними, поки їхня власна взаємодія не буде закінчена.
- {{CSSxRef(":picture-in-picture")}}
  - : Дає збіг з елементами, що наразі перебувають у стані картинки-в-картинці.

## Псевдокласи полів

Ці псевдокласи стосуються елементів форми та дають змогу вибирати елементи на основі атрибутів HTML і стану, який поле має до та після взаємодії.

- {{CSSxRef(":autofill")}}
  - : Дає збіг з елементами {{htmlelement("input")}}, які автоматично заповнив браузер.
- {{CSSxRef(":enabled")}}
  - : Представляє елемент користувацького інтерфейсу, що перебуває у ввімкненому стані.
- {{CSSxRef(":disabled")}}
  - : Представляє елемент користувацького інтерфейсу, що перебуває у вимкненому стані.
- {{CSSxRef(":read-only")}}
  - : Представляє елементи, що не можуть бути змінені користувачем.
- {{CSSxRef(":read-write")}}
  - : Представляє всі елементи, що можуть бути змінені користувачем.
- {{CSSxRef(":placeholder-shown")}}
  - : Дає збіг з елементом-полем, що виводить текст заповнювача. Наприклад, він дасть збіг з атрибутом `placeholder` елементів {{htmlelement("input")}} і {{htmlelement("textarea")}}.
- {{CSSxRef(":default")}}
  - : Дає збіг з одним або багатьома елементами користувацького інтерфейсу, що є усталеними серед свого набору.
- {{CSSxRef(":checked")}}
  - : Дає збіг, коли елементи штибу полів для галочки та радіокнопок – увімкнені.
- {{CSSxRef(":indeterminate")}}
  - : Дає збіг з елементами користувацького інтерфейсу, коли вони перебувають у невизначеному стані.
- {{CSSxRef(":blank")}}
  - : Дає збіг з елементами користувацького інтерфейсу, що є порожніми, вміщаючи порожній рядок або інший нульовий вміст.
- {{CSSxRef(":valid")}}
  - : Дає збіг з елементами, що мають дійсний вміст. Наприклад, елемент-поле з типом 'email', що вміщає коректно сформовану адресу електронної пошти, чи порожнє значення, якщо цей контрольний елемент є необов'язковим.
- {{CSSxRef(":invalid")}}
  - : Дає збіг з елементами, що мають недійсний вміст. Наприклад, елемент-поле з типом 'email', у який ввели ім'я.
- {{CSSxRef(":in-range")}}
  - : Застосовується до елементів, що мають обмеження діапазону. Наприклад, елемента-повзуна, коли вибране значення перебуває в дозволеному діапазоні.
- {{CSSxRef(":out-of-range")}}
  - : Застосовується до елементів, що мають обмеження діапазону. Наприклад, елемента-повзуна, коли вибране значення перебуває поза межами дозволеного діапазону.
- {{CSSxRef(":required")}}
  - : Дає збіг, коли елемент форми є обов'язковим.
- {{CSSxRef(":optional")}}
  - : Дає збіг, коли елемент форми є необов'язковим.
- {{CSSxRef(":user-valid")}}
  - : Представляє елемент із коректним введенням, але лише тоді, коли користувач уже з ним взаємодіяв.
- {{CSSxRef(":user-invalid")}}
  - : Представляє елемент з некоректним введенням, але лише тоді, коли користувач взаємодіяв з цим полем.

## Лінгвістичні псевдокласи

Ці псевдокласи відображають мову документа та дають змогу вибирати елементи на основі мови або напрямку письма.

- {{CSSxRef(":dir", ":dir()")}}
  - : Псевдоклас напрямку вибирає елементи на основі їхнього напрямку письма, визначеного мовою документа.
- {{CSSxRef(":lang", ":lang()")}}
  - : Вибирає елементи на основі мови їхнього вмісту.

## Псевдокласи місця

Ці псевдокласи стосуються посилань, а також цільових елементів у поточному документі.

- {{CSSxRef(":any-link")}}
  - : Дає збіг з елементом, якщо він дає збіг або з {{CSSxRef(":link")}}, або з {{CSSxRef(":visited")}}.
- {{CSSxRef(":link")}}
  - : Дає збіг з посиланнями, що ще не були відвідані.
- {{CSSxRef(":visited")}}
  - : Дає збіг з посиланнями, що вже були відвідані.
- {{CSSxRef(":local-link")}}
  - : Дає збіг з посиланнями, чий абсолютний URL – такий же, як цільовий URL. Наприклад, посилання-якорі на ту саму сторінку.
- {{CSSxRef(":target")}}
  - : Дає збіг з елементами, чия ціль – URL документа.
- {{CSSxRef(":target-within")}}
  - : Дає збіг з елементами, що є ціллю URL документа, а також елементами, що мають нащадка, який є ціллю URL документа.
- {{CSSxRef(":scope")}}
  - : Представляє елементи, що є опорною точкою, відносно якої відбувається вибірка елементів.

## Псевдокласи стану ресурсів

Ці псевдокласи застосовуються до мультимедійних елементів, що здатні мати стан, що описується як відтворення, наприклад, відео.

- {{CSSxRef(":playing")}}
  - : Представляє мультимедійний елемент, здатний відтворюватися, коли цей елемент відтворюється.
- {{CSSxRef(":paused")}}
  - : Представляє мультимедійний елемент, здатний відтворюватися, коли цей елемент призупинений.

## Псевдокласи часового виміру

Ці псевдокласи застосовуються, коли переглядається щось, що має хронометраж, наприклад, доріжка субтитрів [WebVTT](/uk/docs/Web/API/WebVTT_API).

- {{CSSxRef(":current")}}
  - : Представляє елемент або його предка, що відображається.
- {{CSSxRef(":past")}}
  - : Представляє елемент, що повністю передує елементу {{CSSxRef(":current")}}.
- {{CSSxRef(":future")}}
  - : Представляє елемент, що повністю слідує за елементом {{CSSxRef(":current")}}.

## Псевдокласи деревної структури

Ці псевдокласи стосуються положення елемента в межах дерева документа.

- {{CSSxRef(":root")}}
  - : Представляє елемент, що є коренем документа. У HTML це зазвичай елемент `<html>`.
- {{CSSxRef(":empty")}}
  - : Представляє елементи, що не мають нащадків, крім пробільних символів.
- {{CSSxRef(":nth-child")}}
  - : Використовує запис `An+B` для вибору елементів зі списку взаємно сестринських елементів.
- {{CSSxRef(":nth-last-child")}}
  - : Використовує запис `An+B` для вибору елементів зі списку взаємно сестринських елементів, рахуючи з його кінця.
- {{CSSxRef(":first-child")}}
  - : Дає збіг з елементом, що є першим серед своїх сестер.
- {{CSSxRef(":last-child")}}
  - : Дає збіг з елементом, що є останнім серед своїх сестер.
- {{CSSxRef(":only-child")}}
  - : Дає збіг з елементом, що не має сестер. Наприклад, пункт списку, в якому немає інших пунктів.
- {{CSSxRef(":nth-of-type")}}
  - : Використовує запис `An+B` для вибору елементів зі списку взаємно сестринських елементів, що мають певний тип.
- {{CSSxRef(":nth-last-of-type")}}
  - : Використовує запис `An+B` для вибору елементів зі списку взаємно сестринських елементів, що мають певний тип, рахуючи з його кінця.
- {{CSSxRef(":first-of-type")}}
  - : Дає збіг з елементом, що є першим серед своїх сестер, а також дає збіг з певним селектором типу.
- {{CSSxRef(":last-of-type")}}
  - : Дає збіг з елементом, що є останнім серед своїх сестер, а також дає збіг з певним селектором типу.
- {{CSSxRef(":only-of-type")}}
  - : Дає збіг з елементом, що не має сестер, які відповідали б обраному селекторові типу.

## Псевдокласи користувацьких дій

Ці псевдокласи потребують певної взаємодії з боку користувача, щоб застосуватися, наприклад, утримання вказівника миші над елементом.

- {{CSSxRef(":hover")}}
  - : Дає збіг, коли користувач виділяє елемент за допомогою пристрою-вказівника, наприклад, утримує вказівник миші над елементом.
- {{CSSxRef(":active")}}
  - : Дає збіг, коли елемент активується користувачем. Наприклад, коли цей елемент клацнуто.
- {{CSSxRef(":focus")}}
  - : Дає збіг, коли елемент має фокус.
- {{CSSxRef(":focus-visible")}}
  - : Дає збіг, коли елемент має фокус, і агент користувача визначає, що елемент має бути візуально позначений як сфокусований.
- {{CSSxRef(":focus-within")}}
  - : Дає збіг з елементом, до якого застосовується {{CSSxRef(":focus")}}, а також з будь-яким елементом, що має нащадка, до якого застосовується {{CSSxRef(":focus")}}.

## Функційні псевдокласи

Ці псевдокласи приймають як параметр [список селекторів](/uk/docs/Web/CSS/Selector_list) або [поблажливий список селекторів](/uk/docs/Web/CSS/Selector_list#poblazhlyvyi-spysok-selektoriv).

- [`:is()`](/uk/docs/Web/CSS/:is)
  - : Псевдоклас збігу-з-чим-небудь дає збіг з усіма елементами, що дають збіг щонайменше з одним селектором з переданого списку. Цей список є поблажливим.
- [`:not()`](/uk/docs/Web/CSS/:not)
  - : Псевдоклас заперечення, або збігу-ні-з-чим, представляє всі елементи, що не представлені його аргументом.
- [`:where()`](/uk/docs/Web/CSS/:where)
  - : Псевдоклас підлаштування специфічності дає збіг з усіма елементами, що дають збіг з будь-яким з селекторів у переданому списку, не додаючи жодної ваги специфічності. Цей список є поблажливим.
- [`:has()`](/uk/docs/Web/CSS/:has)
  - : Псевдоклас відношення представляє елемент, якщо будь-який з відносних селекторів дає збіг, коли він прив'язаний до приєднаного елемента.

## Синтаксис

```css
selector:pseudo-class {
  property: value;
}
```

Подібно до звичайних класів, можна створювати ланцюжки з такої кількості псевдокласів, якої потрібно, в межах одного селектора.

## Алфавітний покажчик

Серед псевдокласів, визначених набором специфікацій CSS:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} {{Experimental_Inline}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}

H

- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}}

M

- {{CSSxRef(":modal")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}

W

- {{CSSxRef(":where", ":where()")}}

## Специфікації

{{Specifications}}

## Дивіться також

- [Псевдоелементи](/uk/docs/Web/CSS/Pseudo-elements)