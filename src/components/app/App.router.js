import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../about';
import Home from '../home';
import Projects from '../projects';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route exact path="/portfolio/projects" component={Projects} />
            <Route path="/portfolio/about" component={About} />
        </Switch>
    );
}

export default AppRouter;
