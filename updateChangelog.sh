#!/bin/sh
nextFriday=$(date -d "this friday 23:59:00" --iso-8601=minutes)
nextFridayShort=$(date -d "this friday 23:59:00" -I)
lastFriday=$(date -d "last friday 23:59:00" --iso-8601=minutes)
lastFridayShort=$(date -d "last friday 23:59:00" -I)

commits=$(git log --since="${lastFriday}" --until="${nextFriday}" --pretty='format:%s ([%h](https://github.com/webdoky/content/commit/%H))' | grep -E '^translation|^fix|^update')

[ -z "${commits}" ] && commits="..." # show three dots but add a version record anyway

commitsExpanded=$(echo "${commits}" | sed 's/^\(translation\)\((\w\+)\)\?:\?/* **Переклад\2:**/' | sed 's/^\(fix\)\((\w\+)\)\?:\?/* **Виправлення\2:**/' | sed 's/^\(update\)\((\w\+)\)\?:\?/* **Оновлення перекладу\2:**/')
commitsEscaped=$(echo "${commitsExpanded}" | sed ':a;N;$!ba;s/\n/\\n/g') # escape newlines or they'll mess up the whole file otherwise
versionHeader="## [${lastFridayShort} - ${nextFridayShort}]\n\n"

# Find the line with the previous version
lineNumber=$(grep -n -E -m 1 '[[[:digit:]]{4}.[[:digit:]]{2}.[[:digit:]]{2} - [[:digit:]]{4}.[[:digit:]]{2}.[[:digit:]]{2}]' CHANGELOG.md | cut -f1 -d:)

[ -z "${lineNumber}" ] && exit 1 # something is clearly wrong if there is no previous version in the changelog

sed -i "${lineNumber}i\
${versionHeader}\
${commitsEscaped}\n" CHANGELOG.md
