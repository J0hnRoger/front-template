import * as React from 'react';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';
import Animate from 'grommet/components/Animate';
import Header from 'grommet/components/Header';

import 'grommet-css';

/** Components **/
import MyHeader from './Header';
import GlobalNav from '../shared/GlobalNav';
// import Header from '../shared/Header';

interface Props {
}

interface State {
    showNav: boolean;
}

export class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showNav: false,
        };
    }

    handleShowNav = (showNav) => {
        this.setState({ showNav });
    }

    public render() {
        return <App centered={false}>
           <MyHeader onShowNav={this.handleShowNav} />
            <Split priority={this.state.showNav ? 'left' : 'right'}
                padding="small"
            >
                <Animate enter={{'animation': 'slide-down', 'duration': 1000}} 
                        leave={{'animation': 'slide-up', 'duration': 1000}} 
                    >
                    <Sidebar
                        colorIndex="neutral-1"
                            size="small">
                        <Header 
                            pad="medium"
                            justify="between">
                            <Title>
                            Training App
                            </Title>
                        </Header>
                        <GlobalNav />
                    </Sidebar>
                </Animate>
                <Article scrollStep={false}>
                    {this.props.children}
                </Article>
            </Split>
        </App>;
  }
}
