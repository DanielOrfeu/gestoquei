import { Text, View } from "react-native";
import BackButton from "../../components/Button/BackButton";


export default function NewInventory() {
    return (
        <View className="flex-1 w-full items-center">
            <BackButton />
            <View className="flex-1 w-full items-center justify-center">
                <Text>
                    NewInventory component
                </Text>
            </View>
        </View>
    );
}