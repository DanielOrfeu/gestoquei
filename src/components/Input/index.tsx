import { TextInput, View, Text } from "react-native";

interface OwnProps {
    labelName?: string
    text: string
    isPassword?: boolean
    isEditing?: boolean
    changeText(e: string): void
}

type Props = OwnProps

export default function Input(props: Props) {
    return (
        <View className="w-full items-start gap-0">
            {
                props.labelName &&
                <Text className="pl-3 text-primary text-md">{props.labelName}</Text>
            }
            <View className="w-full">
                <TextInput className="w-full bg-gray-200 h-14 rounded-3xl border-transparent border-2 my-3 pl-3 focus:border-primary"
                    value={props.text}
                    onChangeText={(e) => {
                        props.changeText(e)
                    }}
                    keyboardType={props.isPassword ? "default" : "visible-password"}
                    secureTextEntry={props.isPassword}  
                    editable={props.isEditing}
                />
            </View>
        </View>
    );
}