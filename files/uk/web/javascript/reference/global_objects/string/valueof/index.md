---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.valueOf
---

{{JSRef}}

Метод **`valueOf()`** повертає примітивне значення об'єкта {{jsxref("String")}}.

{{EmbedInteractiveExample("pages/js/string-valueof.html")}}

## Синтаксис

```js-nolint
valueOf()
```

### Повернене значення

Рядок, що відповідає примітивному значенню цього об'єкта {{jsxref("String")}}.

## Опис

Метод `valueOf()` об'єкту {{jsxref("String")}} повертає його примітивне значення як значення рядкового типу даних. Це значення еквівалентне результату виклику методу {{jsxref("String.prototype.toString()")}}.

Цей метод здебільшого викликається внутрішньо рушієм JavaScript, а не явно в коді вебзастосунків.

## Приклади

### Застосування `valueOf()`

```js
const x = new String("Привіт, світе");
console.log(x.valueOf()); // 'Привіт, світе'
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
