#!/usr/bin/env bash

set -e

lerna run build \
  --scope @felce/lowcode-types \
  --scope @felce/lowcode-utils \
  --scope @felce/lowcode-shell \
  --scope @felce/lowcode-editor-core \
  --scope @felce/lowcode-editor-skeleton \
  --scope @felce/lowcode-designer \
  --scope @felce/lowcode-plugin-designer \
  --scope @felce/lowcode-plugin-command \
  --scope @felce/lowcode-plugin-outline-pane \
  --scope @felce/lowcode-workspace \
  --scope @felce/lowcode-engine \
  --stream

# lerna run build:umd \
#   --scope @felce/lowcode-engine \
#   --stream