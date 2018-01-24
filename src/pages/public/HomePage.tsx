import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <div className="col-sm-12">
          <section className="row body-content h-100">
            <section className="l-sub-header col-sm-12">
              <h4>Tableau de bord</h4>
            </section>
          </section>
        </div>;
    }
}
