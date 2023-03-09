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
if [ "$action_marker" == "??" ] || [ "$action_marker" == "AM" ] || [ "$action_marker" == "A" ]; then
  # Untracked; new file
  action="translation"
elif [ "$action_marker" == "M" ]; then
  # Modified
  action="update"
else
  echo "$action_marker -- better commit this manually."
  exit 1
fi
translation_folder=${translation%/index.md}

translation_slug=${translation_folder#/}
translation_slug=${translation_folder#files/uk/}

echo "Switching to a proper Git branch..."
PREFIXES_TO_DROP=("$(pwd)/" "https://webdoky.org/uk/docs" "/" "files/uk" "/")
SUFFIXES_TO_DROP=("index.md" "/")

target_branch_name=$translation_slug

# Drop usual prefixes: root URL, absolute and relative root folders
for prefix in "${PREFIXES_TO_DROP[@]}"; do
  target_branch_name=${target_branch_name#$prefix}
done
# Drop usual suffixes: index.md and a slash
for suffix in "${SUFFIXES_TO_DROP[@]}"; do
  target_branch_name=${target_branch_name%"$suffix"}
done

# Replace slashes with hyphens
target_branch_name=${target_branch_name//\//-}

# Lowercase
# target_branch_name=$(echo "$target_branch_name" | tr '[:upper:]' '[:lower:]')

# Three dots are not allowed, they are replaced with a hyphen
target_branch_name=$(echo $target_branch_name | sed -E 's/\.\.\.+/-/g')

# Add branch name prefix
target_branch_name="$action/$target_branch_name"

# Use gotobranch script
./scripts/gotobranch.sh $target_branch_name $2 || exit 1


echo "Staging the translation"
# Folder must be added, not single file: the folder may contain misc files
git add $translation_folder

section=$(echo $translation_slug | cut -d"/" -f1)
if [ "$section" == "web" ]; then
  section=$(echo $translation_slug | cut -d"/" -f2)
fi
section=$(alter_section_name $section)


echo "Staging LanguageTool corrections"
# Always commit language alterings
git add ./*_additions.txt
echo "Git commit"
git commit -m "$action($section): $translation_slug"
echo "Git push"
git push
