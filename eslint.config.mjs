import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname
})

export default [
  ...compat.extends(
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ),
  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
