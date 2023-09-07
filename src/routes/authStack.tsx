import { createStackNavigator } from '@react-navigation/stack'

import Main from '../screens/Main'
import Orders from '../screens/Orders'

const { Navigator, Screen } = createStackNavigator()

export default function AuthStack() {
    return (
        <Navigator>
            <Screen options={{
                headerShown: false  
            }}
                name='Login' component={Orders}
            />
        </Navigator>
    )
}