import * as React from 'react';

/** Components **/
import GlobalNav from '../shared/GlobalNav';
import Header from '../shared/Header';

export class Layout extends React.Component {
    public render() {
        return <div className="container-fluid" id="wrapper">
        <div className="row h-100">
          <Header />
          <main className="col-12 m-0">
            <GlobalNav />
            <section className="row h-100 main-page">
              {this.props.children}
            </section>
        </main>
      </div>
    </div>;
  }
}
