# @crystal-ball/commitizen-base changelog

This project strictly adheres to semver and will err on the side of releasing majors when
changes could possibly introduce breaking changes. This changelog is dynamically generated
with [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) configured
with [@crystal-ball/semantic-release-base](https://github.com/crystal-ball/semantic-release-base).

> Changelog tags
>
> - 💥 - Breaking change
> - 🔖 - Release notes
> - 💖 - New feature
> - ✨ - Updates
> - 🛠 - Fixes


## [2.1.0](https://github.com/crystal-ball/commitizen-base/compare/v2.0.0...v2.1.0) (2019-10-29)


#### ✨ Update

* Update dependency wrap-ansi to v6.1.0 🆙 (#10)([b947501](https://github.com/crystal-ball/commitizen-base/commit/b94750149c3dd712fc0e0577841bb600c19f0ab3)), closes [#10](https://github.com/crystal-ball/commitizen-base/issue/10)

#### Chore

* Enable Semantic Release 🚀 (#7)([ac23ec8](https://github.com/crystal-ball/commitizen-base/commit/ac23ec825266d01065cdb4598a164978631d1d1f)), closes [#7](https://github.com/crystal-ball/commitizen-base/issue/7)
* Update all non-major devDependencies 🆙 (#8)([0cc336f](https://github.com/crystal-ball/commitizen-base/commit/0cc336f7efe623fed8ee2f94568c46ada9946eae)), closes [#8](https://github.com/crystal-ball/commitizen-base/issue/8)
* Update all non-major devDependencies 🆙 (#9)([3a9f4e1](https://github.com/crystal-ball/commitizen-base/commit/3a9f4e1cf1f0cd242f89c2941b89c753c0c622d6)), closes [#9](https://github.com/crystal-ball/commitizen-base/issue/9)

## 2.0.0 Project Refresh 🎉 (2019-10-09)

Re-release this package for using commitizen with 🔮 Projects. Having the
Commitizen adapter and Semantic Release configs rolled up into
`commit-semantics` doesn't provide much benefit and adds unnecessary overhead
for deps maintenance which is mostly what these two base packages require.

## 1.0.0 Project Release 🎉 (2019-05-01)
