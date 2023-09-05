import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import AuthStack from './authStack';
import NonAuthStack from './nonAuthStack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useUserStore } from '../store/UserStore';

export default function Routes() {
    const [user, setUser] = useUserStore((state) => [
        state.user,
        state.setUser
    ])

    useEffect(() => {
        const subscribe = auth().onAuthStateChanged(setUser)
        return subscribe
    }, []);
    
    return (
        <NavigationContainer>
            {
                user
                ? <AuthStack/>
                : <NonAuthStack/>
            }
        </NavigationContainer>    
    )
}