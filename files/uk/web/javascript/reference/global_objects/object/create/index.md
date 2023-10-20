---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.create
---

{{JSRef}}

Статичний метод **`Object.create()`** ("створити") створює новий об'єкт, використовуючи певний наявний об'єкт як прототип новоствореного об'єкта.

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## Синтаксис

```js-nolint
Object.create(proto)
Object.create(proto, propertiesObject)
```

### Параметри

- `proto`
  - : Об'єкт, який буде прототипом новоствореного об'єкта.
- `propertiesObject` {{optional_inline}}
  - : Якщо цей параметр вказано, і він не дорівнює {{jsxref("undefined")}}, — то це має бути об'єкт, чиї [власні перелічувані властивості](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) позначають дескриптори властивостей, які, з відповідними іменами, буде додано до новоствореного об'єкта. Формат цих властивостей відповідає другому аргументові методу {{jsxref("Object.defineProperties()")}}.

### Повернене значення

Новий об'єкт, зі вказаними властивостями й прототипним об'єктом.

### Винятки

- {{jsxref("TypeError")}}
  - : Викидається в разі, якщо `proto` не дорівнює [`null`](/uk/docs/Web/JavaScript/Reference/Operators/null), і не є {{jsxref("Object", "об'єктом")}}.

## Приклади

### Реалізація класичного успадкування за допомогою Object.create()

Нижче наведено приклад того, як можна використати `Object.create()` для реалізації класичного успадкування. Результатом є одинарна (проста) форма успадкування — це все, що підтримується в JavaScript.

```js
// Shape - надклас
function Shape() {
  this.x = 0;
  this.y = 0;
}

// метод надкласу
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Фігуру переміщено.");
};

// Rectangle - підклас
function Rectangle() {
  Shape.call(this); // викликати конструктор надкласу.
}

// підклас розширює надклас
Rectangle.prototype = Object.create(Shape.prototype, {
  // Якщо не встановити Rectangle значенням властивості Rectangle.prototype.constructor,
  // він візьме значення prototype.constructor від Shape (батьківського класу).
  // Аби уникнути цього, слід встановити Rectangle (дочірній клас) значенням prototype.constructor.
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

const rect = new Rectangle();

console.log(
  "Чи є `rect` примірником класу Rectangle?",
  rect instanceof Rectangle,
); // true
console.log("Чи є `rect` примірником класу Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Друкує 'Фігуру переміщено.'
```

Слід зауважити, що є певні перестороги для застосування `create()`, які слід мати на увазі. Зокрема — повторне додавання властивості [`constructor`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) для забезпечення вірної семантики. І хоча вважається, що `Object.create()` відпрацьовує швидше, аніж пряма заміна прототипу за допомогою {{jsxref("Object.setPrototypeOf()")}}, цією різницею насправді можна знехтувати в разі, якщо створення примірників не відбувається, та поки не оптимізовано доступ до властивостей. В сучасному коді, в будь-якому разі слід надавати перевагу синтаксису [класів](/uk/docs/Web/JavaScript/Reference/Classes).

### Застосування аргументу propertiesObject з Object.create()

Метод `Object.create()` дає можливість тонкого контролю над процесом створення об'єкта. [Синтаксис об'єктного ініціалізатора](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer) насправді є синтаксичним цукром для `Object.create()`. За допомогою `Object.create()` можна створювати об'єкти з призначеним прототипом, і також з певними властивостями. Варто зауважити, що другий параметр ставить у відповідність ключам _дескриптори властивості_. Тобто також можна керувати перелічуваністю, налаштованістю та іншими характеристиками, що неможливо при застосуванні об'єктних ініціалізаторів.

```js
o = {};
// ...що еквівалентно такому виразові:
o = Object.create(Object.prototype);

o = Object.create(Object.prototype, {
  // foo — це пересічна властивість з даними
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
  // bar — це властивість з аксесорами
  bar: {
    configurable: false,
    get() {
      return 10;
    },
    set(value) {
      console.log("Setting `o.bar` to", value);
    },
  },
});

// Створити новий об'єкт, чиїм протипом є новий порожній об'єкт,
// та додати до нього єдину властивість 'p' зі значенням 42.
o = Object.create({}, { p: { value: 42 } });
```

За допомогою `Object.create()` можна створити об'єкт, [чиїм прототипом є `null`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty). Еквівалентним синтаксисом на об'єктних ініціалізаторах було б вказання ключа [`__proto__`](/uk/docs/Web/JavaScript/Reference/Operators/Object_initializer#vstanovliuvach-prototypu).

```js
o = Object.create(null);
// ...що еквівалентно такому:
o = { __proto__: null };
```

Усталено властивості _не є_ записуваними, перелічуваними чи налаштовними.

```js
o.p = 24; // викидає виняток у суворому режимі
o.p; // 42

o.q = 12;
for (const prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// повертає false; викидає виняток у суворому режимі
```

Необхідно явно вказувати `writable`, `enumerable` та `configurable`, аби означити властивість з такими само атрибутами, як при використанні ініціалізатора.

```js
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
// Це не еквівалентно виразові:
// o2 = Object.create({ p: 42 })
// який лише створить об'єкт із прототипом { p: 42 }
```

`Object.create()` можна використовувати для імітації поведінки оператора [`new`](/uk/docs/Web/JavaScript/Reference/Operators/new).

```js
function Constructor() {}
o = new Constructor();
// ...що еквівалентно такому:
o = Object.create(Constructor.prototype);
```

Авжеж, якщо функція `Constructor` містить якийсь код ініціалізації — метод `Object.create()` не зможе його відтворити.

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Поліфіл методу `Object.create` у складі `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Reflect.construct()")}}
- [Object.getPrototypeOf](https://johnresig.com/blog/objectgetprototypeof/) від Джона Резіга (2008)
