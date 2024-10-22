import path from 'path'

const buildEslintCommand = filenames =>
	`npx eslint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

const buildPrettierCommand = () => `pnpm exec prettier . --write --ignore-unknown`

export default {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand]
}
