import * as React from 'react';
import * as ReactDOM from 'react-dom';

/** Components **/
import MyHeader from './Header';
import GlobalNav from '../shared/GlobalNav';
import Header from '../shared/Header';

export class Layout extends React.Component {
    public render() {
        return <div className="container-fluid l-global-container">
            {this.props.children}
        </div>
  }
}
