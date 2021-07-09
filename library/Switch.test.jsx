import {h} from "preact";
import {JSDOM} from "jsdom";
import {Switch, Case, Default} from "./Switch.jsx";
import {render} from "@testing-library/preact";
import {describe, it} from "mocha";
import {expect} from "chai";

global.document = new JSDOM().window.document;

describe("Switch", () => {
  describe("Default", () => {
    it("should return an error if the default case is not accounted", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={target => target === true}>
            true
          </Case>
        </Switch>
      );

      const rendered = () => render(<App />);

      expect(rendered).to.throw(Error, "No default case found in <Switch><!--Here--></Switch>");

    });

    it("should return an error if the default case is duplicated", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={target => target === true}>
            true
          </Case>
          <Default>
            Something
          </Default>
          <Default>
            Another
          </Default>
        </Switch>
      );

      const rendered = () => render(<App />);

      expect(rendered).to.throw(Error, "Only one Default is necessary in <Switch><!--Here--></Switch>");

    });

    it("should not return the case when it does not match", () => {
      const App = () => (
        <Switch target={false}>
          <Case condition={target => target === true}>
            true
          </Case>
          <Default>
            false
          </Default>
        </Switch>
      );

      const {container} = render(<App />);

      expect(container.textContent).to.equal("false");
    });
  });

  describe("Case", () => {
    it("should return an error if the condition is not a function", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={true}>
            true
          </Case>
          <Default>
            false
          </Default>
        </Switch>
      );

      const rendered = () => render(<App />);

      expect(rendered).to.throw(Error, "predicate is not a function in <Switch><Case condition={predicate} /></Switch>");
    });

    it("should return the case when it does match", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={target => target === true}>
            true
          </Case>
          <Default>
            false
          </Default>
        </Switch>
      );

      const {container} = render(<App />);

      expect(container.textContent).to.equal("true");
    });

    it("should return the markup when it does match", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={target => target === true}>
            <h1>true</h1>
          </Case>
          <Default>
            false
          </Default>
        </Switch>
      );

      const {container} = render(<App />);

      expect(container.textContent).to.equal("true");
    });
  });

  describe("Miscellaneous", () => {
    it("should return an error if any other components except Case or Default are used", () => {
      const App = () => (
        <Switch target={true}>
          <Case condition={target => target === true}>
            true
          </Case>
          <Default>
            false
          </Default>
          <h1>Hello, world!</h1>
        </Switch>
      );

      const rendered = () => render(<App />);

      expect(rendered).to.throw(Error, "No child components expected besides Case & Default in <Switch><!--Here--></Switch>");
    });
  });
});
