---
title: Необов'язковий ланцюжок (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
tags:
  - Chaining
  - JavaScript
  - Language feature
  - Operator
  - Optional chaining
  - Reference
browser-compat: javascript.operators.optional_chaining
---

{{JSSidebar("Operators")}}

Оператор **необов'язкового ланцюжка** (**`?.`**) дає змогу зчитувати значення властивості, розташованої в глибині ланцюжка пов'язаних об'єктів, без потреби перевіряти дійсність кожного посилання в ланцюжку.

Оператор `?.` подібний до оператора ланцюжка `.`, окрім того, що замість спричинення помилки, коли посилання є [порожнім](/uk/docs/Glossary/Nullish) (рівним [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{JSxRef("undefined")}}), вираз закорочується з поверненим значенням `undefined`. Бувши застосованим для виклику функції, він повертає `undefined`, якщо така функція не існує.

Результатом є коротші й простіші вирази при доступі до вкладених властивостей, коли існує ймовірність, що посилання може бути порожнім. Також це може бути корисним при дослідженні вмісту об'єкта, коли немає гарантій щодо того, які властивості є обов'язковими.

Необов'язковий ланцюжок не може застосовуватися до неоголошеного кореневого об'єкта, але може – до кореневого об'єкта, що є `undefined`.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html",
  "taller")}}

## Синтаксис

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Опис

Оператор необов'язкового ланцюжка пропонує спосіб до спрощення доступу до значень в пов'язаних об'єктах, коли можливо, що певне посилання чи певна функція може бути `undefined` чи `null`.

Припустімо, об'єкт `obj` має вкладену структуру. Без необов'язкового ланцюжка звертання до глибоко вкладеної підвластивості вимагає валідації проміжних посилань:

```js
const nestedProp = obj.first && obj.first.second;
```

Значення `obj.first` перевірено на нерівність `null` (і `undefined`) перед звертанням до значення `obj.first.second`. Такий код запобігає помилці, що трапилась би, якби відбулось звертання напряму до `obj.first.second`, без перевірки `obj.first`.

Проте з оператором необов'язкового ланцюжка (`?.`) немає потреби явно перевіряти й закорочувати на основі стану `obj.first` перед спробою звернутися до `obj.first.second`:

```js
const nestedProp = obj.first?.second;
```

При використанні оператора `?.` замість простого `.` JavaScript знає, що перед спробою доступитися до `obj.first.second` треба неявно пересвідчитися, що `obj.first` не є ані `null`, ані `undefined`. Якщо `obj.first` є `null` чи `undefined`, вираз автоматично закорочується, повертаючи `undefined`.

Це еквівалентно до наступного коду, окрім того, що тимчасова змінна фактично не створюється:

```js
const temp = obj.first;
const nestedProp =
  temp === null || temp === undefined ? undefined : temp.second;
```

### Необов'язковий ланцюжок для виклику функцій

Необов'язковий ланцюжок можна використовувати при спробі викликати метод, що може не існувати. Це може бути корисним, наприклад, при використанні API, метод якого може бути недоступним, або через вік реалізації, або через функціональність, що недоступна на пристрої користувача

Використання з викликами функцій необов'язкового ланцюжка змушує вираз автоматично повертати `undefined` замість викидання винятку, якщо метод не знайдений:

```js
const result = someInterface.customMethod?.();
```

> **Примітка:** Якщо властивість з таким іменем є, але вона не є функцією, то `?.` все одно призведе до винесення винятку {{JSxRef("TypeError")}} (`someInterface.customMethod is not a function`).

> **Примітка:** Якщо сам `someInterface` є `null` чи `undefined`, все ж буде винесений виняток {{JSxRef("TypeError")}} (`someInterface is null`). Якщо очікується, що сам `someInterface` може бути `null` чи `undefined`, слід використовувати `?.` також на іншій позиції: `someInterface?.customMethod?.()`

### Необов'язковий ланцюжок з виразами

Також оператор необов'язкового ланцюжка можна використовувати при отриманні властивостей за допомогою виразів і [доступу до властивостей через квадратні дужки](/uk/docs/Web/JavaScript/Reference/Operators/Property_Accessors#zapys-kvadratnykh-duzhok):

