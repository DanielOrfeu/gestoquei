import { Alert, Text, View } from "react-native";
import Input from "../../components/Input";
import { useEffect, useState } from "react";
import { useUserStore } from "../../store/UserStore";
import ActionButton from "../../components/Button/ActionButton";
import UserService from "../../services/User";
import { AuthErrorTypes } from "../../@types";
import Loading from "../../components/Loading";


export default function Profile() {
    const [name, setname] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [isEditing, setisEditing] = useState<boolean>(false)
    const [loading, setloading] = useState<boolean>(false)
    
    const [user] = useUserStore((state) => [
        state.user,
    ])
    
    useEffect(() => {
        if (user.email) {
            setemail(user.email)
        }
        if (user.displayName) {
            setname(user.displayName)
        }
    }, []);

    useEffect(() => {
        if (user.email) {
            setemail(user.email)
        }
        if (user.displayName) {
            setname(user.displayName)
        }
    }, [user]);

    return (
        <View className="flex-1 w-full items-center justify-center p-6">
            <View className="flex-1 justify-end items-center w-full">
                <Input 
                    labelName={"Nome de exibição"}
                    text={name} 
                    isEditing={isEditing}
                    changeText={(e) => {
                        setname(e)
                    }}            
                />
                <Input 
                    labelName={"E-mail"}
                    text={email} 
                    isEditing={false}
                    changeText={(e) => {
                        setemail(e)
                    }}            
                />
            </View>
            <View className="flex-1 justify-center items-center w-full">
                <View className="flex-row justify-evenly w-full">
                    {
                        loading 
                        ? <Loading/>
                        : isEditing
                            ? <>
                                <ActionButton 
                                    text={"Salvar"} 
                                    disabled={!email || !isEditing}
                                    handlePress={async () => {
                                        setloading(true)
                                        await UserService.EditUser(name)
                                        .then(async (res) => {
                                            Alert.alert('Sucesso', 'Perfil editado com sucesso')
                                            setisEditing(false)
                                        })
                                        .catch((err) => {
                                            Alert.alert('Erro ao editar!', AuthErrorTypes[err.code] || err.code)
                                        })
                                        .finally(() => {
                                            setloading(false)
                                        })
                                    }}            
                                />
                                <ActionButton 
                                    text={"Cancelar"} 
                                    color="bg-red-500"
                                    handlePress={() => {
                                        setisEditing(false)
                                        setemail(user.email)
                                        setname(user.displayName || '')
                                    }}            
                                />
                            </>
                            : <ActionButton 
                                text={"Editar"} 
                                handlePress={() => {
                                    setisEditing(true)
                                }}            
                            />
                    }
                </View>
            </View>

        </View>
    );
}