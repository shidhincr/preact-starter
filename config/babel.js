module.exports = {
	presets: [
		['es2015', {loose: true}],
		'stage-2'
	],
	plugins: [
		['transform-react-jsx', {pragma: 'h'}]
	]
};
