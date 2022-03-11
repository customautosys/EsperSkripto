# EsperScript

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A multilingual transpiler for JavaScript, with the initial languages being Chinese (Mandarin) and Esperanto

## Install

```bash
npm install -g esperscript
```

## Usage

```bash
Usage: esperscript [options] [--ts filename.ts | filename.js]

Options:
  -V, --version             output the version number
  -d, --debug               enables verbose logging (default: false)
  -v, --verbose             enables verbose logging (default: false)
  -t, --typescript          the file to be translated is in TypeScript
  -l, --language <language> translate from the language specified, currently supported languages are: zh-cmn-Hans (Simplified Chinese - Mandarin), eo (Esperanto)

Examples:

  $ esperscript --version
  0.0.1
```