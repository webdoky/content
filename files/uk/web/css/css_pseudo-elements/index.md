---
title: Псевдоелементи CSS
slug: Web/CSS/CSS_pseudo-elements
page-type: css-module
spec-urls: https://drafts.csswg.org/css-pseudo/
---

{{CSSRef}}

Модуль **Псевдоелементів CSS** визначає абстрактні елементи, що присутні в дереві документа не безпосередньо. Ці абстрактні елементи, що звуться псевдоелементами, представляють частини дерева візуалізації, що можуть бути вибрані та оформлені. Псевдоелементи використовуються для створення абстракцій щодо дерева документа, котрі виходять за межі тих, що надає дерево документа.

Перед псевдоелементами ставиться подвійна двокрапка (`::`). Вони додаються до селекторів (наприклад, `p::first-line`), щоб вибирати та оформлювати такі недоелементи.

Завдяки псевдоелементам можна цілитися на сутності, що не присутні в HTML, та частини вмісту, на котрі інакше не можна цілитись, не додавши додаткову розмітку. Для прикладу – заповнювач елемента {{HTMLelement("input")}}. Це абстрактний елемент, що не є окремим вузлом у дереві документа. Його можна вибрати за допомогою псевдоелемента {{CSSXref("::placeholder")}}. Інакший приклад: псевдоелемент {{CSSXref("::selection")}} дає збіг зі вмістом, що наразі виділений користувачем, даючи змогу оформити збіг, поки користувач взаємодіє зі вмістом та змінює вибране. Подібного до цього, псевдоелемент {{CSSXref("::first-line")}} цілить на першу лінію елемента, автоматично оновлюючись, якщо кількість символів у першій лінії змінюється, без потреби окремо звертатися по довжину лінії елемента.

## Довідка

### Селектори

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

### Інтерфейси

- Інтерфейс {{DOMxRef("CSSPseudoElement")}}
  - Властивість {{DOMxRef("CSSPseudoElement.element")}}
  - Властивість {{DOMxRef("CSSPseudoElement.type")}}

### Терміни

- Термін глосарія "{{Glossary("Pseudo-element")}}"

## Посібники

- [Псевдоелементи CSS](/uk/docs/Web/CSS/Pseudo-elements)

  - : Алфавітний список псевдоелементів, визначених усіма специфікаціями CSS і WebVTT.

- [Цеглинки: Псевдокласи та псевдоелементи](/uk/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Частина розділу Цеглинок CSS щодо селекторів. Ця стаття описує те, чим є псевдоелемент, і те, як він може бути поєднаний з псевдокласами та вживатися для породження вмісту за допомогою псевдоелементів `::before` і `::after`.

- [Як створювати круті рамки за допомогою псевдоелементів](/uk/docs/Learn/CSS/Howto/Create_fancy_boxes#psevdoelementy)

  - : Приклад оформлення породженого вмісту за допомогою псевдоелементів `::before` і `::after` заради візуальних ефектів.

## Споріднені концепції

- {{cssxref("::backdrop")}}

- Репліки Формату текстових доріжок вебвідео (WebVTT):

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}
  - {{cssxref("::cue-region")}}

- Модуль [Області видимості CSS](/uk/docs/Web/CSS/CSS_scoping)

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- Модуль [Тіньових частин CSS](/uk/docs/Web/CSS/CSS_shadow_parts)

  - {{CSSXref("::part")}}

- [Селектори CSS](/uk/docs/Web/CSS/CSS_selectors)

  - [Селектори атрибута](/uk/docs/Web/CSS/Attribute_selectors)
  - [Комбінатори](/uk/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#kombinatory)
  - [Селектори класу](/uk/docs/Web/CSS/Class_selectors)
  - [Селектори ідентифікатора](/uk/docs/Web/CSS/ID_selectors)
  - [Селектори типу](/uk/docs/Web/CSS/Type_selectors)
  - [Псевдокласи](/uk/docs/Web/CSS/Pseudo-classes)
  - [Загальні селектори](/uk/docs/Web/CSS/Universal_selectors)

- Атрибут [`placeholder`](/uk/docs/Web/HTML/Element/input#placeholder-zapovniuvach) елемента `<input>`
- Селектор [`:placeholder-shown`](/uk/docs/Web/CSS/:placeholder-shown)

- [Породжений вміст CSS](/uk/docs/Web/CSS/CSS_generated_content)

  - Властивість {{cssxref("content")}}
  - Властивість {{cssxref("quotes")}}

- [Текстові уривки](/uk/docs/Web/Text_fragments)

- Властивість {{DOMXref("AnimationEvent.pseudoElement")}}
- Властивість {{DOMXref("KeyframeEffect.pseudoElement")}}
- Властивість {{DOMXref("TransitionEvent.pseudoElement")}}

## Специфікації

{{Specifications}}

## Дивіться також

- [Специфічність](/uk/docs/Web/CSS/Specificity)
- Модуль [Селекторів CSS](/uk/docs/Web/CSS/CSS_selectors)
- Модуль [Тіньових частин CSS](/uk/docs/Web/CSS/CSS_shadow_parts)
- Модуль [Породженого вмісту CSS](/uk/docs/Web/CSS/CSS_generated_content)
- Модуль [Позиційного компонування CSS](/uk/docs/Web/CSS/CSS_positioned_layout)
