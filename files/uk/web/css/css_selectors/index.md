---
title: Селектори CSS
slug: Web/CSS/CSS_selectors
page-type: css-module
spec-urls: https://drafts.csswg.org/selectors/
---

{{CSSRef}}

Модуль **Селекторів CSS** визначає патерни для вибору елементів, до яких потім застосовуються правила CSS, з урахуванням їх {{cssxref("specificity", "специфічності")}}. Модуль селекторів CSS пропонує більш ніж 60 селекторів і п'ять комбінаторів. [Інші модулі](#sporidneni-kontseptsii) пропонують додаткові селектори псевдокласів і псевдоелементів.

У CSS селектори – це патерни, що використовуються для зіставлення, або вибору, елементів, що оформлюються. Селектори також використовуються в JavaScript, щоб дати змогу вибирати вузли DOM, що повертаються у вигляді [`NodeList`](/uk/docs/Web/API/NodeList).

Селектори, незалежно від того, вживаються вони в CSS чи в JavaScript, дають змогу націлюватися на елементи HTML на основі їхніх типу, атрибутів, поточного стану та навіть положення в DOM. Комбінатори дають змогу бути більш точними при виборі елементів, дозволяючи вибирати елементи на основі їхнього відносного положення щодо інших елементів.

## Довідка

### Комбінатори та розділювачі

- `+` ([Комбінатор наступної сестри](/uk/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Дочірній комбінатор](/uk/docs/Web/CSS/Child_combinator))
- `||` ([Колонковий комбінатор](/uk/docs/Web/CSS/Column_combinator)) {{Experimental_Inline}}
- `~` ([Комбінатор подальших сестер](/uk/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Комбінатор нащадків](/uk/docs/Web/CSS/Descendant_combinator))
- `|` ([Розділювач областей імен](/uk/docs/Web/CSS/Namespace_separator))

