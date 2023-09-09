import { Text, TouchableOpacity, View } from "react-native";
import ActionBtn from "../../components/ActionBtn";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
    const navigation =  useNavigation<any>()
    
    return (
        <View className="flex flex-1 w-full items-center justify-center bg-primary p-4 py-10">
            <Text className="text-4xl text-white font-regular">
                Gestoquei
            </Text>         
            <View className="flex-1"/>      
            <ActionBtn 
                text={"Cadastre-se"} 
                color={"bg-secundary"} 
                full
                handlePress={() => {
                    navigation.navigate('SignUp')

                }}
            />
            <View className="mt-10 flex-row p-2 items-center justify-center">
                <Text className="text-white font-regular text-lg">Já possui conta?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text className='text-yellow-200 font-semibold ml-2 text-lg'>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}