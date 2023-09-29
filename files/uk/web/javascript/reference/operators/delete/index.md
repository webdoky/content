---
title: delete
slug: Web/JavaScript/Reference/Operators/delete
page-type: javascript-operator
browser-compat: javascript.operators.delete
---

{{jsSidebar("Operators")}}

**Оператор `delete`** усуває властивість з об'єкта. Якщо значення властивості саме є об'єктом і на цей об'єкт більше немає посилань, то об'єкт з цієї властивості, врешті-решт, автоматично звільняється.

{{EmbedInteractiveExample("pages/js/expressions-deleteoperator.html")}}

## Синтаксис

```js-nolint
delete object.property
delete object[property]
```

> **Примітка:** Синтаксис мови дозволяє ставити після оператора `delete` широке розмаїття виразів, але лише форми, показані вище, дадуть змістовний результат.

### Параметри

- `object`
  - : Ім'я об'єкта, або ж вираз, котрий в результаті дає об'єкт.
- `property`
  - : Властивість до видалення.

### Повернене значення

Завжди `true`, окрім випадків, коли властивість є [власною](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) та [неналаштовною](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#atrybut-configurable) – тоді, якщо виконання відбувається не в суворому режимі, буде повернено `false`.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode), якщо властивість є власною та неналаштовною.
- {{jsxref("ReferenceError")}}
  - : Викидається, якщо `object` – це [`super`](/uk/docs/Web/JavaScript/Reference/Operators/super).

## Опис

Оператор `delete` має такий само [пріоритет](/uk/docs/Web/JavaScript/Reference/Operators/Operator_precedence), як інші унарні оператори, як то [`typeof`](/uk/docs/Web/JavaScript/Reference/Operators/typeof). Таким чином, він приймає будь-які вирази, сформовані операторами вищого пріоритету. Проте форми, показані нижче, в [суворому режимі](/uk/docs/Web/JavaScript/Reference/Strict_mode) зразу призведуть до синтаксичних помилок:

```js-nolint example-bad
delete identifier;
delete object.#privateProperty;
```

Завдяки тому, що [класи](/uk/docs/Web/JavaScript/Reference/Classes) автоматично отримують суворий режим, а [приватні властивості](/uk/docs/Web/JavaScript/Reference/Classes/Private_class_fields) можна правомірно використовувати лише в тілах класів, приватні властивості ніколи не можуть бути видалені. Попри те, що `delete identifier` [може спрацювати](#vydalennia-hlobalnykh-vlastyvostei), якщо `identifier` вказує на налаштовну властивість глобального об'єкта, цієї форми слід уникати, ставлячи натомість перед ідентифікатором [`globalThis`](/uk/docs/Web/JavaScript/Reference/Global_Objects/globalThis).

Попри те, що інакші вирази – приймаються, вони не дають змістовних результатів:

```js example-bad
delete console.log(1);
// Виводить 1, повертає true, але нічого не видалено
```

Оператор `delete` прибирає з об'єкта задану властивість. У випадку успішного видалення – повертає `true`, інакше – `false`. Всупереч поширеному уявленню (мабуть, пов'язаному з іншими мовами програмування, як то [delete у C++](https://docs.microsoft.com/cpp/cpp/delete-operator-cpp?view=msvc-170)), оператор `delete` **не має** стосунку до безпосереднього звільнення пам'яті. Керування пам'яттю виконується в непрямий спосіб, шляхом розриву посилань. Дивіться подробиці на сторінці [керування пам'яттю](/uk/docs/Web/JavaScript/Memory_management).

Важливо враховувати наступні варіанти:

- Якщо властивість, що видаляється, не існує, `delete` нічого не зробить і поверне `true`.
- `delete` діє лише на власні властивості. Якщо властивість з ідентичним іменем існує в ланцюжку прототипів об'єкта, то після видалення власної властивості об'єкт використовуватиме властивість з ланцюжка прототипів.
- Неналаштовні властивості не можуть бути прибрані. Серед них – властивості вбудованих об'єктів, як то {{jsxref("Math")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, а також властивості, створені як неналаштовні за допомогою методів штибу {{jsxref("Object.defineProperty()")}}.
- Видалення змінних, включно з параметрами функцій, ніколи не спрацює. `delete variable` в суворому режимі викине {{jsxref("SyntaxError")}}, а в несуворому – ніяк не подіє.
  - Змінні, оголошені за допомогою {{jsxref("Statements/var", "var")}}, не можуть бути видалені з глобальної області видимості, чи області функції, адже хоч вони могли бути прикріплені до [глобального об'єкта](/uk/docs/Glossary/Global_object), та не є налаштовними.
  - Змінні, оголошені за допомогою {{jsxref("Statements/let", "let")}} або {{jsxref("Statements/const", "const")}}, не можуть бути видалені з області видимості, у котрій були визначені, адже не є прикріпленими до об'єкта.

## Приклади

### Застосування delete

> **Примітка:** Наступний приклад використовує можливості, доступні лише в нестрогому режимі, але заборонені в строгому, як то неявне створення глобальних змінних та видалення ідентифікаторів.

```js
// Створення в глобальній області видимості властивості empCount.
// Оскільки використовується var, вона буде позначена як неналаштовна.
var empCount = 43;

// Створення в глобальній видимості властивості EmployeeDetails.
// Оскільки var не використовується, вона буде позначена як налаштовна.
EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// delete може застосовуватися для усунення з об'єктів їх властивостей.
delete EmployeeDetails.name; // повертає true

// Навіть коли властивість не існує, delete повертає "true".
delete EmployeeDetails.salary; // повертає true

// EmployeeDetails – властивість глобальної області видимості.
delete EmployeeDetails; // повертає true

// Натомість empCount – не налаштовна властивість,
// адже при її створенні використано var.
delete empCount; // повертає false

// Крім цього, delete не діє на вбудовані статичні властивості,
// котрі є неналаштовними.
delete Math.PI; // повертає false

function f() {
  var z = 44;

  // delete не діє на імена локальних змінних
  delete z; // повертає false
}
```

### delete і ланцюжок прототипів

В наступному прикладі видаляється власна властивість об'єкта, коли властивість з ідентичним іменем доступна в ланцюжку прототипів:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

const foo = new Foo();

// foo.bar пов'язано з
// власною властивістю.
console.log(foo.bar); // 10

// Видалити власну властивість всередині
// об'єкта foo.
delete foo.bar; // повертає true

// foo.bar досі доступна в
// ланцюжку прототипів
console.log(foo.bar); // 42

// Видалити властивість у прототипі.
delete Foo.prototype.bar; // повертає true

// Властивість "bar" більше не може бути
// успадкована від Foo, оскільки була
// видалена.
console.log(foo.bar); // undefined
```

### Видалення елементів масиву

Коли видаляється елемент масиву, на його `length` це не впливає. Довжина зберігається, навіть якщо видалити останній елемент масиву.

Коли оператор `delete` усуває елемент масиву, цей елемент зникає з масиву. В наступному прикладі за допомогою `delete` видаляється `trees[3]`.

```js
const trees = ["секвоя", "лавр", "кедр", "дуб", "клен"];
delete trees[3];
console.log(3 in trees); // false
```

Так утворюється [розріджений масив](/uk/docs/Web/JavaScript/Guide/Indexed_collections#rozridzheni-masyvy) з порожньою коміркою. Якщо треба, аби елемент масиву був, але мав значення `undefined`, слід його присвоїти, а не використовувати оператор `delete`. В наступному прикладі `trees[3]` присвоюється `undefined`, але елемент масиву далі існує:

```js
const trees = ["секвоя", "лавр", "кедр", "дуб", "клен"];
trees[3] = undefined;
console.log(3 in trees); // true
```

Якщо ж натомість треба прибрати елемент масиву, змінивши вміст масиву, слід використати метод {{jsxref("Array/splice", "splice()")}}. У наступному прикладі `trees[3]` цілком усувається з масиву за допомогою {{jsxref("Array/splice", "splice()")}}:

```js
const trees = ["секвоя", "лавр", "кедр", "дуб", "клен"];
trees.splice(3, 1);
console.log(trees); // ["секвоя", "лавр", "кедр", "клен"]
```

### Видалення неналаштовних властивостей

Коли властивість позначена як неналаштовна, `delete` не дасть жодного ефекту і поверне `false`. У суворому режимі така дія викине помилку `TypeError`.

```js
const Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // повертає false
```

{{jsxref("Statements/var", "var")}} створює неналаштовні властивості, котрі не можна видалити оператором `delete`:

```js
// Оскільки "nameOther" додано за допомогою
// ключового слова var, вона позначена як неналаштовна
var nameOther = "XYZ";

// До цієї глобальної властивості можна звернутися за допомогою:
Object.getOwnPropertyDescriptor(globalThis, "nameOther");
// {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

delete globalThis.nameOther; // повертає false
```

В суворому режимі це спричинить виняток.

### Видалення глобальних властивостей

Якщо глобальна властивість є налаштовною (наприклад, створена безпосереднім присвоєнням властивості), то вона може бути видалена, і подальші звертання до неї як до глобальної змінної спричинять {{jsxref("ReferenceError")}}.

```js
globalThis.globalVar = 1;
console.log(globalVar); // 1
// В несуворому режимі також можна застосувати `delete globalVar`
delete globalThis.globalVar;
console.log(globalVar); // ReferenceError: globalVar is not defined
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поглиблений аналіз delete (англ.)](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}