```js
const nestedProp = obj?.['prop' + 'Name'];
```

Це особливо корисно для масивів:

```js
const arr = ['а', 'б', 'в', 'г'];
const arrayItem = arr?.[42];
```

### Необов'язковий ланцюжок недійсний на лівому боці присвоєння

Не можна намагатися присвоїти результат виразові необов'язкового ланцюжка:

```js example-bad
const object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Закорочення

Якщо при використанні необов'язкового ланцюжка з виразами лівий операнд є `null` чи `undefined`, то вираз не буде обчислюватися. Наприклад:

```js
const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0, оскільки x не було збільшено
```

Подальші звертання до властивостей також не будуть обчислені.

```js
const potentiallyNullObj = null;
const prop = potentiallyNullObj?.a.b;
// Не викидає, тому що обчислення вже зупинилося на
// першій необов'язковій ланці
```

Це еквівалентно щодо:

```js
const potentiallyNullObj = null;
const prop =
  potentiallyNullObj === null || potentiallyNullObj === undefined
    ? undefined
    : potentiallyNullObj.a.b;
```

А проте, така закорочувальна поведінка спрацьовує лише для одного протяжного "ланцюжка" звертань до властивостей. Якщо [згрупувати](/uk/docs/Web/JavaScript/Reference/Operators/Grouping) частину ланцюжка, то подальші звертання до властивостей все ж будуть обчислені.

```js
const potentiallyNullObj = null;
const prop = (potentiallyNullObj?.a).b;
// Uncaught TypeError: Cannot read properties of undefined (reading 'b')
```

Це еквівалентно щодо:

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

…окрім того, що змінна `temp` не створюється.

## Приклади

### Найпростіший приклад

Цей приклад шукає значення властивості `name` елемента відображення `bar`, де такого елемента немає. Таким чином, результатом є `undefined`.

```js
const myMap = new Map();
myMap.set('foo', { name: 'baz', desc: 'inga' });

const nameBar = myMap.get('bar')?.name;
```

### Виклик необов'язкових функцій зворотного виклику чи обробників подій

Якщо використовуються функції зворотного виклику, або якщо методи отримуються з об'єкта шляхом [присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destrukturuvannia-obiektiv), можуть бути відсутні значення, котрі не можна викликати як функції, не перевіривши їх існування. За допомогою `?.` цієї додаткової перевірки можна уникнути:

```js
// Код, написаний без застосування необов'язкового ланцюжка
function doSomething(onContent, onError) {
  try {
    // ... якісь операції з даними
  } catch (err) {
    if (onError) {
      // Перевірка того, що onError справді існує
      onError(err.message);
    }
  }
}
```

```js
// Використання необов'язкового ланцюжка з викликами функцій
function doSomething(onContent, onError) {
  try {
    // ... якісь операції з даними
  } catch (err) {
    onError?.(err.message); // жодного винятку, якщо onError – undefined
  }
}
```

### Нагромадження операторів необов'язкового ланцюжка

При роботі зі вкладеними структурами можливо використовувати необов'язковий ланцюжок декілька разів:

```js
const customer = {
  name: 'Карл',
  details: {
    age: 82,
    location: 'Райські води', // точна адреса – невідома
  },
};
const customerCity = customer.details?.address?.city;

// … це також працюватиме з викликом функції з необов'язковим ланцюжком
const customerName = customer.name?.getName?.(); // метод не існує, customerName – undefined
```

### Поєднання з оператором null-злиття

{{JSxRef("Operators/Nullish_Coalescing_Operator", "Оператор null-злиття",
  '', 1)}} може використовуватися після необов'язкового ланцюжка, аби надати усталене значення, коли нічого не знайдено:

```js
const customer = {
  name: 'Карл',
  details: { age: 82 },
};
const customerCity = customer?.city ?? 'Невідоме місто';
console.log(customerCity); // Невідоме місто
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- {{JSxRef("Operators/Nullish_Coalescing_Operator", "Оператор null-злиття",
    '', 1)}}
