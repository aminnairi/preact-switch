import {h, toChildArray} from "preact";

const switchKind = Symbol("switchKind");

export const Switch = ({target, children}) => {
  const [match, fallback] = toChildArray(children).reduce(([oldMatch, oldFallback, oldInput], child) => {
    if (child.type[switchKind] === "Default") {
      if (!oldFallback) {
        return [oldMatch, child, oldInput];
      }

      throw new Error("Only one Default is necessary in <Switch><!--Here--></Switch>");
    }

    if (child.type[switchKind] === "Case") {
      if (typeof child.props.condition !== "function") {
        throw new Error("predicate is not a function in <Switch><Case condition={predicate} /></Switch>");
      }

      if (child.props.condition(oldInput)) {
        return [child, oldFallback, oldInput];
      }

      return [oldMatch, oldFallback, oldInput];
    }

    throw new Error("No child components expected besides Case & Default in <Switch><!--Here--></Switch>");
  }, [null, null, target]);

  if (!fallback) {
    throw new Error("No default case found in <Switch><!--Here--></Switch>");
  }

  if (match) {
    return match;
  }

  return fallback;
};

export const Case = ({condition, children}) => {
  return children;
};

Case[switchKind] = "Case";

export const Default = ({children}) => {
  return children;
};

Default[switchKind] = "Default";
