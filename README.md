# EsperSkripto

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A multilingual transpiler to use JavaScript in different human languages, with the initial languages being Simplified Chinese (Mandarin) and Esperanto

## Install

```bash
npm install -g esperskripto
```

## Usage

```bash
Usage: esperskripto [options] [--ts filename.ts | filename.js]

Options:
  -V, --version             output the version number
  -d, --debug               enables verbose logging (default: false)
  -v, --verbose             enables verbose logging (default: false)
  -t, --typescript          the file to be translated is in TypeScript
  -l, --language <language> translate from the language specified, currently supported languages are: zh-cmn-Hans (Simplified Chinese - Mandarin), eo (Esperanto)

Examples:

  $ esperskripto --version
  0.0.1
```

## Examples

> Simplified Chinese (Mandarin)

```javascript
函数 试一试(){
	对于(让 甲=1;甲<=10;++甲) {
		控制台.记录(甲);
	}
}

试一试();
```

> Output

```javascript
function 试一试(){
	for(let 甲=1;甲<=10;++甲) {
		console.log(甲);
	}
}

试一试();
```

> Esperanto

```javascript
funkcio provuIomete(){
	por(jen i=1;i<=10;++i){
		konzolo.protokolu(i);
	}
}

provuIomete();
```

> Output

```javascript
function provuIomete(){
	for(let i=1;i<=10;++i){
		console.log(i);
	}
}

provuIomete();
```

[build-img]:https://github.com/siauderman/EsperSkripto/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/siauderman/EsperSkripto/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/EsperSkripto
[downloads-url]:https://www.npmtrends.com/EsperSkripto
[npm-img]:https://img.shields.io/npm/v/EsperSkripto
[npm-url]:https://www.npmjs.com/package/EsperSkripto
[issues-img]:https://img.shields.io/github/issues/siauderman/EsperSkripto
[issues-url]:https://github.com/siauderman/EsperSkripto/issues
[codecov-img]:https://codecov.io/gh/siauderman/EsperSkripto/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/siauderman/EsperSkripto
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
