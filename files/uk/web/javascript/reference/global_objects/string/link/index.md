---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.link
---
{{JSRef}} {{deprecated_header}}

Метод **`link()`** створює рядковий відповідник коду HTML-елемента {{HTMLElement("a")}}, для використання його як гіпертекстового посилання на інший URL.

## Синтаксис

```js
link(url)
```

### Параметри

- `url`
  - : Будь-який рядок, який буде значенням атрибуту `href` елементу `<a>`. Він повинен містити дійсний URL (відносний чи абсолютний), в якому всі символи `&` екрануються як `&amp;`, а лапки `"` — як `&quot;`.

### Повернене значення

Рядок, який містить HTML-елемент {{HTMLElement("a")}}.

## Опис

Метод `link()` використовується для створення фрагменту HTML з гіпертекстовим посиланням. Повернений в результаті рядок можна додати до документа за допомогою {{domxref("document.write()")}} чи {{domxref("element.innerHTML")}}.

Посилання, створені за допомогою методу `link()`, також стають елементами масиву `links` в об'єкті `document`. Докладніше — в розділі {{domxref("document.links")}}.

## Приклади

### Застосування link()

Наступний приклад показує слово "MDN" як гіпертекстове посилання, яке повертає користувача до вебсайту Mozilla Developer Network.

```js
var hotText = 'MDN';
var url = 'https://developer.mozilla.org/';

console.log('Натисніть, щоб повернутися до ' + hotText.link(url));
// Натисніть, щоб повернутися до <a href="https://developer.mozilla.org/">MDN</a>
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.link` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.anchor()")}}
