---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
page-type: javascript-class
browser-compat: javascript.builtins.Proxy
---

{{JSRef}}

Об'єкт **`Proxy`** (заступник, прокладка) дає змогу створювати заступника для іншого об'єкта, котрий може перехоплювати й перевизначати базові операції для такого іншого об'єкта.

## Опис

Об'єкт `Proxy` дає змогу створити об'єкт, котрий буде вживатися на місці вихідного об'єкта, але може перевизначити базові операції `Object`, як то отримання, присвоєння й означення властивостей. Об'єкти Proxy, загалом, використовують для журналювання звертань до властивостей, валідації, форматування чи оздоровлення введених даних, і так далі.

Для створення об'єкта `Proxy` необхідні два параметри:

- `target` (ціль): вихідний об'єкт, котрий необхідно заступити
- `handler` (обробник): об'єкт, котрий визначає те, які операції будуть перехоплені, і як перевизначити ці операції.

Наприклад, такий код створює заступника для об'єкта `target`.

```js
const target = {
  message1: "привіт",
  message2: "усім",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Через те, що обробник – порожній, цей заступник поводиться так само, як сама ціль заступництва:

```js
console.log(proxy1.message1); // привіт
console.log(proxy1.message2); // усім
```

Для налаштування заступника слід визначити на об'єкті-обробнику функції:

```js
const target = {
  message1: "привіт",
  message2: "усім",
};

const handler2 = {
  get(target, prop, receiver) {
    return "світе";
  },
};

const proxy2 = new Proxy(target, handler2);
```

Тут задана реалізація обробника {{jsxref("Proxy/Proxy/get", "get()")}}, котра перехоплює спроби звернутися до властивостей цілі.

Функції-обробники іноді називають _пастками_ – здогадно, через те, що вони вловлюють виклики до цільового об'єкта. Пастка у `handler2` вище перевизначає усі аксесори властивостей:

```js
console.log(proxy2.message1); // світе
console.log(proxy2.message2); // світе
```

Заступники нерідко застосовуються вкупі з об'єктом {{jsxref("Reflect")}}, котрий надає кілька методів з назвами, що збігаються з назвами пасток `Proxy`. Методи `Reflect` надають семантику рефлексії для закликання відповідних [внутрішніх методів об'єктів](#vnutrishni-metody-obiektiv). Наприклад, можна викликати `Reflect.get`, коли немає потреби перевизначати поведінку об'єкта:

```js
const target = {
  message1: "привіт",
  message2: "усім",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "світе";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // привіт
console.log(proxy3.message2); // світе
```

Метод `Reflect` так само взаємодіє з об'єктом через приховані методи об'єкта – він не "знезаступнює" заступника, бувши закликаним на заступнику. Коли методи `Reflect` застосовуються в межах ловця заступника, і виклик методу об'єкта `Reflect` знову перехоплюється пасткою, то може статися нескінченна рекурсія.

### Термінологія

При мові про функціональність заступників вживаються наступні терміни.

- [обробник](/uk/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#funktsii-obrobnyka)
  - : Об'єкт, переданий другим аргументом у конструктор `Proxy`. Містить пастки, котрі визначають поведінку заступника.
- пастка
  - : Функція, котра визначає поведінку відповідних [внутрішніх методів об'єктів](#vnutrishni-metody-obiektiv). (Це аналогічно концепції _пасток_ в операційних системах.)
- ціль
  - : Об'єкт, котрого віртуалізує заступник. Нерідко використовується заступником як бекенд. Інваріанти (семантика, що залишається без змін) щодо нерозширюваності об'єкта або неналаштовності властивостей перевіряються відносно цілі.
- інваріанти
  - : Семантика, що залишається без змін при реалізації власних операцій. Якщо ваша реалізація пастки суперечить інваріантам обробника, то буде викинуто {{jsxref("TypeError")}}.

### Внутрішні методи об'єктів

[Об'єкти](/uk/docs/Web/JavaScript/Data_structures#obiekty) – це колекції властивостей. Проте мова JavaScript не надає жодних механізмів для безпосередньої маніпуляції даними, збереженими в об'єкті – натомість об'єкт визначає певні внутрішні методи, котрі задають те, як з ним можна взаємодіяти. Наприклад, при зчитуванні `obj.x` можна очікувати на наступне:

- Властивість `x` шукається у [ланцюжку прототипів](/uk/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), поки не знаходиться.
- Якщо `x` є властивістю даних, то повертається атрибут дескриптора властивості `value`.
- Якщо `x` є аксесорною властивістю, то закликається гетер, і його повернене значення – повертається.

В цьому процесі у мові програмування немає нічого особливого – лишень через те, що звичайні об'єкти усталено мають внутрішній метод `[[Get]]`, в котрому задана така логіка. Синтаксис звертання до властивості `obj.x` просто закликає на об'єкті метод `[[Get]]`, і об'єкт використовує власну реалізацію внутрішнього методу для з'ясування того, що він поверне.

Інший приклад: [масиви](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array) відрізняються від звичайних об'єктів, адже мають магічну властивість [`length`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/length), котра, бувши зміненою, автоматично виділяє нові порожні комірки чи прибирає з масиву елементи. Подібно до цього, додавання до масиву елементів автоматично змінює властивість `length`. Так відбувається через те, що масиви мають внутрішній метод `[[DefineOwnProperty]]`, котрий знає, що треба оновити `length`, коли виконується запис за цілочисловим індексом, або оновити вміст масиву, якщо вносяться зміни до властивості `length`. Такі об'єкти, чия реалізація внутрішніх методів відрізняється від реалізації у звичайних об'єктах, звуться _екзотичними об'єктами_. `Proxy` дає розробникам змогу використовувати повні можливості з визначення власних екзотичних об'єктів.

Усі об'єкти мають наступні внутрішні методи:

| Внутрішній метод        | Відповідна пастка                                                                |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`      | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]` | {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`    | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]` | {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`       | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`               | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`               | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`            | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`   | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

