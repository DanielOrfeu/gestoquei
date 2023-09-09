// import { ReactElement, ReactNode, useState } from 'react'
// import { Button } from 'tamagui'
// import { ArrowBigLeft, LogIn, LogOut, Trash2, UserPlus } from '@tamagui/lucide-icons'

// interface OwnProps {
//     text: string
//     btnColor: string
//     action?: string
//     disabled?: boolean
//     handlePress(): void
// }


// type Props = OwnProps

// export default function ActionBtn(props: Props){
//     const [iconList] = useState({
//         'login': LogIn,
//         'logout': LogOut,
//         'delete': Trash2,
//         'signup': UserPlus,
//         'back': ArrowBigLeft
//     });

//     return (
//         <Button
//             disabled={props.disabled}
//             borderRadius={15}
//             backgroundColor={props.disabled ? 'gray' : props.btnColor}
//             alignSelf="center" 
//             icon={iconList[props.action] || null}
//             onPress={() => {
//               props.handlePress()
//             }}
//         >
//             {props.text}
//         </Button>
//     )
// }

import { Text, TouchableOpacity, View } from "react-native"

interface OwnProps {
    full?: boolean
    text: string
    color?: string
    disabled?: boolean
    handlePress(): void
}

type Props = OwnProps

export default function ActionBtn(props: Props) {
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