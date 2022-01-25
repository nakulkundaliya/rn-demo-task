import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DebitCard from './src/Containers/DebitCard';
import SpendingLimit from './src/Containers/SpendingLimit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="debit">
        <Stack.Screen
          name="debit"
          component={DebitCard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="spendinglimit"
          component={SpendingLimit}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
