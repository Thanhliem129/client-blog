import {createContext, useEffect, useReducer} from 'react'
import Reducer from './reducer';


const initialState = {
   user :JSON.parse(localStorage.getItem('user')) ||  null,
   isLoading : false,
   error: false
}

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(Reducer, initialState)
   useEffect(()=>{
      localStorage.setItem('user', JSON.stringify(state.user))
   },[state.user])
   return(
      <Context.Provider
         value={{
            user:state.user,
            isLoading:state.isLoading,
            error:state.error,
            dispatch,
         }}
      >
         {children}
      </Context.Provider>
   )
}