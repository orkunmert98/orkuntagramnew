const findtochangepost=(payload,state)=>{

const Postindex=state.posts.findIndex(post=>post.id===payload.id)
console.log(Postindex)
state.posts[Postindex]=payload


return state.posts


}
const deletepostutil=(payload,state)=>{

    const newposts=state.posts.filter(post=>post.id!==payload.id)
    
   
    
    
    return newposts
    
    
    }





export const deletepost=(posts)=>(

{
type:"deletepost",
payload:posts


}


)




export const addpostaction=(posts)=>(

{
type:"addpostaction",
payload:posts


}

)

export const adderroraction=(error)=>(
{
tpye:"adderroraction",
payload:error

}

)


export const changepost=(payload)=>(
{    type:"changepost",
    payload:payload}
)




const INITIAL_STATE={posts:[],fade:true}

export const Postreducer=(state=INITIAL_STATE,action)=>{
switch (action.type) {
    case "addpostaction":
     return{
...state,
posts:action.payload

     }   
case "deletepost":
    return{
...state,
posts:[...deletepostutil(action.payload,state)],

    }    

case "changepost":
    return{
...state,
posts: [...findtochangepost(action.payload,state)]    

    }



    default:
    return state
}





}
