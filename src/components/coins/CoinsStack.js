import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from 'cryptotracker/src/components/coin_detail/CoinDetailScreen';

import Colors from 'cryptotracker/src/res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.backgroundAccent,
                    shadowColor: Colors.secondary,
                },
                headerTintColor: Colors.primaryVariant
            }}
        >
            <Stack.Screen 
                name="Coins" 
                component={CoinsScreen} 
            />
            <Stack.Screen 
                name="CoinDetail" 
                component={CoinDetailScreen}
            />
        </Stack.Navigator>
    );
}

export default CoinsStack;