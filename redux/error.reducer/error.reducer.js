const INITIAL_STATE={
    error:null
}


export const erroraction=(error)=>(

{
    type:"erroraction",
    payload:error
}

)



export const Errorreducer=(state=INITIAL_STATE,action)=>{
switch (action.type) {
    case "erroraction":
        return{

...state,
error:action.payload

        }
        

    default:
        return state
}



}