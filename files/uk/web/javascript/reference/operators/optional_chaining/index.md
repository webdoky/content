---
title: Необов'язковий ланцюжок (?.)
slug: Web/JavaScript/Reference/Operators/Optional_chaining
page-type: javascript-operator
browser-compat: javascript.operators.optional_chaining
---

{{jsSidebar("Operators")}}

**Оператор необов'язкового ланцюжка (`?.`)** звертається до властивості об'єкта або викликає функцію. Якщо об'єкт, до якого відбувається звертання, або функція, що викликається за допомогою цього оператора, – {{jsxref("undefined")}} або [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null), то замість викидання помилки – вираз закорочується й обчислюється в {{jsxref("undefined")}}.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Синтаксис

```js-nolint
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
```

## Опис

Оператор `?.` – подібний до оператора ланцюжка `.`, окрім того, що замість спричинення помилки, коли посилання є [порожнім](/uk/docs/Glossary/Nullish) ([`null`](/uk/docs/Web/JavaScript/Reference/Operators/null) чи {{jsxref("undefined")}}), то вираз закорочується з поверненим значенням `undefined`. Бувши застосованим до виклику функції, оператор повертає `undefined`, якщо дана функція не існує.

Це призводить до коротших і простіших виразів при звертанні до ланцюжків властивостей, коли існує ймовірність того, що якесь посилання відсутнє. Також це може бути корисним при дослідженні вмісту об'єкта, коли немає гарантій того, які властивості в ньому є обов'язковими.

Припустімо, об'єкт `obj` має вкладену структуру. Без необов'язкового ланцюжка звертання до глибоко вкладеної підвластивості вимагає валідації проміжних посилань:

```js
const nestedProp = obj.first && obj.first.second;
```

Значення `obj.first` перевірено на нерівність `null` (і `undefined`) перед звертанням до значення `obj.first.second`. Такий код запобігає помилці, що трапилась би, якби відбулось звертання напряму до `obj.first.second`, без перевірки `obj.first`.

Це ідіоматичний патерн у JavaScript, але такий запис стає громіздким, коли ланцюжок – довгий, і це не є безпечним підходом. Наприклад, якщо `obj.first` – {{Glossary("Falsy", "хибне")}} значення, що не є `null` чи `undefined`, наприклад, `0`, то це все одно призведе до закорочення і змусить `nestedProp` стати `0`, що може не бути бажаним результатом.

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

Необов'язковий ланцюжок не може бути застосований до неоголошеного кореневого об'єкта, але може бути застосований до кореневого об'єкта, чиє значення – `undefined`.

```js example-bad
undeclaredVar?.prop; // ReferenceError: undeclaredVar is not defined
```

### Необов'язковий ланцюжок для виклику функцій

Необов'язковий ланцюжок можна використовувати при спробі викликати метод, що може не існувати. Це може бути корисним, наприклад, при використанні API, метод якого може бути недоступним, або через вік реалізації, або через функціональність, що недоступна на пристрої користувача

Використання з викликами функцій необов'язкового ланцюжка змушує вираз автоматично повертати `undefined` замість викидання винятку, якщо метод не знайдений:

```js
const result = someInterface.customMethod?.();
```

Проте якщо властивість з таким іменем є, але вона не є функцією, то `?.` все одно призведе до винесення винятку {{jsxref("TypeError")}} (`someInterface.customMethod is not a function`).

> [!NOTE]
> Якщо сам `someInterface` є `null` чи `undefined`, все ж буде винесений виняток {{jsxref("TypeError")}} (`someInterface is null`). Якщо очікується, що сам `someInterface` може бути `null` чи `undefined`, слід використовувати `?.` також на іншій позиції: `someInterface?.customMethod?.()`.

