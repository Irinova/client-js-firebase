import React, {ReactElement} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Home } from "./Home";

export class Routes extends React.Component<any, any>{

    render(): ReactElement {
        return (
            <Router>
                <div>
                    <nav>
                        <div className="menu">
                            <div className="menu__item">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="menu__item">
                                <Link to="/about">About</Link>
                            </div>
                            <div className="menu__item">
                                <Link to="/users">Users</Link>
                            </div>
                        </div>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
