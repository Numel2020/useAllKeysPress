# Configuration
This file is the configuration guide in creating the `useAllKeysPress` demos, these examples are:
* Single Key 
* Key on Focused Element
* Multiple keys
* Multiple keys in order 

#### NOTE: The below code samples are purely for reference use whatever letters you wish.

# Single Key

### Keys setup

```js
  const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
```

### Inputs

```js
  const inputs = [
    { input: avoPress, key: "a", symbol: "🥑" },
    { input: waterPress, key: "w", symbol: "🤽" },
    { input: duckPress, key: "d", symbol: "🦆" },
    { input: foxPress, key: "f", symbol: "🦊" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Single Key Usage"} 
   subtext={"Press the key and see"}
 />
```
## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
 />
```
## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs} 
  />
```

# Key on Focused Element

### Keys setup

```js
  // create a ref to attach to the element that will have focus.
  const input = useRef(null)
  
  const upPress = useAllKeysPress({ userKeys: "ArrowUp", ref: input });
  const downPress = useAllKeysPress({ userKeys: "ArrowDown", ref: input });
```

### Inputs

```js
  const inputs = [
    { input: upPress, key: "ArrowUp", symbol: "🤗" },
    { input: downPress, key: "ArrowDown", symbol: "🤮" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Key on Focused Element"} 
   subtext={"Press the key and see"}
 />
```
## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
 />
```
## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 >
   // element to be referenced on focus.
   <UseAllInput ref={input} />
 </Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs} 
  />
```

# Multiple Keys

### Keys setup

```js
  const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
  
  // this variable represents will when all are pressed
  const combinePress = useAllKeysPress({ userKeys: ["a", "w", "d", "f"] });
```

### Inputs

```js
  const inputs = [
    { input: avoPress, key: "a", symbol: "🥑" },
    { input: waterPress, key: "w", symbol: "🤽" },
    { input: duckPress, key: "d", symbol: "🦆" },
    { input: foxPress, key: "f", symbol: "🦊" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Multiple Keys"} 
   subtext={"Press the key and see"}
 />
```

## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
  type={"multi"}
 />
```

## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs}
  combine={combinePress}
  />
```

# Multiple keys in order

![multiple keys in order](./jackson.gif)


### Keys setup

```js
  // create a ref to attach to the element that will have focus
  const input = useRef(null)
  
  const akeyPress = useAllKeysPress({ userKeys: "a" });
  const bkeyPress = useAllKeysPress({ userKeys: "b" });
  const ckeyPress = useAllKeysPress({ userKeys: "c" });
  
  // this variable represents will when all are pressed in order
  const combinePress = useAllKeysPress({ userKeys: ["a", "b", "c"], order: true });
```

### Inputs

```js
 const inputs = [
    { input: akeyPress, key: "a"},
    { input: bkeyPress, key: "b"},
    { input: ckeyPress, key: "c"},
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Multiple Keys in order"} 
   subtext={"Press the key and see"}
 />
```

## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
  type={"multi"}
 />
```

## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
  combine={combinePress}
  type={"jackson"}
  message={"All you gotto do is repeat after me!!"}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs}
  combine={combinePress}
  />
```
