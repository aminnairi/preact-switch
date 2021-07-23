import {h, render, Fragment} from "preact";
import {useCallback, useState} from "preact/hooks";
import {Switch, Case, Default} from "@aminnairi/preact-switch";

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

const app = document.getElementById("app");

if (app) {
  render(<App />, app);
}
