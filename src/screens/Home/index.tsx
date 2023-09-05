
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useUserStore } from "../../store/UserStore";
import { useEffect } from "react";
import { Button, H3, Spacer, YStack } from 'tamagui'
import ActionBtn from '../../components/Button';
import UserService from '../../services/User';
import { Alert } from 'react-native';


export default function Home() {
    const [user] = useUserStore((state) => [
      state.user
    ])

    return (
        <YStack
          f={1}
          p={18}
        >
          <H3
            color={'black'}
          >
            Olá, {user.displayName || user.email}
          </H3>
          <Spacer f={0.2}/>
          <ActionBtn 
            text={'Sair'} 
            action={'logout'}
            btnColor={'#0085FF'} 
            handlePress={async () => {
              await UserService.Logout()
              .then((res) => {
                Alert.alert('', 'Usuário saiu com sucesso')
              })
              .catch((err) => {
                Alert.alert('', 'Erro ao sair do sistema')
              })
            }}
          />
        </YStack>
    );
}
