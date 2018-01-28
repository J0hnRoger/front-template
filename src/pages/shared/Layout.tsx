import * as React from 'react';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';
import Animate from 'grommet/components/Animate';
import Button from 'grommet/components/Button';

import MenuIcon from 'grommet/components/icons/base/Menu';

import 'grommet-css';

/** Components **/
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

    handleShowNav = (evt) => {
        this.setState({ showNav: !this.state.showNav });
    }

    public render() {
        return <App>
             <Header pad="medium">
                <Button
                icon={<MenuIcon />}
                plain={true}
                onClick={this.handleShowNav} />
                <Title>Front-Starter</Title>   
            </Header>
            <Split priority={this.state.showNav ? 'left' : 'right'}>
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
                    <Section>
                    {this.props.children}
                    </Section>
                </Article>
            </Split>
        </App>;
  }
}
