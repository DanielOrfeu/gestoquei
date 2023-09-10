import { Text, View } from "react-native";
import BackButton from "../../components/Button/BackButton";


export default function NewSale() {
    return (
        <View className="flex-1 w-full items-center">
            <BackButton />
            <View className="flex-1 w-full items-center justify-center">
                <Text>
                    NewSale component
                </Text>
            </View>
        </View>
    );
}