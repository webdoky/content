---
title: Значення та одиниці вимірювання CSS
slug: Web/CSS/CSS_Values_and_Units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
---

{{CSSRef}}

Кожне оголошення CSS складається з пари властивості та її значення. Це значення, залежно від цієї властивості, може набувати різних форм, як от єдине ціле число, ключове слово, функція, або ж комбінація різних елементів; частина значень мають одиниці вимірювання, а інші – ні. Кожна властивість також приймає значення, що визначаються на рівні всіх CSS. Модуль Значень та одиниць вимірювання CSS визначає типи даних – значення та одиниці їх вимірювання – що їх приймають властивості CSS. Цей модуль також визначає синтаксис визначення значень CSS, який також звуть формальною граматикою, що використовується для визначення множини валідних значень для кожної властивості та функції CSS.

## Довідник

### Властивості

- {{cssxref("interpolate-size")}}

### Функції

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url()")}}

Додаткові функції, серед яких `calc-mix()`, `crossorigin()`, `first-valid()`, `if()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `sibling-count()`, `sibling-index()`, `src()`, `type()` і `toggle()`, визначені в специфікаціях, проте ще не реалізовані в браузерах.

### Типи даних

- [`<angle-percentage>`](/uk/docs/Web/CSS/angle-percentage)
- [`<angle>`](/uk/docs/Web/CSS/angle)
- [`<animation-timeline>`](/uk/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/uk/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/uk/docs/Web/CSS/attr#attr-type)
- [`<attr-unit>`](/uk/docs/Web/CSS/attr#attr-unit)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/uk/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/uk/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/uk/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/uk/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/uk/docs/Web/CSS/dimension)
- [`<easing-function>`](/uk/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/uk/docs/Web/CSS/)
- [`<frequency>`](/uk/docs/Web/CSS/frequency)
- [`<frequency-percentage>`](/uk/docs/Web/CSS/frequency-percentage)
- [`<ident>`](/uk/docs/Web/CSS/ident)
- [`<integer>`](/uk/docs/Web/CSS/integer)
- [`<length-percentage>`](/uk/docs/Web/CSS/length-percentage)
- [`<length>`](/uk/docs/Web/CSS/length)
- [`<number>`](/uk/docs/Web/CSS/number)
- [`<percentage>`](/uk/docs/Web/CSS/percentage)
- [`<position>`](/uk/docs/Web/CSS/position)
- [`<ratio>`](/uk/docs/Web/CSS/ratio)
- [`<resolution>`](/uk/docs/Web/CSS/resolution)
- [`<rounding-strategy>`](/uk/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/uk/docs/Web/CSS/string)
- [`<syntax>`](/uk/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/uk/docs/Web/CSS/time-percentage)
- [`<time>`](/uk/docs/Web/CSS/time)
- [`<url>`](/uk/docs/Web/CSS/url)
- [`<url-modifier>`](/uk/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/uk/docs/Web/CSS/view-timeline-name)

#### Одиниці вимірювання

- [`%` (відсотки)](/uk/docs/Web/CSS/length#cap)
- [`cap`](/uk/docs/Web/CSS/length#cap)
- [`ch`](/uk/docs/Web/CSS/length#ch)
- [`cm`](/uk/docs/Web/CSS/length#cm)
- [`deg`](/uk/docs/Web/CSS/length#deg)
- [`dpcm`](/uk/docs/Web/CSS/length#dpcm)
- [`dpi`](/uk/docs/Web/CSS/length#dpi)
- [`dppx`](/uk/docs/Web/CSS/length#dppx)
- [`dvb`](/uk/docs/Web/CSS/length#dvb)
- [`dvh`](/uk/docs/Web/CSS/length#dvh)
- [`dvi`](/uk/docs/Web/CSS/length#dvi)
- [`dvmax`](/uk/docs/Web/CSS/length#dvmax)
- [`dvmin`](/uk/docs/Web/CSS/length#dvmin)
- [`dvw`](/uk/docs/Web/CSS/length#dvw)
- [`em`](/uk/docs/Web/CSS/length#em)
- [`ex`](/uk/docs/Web/CSS/length#ex)
- [`grad`](/uk/docs/Web/CSS/length#grad)
- [`Hz`](/uk/docs/Web/CSS/length#Hz)
- [`ic`](/uk/docs/Web/CSS/length#ic)
- [`in`](/uk/docs/Web/CSS/length#in)
- [`kHz`](/uk/docs/Web/CSS/length#kHz)
- [`left`](/uk/docs/Web/CSS/length#left)
- [`lh`](/uk/docs/Web/CSS/length#lh)
- [`lvb`](/uk/docs/Web/CSS/length#lvb)
- [`lvh`](/uk/docs/Web/CSS/length#lvh)
- [`lvi`](/uk/docs/Web/CSS/length#lvi)
- [`lvmax`](/uk/docs/Web/CSS/length#lvmax)
- [`lvmin`](/uk/docs/Web/CSS/length#lvmin)
- [`lvw`](/uk/docs/Web/CSS/length#lvw)
- [`mm`](/uk/docs/Web/CSS/length#mm)
- [`ms`](/uk/docs/Web/CSS/length#ms)
- [`pc`](/uk/docs/Web/CSS/length#pc)
- [`pi`](/uk/docs/Web/CSS/length#pi)
- [`pt`](/uk/docs/Web/CSS/length#pt)
- [`px`](/uk/docs/Web/CSS/length#px)
- [`Q`](/uk/docs/Web/CSS/length#Q)
- [`rad`](/uk/docs/Web/CSS/length#rad)
- [`rcap`](/uk/docs/Web/CSS/length#rcap)
- [`rch`](/uk/docs/Web/CSS/length#rch)
- [`rem`](/uk/docs/Web/CSS/length#rem)
- [`rex`](/uk/docs/Web/CSS/length#rex)
- [`ric`](/uk/docs/Web/CSS/length#ric)
- [`rlh`](/uk/docs/Web/CSS/length#rlh)
- [`s`](/uk/docs/Web/CSS/length#s)
- [`size`](/uk/docs/Web/CSS/length#size)
- [`svb`](/uk/docs/Web/CSS/length#svb)
- [`svh`](/uk/docs/Web/CSS/length#svh)
- [`svi`](/uk/docs/Web/CSS/length#svi)
- [`svmax`](/uk/docs/Web/CSS/length#svmax)
- [`svmin`](/uk/docs/Web/CSS/length#svmin)
- [`svw`](/uk/docs/Web/CSS/length#svw)
- [`turn`](/uk/docs/Web/CSS/length#turn)
- [`up`](/uk/docs/Web/CSS/length#up)
- [`vb`](/uk/docs/Web/CSS/length#vb)
- [`vh`](/uk/docs/Web/CSS/length#vh)
- [`vi`](/uk/docs/Web/CSS/length#vi)
- [`vmax`](/uk/docs/Web/CSS/length#vmax)
- [`vmin`](/uk/docs/Web/CSS/length#vmin)
- [`vw`](/uk/docs/Web/CSS/length#vw)
- [`x`](/uk/docs/Web/CSS/length#x)

[Гнучкі](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#hnuchki-odynytsi) (`fr`) та [контейнерні](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#konteinerni-odynytsi) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`) одиниці вимірювання визначені в модулях [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout) та [Умовних правил CSS conditional rules](/uk/docs/Web/CSS/CSS_conditional_rules) відповідно.

