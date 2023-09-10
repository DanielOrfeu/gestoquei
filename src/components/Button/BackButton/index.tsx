import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import * as IconS from 'react-native-heroicons/solid'
import colors from 'tailwindcss/colors'

interface OwnProps {
    home?: boolean
}

type Props = OwnProps

export default function BackButton(props: Props) {
    const navigation =  useNavigation<any>()

    return (
        <View className="self-start bg-white items-center justify-center ml-4 mt-4 rounded-full w-9 h-9">
            <TouchableOpacity
                onPress={() => {
                    props.home 
                        ? navigation.navigate('Home') 
                        : navigation.goBack()
                }}
            >
                <IconS.ChevronLeftIcon color={'#0085FF'} size={25}/>
            </TouchableOpacity>
        </View>
    );
}