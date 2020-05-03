import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, TextInput } from 'react-native';
import * as ApiEndPoint from '../utils/ApiEndPoint';
import * as ApiCalls from '../utils/ApiCalls';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import * as StyleConstants from '../constants/StyleConstants';

// const url = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            page: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            let url = ApiEndPoint.GET_TABLE_LIST + "?tags=story&page=" + this.state.page;
            let header = { "Accept": "application/json", "Content-type": "application/josn" }
            ApiCalls.get(url, header)
                .then((getTableListResponse) => {
                    console.log(getTableListResponse);
                    let newPage = this.state.page + 1;
                    this.setState({ dataList: getTableListResponse.hits, page: newPage })
                })
                .catch((error) => {
                    console.log(error);
                })
        }, 10000)
    }

    getTableList = () => {
        console.log("Inside getTableList method");
        let url = ApiEndPoint.GET_TABLE_LIST + "?tags=story&page=" + this.state.page;
        let header = { "Accept": "application/json", "Content-type": "application/josn" }
        ApiCalls.get(url, header)
            .then((getTableListResponse) => {
                console.log(getTableListResponse);
                let newPage = this.state.page + 1;
                let newValue = [...this.state.dataList, ...getTableListResponse.hits]
                this.setState({ 
                    dataList: this.state.page == 0 ? getTableListResponse.hits : newValue, 
                    page: newPage })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onRenderItem = (data) => {
        let dataValue = data.item;
        return (
            <ListItem key={data.id} onPress={() => { this.props.navigation.navigate('tableDetail', { detail: dataValue }) }} noBorder style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 0.3 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{dataValue.title}</Text></View>
                <View style={{ flex: 0.3 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{dataValue.url}</Text></View>
                <View style={{ flex: 0.3 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{dataValue.created_at}</Text></View>
                <View style={{ flex: 0.3 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{dataValue.author}</Text></View>
            </ListItem>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={{ flex: 0.1, backgroundColor: StyleConstants.COLOR_WHITE, justifyContent: 'center' }}>
                    <TextInput placeholder={'Search Here...'} style={{ borderColor: 'gray', borderWidth: 0.5, borderRadius: 10, height: 35, marginHorizontal: 5, paddingHorizontal: 10, paddingVertical: 5, width: 320 }} />
                </View>
                {/* <Header /> */}
                <Content style={{ flex: 0.9 }}>
                    <List style={{ flex: 1 }}>
                        <ListItem noBorder style={{width: 350, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: 80 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{"Title"}</Text></View>
                            <View style={{ width: 80 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{"Url"}</Text></View>
                            <View style={{ width: 80 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{"Created_at"}</Text></View>
                            <View style={{ width: 80 }}><Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title_text}>{"Author"}</Text></View>
                        </ListItem>
                        <FlatList
                            data={this.state.dataList}
                            renderItem={item => this.onRenderItem(item)}
                            extraData={this.state.dataList}
                            // onEndReachedThreshold={10}
                            // onEndReached={this.getTableList()}
                        />
                    </List>
                </Content>
            </Container>

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