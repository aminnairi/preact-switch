# @aminnairi/preact-switch

[![Number of vulnerabilities](https://badgen.net/snyk/aminnairi/preact-switch)](https://snyk.io/advisor/npm-package/@aminnairi/preact-switch) [![Size of the NPM package](https://badgen.net/bundlephobia/minzip/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch) [![Tree shaking support](https://badgen.net/bundlephobia/tree-shaking/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch) [![NPM version](https://badgen.net/npm/v/@aminnairi/preact-switch)](https://www.npmjs.com/package/@aminnairi/preact-switch)

## Requirements

- Node.js
- NPM

## Installation

```console
$ npm install @aminnairi/preact-switch
```

## Usage

```jsx
const App = () => {
  const [mood, setMood] = useState("ok");

  const updateMood  = useCallback(({target: {value}}) => setMood(value), []);
  const isGreatMood = useCallback(target => target === "great", []);
  const isOkMood    = useCallback(target => target === "ok", []);
  const isBadMood   = useCallback(target => target === "bad", []);

  return (
    <Fragment>
      <select value={mood} onChange={updateMood}>
        <option value="great">Great</option>
        <option value="ok">Okay</option>
        <option value="bad">Bad</option>
      </select>
      <Switch target={mood}>
        <Case condition={isGreatMood}>
          Glad you are doing great!
        </Case>
        <Case condition={isOkMood}>
          I hope that everything is okay!
        </Case>
        <Case condition={isBadMood}>
          Is there anything I can do for you?
        </Case>
        <Default>
          Have a great one!
        </Default>
      </Switch>
    </Fragment>
  );
};
```

See [`examples`](./examples).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).
