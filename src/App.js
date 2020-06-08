import React, {Component} from 'react';
import { BrowserRouter as Router , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'

import routes from'./route/routes'
import {Switch} from "react-bootstrap";
import Redirect from "react-router-dom/es/Redirect";

class App extends Component {
    render() {
        return (


                <Router>
                    <Switch>
                        {routes.map((route, index)=> {
                            return(
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={(props)=>{
                                            return(
                                                <route.layout {...props}>
                                                    <route.component {...props}/>
                                                </route.layout>
                                            )
                                        }}
                                    />
                                 )
                             })
                        }
                        <Redirect to={"/"} />
                    </Switch>
                </Router>

        );
    }
}

export default App;
