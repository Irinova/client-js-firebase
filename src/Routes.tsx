import preact from 'preact';
import { render, Component } from 'preact';
import { Router, route } from 'preact-router';
import { Home } from "./Home";

export class Routes extends Component {

    render() {
        return (
            <Router>
                <Home path="/" />
                {/*<Profile path="/profile" />*/}
            </Router>
        );
    }

}