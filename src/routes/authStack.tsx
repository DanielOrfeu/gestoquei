import { createStackNavigator } from '@react-navigation/stack'

import Main from '../screens/Main'
import Orders from '../screens/Sale'
import MainStack from './mainStack'

const { Navigator, Screen } = createStackNavigator()

export default function AuthStack() {
    return (
        <Navigator>
            <Screen options={{
                headerShown: false  
            }}
                name='AuthStack' component={MainStack}
            />
        </Navigator>
    )
}