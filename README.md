# @aminnairi/preact-switch

[![NPM version](https://badgen.net/npm/v/@aminnairi/preact-switch)](https://www.npmjs.com/package/@aminnairi/preact-switch) [![Coverage Status](https://coveralls.io/repos/github/aminnairi/preact-switch/badge.svg?branch=latest)](https://coveralls.io/github/aminnairi/preact-switch?branch=latest) [![Number of vulnerabilities](https://badgen.net/snyk/aminnairi/preact-switch)](https://snyk.io/advisor/npm-package/@aminnairi/preact-switch) [![Size of the NPM package](https://badgen.net/bundlephobia/minzip/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch) [![Tree shaking support](https://badgen.net/bundlephobia/tree-shaking/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch)

## Requirements

- Node.js
- NPM

## Installation

```console
$ npm install @aminnairi/preact-switch
```

## Features

- Conditional rendering directly in JSX.
- Just like a switch in JavaScript.
- Error thrown when used incorrectly and catcheable with [`useErrorBoundary`](https://preactjs.com/guide/v10/hooks/#useerrorboundary).

## Usage

### Basic

```jsx
import {h} from "preact";
import {Switch, Case, Default} from "@aminnairi/preact-switch";

const App = () => (
  <Switch target="ok">
    <Case condition={target => target === "great"}>
      Glad you are doing great!
    </Case>
    <Case condition={target => target === "ok"}>
      I hope that everything is okay!
    </Case>
    <Case condition={target => target === "bad"}>
      Is there anything I can do for you?
    </Case>
    <Default>
      Have a great one!
    </Default>
  </Switch>
);

export default App;
```

### Advanced

```jsx
import {h, Fragment} from "preact";
import {useState, useCallback, useErrorBoundary} from "preact/hooks";
import {Switch, Case, Default} from "@aminnairi/preact-switch";

const App = () => {
  const [error] = useErrorBoundary();

  const [mood, setMood] = useState("ok");
  const updateMood      = useCallback(({target: {value}}) => setMood(value), []);
  
  const isGreatMood = useCallback(target => target === "great", []);
  const isOkMood    = useCallback(target => target === "ok", []);
  const isBadMood   = useCallback(target => target === "bad", []);
  
  if (error) {
    return (
      <Fragment>
        <h2>Error</h2>
        <p>An error occurred</p>
        <small>Reason: {error.message}</small>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <select value={mood} onChange={updateMood}>
        <option value="great">Great</option>
        <option value="ok">Ok</option>
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

export default App;
```

See [`examples`](https://github.com/aminnairi/preact-switch/tree/next/examples).

## Contributing

See [`CONTRIBUTING.md`](https://github.com/aminnairi/preact-switch/blob/next/CONTRIBUTING.md).

## License

See [`LICENSE`](https://github.com/aminnairi/preact-switch/blob/next/LICENSE).

## Changelog

See [`CHANGELOG.md`](https://github.com/aminnairi/preact-switch/blob/next/CHANGELOG.md).
