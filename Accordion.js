import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight }
    from 'react-native';
import { Button, Content, Left, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';

const icons = {
    'open': 'arrow-round-forward',
    'close': 'arrow-round-down'
};

export default Accordion = ({ onOpen, accordionIndex, isOpen, title, children }) => {
    let icon = isOpen ? icons['close'] : icons['open'];
    return (
        <View style={styles.container}>
                <Button full large transparent onPress={() => onOpen(accordionIndex)}>
                    <Left>
                        <Text>{title}</Text>
                    </Left>
                    <TouchableHighlight
                        onPress={() => onOpen(accordionIndex)}
                        underlayColor="#f1f1f1">
                        <Icon name={icon} />
                    </TouchableHighlight>
                </Button>
            {
                (isOpen) && (<Animatable.View animation="fadeIn">
                    <Content padder>
                        {children}
                    </Content>
                </Animatable.View>)
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