Об'єкти-функції, крім перелічених вище, мають наступні внутрішні методи:

| Внутрішній метод | Відповідна пастка                                  |
| ---------------- | -------------------------------------------------- |
| `[[Call]]`       | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]`  | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

Важливо усвідомити, що всі взаємодії з об'єктом врешті-решт зводяться до заклику одного з цих внутрішніх методів, і що всі вони – налаштовні за допомогою заступників. Це означає, що майже жодна поведінка (окрім певних критичних інваріантів) у мові не гарантована – все визначається самим об'єктом. Коли запустити [`delete obj.x`](/uk/docs/Web/JavaScript/Reference/Operators/delete), то немає гарантій, що [`"x" in obj`](/uk/docs/Web/JavaScript/Reference/Operators/in) поверне після цього `false`: це залежить від реалізації об'єктом внутрішніх методів `[[Delete]]` і `[[HasProperty]]`. Зате `delete obj.x` може виводити щось у консоль, змінювати якийсь глобальний стан, або навіть визначати якусь нову властивість замість видалення наявної, хоч такої семантики й варто уникати у власному коді.

Усі внутрішні методи викликаються самою мовою, вони недоступні безпосередньо в коді на JavaScript. Простір імен {{jsxref("Reflect")}} надає методи, котрі роблять трохи більше, ніж просто викликають внутрішні методи та проводять трохи нормалізації й валідації вихідних даних. На сторінках кожної з пасток перелічені різні типові ситуації, коли закликається пастка, але ці внутрішні методи викликаються в _багатьох_ місцях. Наприклад, методи масивів зчитують і записують масив крізь такі внутрішні методи, тож методи штибу [`push()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/push) так само закликають пастки `get()` і `set()`.

Більшість внутрішніх методів є прямолінійними в тому, що вони роблять. Лише два з них можуть спантеличувати: `[[Set]]` і `[[DefineOwnProperty]]`. Для звичайних об'єктів перший із них закликає сетери, а другий – ні. (Крім цього, `[[Set]]` потайки викликає `[[DefineOwnProperty]]`, якщо наявної властивості немає, або якщо властивість є властивістю даних.) Хоч ви можете знати, що синтаксис `obj.x = 1` застосовує `[[Set]]`, а {{jsxref("Object.defineProperty()")}} застосовує `[[DefineOwnProperty]]`, не є цілковито очевидним, яку семантику використовує решта вбудованих методів та записів. Наприклад, [класові поля](/uk/docs/Web/JavaScript/Reference/Classes/Public_class_fields) застосовують семантику `[[DefineOwnProperty]]`, і саме тому сетери, визначені у надкласі, не закликаються, коли поле оголошується на похідному класі.

## Конструктор

- {{jsxref("Proxy/Proxy", "Proxy()")}}
  - : Створює новий об'єкт `Proxy`.

> [!NOTE]
> Властивості `Proxy.prototype` немає, тож примірники `Proxy` не мають жодних особливих властивостей або методів.

## Статичні методи

- {{jsxref("Proxy.revocable()")}}
  - : Створює відкличний об'єкт `Proxy`.

## Приклади

### Базовий приклад

У цьому прикладі число `37` повертається як усталене значення, коли імені властивості немає в об'єкті. Він використовує обробник {{jsxref("Proxy/Proxy/get", "get()")}}.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined

console.log("c" in p, p.c); // false, 37
```

### Заступник автоматичного перенаправлення

У цьому прикладі використовується нативний об'єкт JavaScript, до якого наш заступник перенаправлятиме усі операції, що до нього застосовуються.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Операція перенаправлена на target

console.log(target.a); // 37 (Операція була коректно перенаправлена!)
```

Зверніть увагу, що хоч таке "автоматичне" перенаправлення працює для простих об'єктів JavaScript, воно не спрацює для нативних об'єктів, як то елементів DOM, об'єктів [`Map`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Map) та всього, що має внутрішні комірки. Докладніше про це в [Немає перенаправлення приватних властивостей](#nemaie-perenapravlennia-pryvatnykh-vlastyvostei).

