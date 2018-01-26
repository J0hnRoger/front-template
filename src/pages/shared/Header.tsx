import * as React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class MyHeader extends React.Component {
    public render() {
        return (
            <Header 
                fixed={false}
                float={false}
                size="small"
            >
                <Title>
                    Make It
                </Title>
            </Header>);
    }
}

export default MyHeader;