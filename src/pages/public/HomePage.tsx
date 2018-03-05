import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import TopContainer from '../shared/TopContainer';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <div>
            <TopContainer>
                <h4>Tracker</h4>
            </TopContainer>
        </div>
    }
}
