# @aminnairi/preact-switch

## Requirements

- Node.js
- NPM

## Installation

```console
$ npm install @aminnairi/preact-switch
```

## Usage

```jsx
import {h, render} from "preact";
import {useCallback, useState, useErrorBoundary} from "preact/hooks";
import {Switch, Case, Default} from "@aminnairi/switch";

const App = () => {
  const [error]           = useErrorBoundary();
  const [value, setValue] = useState(true);
  const toggleValue       = useCallback(() => setValue(oldValue => !oldValue), [setValue]);
  
  if (error) {
    return (
      <main>
        <p>Error:</p>
        <p>{error.message}</p>
      </main>
    );
  }
  
  return (
    <div>
      <header>
        <button onClick={toggleValue}>toggle</button>
      </header>
      <main>
        <Switch target={value}>
          <Case condition={value => value === true}>
            This is true 
          </Case>
          <Case condition={value => value === false}>
            This is false
          </Case>
          <Default>
            Unknown
          </Default>
        </Switch>
      </main>
    </div>
  );
};

const app = document.getElementById("app");

if (app) {
  render(<App />, app);
}
```

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).
