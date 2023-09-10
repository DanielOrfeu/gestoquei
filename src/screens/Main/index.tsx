import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as IconS from 'react-native-heroicons/solid'
import UserService from "../../services/User";
import { useUserStore } from "../../store/UserStore";
import ActionButton from "../../components/Button/ActionButton";
import AddModal from "../../components/Modal/AddModal";


export default function Main() {
    const [user] = useUserStore((state) => [
        state.user,
    ])

    const [isOpened, setisOpened] = useState<boolean>(false);

    return (
        <View className="flex flex-1 w-full items-center p-6">
            <View className="self-end items-center justify-center ml-4 mt-4 rounded-full w-9 h-9">
                <TouchableOpacity
                    onPress={() => {
                        UserService.Logout()
                    }}
                >
                    <IconS.ArrowLeftOnRectangleIcon size={30} color={'#0085FF'}/>
                </TouchableOpacity>
            </View>
            <Text className="text-2xl self-start font-semibold">
                Olá, { user.displayName || user.email }
            </Text>
            <View className="flex-1 justify-end w-full">
                <ActionButton
                    text={"Adicionar"} 
                    color={"bg-secundary"}
                    handlePress={() => {
                        setisOpened(true)
                    }}
                />
            </View>
            <AddModal 
                isVisible={isOpened} 
                closeModal={() => {
                  setisOpened(false)
                }}            
            />
        </View>
    );
}