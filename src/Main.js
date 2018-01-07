import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

// Define routing region inside render method ('HashRouter')
// This will provide foundation for the navigation and browsing history handling
// NavLink component will replace <a> elements, value defined by 'to' prop
// Route component will match URL with the correct content
// When route is active, component specified by component prop will be rendered
class Main extends Component {
    render() {
        return(
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                    {/* exact to ensures that the Home link isn't always highlighted */}
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                    {/* exact path ensures the Route is only active if the path is an exact match for what is loaded */}
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;