<a href="https://tsdotnet.github.io/array-copy/"><img src="https://cdn.jsdelivr.net/gh/tsdotnet/array-copy@master/assets/banner.svg" alt="@tsdotnet/array-copy: Copy any array-like. A slice, or into a target."></a>

[![npm version](https://img.shields.io/npm/v/@tsdotnet/array-copy.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/array-copy)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/array-copy/blob/master/LICENSE)

Copy all or part of an array-like into a new array, or into an existing target.

## Install

```sh
npm install @tsdotnet/array-copy
```

## Usage

```ts
import arrayCopy from '@tsdotnet/array-copy';

const a = [10, 20, 30, 40, 50];

arrayCopy(a);          // [10, 20, 30, 40, 50], a new array
arrayCopy(a, 1, 3);    // [20, 30, 40]: from index 1, up to 3 items
arrayCopy.to(a, [], 2); // [30, 40, 50]: into an existing target
```

Works on any array-like, such as `arguments` or typed arrays.

## Use it from

ESM (`import arrayCopy from '@tsdotnet/array-copy';`) or CommonJS (`const arrayCopy = require('@tsdotnet/array-copy').default;`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-init@1/dist/umd/array-init.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/exceptions@1/dist/umd/exceptions.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-copy@1/dist/umd/array-copy.min.js"></script>
<script>
  const arrayCopy = tsdotnet.arrayCopy.default;
</script>
```

</details>

## Docs

[tsdotnet.github.io/array-copy](https://tsdotnet.github.io/array-copy/)
