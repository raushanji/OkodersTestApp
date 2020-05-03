import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import * as StyleConstants from '../constants/StyleConstants';

export default class TableDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.route.params.detail
        }
        console.log(this.state.data);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>Title</Text>
                    </View>
                    <View>
                    <Text>dslkfjdsl</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>Url</Text>
                    </View>
                    <View>
                    <Text>dslkfjdsl</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>Creted_At</Text>
                    </View>
                    <View>
                    <Text>dslkfjdsl</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Text>Author</Text>
                    </View>
                    <View>
                    <Text>dslkfjdsl</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: StyleConstants.COLOR_GRAY
    }
});