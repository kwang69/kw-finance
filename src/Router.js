import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import AddEmployee from '../AddEmployee';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/AddEmployee" component={AddEmployee}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;