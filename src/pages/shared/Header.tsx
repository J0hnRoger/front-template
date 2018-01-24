import * as React from 'react';

class Header extends React.Component {
    public render() {
        return <header className="page-header col-12">
          <div className="page-header__logo-container col-3">
              <a className="logo-top" href="/">
              Test App
              </a>
          </div>
          <div className="col-md-6 col-lg-1 text-center text-md-right">
            Hello
          </div>
        </header>;
    }
}

export default Header;