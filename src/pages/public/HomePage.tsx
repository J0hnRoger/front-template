import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import TopContainer from '../shared/TopContainer';
import Tracker from '../../components/Tracker';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <div>
            <TopContainer>
                <h4>Tracker</h4>
            </TopContainer>
            <Tracker />
        </div>
    }
}
