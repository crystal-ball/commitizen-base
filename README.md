# 🔮 Projects - Commitizen Base

<p align="center">
  <a href="https://www.npmjs.com/package/@crystal-ball/commitizen-base">
    <img src="https://img.shields.io/npm/v/@crystal-ball/commitizen-base.svg?style=flat-square" alt="NPM">
  </a>
  <a href="https://github.com/crystal-ball/commit-base/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/commit-base/workflows/CI%2FCD/badge.svg" alt="Build status" />
  </a>
  <a href="https://renovatebot.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Renvoate" />
  </a>
  <a href="https://github.com/crystal-ball/commitizen-base#zenhub" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/shipping_faster_with-ZenHub-5e60ba.svg?style=flat-square" alt="ZenHub" />
  </a>
  <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Prettier">
  </a>
  <a href="https://semantic-release.gitbook.io" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="Semantic Release">
  </a>
  <br />
  <a href="https://github.com/crystal-ball" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg"
      alt="Contains magic"
    />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg"
      alt="Full of love"
    />
  </a>
</p>

<p align="center">
  <em>Automated commit message formatting with Commitizen.</em>
</p>

This package contains an adapter for using [Commitizen][] with 🔮 Projects.
Standardized commit messages are constructed using an interactive prompt with
options for long descriptions, emojis, breaking change notes and release notes.

---

## ⚙️ Setup

_1. Install_

```sh
npm i -D @crystal-ball/commitizen-base husky
```

_2. Configure `package.json`_

```json
{
  "config": {
    "commitizen": {
      "path": "@crystal-ball/commitizen-base"
    }
  },
  "husky": {
    "hooks": {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook"
    }
  }
}
```

<!-- Links -->

[commitizen]: https://commitizen.github.io/cz-cli/
