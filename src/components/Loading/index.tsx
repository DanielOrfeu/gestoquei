import { ActivityIndicator } from "react-native";

interface OwnProps {

}

type Props = OwnProps

export default function (props: Props) {
    return (
        <ActivityIndicator size={"large"} color={'#0085FF'}/>
    );
}