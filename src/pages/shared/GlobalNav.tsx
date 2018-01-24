import * as React from 'react';

import { NavLink } from 'react-router-dom';

class GlobalNav extends React.Component<{}, {}> {
    public render() {
        return <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
            <a href="#menu-toggle" className="btn btn-default" id="menu-toggle">
                <em className="fa fa-bars" /></a>
            <ul className="nav nav-pills flex-column sidebar-nav">
                <NavLink exact to={'/home'} className="nav-link">
                  <li className="nav-item">
                  Home
                  </li>
                </NavLink>
            </ul>
        </nav>;
    }
}

export default GlobalNav;
