#!/bin/sh

set -e

TARGET_FILE=$(echo $@ | cut -d" " -f1)


if [[ -z $TARGET_FILE ]]; then
    echo "Specify some target translation file, folder or webdoky.org path"
    exit 1
fi
PREFIXES_TO_DROP=("$(pwd)/" "https://webdoky.org/uk/docs" "/" "files/uk" "/")
SUFFIXES_TO_DROP=("index.md" "/")

target_branch_name=$TARGET_FILE

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
target_branch_name=$(echo "$target_branch_name" | tr '[:upper:]' '[:lower:]')

# Three dots are not allowed, they are replaced with a hyphen
target_branch_name=$(echo $target_branch_name | sed -E 's/\.\.\.+/-/g')

# Add branch name prefix
target_branch_name="update/$target_branch_name"

# Use gotobranch script
./scripts/gotobranch.sh $target_branch_name $2 || exit 1
