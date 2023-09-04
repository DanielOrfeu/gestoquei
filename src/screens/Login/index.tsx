import { useNavigation } from "@react-navigation/native";
import { Text, Alert, TextInput } from "react-native";
import auth from '@react-native-firebase/auth';

import * as S from "./styles";
import { useState } from "react";

export default function Login() {
    const nav = useNavigation();

    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    
    return (
        <S.Container>
            <S.Title>
                Gestoquei
            </S.Title>
        </S.Container>
    );
}