#### Класифікації одиниць вимірювання

- [Абсолютні одиниці довжини](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolutni-odynytsi-dovzhyny) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Одиниці кутів](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#odynytsi-kutiv) (`deg`, `grad`, `rad`, `turn`)
- [Одиниці усталеної області перегляду](/uk/docs/Web/CSS/length#odynytsi-ustalenoii-oblasti-perehliadu) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Одиниці динамічної області перегляду](/uk/docs/Web/CSS/length#odynytsi-dynamichnoii-oblasti-perehliadu) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Одиниці частоти](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#odynytsi-chastoty) (`Hz`, `kHz`)
- [Одиниці відсотків великої області перегляду](/uk/docs/Web/CSS/length#odynytsi-velykoii-oblasti-perehliadu) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Одиниці довжини, відносні щодо локального шрифту](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#dovzhyny-vidnosni-shchodo-lokalnoho-shryftu) (`cap`, `ch` ,`em`, `ex`, `ic`, `lh`)
- [Фізичні одиниці](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolutni-odynytsi-dovzhyny) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Відносні одиниці довжини](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Одиниці роздільної здатності](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#odynytsi-rozdilnoii-zdatnosti) (`dpcm`, `dpi` , `dppx`, `x`)
- [Одиниці довжини, відносні щодо кореневого шрифту](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#dovzhyny-vidnosni-shchodo-korenevoho-shryftu) (`rcap` ,`rch`, `rem`, `rex`, `ric`, `rlh`)
- [Одиниця відсотків малої області перегляду](/uk/docs/Web/CSS/length#odynytsi-maloii-oblasti-perehliadu) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Одиниці часу](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#odynytsi-chasu) (`ms`, `s`)
- [Одиниці області перегляду](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#odynytsi-oblasti-perehliadu) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Одиниця візуального кута](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolutni-odynytsi-dovzhyny) (`px`)

### Ключові концепції

- {{glossary("Advance measure", "Повний розмір")}}
- [Запис діапазону з квадратними дужками](/uk/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#zapys-diapazonu-z-kvadratnymy-duzhkamy-min-max)
- [Комбінатори значень компонентів](/uk/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#kombinatory-znachen-komponentiv)
- [Ключові слова рівня мови CSS](/uk/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#kliuchovi-slova-rivnia-movy)
- {{glossary("Device pixel", "Піксель пристрою")}}
- [Функційний запис](/uk/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- {{glossary("Identifier", "Ідентифікатор")}}
- {{glossary("Interpolation", "Інтерполяція")}}
- {{glossary("Keyword", "Ключове слово")}}
- [Математична функція](/uk/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions)
- [Числові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- {{glossary("Origin", "Походження")}}
- {{glossary("Pixel", "Піксель")}}
- [Текстові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- {{glossary("URL")}}
- [Синтаксис визначення значення](/uk/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Посібники

- [Типи даних CSS](/uk/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)

  - : Вступ до типів даних CSS, які визначають типові значення, що приймаються властивостями та функціями CSS.

- [Числові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)

  - : Огляд числових типів даних, серед яких цілі числа, числа, відсотки та розміри, разом з відносними та абсолютними розмірами, кутами та одиницями часу.

- [Текстові типи даних](/uk/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)

  - : Огляд текстових типів даних, серед яких попередньо визначені значення – ключові слова, глобальні ключові значення CSS та URL.

- [Функції значень CSS](/uk/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)

  - : Огляд інструкцій CSS, що закликають особливу обробку даних або обчислення задля повернення значення CSS для властивості CSS.

- [Застосування математичних функцій CSS](/uk/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_Math_Functions)

  - : Математичні функції CSS, які дають значенню властивості змогу бути записаним як математичний вираз.

- [Синтаксис визначення значення](/uk/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

  - : Формальна граматика, що вживається для визначення множини валідних значень для властивостей та функцій CSS.

- [Навчання – Значення та їхні одиниці](/uk/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

  - : Погляд на частину найчастіше вживаних типів значень, що вони означають та як працюють.

## Споріднене

- Модуль [Каскадування та успадкування CSS](/uk/docs/Web/CSS/CSS_cascade)

  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- Модуль [Компонування гнучкої рамки CSS](/uk/docs/Web/CSS/CSS_flexible_box_layout)

  - {{cssxref("&lt;flex&gt;")}}
  - [Гнучкі одиниці вимірювання](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#hnuchki-odynytsi) (`fr`)

- Модуль [Умовних правил CSS](/uk/docs/Web/CSS/CSS_conditional_rules) module

  - [Контейнерні одиниці вимірювання](/uk/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#konteinerni-odynytsi) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`)

- Модуль [Кольорів CSS](/uk/docs/Web/CSS/CSS_colors)

  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/uk/docs/Web/CSS/color_value/color-mix)

- Модуль [Зображень CSS](/uk/docs/Web/CSS/CSS_images)

  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Специфікації

{{Specifications}}

## Дивіться також

- Модуль [Синтаксису CSS](/uk/docs/Web/CSS/CSS_syntax)
- Модуль [Селекторів CSS](/uk/docs/Web/CSS/CSS_selectors)
