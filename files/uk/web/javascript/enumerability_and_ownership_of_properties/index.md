---
title: Перелічуваність і власність властивостей
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
page-type: guide
---

{{jsSidebar("More")}}

Кожна властивість об'єктів у JavaScript може бути класифікована за трьома критеріями:

- Перелічувана або неперелічувана;
- Рядок або [символ](/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol);
- Власна властивість або властивість, успадкована з ланцюжка прототипів.

_Перелічувані властивості_ – ті властивості, чия прихована позначка перелічуваності має значення істинності, що є усталеним для властивостей, створених шляхом простого присвоєння або ініціалізатора властивостей. Властивості, означені за допомогою [`Object.defineProperty`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), усталено не є перелічуваними. Більшість засобів ітерування (як то цикли [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in) і статичний метод [`Object.keys`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) обробляє лише перелічувані ключі.

Власність властивостей визначається тим, чи належить властивість безпосередньо об'єктові, а не його ланцюжкові прототипів.

До всіх властивостей, перелічуваних і ні, рядкових і символьних, власних і успадкованих, можна звернутися за допомогою [запису крапки або квадратних дужок](/uk/docs/Web/JavaScript/Reference/Operators/Property_accessors). Цей розділ зосереджується на засобах, які JavaScript надає для послідовної обробки групи властивостей об'єкта.

## Перевірка властивості об'єкта

Є чотири вбудовані способи перевірити властивість об'єкта. Вони підтримують і рядкові, і символьні ключі. Наступна таблиця підсумовує те, коли кожен з методів повертає `true`.

|                                                                                                          | Перелічувана, власна | Перелічувана, успадкована | Неперелічувана, власна | Неперелічувана, успадкована |
| -------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------- | ---------------------- | --------------------------- |
| [`propertyIsEnumerable()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) | `true ✅`            | `false ❌`                | `false ❌`             | `false ❌`                  |
| [`hasOwnProperty()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)             | `true ✅`            | `false ❌`                | `true ✅`              | `false ❌`                  |
| [`Object.hasOwn()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)                      | `true ✅`            | `false ❌`                | `true ✅`              | `false ❌`                  |
| [`in`](/uk/docs/Web/JavaScript/Reference/Operators/in)                                                   | `true ✅`            | `true ✅`                 | `true ✅`              | `true ✅`                   |

## Обхід властивостей об'єкта

У JavaScript є чимало методів, що обходять групу властивостей об'єкта. Іноді ці властивості повертаються як масив; іноді вони ітеруються в циклі одна за одною; іноді вони використовуються для створення або видозмінювання іншого об'єкта. наступна таблиця підсумовує те, коли може бути оброблена властивість.

Методи, що обробляють лише рядкові властивості або лише символьні властивості, мають окремі примітки. ✅ означає, що властивість такого типу обробляється; ❌ означає, що ні.

|                                                                                                                                                                                                                                                               | Перелічувана, власна | Перелічувана, успадкована | Неперелічувана, власна | Неперелічувана, успадкована |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------- | ---------------------- | --------------------------- |
| [`Object.keys`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)<br />[`Object.values`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/values)<br />[`Object.entries`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) | ✅<br />(рядки)      | ❌                        | ❌                     | ❌                          |
| [`Object.getOwnPropertyNames`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)                                                                                                                                                   | ✅<br />(рядки)      | ❌                        | ✅<br />(рядки)        | ❌                          |
| [`Object.getOwnPropertySymbols`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)                                                                                                                                               | ✅<br />(символи)    | ❌                        | ✅<br />(symbols)      | ❌                          |
| [`Object.getOwnPropertyDescriptors`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)                                                                                                                                       | ✅                   | ❌                        | ✅                     | ❌                          |
| [`Reflect.ownKeys`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)                                                                                                                                                                         | ✅                   | ❌                        | ✅                     | ❌                          |
| [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in)                                                                                                                                                                                           | ✅<br />(рядки)      | ✅<br />(strings)         | ❌                     | ❌                          |
| [`Object.assign`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)<br />(Після першого параметра)                                                                                                                                              | ✅                   | ❌                        | ❌                     | ❌                          |
| [Object spread](/uk/docs/Web/JavaScript/Reference/Operators/Spread_syntax)                                                                                                                                                                                    | ✅                   | ❌                        | ❌                     | ❌                          |

## Отримання властивостей за їхньою перелічуваністю чи власністю

Зверніть увагу, що це не найефективніший алгоритм для всіх випадків, зате корисний для швидкої демонстрації.

- Перевірка може відбутися за `SimplePropertyRetriever.theGetMethodYouWant(obj).includes(prop)`
- Ітерування може відбутися за `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach((value, prop) => {});` (або використайте `filter()`, `map()` тощо)

```js
const SimplePropertyRetriever = {
  getOwnEnumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._enumerable);
    // Або можна було б використати for...in, відфільтрований за Object.hasOwn, або просто таке: return Object.keys(obj);
  },
  getOwnNonenumerables(obj) {
    return this._getPropertyNames(obj, true, false, this._notEnumerable);
  },
  getOwnEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      false,
      this._enumerableAndNotEnumerable,
    );
    // Або просто використайте: return Object.getOwnPropertyNames(obj);
  },
  getPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._enumerable);
  },
  getPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, false, true, this._notEnumerable);
  },
  getPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      false,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  getOwnAndPrototypeEnumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._enumerable);
    // Або ж можна використати невідфільтрований for...in
  },
  getOwnAndPrototypeNonenumerables(obj) {
    return this._getPropertyNames(obj, true, true, this._notEnumerable);
  },
  getOwnAndPrototypeEnumerablesAndNonenumerables(obj) {
    return this._getPropertyNames(
      obj,
      true,
      true,
      this._enumerableAndNotEnumerable,
    );
  },
  // Функції зворотного виклику для перевірки приватних статичних властивостей
  _enumerable(obj, prop) {
    return Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _notEnumerable(obj, prop) {
    return !Object.prototype.propertyIsEnumerable.call(obj, prop);
  },
  _enumerableAndNotEnumerable(obj, prop) {
    return true;
  },
  // Натхненно http://stackoverflow.com/a/8024294/271577
  _getPropertyNames(obj, iterateSelf, iteratePrototype, shouldInclude) {
    const props = [];
    do {
      if (iterateSelf) {
        Object.getOwnPropertyNames(obj).forEach((prop) => {
          if (props.indexOf(prop) === -1 && shouldInclude(obj, prop)) {
            props.push(prop);
          }
        });
      }
      if (!iteratePrototype) {
        break;
      }
      iterateSelf = true;
      obj = Object.getPrototypeOf(obj);
    } while (obj);
    return props;
  },
};
```

## Дивіться також

- [`in`](/uk/docs/Web/JavaScript/Reference/Operators/in)
- [`for...in`](/uk/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Object.prototype.hasOwnProperty()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.prototype.propertyIsEnumerable()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
- [`Object.getOwnPropertyNames()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`Object.getOwnPropertySymbols()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
- [`Object.keys()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.getOwnPropertyDescriptors()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
- [`Object.hasOwn()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
- [`Reflect.ownKeys()`](/uk/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
