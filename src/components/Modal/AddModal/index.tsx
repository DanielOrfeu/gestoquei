import { View, Modal, Text, TouchableOpacity } from "react-native";
import ActionButton from "../../Button/ActionButton";
import * as IconS from 'react-native-heroicons/solid'
import { useNavigation } from "@react-navigation/native";

interface OwnProps {
    isVisible: boolean
    closeModal(): void
}

type Props = OwnProps

export default function AddModal(props: Props) {
    const navigation =  useNavigation<any>()

    return (
        <Modal
            animationType="none"
            visible={props.isVisible}
            transparent={true}
            onRequestClose={() => {
                props.closeModal()
            }}
            onDismiss={() => {
                console.log('onDismiss')
            }}
            onTouchCancel={() => {
                console.log('onTouchCancel')
            }}
        >
            <View className="flex-1 justify-end items-center">
                <View className="rounded-3xl items-center justify-center w-11/12 self-center mb-24 p-3"
                    style={{
                        backgroundColor: '#04C900'
                    }}>
                    <View className="flex-row w-full items-center justify-evenly">
                        <TouchableOpacity className="items-center justify-center"
                            onPress={() => {
                                props.closeModal()
                                navigation.navigate('NewSale')
                            }}
                        >
                            <IconS.CurrencyDollarIcon color={'white'} size={30} />
                            <Text className="text-white font-semibold">
                                Pedido
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center justify-center"
                            onPress={() => {
                                props.closeModal()
                                navigation.navigate('NewProduct')
                            }}
                        >
                            <IconS.ShoppingBagIcon color={'white'} size={30} />
                            <Text className="text-white font-semibold">
                                Produto
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="items-center justify-center"
                            onPress={() => {
                                props.closeModal()
                                navigation.navigate('NewInventory')
                            }}
                        >
                            <IconS.ArchiveBoxIcon color={'white'} size={30} />
                            <Text className="text-white font-semibold">
                                Estoque
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="pt-3 self-center"
                        onPress={() => {
                            props.closeModal()
                        }}>
                        <IconS.XCircleIcon color={'white'} size={28} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}