import { Text, TouchableOpacity, View } from "react-native"

interface OwnProps {
    full?: boolean
    text: string
    color?: string
    disabled?: boolean
    handlePress(): void
}

type Props = OwnProps

export default function ActionButton(props: Props) {
    let customClass: string = ''
    customClass = props.disabled 
        ? 'bg-gray-500'
        : props.color 
            ? `${props.color}`
            : 'bg-primary'

    return (
        <TouchableOpacity 
            disabled={props.disabled}
            className={`${customClass} rounded-2xl p-3 items-center justify-center w-${props.full ? 'full' : 'auto'}`}
            onPress={() => {
                props.handlePress()
            }}
        >
            <Text className="font-semibold text-lg text-white"> 
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}