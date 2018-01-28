import * as React from 'react';

import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import MenuIcon from 'grommet/components/icons/base/Menu';

interface Props {
    onShowNav(show: boolean);
}

interface State {
    showNav: boolean;
}

class MyHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showNav: true,
        };
    }
    handleShowNav = (showNav) => {
        this.setState({ showNav: !this.state.showNav }, this.props.onShowNav(this.state.showNav));
    }
    public render() {
        return (
            <Header pad="small"
                size="small" 
                className="l-header"
            >
                <Button
                icon={<MenuIcon />}
                plain={true}
                onClick={this.handleShowNav}
                color={{ color: 'white'}} />
            </Header>);
    }
}

export default MyHeader;