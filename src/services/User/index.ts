import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'
import { AuthErrorTypes } from '../../types'


export default class UserService {
    static async Login(email, pass) {
        return auth()
        .signInWithEmailAndPassword(email, pass)
    }


    static async SignUp(email, pass, confirmpass) {
        if( pass === confirmpass) {
            return auth()
            .createUserWithEmailAndPassword(email, pass)
        } else {
            throw {
                code: 'auth/passwords-not-match'
            }
        }
    }

    // static async ForgotPassword(email){
    //     auth()
    //     .sendPasswordResetEmail(email)
    // }
}



