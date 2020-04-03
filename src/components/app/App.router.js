import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../about';
import Home from '../home';
import Projects from '../projects';

function AppRouter() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
        <Switch>
            <Route exact path={publicUrl + '/'} component={Home} />
            <Route exact path={publicUrl + '/projects'} component={Projects} />
            <Route path={publicUrl + '/about'} component={About} />
        </Switch>
    );
}

export default AppRouter;
