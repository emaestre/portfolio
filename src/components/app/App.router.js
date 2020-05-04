import React from 'react';
import { Route, Switch } from 'react-router';
import About from 'components/about';
import Contact from 'components/contact';
import Projects from 'components/projects';

function AppRouter() {
    return (
        <Switch>
            <Route exact path={'/'} component={About} />
            <Route exact path={'/projects'} component={Projects} />
            <Route path={'/contact'} component={Contact} />
        </Switch>
    );
}

export default AppRouter;
