import * as React from 'react';
import { NavLink } from 'react-router-dom';

class GlobalNav extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="l-header">
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/details">
                    Details
                </NavLink>
                <NavLink to="/account">
                    Account
                </NavLink>
            </div>)
    }
}

export default GlobalNav;
