---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
page-type: javascript-static-method
browser-compat: javascript.builtins.Object.defineProperty
---

{{JSRef}}

Статичний метод **`Object.defineProperty()`** ("означити властивість") визначає нову властивість безпосередньо на об'єкті, або змінює вже наявну властивість на об'єкті, і повертає цей об'єкт.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## Синтаксис

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Параметри

- `obj`
  - : Об'єкт, на якому буде визначено передану властивість.
- `prop`
  - : Назва або {{jsxref("Symbol", "символ")}} властивості, яку буде створено або модифіковано.
- `descriptor`
  - : Дескриптор властивості, яка визначається чи модифікується.

### Повернене значення

Об'єкт, який було передано до функції.

## Опис

Цей метод дає можливість делікатно додавати чи модифікувати властивість об'єкта. Звичайне додавання властивостей шляхом присвоєння породжує властивості, які потім з'являються під час перелічування властивостей (цикл {{jsxref("Statements/for...in", "for...in")}} або метод {{jsxref("Object.keys")}}), чиї значення можна змінювати, і які можна {{jsxref("Operators/delete", "видаляти", "", 1)}}. Цей метод дає змогу змінити ці додаткові деталі від їхніх усталених значень. Типово, додані методом `Object.defineProperty()` властивості не є ні записуваними, ні перелічуваними, ні налаштовними.

Наявні в об'єктах дескриптори властивостей поділяються на два основні види: дескриптори даних, та аксесорні дескриптори. **Дескриптор даних** — це властивість, що має значення, яке може або бути записуваним, або ні. **Аксесорний дескриптор** — це властивість, описана парою функцій з гетера й сетера. Будь-який дескриптор мусить належати до одного з цих двох видів, не обох.

Що дескриптор даних, що аксесорний дескриптор — це об'єкти. Вони поділяють наведений далі набір необов'язкових ключів (слід зауважити, що згадані тут **усталені значення** стосуються означення властивостей за допомогою `Object.defineProperty()`):

- `configurable` (налаштовний)

  - : в разі, якщо містить значення `false`:

    - тип цієї властивості не можна змінити від властивості даних до аксесорної властивості, і навпаки;
    - цю властивість не можна видалити;
    - інші атрибути дескриптора цієї властивості не можна змінити (проте, якщо цей дескриптор має `writable: true`, значення його `value` міняти можна, як і змінювати атрибут `writable` на `false`).

    **Усталено дорівнює `false`.**

- `enumerable` (перелічуваний)
  - : дорівнює `true` лише в тому разі, якщо ця властивість з'являється під час перелічування властивостей відповідного об'єкта.
    **Усталено дорівнює `false`.**

**Дескриптор даних** також може містити наступні необов'язкові ключі:

- `value` (значення)
  - : Власне значення, яке асоційовано з даною властивістю. Може бути будь-яким дійсним в JavaScript значенням (числом, об'єкт, функція тощо).
    **Усталено дорівнює {{jsxref("undefined")}}.**
- `writable` (записуваний)
  - : Дорівнює `true` в тому разі, якщо властивість можна змінювати шляхом застосування {{jsxref("Operators#operatory-prysvoiennia", "оператора присвоєння", "", 1)}}.
    **Усталено дорівнює `false`.**

**Аксесорний дескриптор** також має наступні необов'язкові ключі:

- `get` (взяти)
  - : Функція, яка слугує гетером для цієї властивості, або {{jsxref("undefined")}} — якщо гетера немає. Під час виконання доступу до властивості, ця функція викликається без аргументів, причому її значенням `this` встановлюється об'єкт, через який відбувається доступ до цієї властивості (у зв'язку з успадкуванням, це може бути не той об'єкт, на якому цю властивість було означено). Повернене з функції значення буде використано як значення властивості.
    **Усталено дорівнює {{jsxref("undefined")}}.**
- `set` (поставити)
  - : Функція, яка слугує сетером для цієї властивості, або {{jsxref("undefined")}} — якщо сетера немає. Під час присвоєння властивості значення, ця функція викликається з одним аргументом (значенням, яке присвоюється цій властивості), причому її значенням `this` встановлюється об'єкт, через який відбувається присвоєння цієї властивості.
    **Усталено дорівнює {{jsxref("undefined")}}.**

Якщо дескриптор не містить жодного ключа з-поміж `value`, `writable`, `get` і `set`, він вважається дескриптором даних. Якщо дескриптор одночасно містить і ключ \[`value` чи `writable`], і \[`get` чи `set`] — викидається виняток.

Слід мати на увазі, що ці атрибути не зобов'язані бути власними властивостями дескриптора: успадковані властивості також будуть враховуватися. Аби впевнитися, що ці усталені значення будуть збережені без змін, можна заздалегідь заморозити об'єкти, наявні в прототипному ланцюжку дескрипторного об'єкта, вказати всі атрибути явно, чи створити [`null`-прототипний об'єкт](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototypni-obiekty).

