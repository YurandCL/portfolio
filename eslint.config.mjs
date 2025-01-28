import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import parser from 'astro-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [...compat.extends(
	'eslint:recommended',
	'plugin:@typescript-eslint/eslint-recommended',
	'plugin:@typescript-eslint/recommended',
	'standard',
	'plugin:astro/recommended'
), {
	languageOptions: {
		globals: {
			...globals.node,
			...globals.browser
		},

		parser: tsParser,
		ecmaVersion: 'latest',
		sourceType: 'module'
	},

	rules: {
		'no-unused-vars': 'off',

		'@typescript-eslint/no-unused-vars': ['error', {
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
			caughtErrorsIgnorePattern: '^_'
		}],

		'no-multiple-empty-lines': 'error',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'eol-last': 'off'
	}
}, {
	files: ['**/*.astro'],

	languageOptions: {
		parser,
		ecmaVersion: 5,
		sourceType: 'script',

		parserOptions: {
			parser: '@typescript-eslint/parser',
			extraFileExtensions: ['.astro']
		}
	},

	rules: {
		'astro/no-set-html-directive': 'error'
	}
}]