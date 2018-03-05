# FRONT STARTER

### Current Version : 0.1.0

# Description

Front-end template based on [TypeScript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter)

### Features

**Major**

[] Adding Redux with templates generators
[] Adding JSON Server with Fake

[*] Update Project structure
[*] Adapting TSLint for guarantee internal style guide
[*] Adding StoryBook
[*] Adding auto-generation Node scripts for Redux / React components

**Minor**

* Server-Side rendering

# Prerequisite

# Getting Started

# Build and Test

## Testing strategy

## Setup


### TDD Flow

En substance, méthodologie TDD :


Un cycle TDD:

    1. On ajoute rapidement un test
    2. On lance les tests pour le voir échouer
    3. On effectue un changement minimal pour que le test passe
    4. On lance les tests et voit le nouveau test passer
    5. On refactorise

Avant de se lancer :

Le TDD n'exclut pas la réflexion / la prise de hauteur. Avant de se lancer, écrire une liste des tests que l'on pense devoir effectuer pour valider la fonctionnalité

### TDD - React / Redux

1. Créer un premier test dans le composant parent qui va accueillir le nouveau composant (apportant la fonctionnalité), pour tester la présence de ce composant :

```javascript
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    ...
    const app = shallow(<App />);
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('creates a <Votre compo> component', () => {
        expect(app.find('<Votre compo>').exists()).toBe(true);
    });
});
```

2. Ajouter le composant de présentation React à la solution, en redigeant en amont un premier test pour valider son existance, via snapshot:
```javascript
describe('<Votre compo>', () => {
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
```

puis l'inclure au composant parent pour faire passer le test précédent.

3. Rédiger dans le fichier de test de ce composant une liste de tests que vous pensez nécessaires pour implémenter le comportement.
> Ces tests peuvent être rédigés à la façon BDD (donc pas forcément des tests au sens stricts) :

```javascript
describe('Tracker', () => {
    test('s\'affiche correctement')
    test('affiche les jours du mois courant')
    test('affiche une couleur au niveau des jours passés')
    test('affiche une couleur inactive au niveau des jours passés, s\'il n\'y a pas d\'evènements à cette date')
    test('affiche une couleur active au niveau des jours passés s\'il n\'y a pas d\'evènements à cette date')
    ...
```

4. Intégration graphique du composant, dans soin état le plus simple possible (pas de classe spécifique, l'état 'vide').
> Effectuer l'intégration graphique le plus tôt possible permet de voir quelles type d'information remonter dans le composant, et quelle type d'action déclencher où. On gagne en visibilité sur notre composant, cette integration nous force à nous projeter sur le fonctionnement de notre composant.

5. Identifier une action qui va être déclenchée par ce composant. Cette action est caractérisé par un Type (constant) et un PayLoad. On créer donc un fichier de tests `BannerActions.tests.ts`

> On peut développer la partie "Vue" React et le dataflow Redux independemment (composabilité/ Separation of concern). Il est donc de votre ressort de choisir de commencer par le composant React ou le flow Redux

```js
const balance = 0;
it('doit créer une action qui déclenche la récupération des bannières', () => {

    const expectedAction = { type: actionTypes.CONSTANT, balance }
    expect(actionCreators.setBalance(balance)).toEquals(expectedAction)
})
```

Créer cette action dans le fichier `<Feature>Actions.ts` pour passer le test précédent

```js
import { ActionTypes } from "@src/features/App/BannersConstants";

export const actionCreators = {
    loadBanners: (reload = false) => ({ type: ActionTypes.FETCH_BANNER, reload }),
}
```

> Comment tester les sagas ?
6. Si l'action est à destination d'une sagas, avec souvent un appel async à la clé, on rédige d'abord le test qui vise à tester l'appel externe :

```js
// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' }};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
```

6. Si l'action a un effet sur le reducer, ajouter le cas de test dans le `<component>reducer.test.ts` `BannerActions.tests.ts`
```js
describe('Balance Reducer', () => {
    const initialState = 5;
    it('set the `initialState`', () => {
        const balance = 10;

        expect(balanceReducer(undefined, { type: ActionTypes.SET_BALANCE, balance })).toEqual(initialState + balance)
    })
```

7. Créer le reducer ou le case dans le switch qui permet de passer ce test

8. Identifier les éléments du state Redux que le composant doit afficher.  (passer cette étape si ces props sont déjà testées via les tests du composant de présentation. S'il y a des props supplémentaires, les testées dans le <Composant>.tests.tsx

9. Remplacer le test de rendu du composant dnas le parent par sa version connectée :

 ```js
       it('creates a <Votre compo> component', () => {
        expect(app.find('Connect(<Votre compo>)').exists()).toBe(true);
    });
 ```

revision :
On part d'une logique Top/Down
1. On ecrit les tests React
2. Action test
2. Implementation (actionCreator + constant)
3. MiddleWare Tests
4. Implementation Middleware
3. Reducer test
4. Implementation Reducer Case



# Composant Presentational React (sans Redux):

exemple 1:

1. Affichage du composant : `.toMatchSnapshot()`
2. Initialisation du state : `<shallowComp>.state()`
3. Faire des sub-describe() pour chaque action possible sur le composant, et dans le beforeEach : `simulate(<event>) `

4. Pour chaque action, tester l'évolution du state (après la simulation de l'event)
5. Pour chaque action, tester que la fonction a bien été appelée avec les bons paramètres: `jest.fn()` puis dans le expect `expect(mockRemove).toHaveBeenCalledWith(<params>)`


```javascript
describe('Tracker', () => {
    const app = shallow(<App />);
    it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
...
```

exemple 2:
```javascript
describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Rmove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
```

# Conventions

- Dans l'intitulé des tests, mettre entre `` (backtick) les noms de variable / méthode :

```js
it('initialise le `state` avec la liste d\évènements `events`', () => {
    expect(app.find('<Votre compo>').exists()).toBe(true);
});
```

- utiliser la syntaxe BDD (Given / When / Then), on ne garde que le 'when' en mot clé, on commence le describe('component name'), puis le describe('when ..')
les 'then' sont remplacés par `it('')` block, avec des verbes d'action

# Golden Rules

1. Ne rentrer à la maison qu'une fois la duplication **eradiqué**

#Contribute

### Chore & Maintenance
