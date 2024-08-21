---
title: counters()
slug: Web/CSS/counters
page-type: css-function
browser-compat: css.types.counters
---

{{CSSRef}}

[Функція](/uk/docs/Web/CSS/CSS_Functions) [CSS](/uk/docs/Web/CSS) **`counters()`** (лічильники) дає змогу поєднувати маркери для вкладених лічильників. Вона повертає рядок, що зчіплює поточні значення названих і вкладених лічильників, якщо такі є, з переданим рядком. Третій, необов'язковий параметр, дає змогу визначити стиль списку.

Функція `counters()` зазвичай вживається всередині [псевдоелемента](/uk/docs/Web/CSS/Pseudo-elements) за допомогою властивості {{cssxref("content")}}, проте теоретично її можна вживати де завгодно, де підтримуються значення [`<string>`](/uk/docs/Web/CSS/string).

Функція `counters()` має дві форми: `counters(<name>, <string>)` і `counters(<name>, <string>, <style>)`. Породжений нею текст є значеннями усіх лічильників з заданою назвою `<name>`, упорядкованих від зовнішнього до внутрішнього, і сполучених заданим значенням `<string>`. Лічильники візуалізуються у заданому стилі `<style>`, що усталено має значення `decimal`, якщо жодний стиль не задано.

{{EmbedInteractiveExample("pages/tabbed/function-counters.html", "tabbed-standard")}}

## Синтаксис

```css
/* Просте використання  - стиль усталено decimal */
counters(countername, '.');

/* змінення виведення лічильника */
counters(countername, '-', upper-roman)
```

[Лічильник](/uk/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) сам собою не має видимого ефекту. Функція `counters()` (а також функція {{cssxref("counter", "counter()")}}) – ось що робить його корисним, повертаючи визначений розробником вміст.

### Значення

Функція `counters()` приймає два або три параметри. Перший з них – `<counter-name>`. Другий – це зчіплювач `<string>`. Необов'язковий третій параметр – `<counter-style>`.

- `<counter-name>`
  - : {{cssxref("&lt;custom-ident&gt;")}}, що дає ідентичність лічильникам і є такою ж чутливою до регістру назвою, котра вжита у властивостях {{cssxref("counter-reset")}} і {{cssxref("counter-increment")}}. Ця назва не може починатися з двох дефісів і не може бути `none`, `unset`, `initial` та `inherit`. Інший варіант: для локальних одноразових лічильників замість названого лічильника можна вжити функцію {{cssxref("symbols")}} – у [браузерах, що підтримують `symbols()`](/uk/docs/Web/CSS/symbols#sumisnist-iz-brauzeramy).
- {{cssxref("&lt;string&gt;")}}
  - : Будь-яка кількість текстових символів. Нелатинські символи необхідно екранувати за допомогою їхніх послідовностей екранування Unicode: наприклад, `\000A9` представляє символ авторського права.
- `<counter-style>`
  - : Назва стилю лічильника або функція [`symbols()`](/uk/docs/Web/CSS/symbols). Назва стилю лічильника може бути простим наперед визначеним стилем, наприклад, числовим, алфавітним або символьним, складним розлогим наперед визначеним стилем, як-от східноазійським або ефіопським, або ще якимось [наперед визначеним стилем лічильника](/uk/docs/Web/CSS/CSS_counter_styles). Якщо цей параметр пропустити, то стиль лічильника усталено стає десятковим.

Повернене значення – це рядок, що містить усі значення усіх лічильників у наборі лічильників CSS елемента, що мають назву `<counter-name>`, у стилі лічильників, визначеному `<counter-style>` (або десятковому стилі, якщо стиль не вказано).

> [!NOTE]
> Інформацію про незчеплені лічильники дивіться на сторінці функції {{cssxref("counter", "counter()")}}, що не має параметра `<string>`

### Формальний синтаксис

{{CSSSyntax}}

## Приклади

### Порівняння усталеного значення лічильника з великими римськими числами

Цей приклад містить дві функції `counters()`: одну із заданим `<counter-style>` й одну з усталеним `decimal`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content:
    counters(listCounter, ".") " == "
    counters(listCounter, ".", lower-roman);
}
```

#### Результат

{{EmbedLiveSample("porivniannia-ustalenoho-znachennia-lichylnyka-z-velykymy-rymskymy-chyslamy", "100%", 270)}}

### Порівняння значення лічильника з провідними нулями з малими літерами

Цей приклад містить три функції `counters()`, кожна з яких має різні значення `<string>` і `<counter-style>`.

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content:
    counters(count, "-", decimal-leading-zero) ") ";
}
li::before {
  content:
    counters(count, "~", upper-alpha) " == "
    counters(count,  "*", lower-alpha);
}
```

#### Результат

{{EmbedLiveSample("porivniannia-znachennia-lichylnyka-z-providnymy-nuluamy-z-malymy-literamy", "100%", 270)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Застосування Лічильників CSS](/uk/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- Властивість {{cssxref("counter-set")}}
- Властивість {{cssxref("counter-reset")}}
- Властивість {{cssxref("counter-increment")}}
- Директива {{cssxref("@counter-style")}}
- Функція CSS [`counter()`](/uk/docs/Web/CSS/counter)
- Псевдоелемент {{cssxref("::marker")}}
- Модуль [Списків і лічильників CSS](/uk/docs/Web/CSS/CSS_lists)
- Модуль [Стилів лічильників CSS](/uk/docs/Web/CSS/CSS_counter_styles)
- Модуль [Згенерованого вмісту CSS](/uk/docs/Web/CSS/CSS_generated_content)
