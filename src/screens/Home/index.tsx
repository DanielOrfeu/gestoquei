import { View, Text, Button, Alert } from "react-native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function Home() {
    return (
        <View>
            <Text>oi</Text>
            <Button
                title="logout"
                onPress={() => {
                  auth()
                  .signOut()
                  .then((res) => {
                    Alert.alert('OK', 'Usuário deslogado')
                  })
                  .catch((err) => {
                    Alert.alert('nOK', 'ERRO AO DESLOGAR')
                    
                  })
                }}
            />
        </View>
    );
}
