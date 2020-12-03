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
   heading={"Single Key Usage"} //test
   subtext={"Press the key and see"}
 />
```

### Keys setup

```js
  const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
  
  // this variable will when all are pressed
  const combinePress = useAllKeysPress({ userKeys: ["a", "w", "d", "f"] });
```
