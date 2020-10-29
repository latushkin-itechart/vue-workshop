import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Example2 from "./examples/2/Ex2";
import Ex3_1 from "./examples/3/Ex3_1";
import Ex3_2 from "./examples/3/Ex3_2";
import Ex3_3 from "./examples/3/Ex3_3";
import Ex3_4 from "./examples/3/Ex3_4";
import Ex3_5 from "./examples/3/Ex3_5";
import Ex4_1 from "./examples/4/Ex4_1";
import Ex4_2 from "./examples/4/Ex4_2";
import Ex5_1 from "./examples/5/Ex5_1";
import Ex6_1 from "./examples/6/Ex6_1";
import Ex6_2 from "./examples/6/Ex6_2";
import Ex7_1 from "./examples/7/Ex7_1";
import Ex7_2 from "./examples/7/Ex7_2";
import Ex7_2_1 from "./examples/7/Ex7_2_1";
import Ex8_1 from "./examples/8/Ex8_1";
import Ex9_1 from "./examples/9/Ex9_1";

const examples = {
  'ex2': ['Example 2: Hello World', <Example2/>],
  'ex3_1': ['Example 3.1: Component state description', <Ex3_1/>],
  'ex3.2': ['Example 3.2: State access and reactivity', <Ex3_2/>],
  'ex3.3': ['Example 3.3: State structure on-the-go amendment', <Ex3_3/>],
  'ex3.4': ['Example 3.4: Text and HTML rendering', <Ex3_4/>],
  'ex3.5': ['Example 3.5: Attributes binding', <Ex3_5/>],
  'ex4.1': ['Example 4.1: Component methods', <Ex4_1/>],
  'ex4.2': ['Example 4.2: Event handling', <Ex4_2/>],
  'ex5.1': ['Example 5.1: Filters imitation', <Ex5_1/>],
  'ex6.1': ['Example 6.1: Conditional rendering', <Ex6_1/>],
  'ex6.2': ['Example 6.2: List rendering', <Ex6_2/>],
  'ex7.1': ['Example 7.1: Styles binding', <Ex7_1/>],
  'ex7.2': ['Example 7.2: Classes binding', <Ex7_2/>],
  'ex7.2.1': ['Example 7.2.1: Scoped styles', <Ex7_2_1/>],
  'ex8.1': ['Example 8.1: Form inputs binding', <Ex8_1/>],
  'ex9.1': ['Example 9.1: Computed prop analogue', <Ex9_1/>],
}

function App() {

  const nav = Object.entries(examples).map(([path, [title, component]]) => (
    <li key={path}><Link to={path}>{title}</Link></li>))
  const routes = Object.entries(examples).map(([path, [title, component]]) => (
    <Route path={'/' + path} key={path}>{component}</Route>))


  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            {nav}
          </ul>
        </nav>

        <main>
          <Switch>
            {routes}
          </Switch>
        </main>
      </Router>


    </div>
  );
}

export default App;
