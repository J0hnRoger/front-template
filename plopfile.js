module.exports = function (plop) {
	// controller generator
	plop.setGenerator('controller', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'compName',
			message: 'Component name please ?'
		}],
		actions: [{
			type: 'add',
			path: 'src/components/{{compName}}/{{compName}}.tsx',
			templateFile: './config/templates/ReactComponent.hbs'
        },
        {
			type: 'add',
			path: 'src/components/{{compName}}/{{compName}}.scss',
			templateFile: './config/templates/ReactComponentStyle.hbs'
        },
        {
			type: 'add',
			path: 'src/components/{{compName}}/index.ts',
			templateFile: './config/templates/ReactComponentIndex.hbs'
        },
    ]
	});
};