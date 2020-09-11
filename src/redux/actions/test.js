import { testApi } from "../../service/apiVariables";
import { api } from "../../service/api"

export const testGet = (body) => {

    return new Promise((resolve, reject) => {

        api({ ...testApi.get}).then((data) => {
            resolve(data)
        }).catch((error) => {

            reject(error)


        })




    })
}