import { Text, View } from "react-native";
import BackButton from "../../components/Button/BackButton";


export default function NewProduct() {
    return (
        <View className="flex-1 w-full items-center">
            <BackButton />
            <View className="flex-1 w-full items-center justify-center">
                <Text>
                    NewProduct component
                </Text>
            </View>
        </View>
    );
}