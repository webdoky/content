---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.replaceAll
---

{{JSRef}}

Метод **`replaceAll()`** (замінити все) значень {{jsxref("String")}} повертає новий рядок, в якому всі збіги з патерном `pattern` замінені переданим значенням `replacement`. Значенням `pattern` може бути як рядок, так і {{jsxref("RegExp")}}, а `replacement` може бути рядком або функцією, яка буде викликана для кожного знайденого збігу.Початковий рядок залишається незмінним.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Синтаксис

```js-nolint
replaceAll(pattern, replacement)
```

### Параметри

- `pattern` (патерн)

  - : може бути рядком чи об'єктом з методом [`Symbol.replace`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) – типовим зразком чого є [регулярні вирази](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Будь-яке значення, котре не має метода `Symbol.replace`, буде зведено до рядка.

    Якщо `pattern` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv), то він мусить мати позначку глобальності (`g`), інакше – буде викинуто {{jsxref("TypeError")}}.

- `replacement` (заміна)
  - : Може бути рядком чи функцією. Заміна має таку само семантику, як для [`String.prototype.replace()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Повернене значення

Новий рядок, в якому всі збіги з патерном замінені вказаним значенням.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається, якщо `pattern` [є регулярним виразом](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp#osoblyva-obrobka-rehuliarnykh-vyraziv), котрий не має позначки глобальності (`g`), тобто його властивість [`flags`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) не містить `"g"`.

## Опис

Цей метод не видозмінює рядкове значення, на котрому його викликали. Він повертає новий рядок.

На відміну від [`replace()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/replace), цей метод замінює всі входження рядка, а не тільки перше. Попри те, що також можливо застосувати `replace()` з динамічно сконструйованим за допомогою [`RegExp()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) глобальним регулярним виразом, аби замінити всі входження рядка, це може мати небажані наслідки, якщо цей рядок вміщає спеціальні символи, що мають значення в регулярних виразах (а це може статися, якщо рядок заміни надходить від користувача). Попри те, що цьому можна запобігти, застосувавши {{jsxref("RegExp.escape()")}}, перетворивши регулярний вираз на літеральний патерн, краще просто застосувати `replaceAll()` та передати рядок, не перетворюючи його на регулярний вираз.

```js
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[ВИДАЛЕНО]");
}
function safeRedactName(text, name) {
  return text.replaceAll(name, "[ВИДАЛЕНО]");
}
const report =
  "Хакер на ім'я ха.*ер використав спеціальні символи в своєму імені для зламу сервера.";
console.log(unsafeRedactName(report, "ха.*ер")); // "Хакер на ім'я [ВИДАЛЕНО]а."
console.log(safeRedactName(report, "ха.*ер")); // "Хакер на ім'я [ВИДАЛЕНО] використав спеціальні символи в своєму імені для зламу сервера."
```

Якщо `pattern` є об'єктом з методом [`Symbol.replace`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) (в т.ч. об'єктом `RegExp`), то такий метод викликається з цільовим рядком та `replacement` як аргументами. Повернене значення стає поверненим значенням `replaceAll()`. У такому випадку логіка `replaceAll()` повністю закодована у методі `[Symbol.replace]()`, а отже – матиме такий само результат, як `replace()` (окрім додаткової валідації введення – перевірки того, що регулярний вираз є глобальним).

Якщо `pattern` є порожнім рядком, то заміна буде вставлена між кожними двома кодовими одиницями UTF-16, подібно до поведінки [`split()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Для отримання подробиць про те, як властивості регулярних виразів (особливо позначку [липкості](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) взаємодіють із `replaceAll()` – дивіться [`RegExp.prototype[Symbol.replace]()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Приклади

### Застосування методу replaceAll()

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Регулярний вираз без глобального пошуку викидає виняток

Якщо шукане значення вказано як регулярний вираз, то такий вираз повинен бути глобальним. Наступний підхід не спрацює:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

Проте такий варіант працюватиме:

```js example-good
'aabbcc'.replaceAll(/b/g, '.');
<!-- markdownlint-disable-next-line -->
"aa..cc"
```

## Специфікації

{{Specifications}}

## Сумісність з браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.replaceAll` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Посібник [Регулярні вирази](/uk/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
