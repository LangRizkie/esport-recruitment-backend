import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: {
			'prefer-arrow-functions': preferArrowFunctions,
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports
		},
		rules: {
			'prefer-const': 'error',
			'no-unused-vars': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'prefer-arrow-functions/prefer-arrow-functions': [
				'error',
				{
					disallowPrototype: true,
					singleReturnOnly: false,
					classPropertiesAllowed: false
				}
			]
		}
	},
	{
		languageOptions: { globals: globals.node }
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier
]
