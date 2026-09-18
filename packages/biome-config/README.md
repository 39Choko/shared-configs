# @39choko/biome-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![license][license-src]][license-href]

## Install

```sh
npm install --save-dev @39choko/biome-config
yarn add --dev @39choko/biome-config
pnpm add -D @39choko/biome-config
bun add --dev @39choko/biome-config
```

## Usage

In your `biome.json` or in your `biome.jsonc`

```json
{
  "$schema": "https://biomejs.dev/schemas/{biome_version}/schema.json",
  "extends": ["@39choko/biome-config"]
}
```

Add `format` script to `package.json`

```json
{
  "scripts": {
    "format": "biome check --write ."
  }
}
```

## License

[MIT](./LICENSE.md) License © 2026 [39Choko](https://github.com/39Choko)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@39choko/biome-config
[npm-version-href]: https://npmjs.com/package/@39choko/biome-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@39choko/biome-config
[npm-downloads-href]: https://npmjs.com/package/@39choko/biome-config
[license-src]: https://img.shields.io/github/license/@39choko/biome-config.svg
[license-href]: ./LICENSE.md
