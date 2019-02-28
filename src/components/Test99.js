import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/test/home">Home</Link>
          </li>
          <li>
            <Link to="/test/about">About</Link>
          </li>
          <li>
            <Link to="/test/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        {/* <Route path="/test/home" component={Home} />
        <Route path="/test/about" component={About} /> */}
        <Route path="/test/:index" component={Topics} />
      </div>
    </Router>
  );
}

function Home( {match} ) {
    console.log('match in Home:', {match});
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About( {match} ) {
    console.log('match in About:', {match});
  return (
    <div>
      <h2>About what ?</h2>
    </div>
  );
}

function Topics({ match }) {
    console.log('match in Topics:', {match});
    if (match.params.index === "home") {
      return Home({match});
    } else if (match.params.index === "about"){
      return About({match});
    }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        render={() => <h3>Please select a topic.</h3>}
        path={match.path}
      />
    </div>
  );
}

function Topic({ match }) {
    console.log('match in Topic:', { match });
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
