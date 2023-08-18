import { en, registerTranslation } from 'react-native-paper-dates';
registerTranslation('en', en);
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import HomePage from './src/pages/HomePage';
import MyBookings from './src/pages/MyBookings';
import LoadingPage from './src/pages/LoadingPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, width: '100%', height: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loading" headerMode="none">
          <Stack.Screen name="Loading" component={LoadingPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name='MyBookings' component={MyBookings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
