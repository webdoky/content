#!/bin/sh

set -e

TARGET_BRANCH_NAME=$(echo $@ | cut -d" " -f1)
allow_update_option=$(echo $@ | cut -d" " -f2)

if [[ -z $TARGET_BRANCH_NAME ]]; then
  echo "Specify some branch name"
  exit 1
fi

if [ "$allow_update_option" != "--allow-update" ]; then
  if [[ $(git ls-remote origin $TARGET_BRANCH_NAME) ]]; then
    echo "This branch exists on the remote. Check if there is a PR from it."
    exit 1
  fi
fi

if [ "$allow_update_option" != "--allow-update" ]; then
  if [[ -n $(git branch --list $TARGET_BRANCH_NAME) ]]; then
    git branch -D $TARGET_BRANCH_NAME
  fi
fi

git checkout master

git pull

if [ "$2" == "--allow-update" ]; then
  git checkout -b $TARGET_BRANCH_NAME || git checkout $TARGET_BRANCH_NAME
else
  git checkout -b $TARGET_BRANCH_NAME
fi
