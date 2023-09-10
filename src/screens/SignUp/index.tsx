import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Input from "../../components/Input";
import BackButton from "../../components/Button/BackButton";
import ActionButton from "../../components/Button/ActionButton";
import UserService from "../../services/User";
import { AuthErrorTypes } from "../../@types";
import Loading from "../../components/Loading";

export default function SignUp() {
    const navigation =  useNavigation<any>()
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [confirmpassword, setconfirmpassword] = useState<string>('')
    const [loading, setloading] = useState<boolean>(false)
    
    return (
        <View className="flex-1 w-full items-center bg-primary">
            <BackButton home/>
            <View className="flex-1 justify-center">
                <Text className="text-white font-bold text-3xl">
                    Nova conta
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
                <Input
                    labelName="Confirmar senha"
                    text={confirmpassword}
                    isPassword
                    changeText={(e) => {
                        setconfirmpassword(e)
                    }}
                />
                <View className="w-full flex-1 items-center justify-center">
                    {
                        loading
                        ? <Loading/>
                        : <>
                            <ActionButton 
                                full
                                disabled={!confirmpassword || !password || !email}
                                text={"Criar conta"} 
                                color={""} 
                                handlePress={async () => {
                                    setloading(true)
                                    await UserService.SignUp(email, password, confirmpassword)
                                    .then((res) => {
                                        Alert.alert('Sucesso!', 'Conta criada com suceddo. Bem-vindo!')
                                    })
                                    .catch((err) => {
                                        setloading(false)
                                        Alert.alert('Erro ao criar conta!', AuthErrorTypes[err.code] || err.code)
                                    })
                                }}                 
                            />
                            <View className="mt-10 flex-row p-2 items-center justify-center">
                                <Text className="text-black font-regular text-lg">Já possui conta?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Login')
                                    }}
                                >
                                    <Text className='text-primary font-semibold ml-2 text-lg'>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </View>
        </View>
    );
}