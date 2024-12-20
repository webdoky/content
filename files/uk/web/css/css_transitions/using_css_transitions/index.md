---
title: Застосування переходів CSS
slug: Web/CSS/CSS_transitions/Using_CSS_transitions
page-type: guide
spec-urls: https://drafts.csswg.org/css-transitions/
---

{{CSSRef}}

**Переходи CSS** пропонують спосіб контролю швидкості анімації при зміні властивостей CSS. Замість негайного застосування змін властивості, можна змусити зміни властивості вступати в дію протягом певного проміжку часу. Наприклад, якщо змінити колір елемента з білого на чорний, зазвичай зміна є негайною. Коли ввімкнені переходи CSS, то зміни застосовуються в часових інтервалах, що відповідають кривій прискорення, і все це можна налаштувати.

Анімації, котрі залучають переходи між двома станами, нерідко звуть _неявними переходами_, адже стани у проміжку між початковим і фінальним станами визначаються браузером неявно.

![Перехід CSS каже браузеру малювати проміжні стани між вихідним і фінальним станами, демонструючи користувачеві плавний перехід.](transitionsprinciple.png)

Переходи CSS дають змогу вирішувати, котрі властивості анімувати (шляхом [_явного їх перелічення_](/uk/docs/Web/CSS/transition-property)), коли анімація почнеться (шляхом задання [_затримки_](/uk/docs/Web/CSS/transition-delay)), як довго триватиме перехід (шляхом задання [_тривалості_](/uk/docs/Web/CSS/transition-duration)) та як перебігатиме перехід (шляхом задання [_функції пом'якшення_](/uk/docs/Web/CSS/transition-timing-function), наприклад, лінійно, чи швидко на початку й повільно в кінці).

## До яких властивостей CSS можна застосувати переходи?

Веброзробник може визначати, яка властивість буде анімована і як. Це дає змогу створювати складні переходи. Проте частина властивостей є [неанімованими](/uk/docs/Web/CSS/CSS_animated_properties), адже їх немає змісту анімувати.

> [!NOTE]
> Значення `auto` нерідко є дуже складним випадком. Специфікація радить не анімувати від і до `auto`. Частина користувацьких агентів, як то засновані на Gecko, реалізовують цю вимогу, а інші, як то засновані на WebKit, є менш суворими. Використання анімацій з `auto` може приводити до неочікуваних результатів, залежних від браузера та його версії, його слід уникати.

## Визначення переходів

Переходи CSS контролюються за допомогою властивості-скорочення {{cssxref("transition")}}. Це найкращий спосіб для налаштування переходів, адже він полегшує уникання несинхронізованих параметрів, на обтяжливе зневадження котрих можна витратити багато часу.

Контролювати окремі деталі переходу можна за допомогою наступних підвластивостей:

- {{cssxref("transition-property")}}
  - : Задає ім'я чи імена властивостей CSS, до яких застосовуються переходи. Лише перелічені тут властивості анімуються під час переходів; зміни решти властивостей відбуваються негайно, як зазвичай.
- {{cssxref("transition-duration")}}
  - : Задає тривалість, протягом якої відбуваються переходи. Можна задати одну тривалість, котра застосовується до всіх властивостей переходу, або декілька значень, аби дати змогу кожній властивості застосовуватися протягом інакшого проміжку часу.
- {{cssxref("transition-timing-function")}}
  - : Задає функцію, котра визначає, як обчислюються проміжні значення властивостей. _Функції пом'якшення_ визначають, як обраховуються проміжні значення переходу. Більшість [функцій пом'якшення](/uk/docs/Web/CSS/easing-function) можуть бути задані шляхом опису графіка відповідної функції, що задає чотири точки, по яких будується кубічна крива Безьє. Також можна обрати пом'якшення зі [Шпаргалки функцій пом'якшення](https://easings.net/uk).
- {{cssxref("transition-delay")}}
  - : Визначає, скільки триватиме очікування між зміною властивості й фактичним початком переходу.

Скорочений синтаксис CSS `transition` записується отак:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

## Приклади

### Базовий приклад

Цей приклад виконує чотирисекундну зміну розміру шрифту з двосекундною затримкою між часом, коли користувач навів курсор на елемент, і початком ефекту анімації:

```css
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

### Приклад з кількома анімованими властивостями

```html hidden
<body>
  <p>
    Рамки нижче поєднують переходи для: width, height, background-color, rotate.
    Наведіть на рамки, щоб побачити анімування цих властивостей.
  </p>
  <div class="box">Зразок</div>
</body>
```

#### CSS

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  rotate: 180deg;
}
```

{{EmbedLiveSample('pryklad-z-kilkoma-animovanymy-vlastyvostiamy', 600, 300)}}

### Коли списки значень властивостей мають різну довжину

Якщо список значень будь-якої властивості коротший за інші, то її значення повторюються, поки довжини не будуть однакові. Наприклад:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}
```

Обробляється так, ніби це було:

```css
div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}
```

Подібно до цього, якщо список значень певної властивості довший за довжину списку в {{cssxref("transition-property")}}, він обрізається, тож якщо є такий CSS:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s, 2s, 1s;
}
```

