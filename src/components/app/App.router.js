import React from 'react';
import { Route } from 'react-router';
import About from '../about';
import Home from '../home';
import Projects from '../projects';

function AppRouter() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/about" component={About} />
        </div>
    );
}

export default AppRouter;
