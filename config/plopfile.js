module.exports = function (plop) {
	// React Generic Component
	plop.setGenerator('reactGenericComponent', {
		description: 'Component React Générique',
		prompts: [{
			type: 'input',
			name: 'compName',
			message: 'Nom du composant, svp ? (CamelCase)'
		}],
		actions: [{
			type: 'add',
			path: '../src/components/{{compName}}/{{compName}}.tsx',
			templateFile: './templates/ReactComponent.hbs'
        },
        {
			type: 'add',
			path: '../src/components/{{compName}}/{{compName}}.scss',
			templateFile: './templates/ReactComponentStyle.hbs'
        },
        {
			type: 'add',
			path: '../src/components/{{compName}}/index.ts',
			templateFile: './templates/ReactComponentIndex.hbs'
        }
    ]
  });

  plop.setGenerator('reactFeatureComponent', {
		description: 'Composant React utilisé dans une Feature',
		prompts: [
      {
        type: 'input',
        name: 'feature',
        message: 'Nom de la feature, svp ? (CamelCase au pluriel)'
      },
      {
			type: 'input',
			name: 'compName',
			message: 'Nom du composant, svp ? (CamelCase)'
      }
    ],
		actions: [{
			type: 'add',
			path: '../src/features/{{feature}}/{{compName}}/{{compName}}.tsx',
			templateFile: './templates/ReactComponent.hbs'
        },
        {
			type: 'add',
			path: '../src/features/{{feature}}/{{compName}}/{{compName}}.scss',
			templateFile: './templates/ReactComponentStyle.hbs'
        },
        {
			type: 'add',
			path: '../src/features/{{feature}}/{{compName}}/index.ts',
			templateFile: './templates/ReactComponentIndex.hbs'
        }
    ]
  });

	// Feature
  plop.setGenerator('newFeature', {
		description: 'Fonctionnalite',
		prompts: [{
			type: 'input',
			name: 'feature',
			message: 'Nom de la feature, svp ? (CamelCase au pluriel)'
		}],
		actions: [
      {
        type: 'add',
        path: '../src/features/{{feature}}/{{feature}}Constants.ts',
        templateFile: './templates/FeatureConstants.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{feature}}/{{feature}}Actions.ts',
        templateFile: './templates/FeatureActions.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{feature}}/{{feature}}Selectors.ts',
        templateFile: './templates/FeatureSelectors.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{feature}}/index.ts',
        templateFile: './templates/FeatureIndex.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{feature}}/{{ feature }}Reducer.ts',
        templateFile: './templates/FeatureReducer.hbs'
      }
    ]
  });

  // SubFeature
  plop.setGenerator('newSubFeature', {
		description: 'Nouvelle sous-fonctionnalité',
		prompts: [{
			type: 'input',
			name: 'parentFeature',
			message: 'Nom de la feature parente, svp ? (CamelCase au pluriel)'
    },
    {
			type: 'input',
			name: 'feature',
			message: 'Nom de la nouvelle sous-feature, svp ? (ex: "Events" CamelCase au pluriel)'
		}],
		actions: [
      {
        type: 'add',
        path: '../src/features/{{parentFeature}}/{{feature}}/{{feature}}Constants.ts',
        templateFile: './templates/FeatureConstants.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{parentFeature}}/{{feature}}/{{feature}}Actions.ts',
        templateFile: './templates/FeatureActions.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{parentFeature}}/{{feature}}/{{feature}}Selectors.ts',
        templateFile: './templates/FeatureSelectors.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{parentFeature}}/{{feature}}/index.ts',
        templateFile: './templates/FeatureIndex.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{parentFeature}}/{{feature}}/{{ feature }}Reducer.ts',
        templateFile: './templates/FeatureReducer.hbs'
      }
    ]
	});
};
