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

## Допоміжні сценарії

### gotobranch

Зберігається в файлі `scripts/gotobranch.sh`. Приймає як аргумент потенційну назву гілки Git. Виконує наступні операції:

1. Перевіряє наявність аргумента командного рядка. Якщо його немає, сценарій зупиняється з помилкою.
2. Перевіряє наявність бажаної гілки Git у віддаленні `origin`. Якщо вона є, сценарій зупиняється з помилкою, адже це може означати, що вже існує PR на поточну тему.
3. Перевіряє наявність бажаної гілки Git локально. Якщо вона є, сценарій її видаляє.
4. Переходить в гілку `master` та оновлює її.
5. Переходить на бажану гілку, передану як аргумент командного рядка.

Тобто, якщо стисло, цей сценарій створює гілку з відгалуженням від актуального стану гілки `master`.

Викликається в один з наступних способів (наприклад, коли потрібна гілка `chore/update-deps`):

```sh
./scripts/gotobranch.sh chore/update-deps
yarn run gotobranch chore/update-deps
```

### startupdate

Зберігається в файлі `scripts/startupdate.sh`. Приймає як аргумент потенційну назву гілки Git. Виконує наступні операції:

1. Перевіряє наявність аргумента командного рядка. Якщо його немає, сценарій зупиняється з помилкою.
2. Прибирає з отриманого в аргументі рядка можливі префікси: кореневий URL, поточну теку, теку `files/uk`, скісну риску (`/`).
3. Прибирає з рядка можливі суфікси: `index.md`, скісну риску (`/`).
4. Замінює в рядку скісні риски (`/`) на дефіси (`-`).
5. Переводить рядок в нижній регістр.
6. Додає до рядка префікс гілок Git `update/`.
7. Викликає сценарій [gotobranch](#gotobranch) з отриманим рядком як аргументом.

Тобто, якщо стисло, цей сценарій створює гілку на основі шляху до файлу.

Викликається в один з наступних способів:

```sh
./scripts/startupdate.sh files/uk/web/javascript/reference/classes/index.md
./scripts/startupdate.sh /Users/User/Projects/webdoky/content/files/uk/web/javascript/reference/classes/index.md
./scripts/startupdate.sh https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
yarn startupdate files/uk/web/javascript/reference/classes/index.md
yarn startupdate /Users/User/Projects/webdoky/content/files/uk/web/javascript/reference/classes/index.md
yarn startupdate https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
yarn su files/uk/web/javascript/reference/classes/index.md
yarn su /Users/User/Projects/webdoky/content/files/uk/web/javascript/reference/classes/index.md
yarn su https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
```

### finishupdate

Зберігається в файлі `scripts/finishupdate.sh`.

1. Знаходить нові зміни в `index.md` файлах (або нові `index.md` файли). Якщо таких змін не 1, зупиняється з помилкою.
2. З'ясовує тип змін: оновлення або новий переклад.
3. З'ясовує розділ, до якого належить переклад.
4. Викликає сценарій [startupdate](#startupdate) з аргументом `--allow-update`, завдяки чому той не видаляє стару гілку з відповідною назвою, але обов'язково переходить в неї.
5. Додає в коміт папку оновлення (де лежить `index.md` файл).
6. Додає в коміт файли з виправленнями LanguageTool.
7. `git commit`
8. `git push`

Тобто, якщо стисло, цей сценарій створює гілку на основі шляху до файлу.

Викликається в один з наступних способів (наприклад, коли потрібна гілка `chore/update-deps`):

```sh
./scripts/finishupdate.sh
yarn finishupdate
yarn fu
```
