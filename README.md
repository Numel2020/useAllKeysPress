

<p align="center"><img alt="useAllKeysPress logo" title="useAllKeysPress" width=48% src="./keypress.jpg"></p>
<h3 align="center">  Multiple key detection in React  </h1>

# useAllKeysPress

There is already a [great solution](https://usehooks.com/useKeyPress/) for making key input detection easy to implement in React, however `useAllKeysPress` elegantly combines single and multiple key inputs into one simple Hook.

### 🚀&nbsp; Features

* Detect keys pressed when focused on html elements such as **input,** **textarea,** **div** etc.
* Detect keys pressed in **order**.


## 🌟&nbsp; Installation

You can either download or copy the `useAllKeysPress.js` file into the directory of your project
then import it into your application.

```js
import useAllKeysPress from './components/useAllKeysPress'
```
## 🌠&nbsp; Example
### Single key Usage

```js
import React from "react";
import useAllKeysPress from './hooks/useAllKeysPress';

function App() {

  // Call our hook for each key that we'd like to monitor
  const zombyPress = useAllKeysPress({userKeys:'z'});
  const lovePress = useAllKeysPress({userKeys:'l'});
  const brainPress = useAllKeysPress({userKeys:'b'});

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
## 🌌&nbsp; Options:

#### ✅&nbsp; `{userKeys: '*'}`
This configuration is for single key press detection, simply input the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) value for the selected key.
```js
// Letters
const naughty = useAllKeysPress({userKeys:'n'});

// ArroW keys
const up = useAllKeysPress({userKeys:'ArrowUp'});
const down = useAllKeysPress({userKeys:'ArrowDown'});
const left = useAllKeysPress({userKeys:'ArrowLeft'});
const right = useAllKeysPress({userKeys:'ArrowRight'});

// Numbers
const one = useAllKeysPress({userKeys:'1'});
const two = useAllKeysPress({userKeys:'2'});
const two = useAllKeysPress({userKeys:'3'});

// etc..
```
#### ✅&nbsp; `{userKeys: ['*','*']}`
This configuration is for multiple key press detection, simply input the [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) values into an array for selected keys detection.

```js

// Any configuration
const hojo = useAllKeysPress({userKeys:['h','j']});
const walk = useAllKeysPress({userKeys:['w','a','l','k']});
const stepRight = useAllKeysPress({userKeys:['Shift','ArrowRight']});

// etc..
```

#### ✅&nbsp; `{userKeys: '*', ref: *}`
This configuration allows you to attach key detection when the user is focused on elements such as `input`, `textarea`, `div` etc.

```js
import React, {useRef} from "react";
import useAllKeysPress from './hooks/useAllKeysPress';


function App() {

const input = useRef(null);

// Call our hook for each key that we'd like to monitor
const up = useAllKeysPress({userKeys:'ArrowUp'});

  return (
    <div>
      <div>
      <input type="text" ref={input}/>
      </div>
      <div>
        {up && '🦾🧒🦿🧐'}
      </div>
    </div>
  );
}
```
#### ✅&nbsp; `{userKeys: ['*','*'], order: true}`
This configuration will only return true if the keys are pressed in the corresponding order.

```js
import React from "react";
import useAllKeysPress from './hooks/useAllKeysPress';

function App() {

  // Call our hook for the array of keys that we'd like to monitor
  // These keys must be pressed in order for a 'true' result.
  const easyAs = useAllKeysPress({userKeys:['a','b','c']});


  return (
    <div>
      <div>
      <h4>All you gotta do is repeat after me</h4>
       <h3>A B C</h3>
        {easyAs && <h3>Easy as 1, 2, 3'</h3>}
      </div>
      <div>
        {easyAs && '🧡💃💃💃🧡'}
      </div>
    </div>
  );
}
```
## know issues


## ❤️&nbsp; Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## 🙏&nbsp; Acknowledgements
* [usehooks.com](https://usehooks.com/useKeyPress/) Easy to understand React Hook recipes by [Gabe Ragland](https://github.com/gragland/usehooks)
* [useMultiKeyPress](https://codesandbox.io/s/y3qzyr3lrz) - A React Hook recipe that detects multiple keys at once by [Joe Hsu](https://github.com/jhsu)

## 📘&nbsp; License
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
