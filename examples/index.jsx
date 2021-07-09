import {h, render, toChildArray} from "preact";
import {useCallback, useEffect, useState, useErrorBoundary} from "preact/hooks";
import {Switch, Case, Default} from "@aminnairi/preact-switch";

const is    = wanted => input => wanted === input;
const isNot = wanted => inut => input !== wanted;
const or    = matches => input => matches.some(match => match(input));
const and   = matches => input => matches.every(match => match(input));

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(newUsers => {
      setUsers(newUsers);
    }).catch(() => {
      setUsers([]);
    });
  }, [setUsers]);

  return (
    <ul>
      {users.map(({username}) => <li>{username}</li>)}
    </ul>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      return response.json();
    }).then(newPosts => {
      setPosts(newPosts);
    }).catch(() => {
      setPosts([]);
    });
  }, [setPosts]);

  return (
    <ul>
      {posts.map(({title}) => <li>{title}</li>)}
    </ul>
  );
};

const App = () => {
  const [selectValue, setSelectValue] = useState([]);
  const [error] = useErrorBoundary();

  const onSelectValueChange = useCallback(event => {
    setSelectValue(event.target.value);
  }, [setSelectValue]);

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <header>
        <select onChange={onSelectValueChange} value={selectValue}>
          <option value="utilisateurs">Utilisateurs</option>
          <option value="users">Users</option>
          <option value="articles">Articles</option>
          <option value="posts">Posts</option>
        </select>
      </header>
      <main>
        <Switch target={true}>
          <Case condition={target => target === true}>
            <h2>Hello</h2>
          </Case>
          <Default>
            False
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
