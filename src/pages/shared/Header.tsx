import * as React from 'react';

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
        return (<div className="header" />)
    }
}

export default MyHeader;
