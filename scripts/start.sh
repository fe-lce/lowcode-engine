#!/usr/bin/env bash

pkgName="@felce/lowcode-ignitor"

if [ "$1" ]; then
  pkgName="$1"
fi

lerna exec --scope $pkgName -- pnpm build:watch
