import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import { AuthErrorTypes } from '../../types'


export default class UserService {
    static async Login(email, pass) {
        auth()
        .signInWithEmailAndPassword(email, pass)
        .then((res) => {
            console.log(JSON.stringify(res.user))
        })
        .catch((err) => {
            Alert.alert('Erro ao logar!', AuthErrorTypes[err.code])
        })
    }


    static async SignUp(email, pass) {
        auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((res) => {
            Alert.alert('Usuário cadastrado com sucesso', `${res.user}`)
        })
        .catch((err) => {
            Alert.alert('Erro ao criar usuário!', AuthErrorTypes[err.code])
        })
    }

    // static async ForgotPassword(email){
    //     auth()
    //     .sendPasswordResetEmail(email)
    // }
}



