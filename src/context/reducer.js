const Reducer = (state, action) => {
   switch(action.type){
      case "LOGIN_START":
         return{
            ...state,
            user:null,
            isLoading:true,
            error:false
         };
      case "LOGIN_SUCCESS":
         return{
            ...state,
            user:action.payload,
            isLoading:false,
            error:false
         };
      case "LOGIN_FAILT":
         return{
            ...state,
            user:null,
            isLoading:false,
            error:true
         };
         case "UPDATE_START":
         return{
            ...state,
            user:null,
            isLoading:true,
            error:false
         };
      case "UPDATE_SUCCESS":
         return{
            user:action.payload,
            isLoading:false,
            error:false
         };
      case "UPDATE_FAILT":
         return{
            user:state.user,
            isLoading:false,
            error:true
         };
      case "LOGOUT":
         return{
            user:null,
            isLoading:false,
            error:false
         };
      default:
         return state;
   }
}
export default Reducer