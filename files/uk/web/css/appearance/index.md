---
title: appearance
slug: Web/CSS/appearance
page-type: css-property
browser-compat: css.properties.appearance
---

{{CSSRef}}

Властивість [CSS](/uk/docs/Web/CSS) **`appearance`** (зовнішній вигляд) використовується для відображення елементів інтерфейсу користувача з оформленням, специфічним для платформи, на основі теми операційної системи.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

До стандартизації ця властивість дозволяла відображати елементи як віджети, такі як кнопки або поля для галочки. Це вважалося помилкою, і тепер розробники заохочуються використовувати лише стандартні ключові слова.

> **Примітка:** За бажання використовувати цю властивість на вебсайтах, слід дуже ретельно її перевірити. Попри те, що вона підтримується в більшості сучасних браузерів, її реалізація відрізняється. У старих браузерах навіть ключове слово `none` не має однакової дії на всі елементи форми в різних браузерах, а деякі взагалі не підтримують його. В найновіших браузерах різниці менше.

## Синтаксис

```css
/* Значення Модуля CSS Базового користувацького інтерфейсу, рівень 4 */
appearance: none;
appearance: auto;
appearance: menulist-button;
appearance: textfield;

/* Глобальні значення */
appearance: inherit;
appearance: initial;
appearance: revert;
appearance: revert-layer;
appearance: unset;

/* Значення <compat-auto> діють так само, як 'auto' */
appearance: button;
appearance: checkbox;
```

### Значення

Для наступних ключових слів користувацький агент вибирає відповідне оформлення на основі елемента.
Додано кілька прикладів, проте список не є вичерпним.

- `none`

  - : Приховує певні особливості віджетів, такі як стрілка, що відображається в елементі `select`, яка вказує на те, що список можна розгорнути.

- `auto`

  - : Діє як `none` на елементах без особливого оформлення.

- `<compat-special>`

  - : Або `menulist-button`, або `textfield`.
    Обидва ці значення на елементах без особливого оформлення рівносильні `auto`.

- `<compat-auto>`

  - : Можливі значення: `button`, `checkbox`, `listbox`, `menulist`, `meter`, `progress-bar`, `push-button`, `radio`, `searchfield`, `slider-horizontal`, `square-button` і `textarea`.
    Ключові слова, що рівносильні `auto` заради збереження сумісності зі старими браузерами.

#### Нестандартні значення

Наступні значення можуть працювати в історичних версіях браузерів за допомогою префіксів **`-moz-appearance`** або **`-webkit-appearance`**, але не на стандартній властивості **`appearance`**.

<details>
<summary>Нестандартні значення</summary>

- Записи Firefox вказують на підтримку за допомогою `-moz-appearance`.
- Записи Chrome, Edge і Safari нижче вказують на підтримку версій випуску за допомогою властивості з префіксом виробника `-webkit-appearance`.
- Значення із зірочкою (\*) пов'язані з чіткими намірами щодо вилучення.
- Для кожної комірки версії браузера і значення:
  - `Y{version}`: позначає, що значення підтримується до і включно з `{version}`
  - `N{version}`: підтримка була вилучена у виданні, ранішому за `{version}`
  - порожня комірка позначає те, що підтримка ніколи не додавалася

