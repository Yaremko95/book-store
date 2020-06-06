import React, {Component} from 'react';
import { BrowserRouter as Router , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Browse from "./pages/Browse";
import Book from "./pages/Book";

class App extends Component {
    render() {
        return (

                <Router>

                        <NavBar title={"Book Store"}/>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/browse" component={Browse}/>
                        <Route path="/book/:bookId" component={Book}/>


                </Router>

        );
    }
}

export default App;
