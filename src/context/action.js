export const LoginStart = (userCredentials) => ({
   type:'LOGIN_START'
})

export const LoginSuccess = (user) => ({
   type:'LOGIN_SUCCESS',
   payload:user,

})

export const LoginFailt = () => ({
   type:'LOGIN_FAILT'
})

export const Logout = () => ({
   type:'LOGOUT'
})

export const UpdateStart = (userCredentials) => ({
   type:'UPDATE_START'
})

export const UpdateSuccess = (user) => ({
   type:'UPDATE_SUCCESS',
   payload:user,

})

export const UpdateFailt = () => ({
   type:'UPDATE_FAILT'
})