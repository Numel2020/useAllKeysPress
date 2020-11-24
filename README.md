# useAllKeysPress

There is already a [great solution](https://usehooks.com/useKeyPress/) for making key input detection easy to implement in React. The `useAllKeysPress` elegantly combines single and multiple key inputs into one simple Hook.

## Features

* Detect keys pressed when focused on html elements such as **input**, **textarea** etc.
* Detect keys pressed in **order**.


## Installation

You can either download or copy the `useAllKeysPress.js` file into the directory of your project
then import it into your application.

```js
import useAllKeysPress from './components/useAllKeysPress'
```
## Examples
### Single key Usage

```js
import useAllKeysPress from './hooks/useAllKeysPress'


function App() {

  // Call our hook for each key that we'd like to monitor
  const zombyPress = useKeyPress({userKeys:'z'});
  const lovePress = useKeyPress({userKeys:'l'});
  const brainPress = useKeyPress({userKeys:'b'});

  return (
    <div>
      <div>
        {zombyPress && 'Z'}
        {lovePress && 'L'}
        {brainPress && 'B'}
      </div>
      <div>
        {zombyPress && '🧟'}
        {lovePress && '🧡'}
        {brainPress && '🧠'}
     
      </div>
    </div>
  );
}
```
## Options:

#### `{userKeys: '*'}`
This configuration is the default standard for key press detection, simple input the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value for the selected key.
```js
// Letters
const naughty = useKeyPress({userKeys:'n'});

// ArroW keys
const up = useKeyPress({userKeys:'ArrowUp'});
const down = useKeyPress({userKeys:'ArrowDown'});
const left = useKeyPress({userKeys:'ArrowLeft'});
const right = useKeyPress({userKeys:'ArrowRight'});

// Numbers
const one = useKeyPress({userKeys:'1'});
const two = useKeyPress({userKeys:'2'});
const two = useKeyPress({userKeys:'3'});

etc..
```
#### `{userKeys: ['*','*']}`
#### `{userKeys: '*', ref: *}`
#### `{userKeys: ['*','*'], order: true}`
#### `{userKeys: ['*','*'], order: true, ref: *}`

```
 | single key -   update all available gitignore files
{userKeys: 'ArrowDown', ref: input} | single key -   update all available gitignore files

{userKeys: ['a','s','d]} | multiple keys -   update all available gitignore files
{userKeys: ['a','s','d],  ref: input} | multiple keys -   update all available gitignore files
{userKeys: ['a','s','d],  order:true} | multiple keys -   update all available gitignore files
{userKeys: ['a','s','d],  order:true, ref: input} | multiple keys -   update all available gitignore files

{userKeys: [ArrowDown]} | single key -   update all available gitignore files

```


```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
