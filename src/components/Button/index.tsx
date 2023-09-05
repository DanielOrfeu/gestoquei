import { ReactElement, ReactNode, useState } from 'react'
import { Button } from 'tamagui'
import { LogIn, LogOut, Trash2, UserPlus } from '@tamagui/lucide-icons'

interface OwnProps {
    text: string
    btnColor: string
    action?: string
    disabled?: boolean
    handlePress(): void
}


type Props = OwnProps

export default function ActionBtn(props: Props){
    const [iconList] = useState({
        'login': LogIn,
        'logout': LogOut,
        'delete': Trash2,
        'signup': UserPlus
    });

    return (
        <Button
            disabled={props.disabled}
            borderRadius={15}
            backgroundColor={props.disabled ? 'gray' : props.btnColor}
            alignSelf="center" 
            icon={iconList[props.action] || null}
            onPress={() => {
              props.handlePress()
            }}
        >
            {props.text}
        </Button>
    )
}