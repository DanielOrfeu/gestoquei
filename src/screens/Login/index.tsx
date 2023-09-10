import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import * as IconS from 'react-native-heroicons/solid'
import Input from "../../components/Input";
import BackButton from "../../components/Button/BackButton";
import ActionButton from "../../components/Button/ActionButton";
import UserService from "../../services/User";
import { AuthErrorTypes } from "../../@types";
import Loading from "../../components/Loading";

export default function Login() {
    const navigation =  useNavigation<any>()
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [loading, setloading] = useState<boolean>(false)
    
    return (
        <View className="flex-1 w-full items-center bg-primary">
            <BackButton home/>
            <View className="flex-1 justify-center">
                <Text className="text-white font-bold text-3xl">
                    Entrar
                </Text>
            </View>
            <View className="p-4 bg-white w-full h-4/6 rounded-t-3xl items-center justify-start">
                
                <Input
                    labelName="E-mail"
                    text={email}
                    changeText={(e) => {
                        setemail(e)
                    }}
                />
                <Input
                    labelName="Senha"
                    text={password}
                    isPassword
                    changeText={(e) => {
                        setpassword(e)
                    }}
                />
                <TouchableOpacity
                    className="self-end mr-2"
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
                        className={`font-bold text-${email? 'primary': 'gray-100'}`}
                    >
                        Esqueceu a senha?
                    </Text>
                </TouchableOpacity>
                <View className="w-full flex-1 items-center justify-center">
                    
                    {
                        loading 
                        ? <Loading/>
                        : <>
                            <ActionButton 
                                full
                                disabled={!password || !email}
                                text={"Login"} 
                                color={""} 
                                handlePress={async () => {
                                    setloading(true)
                                    await UserService.Login(email, password)
                                    .catch((err) => {
                                        setloading(false)
                                        Alert.alert('Erro ao logar!', AuthErrorTypes[err.code] || err.code)
                                    })
                                }}               
                            />
                            <Text className="font-bold py-5 text-xl">
                                Ou
                            </Text>
                            <View className="flex-row gap-8">
                                <IconS.SunIcon color={'#0085FF'}/>
                                <IconS.UserIcon color={'#0085FF'}/>
                            </View>
                            <View className="mt-10 flex-row p-2 items-center justify-center">
                                <Text className="text-black font-regular text-lg">Não possui conta?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('SignUp')
                                    }}
                                >
                                    <Text className='text-primary font-semibold ml-2 text-lg'>Cadastre-se</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </View>
        </View>
    );
}