---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
page-type: javascript-global-property
browser-compat: javascript.builtins.Infinity
---

{{jsSidebar("Objects")}}

Глобальна властивість **`Infinity`** (нескінченність) – це числове значення, що представляє нескінченність.

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Значення

Те саме числове значення, що й {{jsxref("Number.POSITIVE_INFINITY")}}.

{{js_property_attributes(0, 0, 0)}}

## Опис

`Infinity` – це властивість _глобального об'єкта_. Інакше кажучи, це змінна в глобальній області видимості.

Значення `Infinity` (додатна нескінченність) – більше за будь-яке інше число.

Це значення поводиться дещо інакше, ніж математична нескінченність; подробиці – на сторінці {{jsxref("Number.POSITIVE_INFINITY")}}.

## Приклади

### Використання Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
