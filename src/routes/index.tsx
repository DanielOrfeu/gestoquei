import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false  
                }}
                    name='Login' component={Login}
                />
                <Stack.Screen
                    name='Home' component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>    
    )
}