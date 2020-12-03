# Configuration
This file is the configuration guide in creating the `useAllKeysPress` demos, these examples are:
* Single Key 
* Key on Focused Element
* Multiple keys
* Multiple keys in order 




## setup

```js
const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
  const combinePress = useAllKeysPress({ userKeys: ["a", "w", "d", "f"] });
```

## inputs

```js
  const inputs = [
    { input: avoPress, key: "a", symbol: "🥑" },
    { input: waterPress, key: "w", symbol: "🤽" },
    { input: duckPress, key: "d", symbol: "🦆" },
    { input: foxPress, key: "f", symbol: "🦊" }
  ];
```

## status

```js
 const anyKeyPressed = inputs.some((item) => item.input === true);
```
