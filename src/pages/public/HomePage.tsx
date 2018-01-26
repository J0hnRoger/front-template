import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Box from 'grommet/components/Box';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <Box>
              <h4>Tableau de bord</h4>
        </Box>;
    }
}
