import { Alert, Text, TouchableOpacity, View } from "react-native";
import ActionBtn from "../../components/Button";
import InfoModal from "../../components/InfoModal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
    const navigation =  useNavigation<any>()
    const [openModal, setopenModal] = useState<boolean>(false);
    
    return (
        <View className="flex flex-1 w-full items-center justify-center bg-primary p-4 py-10">
            <Text className="text-4xl text-white font-regular">
                Gestoquei
            </Text>         
            <View className="flex-1"/>      
                <ActionBtn 
                    text={"Cadastre-se"} 
                    type={"success"} 
                    full
                    handlePress={() => {
                        setopenModal(true)
                    }}
                />
                <View className="flex-row p-2 mt-2 items-center justify-center">
                    <Text className="text-white font-regular">Já possui conta?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignUp')
                        }}
                    >
                        <Text className='text-warning font-semibold ml-2'>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <InfoModal 
                    isVisible={openModal}
                    closeModal={() => {
                        setopenModal(false)
                    }}
                />
        </View>
);
}