
import { useEffect, useState } from 'react'
import { Button, Form, H1, H4, Spinner, Text, YStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { Alert, TouchableOpacity } from 'react-native'
import ActionBtn from '../../components/Button'
import FormInput from '../../components/FormInput'
import UserService from '../../services/User/index'
import { useNavigation } from '@react-navigation/native'
import { AuthErrorTypes } from '../../types'

export default function SignUp() {
    const navigation =  useNavigation()

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const [loading, setloading] = useState<boolean>(false)

    useEffect(() => {
        if (navigation.getState().routes[1]?.params?.email){
            setemail(navigation.getState().routes[1]?.params?.email)
        }
    }, []);

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
                <FormInput 
                    isPassword
                    ph={'Confirme sua senha'} 
                    value={confirmPassword} 
                    handleChangeText={(t) => {
                        setconfirmPassword(t)
                    }}
                />
                <Form.Trigger gap={8}>
                    {
                        loading
                        ? <Spinner
                            size='large'
                            color='#0085FF'
                        />
                        : <>
                            <ActionBtn 
                                disabled={!(email && password && confirmPassword)}
                                text={'Criar conta'} 
                                btnColor={'#04C900'}
                                action={'signup'}
                                handlePress={async () => {
                                    setloading(true)
                                    await UserService.SignUp(email, password, confirmPassword)
                                    .then((res) => {
                                        Alert.alert('Usuário cadastrado com sucesso', `${JSON.stringify(user)}`)
                                    })
                                    .catch((err) => {
                                        Alert.alert('Erro ao criar usuário!', AuthErrorTypes[err.code] || err.code || {err})
                                        setloading(false)
                                    })
                                }}
                            />
                            <ActionBtn 
                                text={'Voltar'} 
                                btnColor={'grey'}
                                action={'back'}
                                handlePress={() => {
                                    navigation.goBack()
                                }}
                            />
                        </>
                    }
                </Form.Trigger>
            </Form>
        </YStack>
    );
}