Він тлумачиться отак:

```css
div {
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
}
```

### Застосування переходів для виділення меню

Поширене застосування CSS – для виділення елементів меню, на котрі користувач наводить мишею. Можна легко застосувати переходи, аби зробити ефект іще привабливішим.

По-перше, саме меню за допомогою HTML:

```html
<nav>
  <a href="#">Головна</a>
  <a href="#">Про нас</a>
  <a href="#">Контакти</a>
  <a href="#">Посилання</a>
</nav>
```

Потім – CSS для реалізації вигляду й відчуття меню:

```css
nav {
  display: flex;
  gap: 0.5rem;
}

a {
  flex: 1;
  background-color: #333;
  color: #fff;
  border: 1px solid;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #fff;
  color: #333;
}
```

Такий CSS створює вигляд меню, колір і тла, і тексту якого змінюється, коли елемент перебуває в станах {{cssxref(":hover")}} і {{cssxref(":focus")}}:

{{EmbedLiveSample("zastosuvannia-perekhodiv-dlia-vydilennia-meniu")}}

### Переходи display та content-visibility

Цей приклад демонструє те, як можна застосовувати переходи до властивостей [`display`](/uk/docs/Web/CSS/display) та [`content-visibility`](/uk/docs/Web/CSS/content-visibility). Це корисно для створення анімацій входу-виходу, коли хочеться, наприклад, вилучити контейнер з DOM за допомогою `display: none`, але зробити його зникнення плавним за допомогою [`opacity`](/uk/docs/Web/CSS/opacity), а не миттєвим.

