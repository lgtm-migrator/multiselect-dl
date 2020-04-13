import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';

export default {
	input: 'src/index.js',
	external: ['functionallibrary'],
	output: {
		name: 'MultiSelect',
		exports: 'named',
		globals: {
			functionallibrary: 'functionallibrary',
		},
	},
	plugins: [
		commonjs(),
		vue({
			css: true,
			compileTemplate: true,
		}),
		buble(),
	],
};
