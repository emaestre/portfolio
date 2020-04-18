import React from 'react';
import { Route, Switch } from 'react-router';
import About from 'components/about';
import Home from 'components/home';
import Projects from 'components/projects';

function AppRouter() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/projects'} component={Projects} />
            <Route path={'/about'} component={About} />
        </Switch>
    );
}

export default AppRouter;
