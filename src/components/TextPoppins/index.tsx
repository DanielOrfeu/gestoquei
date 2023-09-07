import { Text } from 'react-native'
import { StyledComponent } from 'nativewind'

export default function TextPoppins({ ...rest }){
    return (
        <StyledComponent component={Text} {...rest}>
            <Text>

            </Text>
        </StyledComponent>
    )
}