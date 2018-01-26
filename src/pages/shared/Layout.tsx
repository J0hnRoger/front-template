import * as React from 'react';

import App from 'grommet/components/App';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';

/** Components **/
import GlobalNav from '../shared/GlobalNav';
import Header from '../shared/Header';

export class Layout extends React.Component {
    public render() {
        return <App>
          <Header />
          <Split>
            <Sidebar>
              <Box 
                flex="grow"
                justify="start"
              >
                <GlobalNav />
              </Box>
            </Sidebar>
            <Section>
              {this.props.children}
            </Section>
          </Split>
    </App>;
  }
}