```js
const obj = {};
// 1. Застосування null як прототипа – немає успадкованих властивостей
const descriptor = Object.create(null);
descriptor.value = "static";

// як усталено: неперелічувана, неналаштовна, незаписувана
Object.defineProperty(obj, "key", descriptor);

// 2. Явним чином, шляхом використання одноразового об'єктного літерала
// із вказаними всіма атрибутами
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Повторно використовуючи один об'єкт
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // уникання подвійної роботи під час присвоєння значення
  if (d.value !== value) d.value = value;

  return d;
}
// і далі
Object.defineProperty(obj, "key", withValue("static"));

// якщо доступна операція заморожування, перешкоджає
// додаванню чи видаленню властивостей прототипа об'єкта
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

Якщо властивість уже існує, метод `Object.defineProperty()` спробує модифікувати властивість відповідно до значень в переданому дескрипторі та поточної конфігурації цієї властивості.

Якщо старий дескриптор має свій атрибут `configurable`, встановлений у значення `false`, то властивість називається _неналаштовною_. Не допускається змінювати будь-який з атрибутів неналаштовної аксесорної властивості, і також неможливо змінити тип властивості між властивістю даних і аксесорною властивістю. Для властивостей даних з атрибутом `writable: true` допускається змінювати значення, а також змінювати значення атрибута `writable` зі `true` на `false`. Буде викинуто помилку {{jsxref("TypeError")}} під час спроби змінити атрибути неналаштовної властивості (за винятком атрибутів `value` та `writable`, якщо це дозволено), окрім ситуації, коли відбувається означення такого ж значення, як і попереднє значення властивості даних.

Коли поточна властивість є налаштовною, означення якогось атрибута як `undefined` фактично його видаляє. Наприклад, нехай `o.k` — аксесорна властивість. Виклик `Object.defineProperty(o, "k", { set: undefined })` видалить наявний сетер, залишивши властивості `k` самий лише гетер, і зробивши її доступною лише для прочитання. Якщо в новому дескрипторі якийсь атрибут відсутній, значення атрибута старого дескриптора зберігається (його не буде неявно перевизначено як `undefined`). Існує можливість перемикатися між властивістю даних і аксесорною властивістю шляхом передачі нового дескриптора іншого виду. Наприклад, якщо новий дескриптор є дескриптором даних (містить атрибут `value` чи `writable`), то обидва попередні атрибути `get` та `set` дескриптора будуть відкинуті.

## Приклади

### Створення властивості

Коли вказана властивість не існує на об'єкті, то `Object.defineProperty()` створює нову властивість, так, як описано. Поля дескриптора можуть бути опущені, замість них буде введено їхні усталені значення.

```js
const o = {}; // Створює новий об'єкт

// Приклад додавання властивості об'єкта за допомогою
// defineProperty з дескриптором властивості даних
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// властивість 'a' існує всередині об'єкта o, і її значення дорівнює 37

// Приклад додавання властивості об'єкта за допомогою
// defineProperty з дескриптором аксесорної властивості
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// властивість 'b' існує в об'єкті o, і її значення дорівнює 38
// Значення властивості o.b тепер завжди ідентичне змінній bValue,
// доки властивість o.b не буде перевизначено

// Неможливо змішати обидва типи:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// викидає TypeError: атрибут value мусить бути
// присутнім лише в дескрипторах даних,
// get — лише в аксесорних дескрипторах
```

### Модифікування властивості

Під час внесення змін до наявної властивості, її поточна конфігурація визначає те, чи операція: буде успішною, не зробить нічого, чи викине {{jsxref("TypeError")}}.

#### Атрибут writable

Коли атрибут `writable` властивості встановлено у значення `false`, цю властивість називають "незаписуваною". Їй неможливо присвоїти інше значення.

```js
const o = {}; // Створює новий об'єкт

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // Помилка не викидається
// (в суворому режимі помилку буде викинуто,
// навіть якщо значення буде тим самим)
console.log(o.a); // 37; Присвоєння не спрацювало

