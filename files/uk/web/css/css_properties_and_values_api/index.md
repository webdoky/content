---
title: API властивостей і значень CSS
slug: Web/CSS/CSS_properties_and_values_API
page-type: css-module
spec-urls: https://www.w3.org/TR/css-properties-values-api-1/
---

{{CSSRef}}

Модуль **API властивостей і значень CSS** визначає метод для реєстрації нових властивостей CSS, визначаючи тип даних властивості, логіку її успадкування та, за бажанням, початкове значення.
Цей API є розширенням модуля [Кастомних властивостей як каскадних змінних](/uk/docs/Web/CSS/CSS_cascading_variables), який дає розробникам змогу визначати кастомні властивості в CSS за допомогою [синтаксису з двома дефісами (`--`)](/uk/docs/Web/CSS/--*).
API властивостей і значень CSS є частиною пакета API [Гудіні CSS](/uk/docs/Web/CSS/CSS_Houdini).

Кастомні властивості дають змогу повторно використовувати значення в проєкті, щоб спростити складні або повторювані списки стилів.
Базові кастомні властивості визначаються в модулі [Кастомні властивості як каскадні змінні CSS](/uk/docs/Web/CSS/CSS_cascading_variables).
API властивостей і значень CSS розширює його, даючи змогу додавати до кастомних властивостей метадані за допомогою CSS, директиви [`@property`](/uk/docs/Web/CSS/@property) або, інший варіант, за допомогою методу {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} JavaScript.

Задання метаданих на кастомних властивостях, як за допомогою CSS, так і через JavaScript, надає очікуваний тип даних, який браузер може використовувати в залежності від контексту, визначає початкове значення та дає змогу керувати успадкуванням.

Реєстрація кастомних властивостей через API властивостей і значень CSS є більш надійним способом, ніж більш базове оголошення кастомної властивості – каскадної змінної, особливо коли мова йде про перехід і анімацію значень, оскільки браузери можуть інтерполювати значення певного типу, тоді як властивості, які використовують [синтаксис з двома дефісами (`--`)](/uk/docs/Web/CSS/--*), поводяться більше як підставлення рядка.

## API властивостей і значень в дії

Щоб побачити, як кастомні властивості та значення можуть бути використані через API, наведіть курсор на рамку нижче.

```js hidden
CSS.registerProperty({
  name: "--stop-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "cornflowerblue",
});
```

```css hidden
.box {
  padding: 1rem;
  width: 90%;
  height: 4rem;
  font-family: sans-serif;
  font-size: large;
  color: white;
  border-radius: 0.5rem;
}

.box {
  background: linear-gradient(to right, var(--stop-color), lavenderblush);
  transition: --stop-color 2s;
}

.box:hover {
  --stop-color: aquamarine;
}
```

```html hidden
<div class="box"><p>Linear gradient with transition</p></div>
```

{{EmbedLiveSample("",600,120)}}

Ця рамка має [тло](/uk/docs/Web/CSS/background), що складається з [лінійного градієнта](/uk/docs/Web/CSS/gradient/linear-gradient) від `--stop-color` (кастомна властивість) до [`lavenderblush`](/uk/docs/Web/CSS/named-color).
Значенням `--stop-color` спершу задано `cornflowerblue`, але коли навести курсор на рамку, `--stop-color` [переходить](/uk/docs/Web/CSS/transition) до `aquamarine` за дві секунди (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Довідка

### Директиви

- {{cssxref("@property")}}
  - Дескриптор [syntax](/uk/docs/Web/CSS/@property#deskryptory)
    - Помножувачі [`+` і `#`](/uk/docs/Web/CSS/@property#deskryptory)
    - Комбінатор [`|`](/uk/docs/Web/CSS/@property#deskryptory)
  - Дескриптор [inherits](/uk/docs/Web/CSS/@property#deskryptory)
  - Дескриптор [initial-value](/uk/docs/Web/CSS/@property#deskryptory)

### Інтерфейси й API

- {{domxref('CSSPropertyRule')}}
- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}

## Посібники

- [Використання API властивостей і значень CSS](/uk/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Пояснює, як зареєструвати кастомні властивості в CSS і JavaScript, зі вказівками щодо того, як працювати з невизначеними та недійсними значеннями, резервними варіантами та успадкуванням.

- [Гудіні CSS](/uk/docs/Web/API/Houdini)
  - : Пояснює, що таке Гудіні CSS і які в нього переваги, разом зі списком доступних API та їх статусами.

## Споріднені концепції

- {{cssxref("var")}}
- [CSSRule](/uk/docs/Web/API/CSSRule)
- [CSSStyleValue](/uk/docs/Web/API/CSSStyleValue)
- [Контекст CSS](/uk/docs/Web/CSS/CSS_scoping)
- [Використання тіньового DOM](/uk/docs/Web/API/Web_components/Using_shadow_DOM)
- [API типізованої об'єктної моделі CSS](/uk/docs/Web/API/CSS_Typed_OM_API)
- [API малювання CSS](/uk/docs/Web/API/CSS_Painting_API)
- [Worklet](/uk/docs/Web/API/Worklet)

## Специфікації

{{Specifications}}

## Дивіться також

- [Каскадність та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)
- Модуль [Контексту CSS](/uk/docs/Web/CSS/CSS_scoping)
- [Використання тіньового DOM](/uk/docs/Web/API/Web_components/Using_shadow_DOM)
- Модуль [API малювання CSS](/uk/docs/Web/API/CSS_Painting_API)
- Інтерфейс [Worklet](/uk/docs/Web/API/Worklet)
- [`env()` CSS](/uk/docs/Web/CSS/env)
- [Типізована об'єктна модель CSS](/uk/docs/Web/API/CSS_Typed_OM_API)
