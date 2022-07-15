# WebDoky - контент

[![uk](https://img.shields.io/badge/lang-uk-green.svg)](https://github.com/webdoky/content/blob/master/README.md)
[![en](https://img.shields.io/badge/lang-en-yellow.svg)](https://github.com/webdoky/content/blob/master/README.en.md)

## Що це

Тут знаходиться вміст вебдокументації з [WebDoky](https://webdoky.org/). Фактично це статті з [MDN](https://github.com/mdn/content), перекладені українською (див. [ліцензію на вміст цього репозиторію](https://github.com/webdoky/content/blob/master/LICENSE.md))

## LanguageTool перевірка

У репозиторій вбудована перевірка тексту (в форматі HTML або Markdown) в репозиторії за допомогою докеризованого LanguageTool. Наразі працює лише на Unix-подібних ОС [https://github.com/webdoky/content/issues/12]

### Передумови

1. [Docker](https://www.docker.com/)
2. [Node.js](https://nodejs.org/uk/) >= 14
3. [Yarn](https://yarnpkg.com/)

### Налаштування

Команда `yarn` у директорії проєкту встановить JavaScript-залежності та підготує Docker-образ.

### Використання

Запуск команди `yarn run check` у директорії проєкту:

1. Запустить Docker-контейнер із LanguageTool.
2. Дочекається доступності LanguageTool.
3. Перевірить наявні файли перекладу у форматах HTML та Markdown.
4. Виведе результати перевірки у консоль.
5. Зупинить Docker-контейнер із LanguageTool.
6. Завершиться із кодом виходу 0 у випадку успіху, інакше - 1.

Також команда приймає шлях до певного файлу у вигляді аргументу командного рядка. Наприклад:

```shell
yarn run check README.md
```

#### Рецепти

```shell
# Перевірити всі наявні файли вмісту
yarn run check

# Перевірити конкретний файл
yarn run check README.md

# Перевірити лише свіже змінені/додані файли
yarn run check-diff
```

### Винятки

Щоб додати слово незнайоме LanguageTool, але котре LanguageTool мусить використовувати для створення пропозицій виправлень - додайте його окремим рядком у файл `uk_spelling_additions.txt`.

Щоб додати слово незнайоме LanguageTool, котре слід просто ігнорувати - додайте його окремим рядком у файл `uk_ignore_additions.txt` (у більшості випадків слід віддавати перевагу `uk_spelling_additions.txt`).

Щоб заборонити слово, котре LanguageTool обробляє як нормативне - додайте його окремим рядком у файл `uk_prohibited_additions.txt`.

Щоб зміни у вищеназваних текстових файлах почали діяти, слід запустити команду `yarn rebuild`.

### Вимкнення правила

Щоб вимкнути певне правило LanguageTool - додайте його окремим рядком у файл `disabled_rules.txt`. Така зміна не вимагає повторного збирання Docker-образу.