Браузери, що це підтримують, виконують переходи `display` та `content-visibility` за допомогою варіації на [дискретному типі анімації](/uk/docs/Web/CSS/CSS_animated_properties#dyskretni). Це, як правило, означає, що властивість перемикається між двома значеннями на 50% шляху анімації між ними.

Проте є виняток, а саме – коли анімується `display: none` чи `content-visibility: hidden`. У цьому випадку браузер перемикається між двома значеннями так, щоб перехідний вміст був видимим протягом усієї тривалості анімації.

Отже, наприклад:

- Коли `display` анімується від `none` до `block` (чи іншого видимого значення `display`), значення перемикається на `block` на `0%` тривалості анімації, щоб воно було видимим протягом усієї анімації.
- Коли `display` анімується від `block` (чи іншого видимого значення `display`) до `none`, значення перемикається на `none` на `100%` тривалості анімації, щоб воно було видимим протягом усієї анімації.

На переходах за цими властивостями повинно бути задано [`transition-behavior: allow-discrete`](/uk/docs/Web/CSS/transition-behavior). Фактично це вмикає переходи `display` і `content-visibility`.

Коли відбувається перехід за `display`, необхідна директива [`@starting-style`](/uk/docs/Web/CSS/@starting-style), щоб задати на елементі стартові значення, від яких повинен початися перехід, коли елемент отримує перше оновлення стилю. Це потрібно для того, щоб уникнути неочікуваної поведінки. Усталено переходи CSS не запускаються при перших оновленнях стилів, уперше з'явившись у DOM, в тому числі при зміні значення `display` з `none` на якийсь інший стан. Анімації `content-visibility` не потребують задання початкових значень у блоку `@starting-style`. Це пов'язано з тим, що `content-visibility` не приховує елемент з DOM, як це робить `display` – він просто пропускає візуалізацію його вмісту.

#### HTML

HTML тут містить два елементи {{htmlelement("p")}} з {{htmlelement("div")}} між ними, котрий ми анімуємо від `display` `none` до `block`.

```html
<p>
  Клацніть десь на екрані чи натисніть будь-яку клавішу, щоб перемкнути
  <code>&lt;div&gt;</code> між прихованістю та показом.
</p>

<div>
  Це елемент <code>&lt;div&gt;</code>, що переходить між
  <code>display: none; opacity: 0</code> та
  <code>display: block; opacity: 1</code>. Цікаво, чи не так?
</div>

<p>
  Це інший абзац, потрібний для того, щоб показати, що
  <code>display: none;</code> застосовується й вилучається до
  <code>&lt;div&gt; </code> вище. Якби змінювалася лише його
  <code>opacity</code>, він завжди займав би місце в DOM.
</p>
```

#### CSS

```css
html {
  height: 100vh;
}

div {
  font-size: 1.6rem;
  padding: 20px;
  border: 3px solid red;
  border-radius: 20px;
  width: 480px;

  display: none;
  opacity: 0;
  transition:
    opacity 1s,
    display 1s allow-discrete;
  /* Еквівалентно щодо
  transition: all 1s allow-discrete; */
}

.showing {
  opacity: 1;
  display: block;
}

@starting-style {
  .showing {
    opacity: 0;
  }
}
```

Зверніть увагу на те, що використовується блок `@starting-style`, аби задати стартовий стиль для переходу, а також на включення властивості `display` до списку переходу, зі значенням `allow-discrete`.

#### JavaScript

Врешті-решт, додаймо трохи JavaScript, щоб налаштувати слухачі подій, які запускатимуть перехід (за допомогою класу `showing`).

```js
const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);

function showHide() {
  divElem.classList.toggle("showing");
}
```

#### Результат

Цей код візуалізується так:

{{EmbedLiveSample("perekhody-display-ta-content-visibility", "100%", "350")}}

## Приклади JavaScript

> [!NOTE]
> Особлива обережність необхідна, коли перехід застосовується відразу після:
>
> - додавання елемента до DOM за допомогою `.appendChild()`
> - усунення властивості елемента `display: none;`.
>
> Це обробляється так, ніби початкового стану ніколи не було, натомість елемент завжди був у своєму фінальному стані. Легкий спосіб обійти це обмеження – застосувати `setTimeout()` зі жменею мілісекунд перед зміною властивості CSS, за якою необхідний перехід.

### Застосування переходів для пом'якшення функціональності JavaScript

Переходи – чудовий інструмент, аби зробити речі куди плавнішими на вигляд, без потреби будь-що робити з функціональністю JavaScript. Про це – наступний приклад.

```html
<p>Клацніть будь-де, аби перемістити м'яч</p>
<div id="foo" class="ball"></div>
```

За допомогою JavaScript можна реалізувати ефект руху м'яча до певного положення:

```js
const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);
```

За допомогою CSS такий рух можна без зайвих зусиль зробити плавним. Слід додати до елемента перехід, і будь-які зміни відбудуться плавно:

```css
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

{{EmbedGHLiveSample("css-examples/transitions/js-transitions.html", '100%', 500)}}

### Відстеження початку й завершення переходу

Подію {{domxref("Element/transitionend_event", "transitionend")}} можна використати для відстеження того, що анімація завершила виконання. Це об'єкт {{domxref("TransitionEvent")}} котрий має на дві властивості більше, ніж типовий об'єкт {{domxref("Event")}}:

- `propertyName`
  - : Рядок, котрий вказує на ім'я властивості CSS, чий перехід завершився.
- `elapsedTime`
  - : Число з рухомою комою, котре вказує на число секунд, протягом якого відбувався перехід на мить спрацювання події. На це значення не впливає значення {{cssxref("transition-delay")}}.

Як зазвичай, для стеження за цією подією можна використати метод {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
el.addEventListener("transitionend", updateTransition, true);
```

Початок переходу відстежується за допомогою {{domxref("Element/transitionrun_event", "transitionrun")}} (спрацьовує до усіх затримок) і {{domxref("Element/transitionstart_event", "transitionstart")}} (спрацьовує після усіх затримок), в аналогічний спосіб:

```js
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);
```

> [!NOTE]
> Подія `transitionend` не спрацьовує, якщо перехід переривається до свого завершення через те, що елемент став {{cssxref("display", "display: none")}}, чи те, що анімована властивість змінила своє значення.

## Специфікації

{{Specifications}}

## Дивіться також

- Інтерфейс {{domxref("TransitionEvent")}} і подія {{domxref("Element/transitionend_event", "transitionend")}}.
- [Застосування анімацій CSS](/uk/docs/Web/CSS/CSS_animations/Using_CSS_animations)
