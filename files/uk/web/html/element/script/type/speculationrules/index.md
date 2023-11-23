---
title: <script type="speculationrules">
slug: Web/HTML/Element/script/type/speculationrules
page-type: html-attribute-value
status:
  - experimental
browser-compat: html.elements.script.type.speculationrules
---

{{HTMLSidebar}}{{SeeCompatTable}}

Значення **`speculationrules`** (правила спекуляції) атрибута [`type`](/uk/docs/Web/HTML/Element/script/type) [елемента `<script>`](/uk/docs/Web/HTML/Element/script) вказує на те, що тіло цього елемента містить правила спекуляції.

Правила спекуляції приймають форму структури JSON, що визначає те, які браузеру слід отримати наперед або візуалізувати наперед. Це частина [API правил спекуляції](/uk/docs/Web/API/Speculation_Rules_API).

## Синтаксис

```html
<script type="speculationrules">
  // Об'єкт JSON, що визначає правила
</script>
```

> **Примітка:** Атрибути `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity` і `referrerpolicy` повинні не бути задані.

### Винятки

- `TypeError`
  - : Визначення правил спекуляції не є дійсним об'єктом JSON.

## Опис

Елемент `<script type="speculationrules">` повинен містити дійсну структуру JSON, що визначає правила спекуляції. Наступні приклади показують окремі правила спекуляції для попереднього отримання та попередньої візуалізації:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

### Представлення правил спекуляції в JSON

Ця структура JSON вміщає одне або більше полів на вищому рівні, кожне з яких представляє одну дію, для якої визначено правила спекуляції. Наразі підтримуються такі дії:

- `"prefetch"` {{optional_inline}} {{experimental_inline}}
  - : Правила для потенційних майбутніх переходів, тіла відповідей відповідних документів яких повинні бути завантажені, що призводить до суттєвого покращення ефективності, коли до таких документів відбувається перехід. Зверніть увагу, що жоден з підресурсів, на які посилається сторінка, не завантажується.
- `"prerender"` {{optional_inline}} {{experimental_inline}}
  - : Правила для потенційних майбутніх переходів, відповідні документи яких повинні бути повністю завантажені, візуалізовані та завантажені в невидиму вкладку. Це включає завантаження всіх підресурсів, виконання всього JavaScript, і навіть завантаження підресурсів і виконання отримання даних, запущених JavaScript. Коли до такого документа відбувається перехід, він є миттєвим, що призводить до значного покращення ефективності.

> **Примітка:** Ознайомтеся з основною сторінкою [API правил спекуляції](/uk/docs/Web/API/Speculation_Rules_API) для отримання повної інформації про те, як ефективно використовувати попереднє отримання та попередню візуалізацію.

Кожне поле дії вміщає масив, котре, своєю чергою, містить один або більше об'єктів. Кожний об'єкт містить одне правило, що визначає набір URL і споріднені параметри.

Конкретно, кожний об'єкт може містити наступні властивості:

- `"source"`
  - : Рядок, що представляє джерело URL, до яких застосовується правило. Можливі значення:
    - `"list"`
      - : Зазначає, що всі URL будуть отримані з конкретного списку.
- `"urls"`
  - : Масив рядків, що представляє список URL, до яких застосовується правило. Вони можуть бути абсолютними або відносними URL. Відносні URL будуть розібрані відносно базового URL документа (якщо вбудовано в документ) або відносно URL зовнішнього ресурсу (якщо вони отримані зовнішньо).
- `"requires"` {{optional_inline}} {{experimental_inline}}

  - : Масив рядків, що представляють можливості браузера, що розбирає правило, які повинні бути доступні, щоб правило було застосовано до заданих URL.

    > **Застереження:** Попереднє отримання автоматично зазнає невдачі в браузерах, що не можуть виконати одну з вимог, навіть якщо вони підтримують [API правил спекуляції](/uk/docs/Web/API/Speculation_Rules_API).

    Можливі значення:

    - `"anonymous-client-ip-when-cross-origin"`
      - : Лише `"prefetch"`. Задає те, що правило має збіг лише тоді, коли користувацький агент може не дати серверу походження побачити клієнтську IP-адресу, якщо відбувається запит попереднього отримання з іншого походження. Те, як саме це працює, залежить від конкретики браузерної реалізації. Наприклад:
        - Реалізація Chrome приховує IP-адресу за допомогою проксі, що належить Google, таким чином, усталено це працює лише для посилачів, які контролює Google (оскільки в такому випадку надсилання цільових URL до Google не є додатковим витоком приватності). Коли це використовується на сайті, що не належить Google, правила, що включають це значення, матимуть збіг лише для користувачів, що ввімкнули "Покращене попереднє завантаження" у `chrome://settings/preloading`.
        - Іншим браузерам на основі Chromium доведеться надати власні рішення. Рекомендується ретельне тестування в усіх цільових браузерах.
        - Майбутня реалізація Safari, можливо, використовуватиме щось на зразок [iCloud Private Relay](https://support.apple.com/en-us/102602).
        - Майбутня реалізація Firefox, можливо, використовуватиме щось на основі продукту [Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/).

- `"referrer_policy"` {{optional_inline}} {{experimental_inline}}
  - : Рядок, що представляє конкретний рядок політики посилача, який використовуватиметься, коли відбувається запит одного з URL, заданого в правилі – дивіться можливі значення на сторінці [`Referrer-Policy`](/uk/docs/Web/HTTP/Headers/Referrer-Policy). Мета цього значення полягає в тому, щоб дозволити сторінці-посилачу задати суворішу політику саме для спекулятивного запиту, ніж політика, яка вже задана на сторінці (або усталено, або за допомогою `Referrer-Policy`). М'якіша політика, задана в правилах спекуляції, не переможе суворішу політику, задану на сторінці-посилачі.

> **Примітка:** Оскільки правила спекуляції використовують елемент `<script>`, їх потрібно явно дозволити в директиві [`script-src`](/uk/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) [`Content-Security-Policy`](/uk/docs/Web/HTTP/Headers/Content-Security-Policy), якщо вона є на сайті. Це робиться шляхом додавання значення `"inline-speculation-rules"` вкупі з хешем або числом-одноразом джерела.

### Додаткові приклади

Приклади вище вміщали окремо правила спекуляції або для попереднього завантаження, або для попередньої візуалізації. Можна визначати як перше, так і друге в одному наборі правил:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ],
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

Також дозволено включати кілька наборів правил в один файл HTML:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next3.html", "next4.html"]
      }
    ]
  }
</script>
```

І кілька правил в одному наборі результатів:

```js
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["one.html"]
    },
    {
      "source": "list",
      "urls": ["two.html"]
    }
  ]
}
</script>
```

### Динамічне додання правил

Нижче – приклад, який з'ясовує факт підтримки правил спекуляції, і якщо вони підтримуються, то додає правило спекуляції попередньої візуалізації за допомогою JavaScript:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  const specRules = {
    prerender: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  console.log("додано правило спекуляції до: next.html");
  document.body.append(specScript);
}
```

Це можна побачити в дії на цій сторінці [демонстрацій попередньої візуалізації](https://prerender-demos.glitch.me/).

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [Попередня візуалізація сторінок у Chrome для миттєвих переходів на сторінки](https://developer.chrome.com/blog/prerender-pages/) на developer.chrome.com (2023)
- [Спекулятивне завантаження](/uk/docs/Web/Performance/Speculative_loading)
- [API правил спекуляції](/uk/docs/Web/API/Speculation_Rules_API)