### Селектори

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":current")}}
- {{CSSXref(":current", ":current()")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{CSSXref(":dir", ":dir()")}}
- {{CSSXref(":disabled")}}
- {{CSSXref(":empty")}}
- {{CSSXref(":enabled")}}
- {{CSSXref(":first-child")}}
- {{CSSXref(":first-of-type")}}
- {{CSSXref(":focus")}}
- {{CSSXref(":focus-visible")}}
- {{CSSXref(":focus-within")}}
- {{CSSXref(":fullscreen")}}
- {{CSSXref(":future")}}
- {{CSSXref(":has", ":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- {{CSSXref(":local-link")}}
- `:matches()` (застарілий історичний селектор-псевдонім для {{CSSXref(":is", ":is()")}})
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not", ":not()")}}
- {{CSSXref(":nth-child", ":nth-child()")}}
- {{CSSXref(":nth-of-type", ":nth-of-type()")}}
- {{CSSXref(":nth-last-child", ":nth-last-child()")}}
- {{CSSXref(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":target-within")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [Псевдокласи `:-webkit-`](/uk/docs/Web/CSS/WebKit_Extensions#psevdoklasy)
- [Селектори атрибутів](/uk/docs/Web/CSS/Attribute_selectors)
- [Селектор класів](/uk/docs/Web/CSS/Class_selectors)
- [Селектори ідентифікаторів](/uk/docs/Web/CSS/ID_selectors)
- [Селектори типів](/uk/docs/Web/CSS/Type_selectors)
- [Загальні селектори](/uk/docs/Web/CSS/Universal_selectors)

## Терміни

- Термін глосарія {{glossary("Pseudo-class", "псевдоклас")}}
- [Функційні псевдокласи](/uk/docs/Web/CSS/Pseudo-classes#funktsiini-psevdoklasy)
- [Комбінатори](/uk/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#kombinatory)
- [Простий селектор](/uk/docs/Web/CSS/CSS_selectors/Selector_structure#prostyi-selektor)
- [Складений селектор](/uk/docs/Web/CSS/CSS_selectors/Selector_structure#skladenyi-selektor)
- [Складний селектор](/uk/docs/Web/CSS/CSS_selectors/Selector_structure#skladnyi-selektor)
- [Відносний селектор](/uk/docs/Web/CSS/CSS_selectors/Selector_structure#vidnosnyi-selektor)
- [Список селекторів](/uk/docs/Web/CSS/Selector_list)
- [Специфічність](/uk/docs/Web/CSS/Specificity)

## Посібники

- [Селектори та комбінатори CSS](/uk/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Огляд різних типів простих селекторів та різних комбінаторів, визначених у модулях Селекторів CSS та Псевдо CSS.

- [Структура селекторів CSS](/uk/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Пояснення структури селекторів CSS і термінології, запровадженої в модулі Селекторів CSS, від "простого селектора" до "поблажливого списку відносних селекторів".

- [Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes)

  - : Перелічує псевдокласи, селектори, що дають змогу вибирати елементи на основі інформації про їхній стан, що не вміщена в дереві документа, визначені в різних модулях CSS та HTML.

- [Навчання: Селектори CSS](/uk/docs/Learn/CSS/Building_blocks/Selectors)

  - : Частина Цеглинок CSS, включає підручники про [Селектори типу, класу та ідентифікатора](/uk/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors), [Селектори атрибутів](/uk/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors), [Псевдокласи та псевдоелементи](/uk/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), [Комбінатори](/uk/docs/Learn/CSS/Building_blocks/Selectors/Combinators), [Каскад, специфічність і успадкування](/uk/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) та [Шари каскаду](/uk/docs/Learn/CSS/Building_blocks/Cascade_layers).

- [Використання в селекторах псевдокласу `:target`](/uk/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Дізнайтеся, як використовувати псевдоклас {{CSSXref(":target")}} для оформлення елемента, що є цільовим для ідентифікатора фрагмента URL.

- [Навчання: Псевдокласи користувацького інтерфейсу](/uk/docs/Learn/Forms/UI_pseudo-classes)

  - : Вивчіть різні псевдокласи користувацького інтерфейсу, доступні для оформлення форм у різних станах.

- [Віднаходження елементів DOM за допомогою селекторів](/uk/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

  - : API селекторів дає змогу використовувати селектори в JavaScript для отримання вузлів елементів з DOM.

## Споріднені концепції

- Псевдоклас {{CSSXref(":popover-open")}}
- Псевдоклас {{CSSXref(":state","state()")}}
- Модуль [Вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting)

  - : [Селектор вкладеності `&`](/uk/docs/Web/CSS/Nesting_selector)

- Модуль [Контексту CSS](/uk/docs/Web/CSS/CSS_scoping)

  - Псевдоклас {{CSSXref(":host")}}
  - Псевдоклас {{CSSXref(":host_function", ":host()")}}
  - Псевдоклас {{cssxref(":host-context", ":host-context()")}}
  - Псевдоелемент {{CSSXref("::slotted")}}

- [Модуль Псевдоелементів CSS](/uk/docs/Web/CSS/CSS_pseudo-elements) (представляє сутності, не включені в HTML)

  - {{CSSXref("::after")}}
  - {{CSSXref("::before")}}
  - {{CSSXref("::file-selector-button")}}
  - {{CSSXref("::first-letter")}}
  - {{CSSXref("::first-line")}}
  - {{CSSXref("::grammar-error")}}
  - {{CSSXref("::marker")}}
  - {{CSSXref("::placeholder")}}
  - {{CSSXref("::selection")}}
  - {{CSSXref("::spelling-error")}}
  - {{CSSXref("::target-text")}}

- [Модуль Тіньових частин CSS](/uk/docs/Web/CSS/CSS_shadow_parts)

  - Псевдоелемент {{CSSXref("::part")}}

- [Модуль Позиційного компонування CSS](/uk/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Інші [псевдоелементи](/uk/docs/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}
  - {{CSSxRef("::cue-region")}}

- Директива {{CSSXref("@namespace")}}

- {{cssxref("important", "!important")}}
- [Специфічність](/uk/docs/Web/CSS/Specificity)
- [Каскад](/uk/docs/Web/CSS/Cascade)

- Метод {{domxref("Document.querySelector")}}
- Метод {{domxref("Document.querySelectorAll")}}
- Метод {{domxref("NodeList.forEach()")}}

## Специфікації

{{Specifications}}

## Дивіться також

- [Модуль Псевдоелементів CSS](/uk/docs/Web/CSS/CSS_pseudo-elements)
- [Модуль Каскаду та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)
- [Модуль Вкладеності CSS](/uk/docs/Web/CSS/CSS_nesting)
- [Застосування тіньового DOM](/uk/docs/Web/API/Web_components/Using_shadow_DOM)
