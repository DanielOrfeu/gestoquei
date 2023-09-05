
import { useEffect, useState } from 'react'
import { Button, Form, H1, H4, Spinner, Text, YStack } from 'tamagui'
import { LogIn } from '@tamagui/lucide-icons'
import { Alert, TouchableOpacity } from 'react-native'
import ActionBtn from '../../components/Button'
import FormInput from '../../components/FormInput'
import UserService from '../../services/User/index'
import { AuthErrorTypes } from '../../types'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navigation =  useNavigation()

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [loading, setloading] = useState<boolean>(false)

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
                        disabled={!email}
                        onPress={async () => {
                            setloading(true)
                            await UserService.ForgotPassword(email)
                            .then((res) => {
                                Alert.alert('Sucesso!', `Foi enviado um e-mail para ${email} com instruções para criar uma nova senha`)
                            })
                            .catch((err) => {
                                setloading(false)
                                Alert.alert('Erro ao resetar senha!', AuthErrorTypes[err.code] || err.code)
                            })
                            .finally(() => {
                                setloading(false)
                            })
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
                    {
                        loading
                        ? <Spinner
                            size='large'
                            color='#0085FF'
                        />
                        : <>
                            <ActionBtn 
                                disabled={!(email && password)}
                                text={'Entrar'} 
                                btnColor={'#0085FF'}
                                action={'login'}
                                handlePress={async () => {
                                    setloading(true)
                                    await UserService.Login(email, password)
                                    .then((res) => {
                                        console.log(JSON.stringify(res.user))
                                    })
                                    .catch((err) => {
                                        setloading(false)
                                        Alert.alert('Erro ao logar!', AuthErrorTypes[err.code] || err.code)
                                    })
                                }}
                            />
                            <ActionBtn 
                                text={'Criar conta'} 
                                btnColor={'#04C900'}
                                action={'signup'}
                                handlePress={() => {
                                    navigation.navigate('SignUp', {
                                        'email': email,
                                        'password': password
                                    })
                                }}
                            />
                        </>
                    }
                </Form.Trigger>
            </Form>
        </YStack>
    );
}
