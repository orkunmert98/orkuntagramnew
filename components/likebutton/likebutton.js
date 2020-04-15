import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {useMutation} from "@apollo/react-hooks"
import {CREATE_LİKE} from "../../QueryAndMutations"
import {erroraction} from "../../redux/error.reducer/error.reducer"
import {changepost} from "../../redux/post.reducer/post.reducer"
import {connect} from "react-redux"
function Likebutton({postid,adderror,changepost,user,likes}) {

React.useEffect(() => {

  if(user&&likes.find((like)=>like.username===user.username)){

setcolor(true)

  }



}, [user,likes])



const [color,setcolor]=React.useState(false)

const [createlike]=useMutation(CREATE_LİKE,{
update(_,result){

changepost(result.data.createlike)

    setcolor(!color)

},

    onError(Err){
    try {
        adderror(Err.graphQLErrors[0].message)
        setTimeout(()=>adderror(null),4000)
         
    } catch (error) {
        console.log(error)
    }

}

})


const onclick=()=>{

createlike({variables:{postid:postid}})



}



    return (
        
            <IconButton aria-label="add to favorites" color={color?"secondary":""} onClick={onclick}>
          <FavoriteIcon />
        </IconButton>
      
        
    )
}
const toprops=(state)=>({
user:state.user.user,



})
const tostate=(dispatch)=>({

    adderror:(error)=>dispatch(erroraction(error)),
    changepost:(newpost)=>dispatch(changepost(newpost))
})


export default connect(toprops,tostate)(Likebutton)