### Немає перенаправлення приватних властивостей

Заступник все одно є окремим об'єктом, з окремою ідентичністю – він є _заступником_, що працює між загорнутим об'єктом і зовнішнім світом. Таким чином, заступник не має безпосереднього доступу до [приватних властивостей](/uk/docs/Web/JavaScript/Reference/Classes/Private_properties) вихідного об'єкта.

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[ПРИХОВАНО]");
  }
}

const aSecret = new Secret("123456");
console.log(aSecret.secret); // [ПРИХОВАНО]
// Схоже на автоматичне перенаправлення...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

Так відбувається через те, що коли на заступнику закликається пастка `get`, то значення `this` – це `proxy`, а не вихідний об'єкт `secret`, тож поле `#secret` – недоступне. Аби це виправити, необхідно використати вихідний об'єкт `secret` за значення `this`:

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // Усталено це має вигляд Reflect.get(target, prop, receiver)
    // у випадку чого значення `this` – інакше
    return target[prop];
  },
});
console.log(proxy.secret);
```

Це означає, що у випадку з методами доведеться так само переспрямувати значення `this` методу на вихідний об'єкт:

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret = new Secret();
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

Частина нативних об'єктів JavaScript має властивості, що звуться _[внутрішніми комірками](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_ й не є доступними з коду на JavaScript. Наприклад, об'єкти [`Map`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Map) мають приховану комірку, що зветься `[[MapData]]`, в котрій зберігаються пари ключ-значення відображення. Таким чином, не можна тривіально створити заступник перенаправлення для відображення:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

Необхідно використати заступник "з відновленням `this`", проілюстрований вище, аби це обійти.

### Валідація

За допомогою `Proxy` можна легко перевірити на чинність передане об'єктові значення. Цей приклад використовує обробник {{jsxref("Proxy/Proxy/set", "set()")}}.

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("age не є цілим числом");
      }
      if (value > 200) {
        throw new RangeError("age здається недійсним");
      }
    }

    // Усталена логіка – зберегти значення
    obj[prop] = value;

    // Повідомити про успіх
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "юний"; // Викидає виняток
person.age = 300; // Викидає виняток
```

### Маніпуляція вузлами DOM

У цьому прикладі `Proxy` вживається для перемикання атрибутів двох окремих елементів, щоб коли атрибут вмикався на одному елементі, він вимикався на іншому.

Створюється об'єкт `view`, котрий є заступником для об'єкта зі властивістю `selected`. Обробник заступника визначає обробник {{jsxref("Proxy/Proxy/set", "set()")}}.

Коли елемент HTML присвоюється в `view.selected`, то атрибут `'aria-selected'` цього елемента отримує значення `true`. Коли в `view.selected` присвоюється інший елемент, то атрибут `'aria-selected'` такого елемента отримує значення `true`, а атрибут `'aria-selected'` попереднього елемента – автоматично отримує значення `false`.

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newVal) {
      const oldVal = obj[prop];

      if (prop === "selected") {
        if (oldVal) {
          oldVal.setAttribute("aria-selected", "false");
        }
        if (newVal) {
          newVal.setAttribute("aria-selected", "true");
        }
      }

      // Усталена логіка для збереження значення
      obj[prop] = newVal;

      // Повідомити про успіх
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// вибір item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// вибір item2 скасовує вибір item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### Коригування значення та додаткова властивість

Об'єкт-заступник `products` оцінює передане значення та перетворює його на масив, якщо це потрібно. Також цей об'єкт підтримує додаткову властивість `latestBrowser` – має для неї як гетер, так і сетер.

```js
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome"],
  },
  {
    get(obj, prop) {
      // Додаткова властивість
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // Усталена логіка для повернення значення
      return obj[prop];
    },
    set(obj, prop, value) {
      // Додаткова властивість
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Перетворення значення, коли воно не є масивом
      if (typeof value === "string") {
        value = [value];
      }

      // Усталена логіка для збереження значення
      obj[prop] = value;

      // Повідомити про успіх
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
//  передати рядок (через помилку)

console.log(products.browsers);
//  ['Safari'] <- проблем немає, значення є масивом

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

### Приклад з повним списком пасток

Щоб створити зразок з повним списком пасток, для дидактичних потреб, спробуємо заступити _ненативний_ об'єкт, що є особливо годящим для такого роду операцій – глобальний об'єкт `docCookies`, створений [простим фреймворком реп'яшків](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework).

```js
/*
  const docCookies = ... об'єкт "docCookies" взяти тут:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] ?? target.getItem(key) ?? undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Перевірка реп'яшків */

console.log((docCookies.myCookie1 = "Перше значення"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Змінене значення");
console.log(docCookies.myCookie1);
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Презентація [Заступники – чудові](https://youtu.be/sClk6aB_CPk) від Брендана Айка на JSConf (2014)