`eval?.()` – найстисліший спосіб ввійти у режим [_непрямого обчислення_](/uk/docs/Web/JavaScript/Reference/Global_Objects/eval#priame-ta-nepriame-obchyslennia).

### Необов'язковий ланцюжок з виразами

Також оператор необов'язкового ланцюжка можна використовувати вкупі з [записом квадратних дужок](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors#duzhkova-notatsiia), котрий дає змогу передати як ім'я властивості – вираз:

```js
const nestedProp = obj?.["prop" + "Name"];
```

Це особливо корисно для масивів, адже до індексів масивів можна звертатися лише з квадратними дужками.

```js
function printMagicIndex(arr) {
  console.log(arr?.[42]);
}
printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; якби не ?., тут викинуло б помилку "Cannot read properties of undefined (reading '42')"
```

### Недійсний необов'язковий ланцюжок

Не можна намагатися присвоїти результат виразові необов'язкового ланцюжка:

```js-nolint example-bad
const object = {};
object?.property = 1; // SyntaxError: Invalid left-hand side in assignment
```

[Теги шаблонних літералів](/uk/docs/Web/JavaScript/Reference/Template_literals#tehovani-shablony) не можуть з'являтися в необов'язковому ланцюжку (дивіться [SyntaxError: tagged template cannot be used with optional chain](/uk/docs/Web/JavaScript/Reference/Errors/Bad_optional_template)):

```js-nolint example-bad
String?.raw`Привіт, світе!`;
String.raw?.`Привіт, світе!`; // SyntaxError: Invalid tagged template on optional chain
```

Конструктор виразів {{jsxref("Operators/new", "new")}} не може бути частиною необов'язкового ланцюжка (дивіться [SyntaxError: new keyword cannot be used with an optional chain](/uk/docs/Web/JavaScript/Reference/Errors/Bad_new_optional)):

```js-nolint example-bad
new Intl?.DateTimeFormat(); // SyntaxError: Invalid optional chain from new expression
new Map?.();
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
// TypeError: Cannot read properties of undefined (reading 'b')
```

Це еквівалентно щодо:

```js
const potentiallyNullObj = null;
const temp = potentiallyNullObj?.a;
const prop = temp.b;
```

Окрім того, що змінна `temp` не створюється.

## Приклади

### Найпростіший приклад

Цей приклад шукає значення властивості `name` елемента відображення `CSS`, де такого елемента немає. Таким чином, результатом є `undefined`.

```js
const myMap = new Map();
myMap.set("JS", { name: "Денис", desc: "Я обслуговую всіляке" });

const nameBar = myMap.get("CSS")?.name;
```

### Виклик необов'язкових функцій зворотного виклику чи обробників подій

Якщо використовуються функції зворотного виклику, або якщо методи отримуються з об'єкта шляхом [присвоєння з деструктуруванням](/uk/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destrukturuvannia-obiektiv), можуть бути відсутні значення, котрі не можна викликати як функції, не перевіривши їх існування. За допомогою `?.` цієї додаткової перевірки можна уникнути:

```js
// Код, написаний без застосування необов'язкового ланцюжка
function doSomething(onContent, onError) {
  try {
    // Якісь операції з даними
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
    // Якісь операції з даними
  } catch (err) {
    onError?.(err.message); // Жодного винятку, якщо onError – undefined
  }
}
```

### Нагромадження операторів необов'язкового ланцюжка

При роботі зі вкладеними структурами можливо використовувати необов'язковий ланцюжок декілька разів:

```js
const customer = {
  name: "Карл",
  details: {
    age: 82,
    location: "Райські води", // Точна адреса – невідома
  },
};
const customerCity = customer.details?.address?.city;

// Це також працюватиме з викликом функції з необов'язковим ланцюжком
const customerName = customer.name?.getName?.(); // Метод не існує, customerName – undefined
```

### Поєднання з оператором null-злиття

[Оператор null-злиття](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) може використовуватися після необов'язкового ланцюжка, аби надати усталене значення, коли нічого не знайдено:

```js
function printCustomerCity(customer) {
  const customerCity = customer?.city ?? "Невідоме місто";
  console.log(customerCity);
}
printCustomerCity({
  name: "Натан",
  city: "Львів",
}); // "Львів"
printCustomerCity({
  name: "Карл",
  details: { age: 82 },
}); // "Невідоме місто"
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Оператор null-злиття (`??`)](/uk/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
