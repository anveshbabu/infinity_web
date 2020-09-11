export const LOGIN_TYPE ={
    ADMIN:'admin'
}

export const EXIST_LOCAL_STORAGE ={
    AUTHTOKEN:'AuthToken',
    USER_ID:'userId',
    IS_KEEP_ME:'isKeepMe',
    KEEP_ME_OBJ:'keepMeObj'
}


export const CONFIG ={
    API_URL: process.env.NODE_ENV === 'development' ?process.env.REACT_APP_DEV_URL:process.env.REACT_APP_PROD_URL,
}

