import * as React from 'react';

class Header extends React.Component {
    public render() {
        return <header className="page-header col-12">
          <div className="page-header__logo-container col-3">
              <a className="logo-top" href="/">
                  <img src={`/images/bmm/logo-bmm-top.svg`} className="page-header__logo" alt=""/>
              </a>
          </div>
          <div className="col-md-6 col-lg-1 text-center text-md-right">
            <a href="/Account/LogOut" className="logout-button mr-3">
                <img src="https://recstorageboostmymail.blob.core.windows.net/images/bmm/icon_logout.svg" alt=""/>
            </a>
          </div>
        </header>;
    }
}

export default Header;