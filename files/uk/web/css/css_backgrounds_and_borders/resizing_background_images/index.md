---
title: Зміни розмірів зображень тла за допомогою background-size
slug: Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images
page-type: guide
---

{{CSSRef}}

Властивість CSS **{{cssxref("background-size")}}** дає змогу змінювати розмір зображення тла елемента, відкидаючи усталену логіку, котра застеляє елемент зображенням у повному розмірі, як плиткою, шляхом встановлення ширини чи висоти зображення. Таким чином можна масштабувати зображення в бік зменшення чи збільшення – як завгодно.

## Плитка з великого зображення

Припустімо, є велике зображення, логотип Firefox 2982x2808 завбільшки. Є потреба (з причини, котра з великою ймовірністю пов'язана з поганим проєктуванням сайту) викласти плиткою це зображення поверх елемента 300x300 пікселів завбільшки. Щоб це зробити, можна застосувати фіксоване значення `background-size` 150 пікселів.

### HTML

```html
<div class="tiledBackground"></div>
```

### CSS

```css
.tiledBackground {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: 150px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  color: pink;
}
```

### Результат

{{EmbedLiveSample("plytka-z-velykoho-zobrazhennia", 340, 340)}}

## Розтягування зображення

Також можна задати як горизонтальний, так і вертикальний розміри зображення, отак:

```css
background-size: 300px 150px;
```

Результат має наступний вигляд:

![Розтягнений новий логотип Firefox](stretched_firefox_logo.png)

## Масштабування зображення в бік збільшення

Інші крайнощі: можна масштабувати зображення на тлі в бік збільшення. Тут – піктограма 32x32 пікселів масштабується до 300x300 пікселів:

![Масштабований логотип MDN](scaled_mdn_logo.png)

```css
.square2 {
  background-image: url(favicon.png);
  background-size: 300px;
  width: 300px;
  height: 300px;
  border: 2px solid;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

Як можна спостерігати, CSS насправді по суті ідентичний, окрім імені файлу зображення.

## Особливі значення: "contain" і "cover"

Окрім значень {{cssxref("&lt;length&gt;")}}, властивість CSS {{cssxref("background-size")}} пропонує два особливі значення розміру, `contain` і `cover`. Погляньмо на них.

### contain

Значення `contain` задає те, що, незалежно від розміру контейнерного блока, зображення тла повинно масштабуватися так, щоб кожна сторона була настільки великою, наскільки це можливо, але не більшою за довжину відповідної сторони контейнера. Спробуйте змінити розміри прикладу нижче, аби побачити це в дії.

#### HTML

```html
<div class="bgSizeContain">
  <p>Спробуйте змінити розміри цього елемента!</p>
</div>
```

#### CSS

```css
.bgSizeContain {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: contain;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### Результат

{{EmbedLiveSample('contain', 250, 250)}}

### cover

Значення `cover` задає те, що зображення тла повинно калібруватися так, щоб воно було настільки малим, наскільки можливо, щоб при цьому обидва розміри були більшими чи рівними розмірам відповідних сторін контейнера. Спробуйте змінити розміри прикладу нижче, аби побачити це в дії.

#### HTML

```html
<div class="bgSizeCover">
  <p>Спробуйте змінити розміри цього елемента!</p>
</div>
```

#### CSS

```css
.bgSizeCover {
  background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
  background-size: cover;
  width: 160px;
  height: 160px;
  border: 2px solid;
  color: pink;
  resize: both;
  overflow: scroll;
}
```

#### Результат

{{EmbedLiveSample('cover', 250, 250)}}

## Дивіться також

- {{cssxref("background-size")}}
- {{cssxref("background")}}
- [Масштабування тла формату SVG](/uk/docs/Web/CSS/Scaling_of_SVG_backgrounds)
