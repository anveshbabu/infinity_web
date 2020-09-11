import { authentication } from "../../service/apiVariables";
import { api } from "../../service/api"
import { Toast } from "../../service/toast";
import { EXIST_LOCAL_STORAGE } from '../../service/constants'


// login apil call function start
export const userSignin = (body) => {
    return new Promise((resolve, reject) => {
        api({ ...authentication.userSignIn, body }).then(({ data: { token, userId } }) => {
            if (!!token) {
                localStorage.setItem(EXIST_LOCAL_STORAGE.AUTHTOKEN, token);
                resolve(userId)
            } else {
                console.log('no token')
            }
        }).catch((error) => {
            let err = error ? error.error : '';
            let message = err.message ? err.message : 'Internal Server Error'
            if (message !== 'Invalid combination. Have another go.') {
                Toast({ type: 'danger', message: message, title: 'Error' })
            }
            reject(error)
        })
    })
}




// login apil call function start
export const UserForgotPassword = (body) => {
    return new Promise((resolve, reject) => {
        api({ ...authentication.forgotPassword, body }).then((data) => {
            resolve(data)
        }).catch((error) => {
            let err = error ? error.error : '';
            let message = err.message ? err.message : 'Internal Server Error'
            if (message !== 'Invalid combination. Have another go.') {
                Toast({ type: 'danger', message: message, title: 'Error' })
            }
            reject(error)
        })
    })
}