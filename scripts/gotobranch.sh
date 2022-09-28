#!/bin/sh

set -e

TARGET_BRANCH_NAME=$@

if [[ -z $TARGET_BRANCH_NAME ]]; then
    echo "Specify some branch name"
    exit 1
fi


if [[ $(git ls-remote origin $TARGET_BRANCH_NAME) ]]; then
    echo "This branch exists on the remote. Check if there is a PR from it."
    exit 1
fi

if [[ -n $(git branch --list $TARGET_BRANCH_NAME) ]]; then
    git branch -D $TARGET_BRANCH_NAME
fi

git checkout -b $TARGET_BRANCH_NAME