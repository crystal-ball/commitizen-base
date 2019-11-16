'use strict'

const { padRight, longest } = require('./utils')

const commitEmojis = [
  {
    name: '💖 (New features)',
    value: '💖',
  },
  {
    name: '🤩 (Updates and improvements)',
    value: '🤩',
  },
  {
    name: '🎊 (Bug fixing)',
    value: '🎊',
  },
  {
    name: '⚙️ (Configuration)',
    value: '⚙️',
  },
  {
    name: '📝 (Documentation)',
    value: '📝',
  },
  {
    name: '✅ (Testing changes)',
    value: '✅',
  },
  {
    name: '🚀 (Release/Deploy changes)',
    value: '🚀',
  },
  {
    name: '🆙 (Dependencies update)',
    value: '🆙',
  },
  {
    name: '🦺 (Setup)',
    value: '🦺',
  },
  {
    name: '🔥 (Code removal)',
    value: '🔥',
  },
  {
    name: '🚧 (WIP)',
    value: '🚧',
  },
  {
    name: '💥 (Breaking changes)',
    value: '💥',
  },
  {
    name: '🔮✨ (Contains magic)',
    value: '🔮✨',
  },
]

const commitTypes = {
  Chore: {
    description: 'Internal changes (e.g.: refactoring and configs)',
    title: 'Chores',
  },
  Docs: {
    description: 'Documentation change',
    title: 'Docs',
  },
  Fix: {
    description: 'A bug fix',
    title: 'Bug fixes',
  },
  New: {
    description: 'A new feature implementation',
    title: 'New features',
  },
  Release: {
    description: 'Release/Deploy project',
    title: 'Release',
  },
  Test: {
    description: 'Tests additions and updates',
    title: 'Tests changes',
  },
  Update: {
    description: 'A backwards-compatible enhancement',
    title: 'Updates',
  },
  Upgrade: {
    description: 'Dependency upgrade',
    title: 'Upgrades',
  },
}
const typesOrder = ['New', 'Update', 'Fix', 'Chore', 'Docs', 'Test', 'Upgrade', 'Release']

const titleLength = longest(commitTypes)
const formattedTypeChoices = Object.keys(commitTypes)
  .sort((a, b) => typesOrder.indexOf(a) > typesOrder.indexOf(b))
  .map(key => ({
    name: `${padRight(key, titleLength)}  ${commitTypes[key].description}`,
    value: key,
  }))

module.exports = { commitEmojis, commitTypes: formattedTypeChoices }
