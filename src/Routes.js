import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/Components/MainView/Home/Home';
import About from '../src/Components/MainView/About/About';
import Services from '../src/Components/MainView/Services/Services';
import Contact from '../src/Components/MainView/Contact/Contact';
import Health from '../src/Components/MainView/Services/Health/Health';
import Environment from '../src/Components/MainView/Services/Environment/Environment'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/nosotros' component={About} />
            <Route exact path='/servicios' component={Services} />
            <Route exact path='/salud' component={Health} />
            <Route exact path='/medioambiente' component={Environment} />
            <Route exact path='/contacto' component={Contact} />
        </Switch>
    )
}

export default Routes;