---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - Polyfill
browser-compat: javascript.builtins.String.trimStart
---
{{JSRef}}

Метод **`trimStart()`** видаляє пробільні символи з кінця рядка. Для цього методу також існує псевдонім `trimLeft()`.

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## Синтаксис

```js
trimStart()

trimLeft()
```

### Повернене значення

Новий рядок, що містить значення початкового рядка `str`, у якого пробільні символи спочатку (з лівого боку) — обрізані.

Якщо початок рядка `str` не містить пробільних символів, однаково повертається новий рядок (практично — копія рядка `str`), без викидання жодних винятків.

### Вживання псевдонімів

Для одноманітності з функціями, подібними до {{jsxref("String.prototype.padStart")}}, функція має стандартизоване ім'я `trimStart`. Щоправда, з міркувань сумісності вебу, метод `trimLeft` залишається псевдонімом для `trimStart`. В деяких рушіях це буквально означає:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Приклади

### Застосування trimStart()

Наступний приклад виводить рядок `'foo '` в нижньому регістрі:

```js
var str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '
```

## Поліфіл

```js
//https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function(w){
    var String=w.String, Proto=String.prototype;

    (function(o,p){
        if(p in o?o[p]?false:true:true){
            var r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);

/*
ES6:
(w=>{
    const String=w.String, Proto=String.prototype;

    ((o,p)=>{
        if(p in o?o[p]?false:true:true){
            const r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);
*/
```

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- Поліфіл методу `String.prototype.trimStart` доступний у [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
