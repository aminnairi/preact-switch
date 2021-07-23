# @aminnairi/preact-switch

[![Number of vulnerabilities](https://badgen.net/snyk/aminnairi/preact-switch)](https://snyk.io/advisor/npm-package/@aminnairi/preact-switch) [![Size of the NPM package](https://badgen.net/bundlephobia/minzip/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch) [![Tree shaking support](https://badgen.net/bundlephobia/tree-shaking/@aminnairi/preact-switch)](https://bundlephobia.com/package/@aminnairi/preact-switch) [![NPM version](https://badgen.net/npm/v/@aminnairi/preact-switch)](https://www.npmjs.com/package/@aminnairi/preact-switch) [![Coverage Status](https://coveralls.io/repos/github/aminnairi/preact-switch/badge.svg?branch=latest)](https://coveralls.io/github/aminnairi/preact-switch?branch=latest)
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

See [`examples`](./examples).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).