| Значення                               | Safari  | Firefox | Chrome    | Edge   |
| -------------------------------------- | ------- | ------- | --------- | ------ |
| `attachment`                           | Y(13.1) |         |           |        |
| `borderless-attachment`                | Y(13.1) |         |           |        |
| `button-bevel`                         | Y(13.1) | N(75)   |           | N(80)  |
| `caps-lock-indicator`                  | Y(13.1) |         |           | N(80)  |
| `caret`                                | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `checkbox-container`                   |         | N(75)   |           |        |
| `checkbox-label`                       |         | N(75)   |           |        |
| `checkmenuitem`                        |         | N(75)   |           |        |
| `color-well`                           | Y(13.1) |         |           |        |
| `continuous-capacity-level-indicator`  | Y(13.1) |         |           |        |
| `default-button`                       | Y(13.1) |         |           | N(80)  |
| `discrete-capacity-level-indicator`    | Y(13.1) |         |           |        |
| `inner-spin-button`                    | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `image-controls-button`                | Y(13.1) |         |           |        |
| `list-button`                          | Y(13.1) |         |           |        |
| `listitem`                             | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `media-enter-fullscreen-button`        | Y(13.1) |         | Y(73)     |        |
| `media-exit-fullscreen-button`         | Y(13.1) |         | Y(73)     |        |
| `media-fullscreen-volume-slider`       | Y(13.1) |         |           |        |
| `media-fullscreen-volume-slider-thumb` | Y(13.1) |         |           |        |
| `media-mute-button`                    | Y(13.1) |         |           | N(80)  |
| `media-play-button`                    | Y(13.1) |         |           | N(80)  |
| `media-overlay-play-button`            | Y(13.1) |         | Y(73)     |        |
| `media-return-to-realtime-button`      | Y(13.1) |         |           |        |
| `media-rewind-button`                  | Y(13.1) |         |           |        |
| `media-seek-back-button`               | Y(13.1) |         | N(73)     |        |
| `media-seek-forward-button`            | Y(13.1) |         | N(73)     |        |
| `media-toggle-closed-captions-button`  | Y(13.1) |         | Y(73)     |        |
| `media-slider`                         | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-sliderthumb`                    | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-slider-container`        | Y(13.1) |         | Y(73)     |        |
| `media-volume-slider-mute-button`      | Y(13.1) |         |           |        |
| `media-volume-slider`                  | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-volume-sliderthumb`             | Y(13.1) |         | Y(117)    | Y(80)  |
| `media-controls-background`            | Y(13.1) |         | Y(73)     |        |
| `media-controls-dark-bar-background`   | Y(13.1) |         |           |        |
| `media-controls-fullscreen-background` | Y(13.1) |         | Y(73)     |        |
| `media-controls-light-bar-background`  | Y(13.1) |         |           |        |
| `media-current-time-display`           |         |         | Y(73)     |        |
| `media-time-remaining-display`         | Y(13.1) |         | Y(73)     |        |
| `menulist-text`                        | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `menulist-textfield`                   | Y(13.1) | N(75)   | Y(73)     | N(80)  |
| `meterbar`                             |         | Y(100)  |           |        |
| `number-input`                         |         | Y(75)   |           |        |
| `progress-bar-value`                   | Y(13.1) |         | Y(73)     |        |
| `progressbar`                          |         | Y(100)  |           |        |
| `progressbar-vertical`                 |         | Y(75)   |           |        |
| `range`                                |         | Y(75)   |           |        |
| `range-thumb`                          |         | Y(75)   |           |        |
| `rating-level-indicator`               | Y(13.1) |         |           |        |
| `relevancy-level-indicator`            | Y(13.1) |         |           |        |
| `scale-horizontal`                     |         | Y(75)   |           |        |
| `scalethumbend`                        |         | Y(75)   |           |        |
| `scalethumb-horizontal`                |         | Y(75)   |           |        |
| `scalethumbstart`                      |         | Y(75)   |           |        |
| `scalethumbtick`                       |         | Y(75)   |           |        |
| `scalethumb-vertical`                  |         | Y(75)   |           |        |
| `scale-vertical`                       |         | Y(75)   |           |        |
| `scrollbarthumb-horizontal`            |         | Y(75)   |           |        |
| `scrollbarthumb-vertical`              |         | Y(75)   |           |        |
| `scrollbartrack-horizontal`            |         | Y(75)   |           |        |
| `scrollbartrack-vertical`              |         | Y(75)   |           |        |
| `searchfield-decoration`               | Y(13.1) |         |           | N(80)  |
| `searchfield-results-decoration`       | Y(13.1) | N(75)   | N(73)     | N(80)  |
| `searchfield-results-button`           | Y(13.1) |         |           | N(80)  |
| `searchfield-cancel-button`            | Y(13.1) | N(75)   | Y(118) \* | Y(119) |
| `snapshotted-plugin-overlay`           | Y(13.1) |         |           |        |
| `sheet`                                |         |         |           |        |
| `slider-vertical`                      |         |         | Y(118) \* | Y(119) |
| `sliderthumb-horizontal`               |         |         | Y(117)    | Y(80)  |
| `sliderthumb-vertical`                 |         |         | Y(117)    | Y(80)  |
| `textfield-multiline`                  |         | Y(100)  |           |        |
| `-apple-pay-button`                    | Y(13.1) |         |           |        |

</details>

## Формальне визначення

{{cssinfo}}

## Формальний синтаксис

{{csssyntax}}

## Приклади

### Застосування власного оформлення

Наступний приклад показує, як вилучити усталене оформлення з поля для галочки та елемента вибору, а також додати власне оформлення.
Зовнішній вигляд галочки змінено на круг, а елемент вибору ілюструє, як можна прибрати стрілочку, яка позначає, що список можна розгортати.

#### HTML

```html
<input type="checkbox" />
<input type="checkbox" checked />

<select>
  <option>усталене</option>
  <option>варіант 2</option>
</select>
<select class="none">
  <option>appearance: none</option>
  <option>варіант 2</option>
</select>
```

#### CSS

```css
input {
  appearance: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  background: red;
}
input:checked {
  border-radius: 50%;
  background: green;
}

select {
  border: 1px solid black;
  font-size: 1em;
}

select.none {
  appearance: none;
}
```

#### Результат

{{EmbedLiveSample("zastosuvannia-vlasnoho-oformlennia", 1050, 100)}}

## Специфікації

{{Specifications}}

## Сумісність із браузерами

{{Compat}}

## Дивіться також

- [`prefers-color-scheme`](/uk/docs/Web/CSS/@media/prefers-color-scheme)
