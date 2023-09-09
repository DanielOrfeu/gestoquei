import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserService from "../../services/User";
import React from "react";
import { useUserStore } from "../../store/UserStore";
import ActionBtn from "../../components/ActionBtn";
import * as IconS from 'react-native-heroicons/solid'
import colors from "tailwindcss/colors";


export default function Main() {
    const [user] = useUserStore((state) => [
        state.user,
    ])

    return (
        <View className="flex flex-1 w-full items-center p-6">
            <View className="self-end items-center justify-center ml-4 mt-4 rounded-full w-9 h-9">
                <TouchableOpacity
                    onPress={() => {
                        UserService.Logout()
                    }}
                >
                    <IconS.ArrowLeftOnRectangleIcon size={30}/>
                </TouchableOpacity>
            </View>
            <Text className="text-2xl self-start font-semibold">
                Olá, { user.displayName || user.email }
            </Text>
            <View className="flex-1 justify-end w-full">
                <ActionBtn
                    text={"Adicionar"} 
                    color={"bg-secundary"}
                    handlePress={() => {
                        console.log({user})
                    }}
                />
            </View>
        </View>
    );
}