import * as React from 'react';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import { NavLink } from 'react-router-dom';

class GlobalNav extends React.Component<{}, {}> {
    public render() {
        return (
            <Box flex="grow"
            justify="start"
            >
                <Menu primary={true}
                    fill={true}
                >
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/details">
                    Details
                </NavLink>
                <NavLink to="/account">
                    Account
                </NavLink>
                </Menu>
            </Box>);
    }
}

export default GlobalNav;
