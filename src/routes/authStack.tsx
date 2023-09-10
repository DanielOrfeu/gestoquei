import { createStackNavigator } from '@react-navigation/stack'

import Main from '../screens/Main'
import Orders from '../screens/Sale'
import MainStack from './mainStack'
import NewSale from '../screens/NewSale'
import NewProduct from '../screens/NewProduct'
import NewInventory from '../screens/NewInventory'

const { Navigator, Screen } = createStackNavigator()

export default function AuthStack() {
    return (
        <Navigator>
            <Screen options={{
                headerShown: false
            }}
                name='MainStack' component={MainStack}
            />
            <Screen options={{
                headerShown: false
            }}
                name='NewSale' component={NewSale}
            />
            <Screen options={{
                headerShown: false
            }}
                name='NewProduct' component={NewProduct}
            />
            <Screen options={{
                headerShown: false
            }}
                name='NewInventory' component={NewInventory}
            />
        </Navigator>
    )
}