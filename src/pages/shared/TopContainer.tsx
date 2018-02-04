import * as React from 'react';

class TopContainer extends React.Component {
  render() {
   return (
    <div>
        <div className="l-top-container shadowed">
          {this.props.children}
        </div>
        <div className="l-top-container__curved" />
    </div>
   );
 }
}

export default TopContainer;
