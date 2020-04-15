import { parseCookies, setCookie, destroyCookie } from 'nookies'
const cookieParser = require('cookie-parser');

export const adduseraction=(user)=>(

{
type:"adduseraction",
payload:user

}
)
export const logoutaction=()=>(

{type:"logoutaction"}

)

let initialState;
if (typeof localStorage !== "undefined") {
   const authCookie =  parseCookies().auth
  

     
  
   if (authCookie) {
 
   
       initialState = {
           user:   JSON.parse(authCookie).user 
       }
       
    } else {
       initialState = {
         
           user: null
       }
   }
} else {
 
   initialState = {
       
       user: null
   };
}








export const Userreducer=(state=initialState,action)=>{
  
    switch(action.type){
    case "adduseraction":
  
        const authObj = {
          
            user: action.payload
        };
        
        setCookie(null,"auth", JSON.stringify(authObj),{});
        return authObj;
    case "logoutaction":
        destroyCookie(null,"auth")
    return{

            ...state,
            user:null
        }  
    

        default:
            return state
    
    
    
    }
    
    
    
    
    }
   