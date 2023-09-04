import { FontAwesome5} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false 
        }}>
            <Tab.Screen
                name='Perfil'
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name='user-alt' color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name='Pedidos'
                component={Orders}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name='cash-register' color={color} size={size}/>
                }}
            />
        </Tab.Navigator>    
    )
}