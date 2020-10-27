import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Example2 from "./examples/2/Ex2";

const examples = {
    'ex2': ['Example 2: Hello World', <Example2/>]
}

function App() {

    const nav = Object.entries(examples).map(([path, [title, component]]) => (<li key={path}><Link to={path}>{title}</Link></li>))
    const routes = Object.entries(examples).map(([path, [title, component]]) => (
        <Route path={'/' + path} key={path}><Example2/></Route>))


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
