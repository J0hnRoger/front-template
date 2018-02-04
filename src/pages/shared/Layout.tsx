import * as React from 'react';
import * as ReactDOM from 'react-dom';

/** Components **/
import MyHeader from './Header';
import GlobalNav from '../shared/GlobalNav';
import Header from '../shared/Header';

interface Props {
}

interface State {
    showNav: boolean;
}

export class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showNav: false,
        };
    }

    handleShowNav = (showNav) => {
        this.setState({ showNav });
    }

    public render() {
        return <div className="container-fluid l-global-container">
            {this.props.children}
        </div>
  }
}
