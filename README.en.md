# WebDoky - content

[![uk](https://img.shields.io/badge/lang-uk-green.svg)](https://github.com/webdoky/content/blob/master/README.md)
[![en](https://img.shields.io/badge/lang-en-yellow.svg)](https://github.com/webdoky/content/blob/master/README.en.md)

## What it is

Here is the content of web documents from [WebDoky](https://webdoky.org/). In fact, these are articles from [MDN](https://github.com/mdn/content) translated into Ukrainian (see [the license for this repository](https://github.com/webdoky/content/blob/master/LICENSE.md))

## LanguageTool check

The repository has built-in text validation using the LanguageTool CLI. This works when creating a PR.

### Exceptions

To add a word that is unfamiliar to LanguageTool, but which LanguageTool needs to use to generate correction suggestions, add it as a separate line in the `uk_spelling_additions.txt' file.

To add a word that is unfamiliar to LanguageTool and should be ignored, add it as a separate line in the `uk_ignore_additions.txt` file (in most cases, `uk_spelling_additions.txt' is preferable).

To ban a word that LanguageTool treats as a normative word, add it as a separate line to the `uk_prohibited_additions.txt` file.

The changes made will take effect the next time the PR is checked after the update on GitHub.

### Disabling a rule

To disable a specific LanguageTool rule, add it as a separate line to the `disabled_rules.txt` file.

The changes made will take effect the next time the PR is checked after the update on GitHub.

## Extra scripts

### fu – finishupdate

1. Finds new changes in `index.md` files (or new `index.md` files). If more than 1 file is changed, or if there are zero files, it stops with an error.
2. Determines the type of changes: update or new translation.
3. Generates a branch name based on the path to the modified Markdown file.
4. Checks if the target branch does not exist on the remote repository. If it does, it fails with an error. (\*\*Merged branches must be removed manually on GitHub.)
5. Deletes the old local branch with the same name, if it exists.
6. Moves to the `master` branch.
7. Pulls updates to `master`.
8. Creates the target branch anew and moves to it.
9. Adds the directory with the translation (where the `index.md` file is located) to the future commit.
10. Adds files with LanguageTool additions (`./*_additions.txt`) to the future commit.
11. Creates a commit with an automatically generated message.
12. Sends updates to the branch on GitHub.

In short, this script creates a branch based on the file path and sends it to GitHub. The PR must be created manually.

It is called in one of the following ways:

```sh
yarn finishupdate
yarn fu
```

### fux – finishupdate --fix

For this script to work, you need to go to the branch you want to update yourself.

1. Finds new changes in `index.md` files (or new `index.md` files). If more than 1 file is changed, or if there are zero files, it stops with an error.
2. Determines the type of changes: update or new translation.
3. Generates a branch name based on the path to the modified Markdown file. (This name must subsequently coincide with the current branch, at least in the part after `/`).
4. Moves to the `master` branch.
5. Pulls updates to `master`.
6. Goes to the target branch.
7. Adds the directory with the translation (where the `index.md` file is located) to the future commit.
8. Adds files with LanguageTool additions (`./*_additions.txt`) to the future commit.
9. Creates a commit with an automatically generated message.
10. Sends updates to the branch on GitHub.

In short, this script adds a new commit with corrections to an existing translation or update and sends it out.

It is called in one of the following ways:

```sh
yarn finishupdate --update
yarn fu --update
yarn fux
```
