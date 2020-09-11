// import { generateQuery } from './helperFunctions';
export const testApi = {
  get: {
    api: '/posts',
    method: 'get',
    baseURL: 'test',
  },
}


export const authentication = {

  userSignIn: {
    api: '/user/signin',
    method: 'post',
    baseURL: 'normal',
  },
  forgotPassword: {
    api: '/user/forgot-password',
    method: 'put',
    baseURL: 'normal',
  },

}







