import React, { Component } from 'react';
import { View, Image, Text, SectionList, StyleSheet } from 'react-native';
import Colors from 'cryptotracker/src/res/colors';


class CoinDetailScreen extends Component {
    
    state = {
        coin: {}
    }

    componentDidMount() {
        const { coin } =  this.props.route.params;

        this.props.navigation.setOptions({title: coin.symbol})

        this.setState({ coin });
    }

    getSymbolIcon = (name) => {
        return `https://c1.coinlore.com/img/25x25/${name}.png`;
    }

    getSections = (coin) => {
        const sections = [
            {
                title: "Market Cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];

        return sections;
    }

    getMarkets = async (coinId) => {

        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

        const markets = await Http.instance.get();

    }
    
    render() {

        const { coin } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image
                        style={styles.iconImg}
                        source={{ uri: this.getSymbolIcon(coin.nameid) }}
                    />
                    <Text style={styles.titleText}>{ coin.name }</Text>
                </View>

                <SectionList
                    sections={this.getSections(coin)}
                    keyExtractor={(item) => item}
                    renderItem={({item}) =>
                        <View style={styles.sectionItem}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) => 
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}>{section.title}</Text>
                        </View>
                    }
                ></SectionList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    subHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        flexDirection: "row",
    },
    iconImg: {
        width: 25,
        height: 25,
    },
    titleText: {
        color: Colors.primary,
        fontSize: 18,
        marginLeft: 12,
    },
    sectionHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 8,
    },
    sectionItem: {
        padding: 8,
    },
    itemText: {
        color: Colors.text,
        fontSize: 14
    },
    sectionText: {
        color: Colors.text,
        fontSize: 14,
        fontWeight: "bold",
    }
});

export default CoinDetailScreen;