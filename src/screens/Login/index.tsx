
import { useEffect, useState } from 'react'
import { Button, Form, H1, H4, Text, YStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { Alert, TouchableOpacity } from 'react-native'
import ActionBtn from '../../components/Button'
import FormInput from '../../components/FormInput'
import UserService from '../../services/User/index'

export default function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    return (
        <YStack f={1} w={'100%'} jc="center" ai="center" bg="#0085FF" gap={20}>
            <H1>Gestoquei</H1>
              <Form
                alignItems="center"
                w={'85%'}
                onSubmit={() => {}}
                borderWidth={1}
                borderRadius="$4"
                backgroundColor="#efefef"
                borderColor="#efefef"
                padding="$6"
                gap={20}
              >
                <H4 color={"#0085FF"}>Área de Login</H4>
                <FormInput 
                    ph={'Seu email'} 
                    value={email} 
                    handleChangeText={(t) => {
                        setemail(t)
                    }}
                />
                <YStack>
                    <FormInput 
                        isPassword
                        ph={'Sua senha'} 
                        value={password} 
                        handleChangeText={(t) => {
                            setpassword(t)
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('test')
                        }}
                    >
                        <Text
                        color={'#0085FF'}
                        >
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                </YStack>
                <Form.Trigger gap={8}>
                    <ActionBtn 
                        disabled={!(email && password)}
                        text={'Entrar'} 
                        btnColor={'#0085FF'}
                        action={'login'}
                        handlePress={async () => {
                            await UserService.Login(email, password)
                        }}
                    />
                    <ActionBtn 
                        text={'Criar conta'} 
                        btnColor={'#04C900'}
                        action={'signup'}
                        handlePress={() => {
                            Alert.alert('Info', 'Tela/função não implementada')
                        }}
                    />
                </Form.Trigger>
            </Form>
        </YStack>
    );
}
