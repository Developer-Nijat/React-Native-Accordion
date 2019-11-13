import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text } from 'native-base';
import Accordion from '../Accordion';

class ExampleComponentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAccordionIndex: undefined
        }
    }

    onAccordionChange(index) {
        if (index == this.state.openAccordionIndex)
            this.setState({ openAccordionIndex: undefined })
        else
            this.setState({ openAccordionIndex: index })
    }

    render() {
        return (
            <Container>
                <Content>
                    {dataList.map((data, i) => (
                            <Accordion key={i} title={data.title} accordionIndex={i} isOpen={this.state.openAccordionIndex == i}
                            onOpen={(openAccordionIndex) => this.onAccordionChange(openAccordionIndex)}>
                            <Text>{data.text}</Text>
                            {
                                data.image ?
                                <Image style={{ marginTop: '2%', width: 180, height: 42 }} source={data.image} />
                                :
                                null
                            }
                        </Accordion>
                    ))}
                </Content>
            </Container>
        );
    }

}

export default ExampleComponentScreen;
