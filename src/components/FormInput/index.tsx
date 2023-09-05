import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { useEffect, useState } from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { Button, Input, XStack } from 'tamagui'

interface OwnProps {
    bg_colo?: string
    ph_color?: string
    ph: string
    b_color?: string
    value: string
    isPassword?: boolean
    handleChangeText(e: any): void
}

type Props = OwnProps

export default function FormInput(props: Props){
    const [hidePassword, sethidePassword] = useState<boolean>(false)

    useEffect(() => {
        sethidePassword(props.isPassword);
    }, []);
    
    return (
        <XStack w={'100%'}>
            <Input 
                secureTextEntry={hidePassword}
                backgroundColor={"#efefef"}
                placeholderTextColor={"#8F94A3"}
                textDecorationColor={"#0085FF"}
                borderColor={"#8F94A3"}
                color={"#0085FF"}
                w={props.isPassword ? '85%' : '100%'} 
                borderWidth={2} 
                placeholder={props.ph}
                value={props.value}
                onChangeText={(evt) => {
                    props.handleChangeText(evt)
                }}
            />
            {
                props.isPassword &&
                <Button
                    backgroundColor={'#0085FF'}
                    ml={'$1.5'}
                    w={'15%'}
                    icon={hidePassword ? Eye : EyeOff}
                    onPress={() => {
                        sethidePassword(!hidePassword)
                    }}
                />
            }
        </XStack>
    )
}