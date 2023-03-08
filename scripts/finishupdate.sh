#!/bin/sh

params=$@

# Alters section name for some sections
function alter_section_name()
{
  if [ "$1" == "javascript" ]; then
    echo "JS"
  elif [ "$1" == 'css' ]; then
    echo "CSS"
  elif [ "$1" == 'api' ]; then
    echo "API"
  elif [ "$1" == 'html' ]; then
    echo "HTML"
  elif [ "$1" == 'svg' ]; then
    echo "SVG"
  else
    echo $1
  fi
}

required_translation_number=1

# List changes for index.md files
changed_translations=$(git status --porcelain | grep "/index.md$")
number_of_translations=${#changed_translations[@]}

if [ -z "$changed_translations" ]; then
  echo "Translations not found."
  exit 1
fi

if [ "$number_of_translations" -gt "$required_translation_number" ]; then
  echo "You have more than one unstaged translation -- it's unclear what you want to do. Pls commit & push it manually."
  exit 1
fi

set -- $changed_translations

action_marker=$1
translation=$2
if [ "$action_marker" == "M" ]; then
  # Modified
  action="update"
elif [ "$action_marker" == "??" ]; then
  # Untracked; new file
  action="translation"
else
  echo "Better commit this manually."
  exit 1
fi
translation_folder=${translation%/index.md}

translation_slug=${translation_folder#/}
translation_slug=${translation_folder#files/uk/}

if [ "$params" == '--allow-update' ]; then
  ./scripts/startupdate.sh $translation --allow-update || exit 1
else
  ./scripts/startupdate.sh $translation || exit 1
fi

# Folder must be added, not single file: the folder may contain misc files
git add $translation_folder

section=$(echo $translation_slug | cut -d"/" -f1)
if [ "$section" == "web" ]; then
  section=$(echo $translation_slug | cut -d"/" -f2)
fi
section=$(alter_section_name $section)

# Always commit language alterings
git add ./*_additions.txt
git commit -m "$action($section): $translation_slug"
git push