// суворий режим
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // викидає TypeError: "b" is read-only
  return o.b; // повертає 2, якщо без попереднього рядка
})();
```

Як видно на прикладі, спроба записати щось у незаписувану властивість не змінить її, проте і не викине помилки.

#### Атрибут enumerable

Атрибут `enumerable` властивості визначає те, чи буде властивість взята методом {{jsxref("Object.assign()")}} або оператором [розгортання](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Для не{{jsxref("Symbol", "символьних")}} властивостей він також визначає те, чи з'явиться ця властивість в циклі {{jsxref("Statements/for...in", "for...in")}} та {{jsxref("Object.keys()")}}, чи ні.

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // усталене значення enumerable — false
o.d = 4; // усталене значення enumerable дорівнює true,
// якщо властивість створюється шляхом її встановлення
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// Друкує 'a' та 'd' (завжди в такій послідовності)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Атрибут configurable

Атрибут `configurable` керує тим, чи може властивість бути видалена, і одночасно чи можна змінювати інші її атрибути (окрім `value` та `writable`).

Коли його значенням встановлено `false`, проте атрибут `writable` дорівнює `true` — `value` все ж можна змінювати, і `writable` все ще можна перемкнути з `true` на `false`. Коли його значення дорівнює `true`, а `writable` — `false`, — то `value` все ж можна замінити за допомогою `defineProperty` (проте не операторами присвоєння), і сам атрибут `writable` можна перемкнути.

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // викидає TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // викидає TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // викидає TypeError (set до цього дорівнював undefined)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // викидає TypeError
// (навіть якщо новий гетер робить точнісінько те саме)
Object.defineProperty(o, "a", {
  value: 12,
}); // викидає TypeError // ('value' можна змінювати із 'configurable', встановленим у false, проте не в цьому випадку, через наявність аксесора 'get')

console.log(o.a); // 1
delete o.a; // Нічого не відбувається
console.log(o.a); // 1

Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Навіть якщо configurable дорівнює false, значення досі можна замінювати, оскільки об'єкт залишається записуваним
console.log(o.b); // 1
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: властивість не можна змінити, оскільки воне не є ні записуваною, ні налаштовною
```

Якби атрибут `configurable` властивості `o.a` дорівнював `true`, не було б викинуто жодну з цих помилок, і в кінці властивість було б видалено.

### Додавання атрибутів і усталених значень

Важливо розуміти, яким чином застосовуються усталені значення атрибутів. Нерідко існує певна відмінність між застосуванням для присвоєння значень [звертань до властивостей](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors) і вживанням методу `Object.defineProperty()`, як проілюстровано у прикладі нижче.

```js
const o = {};

o.a = 1;
// є еквівалентом до:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// З іншого боку,
Object.defineProperty(o, "a", { value: 1 });
// є еквівалентом до:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Застосування власних гетерів і сетерів

Наведений далі приклад показує, як реалізувати самоархівований об'єкт. Кожного разу, коли встановлюється нове значення властивості `temperature`, масив `archive` отримує новий запис.

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("отримати!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'отримати!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

А в цьому прикладі гетер завжди повертає одне значення.

```js
const pattern = {
  get() {
    return "Я завжди повертаю цей рядок, незалежно від того, що мені присвоєно";
  },
  set() {
    this.myname = "це рядок із моїм іменем";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// Я завжди повертаю цей рядок, незалежно від того, що мені присвоєно

console.log(instance.myname); // це рядок із моїм іменем
```

### Успадкування властивостей

Коли успадковується аксесорна властивість, її методи `get` та `set` викликаються, коли до цієї властивості звертаються чи модифікують її на дочірніх об'єктах. Якщо ці методи використовують змінну для зберігання значення, це значення поділятимуть всі об'єкти.

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

Це можна виправити, якщо зберігати значення всередині іншої властивості. Всередині методів `get` та `set` значення `this` вказує на об'єкт, який було використано для доступу чи зміни властивості.

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

На відміну від аксесорних властивостей, значення властивостей даних завжди встановлюються на самому об'єкті, а не на його прототипі. Проте, якщо успадковується незаписувана властивість даних, то це перешкодить внесенням змін до неї на дочірньому об'єкті.

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ігнорується, в суворому режимі викидає помилку
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Перелічуваність і власність властивостей](/uk/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
