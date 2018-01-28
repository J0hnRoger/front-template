import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Box from 'grommet/components/Box';
import TopContainer from '../shared/TopContainer';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <Box>
            <TopContainer>
              <h4>Tracker</h4>
            </TopContainer>
        </Box>;
    }
}
