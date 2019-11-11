<div align="right">
  <h1>
    <img height=75 src="./docs/assets/readme-header.png" alt="Crystal Ball Projects documentation"/>
  </h1>

  <!-- prettier-ignore-start -->
  <a href="https://www.npmjs.com/package/@crystal-ball/commitizen-base">
    <img src="https://img.shields.io/npm/v/@crystal-ball/commitizen-base" alt="Package version" valign="text-top"/>
  </a>
  <a href="https://www.npmjs.com/package/@crystal-ball/commitizen-base">
    <img src="https://img.shields.io/npm/dt/@crystal-ball/commitizen-base?color=blue" alt="NPM downloads" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/commitizen-base/actions?workflow=CI%2FCD">
    <img src="https://github.com/crystal-ball/commitizen-base/workflows/CI%2FCD/badge.svg" alt="Build status" valign="text-top" />
  </a>
  <a href="https://snyk.io/test/github/crystal-ball/commitizen-base?targetFile=package.json">
    <img src="https://snyk.io/test/github/crystal-ball/commitizen-base/badge.svg?targetFile=package.json" alt="Known vulnerabilities" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/commitizen-base/test_coverage">
    <img src="https://api.codeclimate.com/v1/badges/81bc1ca896f53200069d/test_coverage" alt="Test coverage" valign="text-top" />
  </a>
  <a href="https://codeclimate.com/github/crystal-ball/commitizen-base/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/81bc1ca896f53200069d/maintainability" alt="Maintainability" valign="text-top" />
  </a>
  <code>:status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>

  <br />
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/Renovate-enabled-32c3c2.svg" alt="Renovate" valign="text-top" />
  </a>
  <a href="https://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/Commitizen-%E2%9C%93%20friendly-10e67b" alt="Commitizen friendly" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/commitizen-base/settings/secrets/new#workspaces/-projects-5b88b5c9af3c0a2186966767/board?repos=213916365">
    <img src="https://img.shields.io/badge/ZenHub-managed-5e60ba.svg" alt="ZenHub" valign="text-top" />
  </a>
  <a href="https://semantic-release.gitbook.io/semantic-release/">
    <img src="https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic_release-e10079.svg" alt="Semantic Release" valign="text-top"/>
  </a>
  <a href="./CODE_OF_CONDUCT.md">
    <img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0-de8cf2.svg" alt="Contributor Covenant" valign="text-top" />
  </a>
  <code>:integrations</code>

  <br />
  <a href="https://github.com/crystal-ball">
    <img src="https://img.shields.io/badge/%F0%9F%94%AE%E2%9C%A8-contains_magic-D831D7.svg" alt="Contains magic" valign="text-top" />
  </a>
  <a href="https://github.com/crystal-ball/crystal-ball.github.io">
    <img src="https://img.shields.io/badge/%F0%9F%92%96%F0%9F%8C%88-full_of_love-F5499E.svg" alt="Full of love" valign="text-top" />
  </a>
  <code>:flair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>
  <!-- prettier-ignore-end -->

  <h1></h1>
  <br />
  <p align="center">
    <em>Automated commit message formatting with Commitizen</em>
  </p>
  <br />
</div>

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
