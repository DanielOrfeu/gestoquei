
import { useEffect, useState } from 'react'
import { Button, Form, H1, H4, Text, YStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { Alert, TouchableOpacity } from 'react-native'
import ActionBtn from '../../components/Button'
import FormInput from '../../components/FormInput'
import UserService from '../../services/User/index'

export default function SignUp() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    return (
        <YStack f={1} w={'100%'} jc="center" ai="center" bg="#0085FF" gap={20}>
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
                <H4 color={"#0085FF"}>Área de Cadastro</H4>
                <FormInput 
                    ph={'Seu email'} 
                    value={email} 
                    handleChangeText={(t) => {
                        setemail(t)
                    }}
                />
                <FormInput 
                    isPassword
                    ph={'Sua senha'} 
                    value={password} 
                    handleChangeText={(t) => {
                        setpassword(t)
                    }}
                />
                <Form.Trigger gap={8}>
                    <ActionBtn 
                        text={'Criar conta'} 
                        btnColor={'#04C900'}
                        action={'signup'}
                        handlePress={async () => {
                            await UserService.SignUp(email, password)
                        }}
                    />
                </Form.Trigger>
            </Form>
        </YStack>
    );
}
