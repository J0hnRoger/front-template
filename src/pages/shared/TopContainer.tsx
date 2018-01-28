import * as React from 'react';
import Box from 'grommet/components/Box';

class TopContainer extends React.Component {
  render() {
   return (
    <Box>
        <div className="l-top-container shadowed">
        {this.props.children}
        </div>
        <div className="l-top-container__curved" />
    </Box>
   );
 }
}

export default TopContainer;