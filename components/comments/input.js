import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useMutation,useLazyQuery} from "@apollo/react-hooks"
import {GET_POST_ONE,CREATE_COMMENT} from "../../QueryAndMutations"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import {connect} from "react-redux"
import {changepost} from "../../redux/post.reducer/post.reducer"
import {erroraction} from "../../redux/error.reducer/error.reducer"
import IconButton from '@material-ui/core/IconButton';

import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "100%",
      margin: "4% 0"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
function Input({id,adderror,changepost}) {

  const [createcomments,{data}]=useMutation(CREATE_COMMENT,{
    update(_,result){
  changepost(result.data.createcomment)
     
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
  

  const keyPressed=(event)=> {
    
    

    if (event.key === "Enter") {
      event.preventDefault()
      onpress()
    }
  }





    const classes = useStyles();
  const [value,setvalue]=useState({values:""})
    const onchange=(event)=>{
setvalue({values:event.target.value})



    }
const onpress=(event)=>{

createcomments({variables:{postid:id,body:value.values}})

}    
console.log("input render oldu")

    return (
        
        
<Paper component="form" className={classes.root}>
      
      <InputBase
      onChange={onchange}
       className={classes.input}
       onKeyPress={keyPressed}
       placeholder="Yorum Yap"
       inputProps={{ 'aria-label': 'search google maps' }}
     />
     <IconButton  className={classes.iconButton} aria-label="search" onClick={onpress}>
       <SendIcon />
     </IconButton>
    
    
   </Paper>
    )
}



const propstostate=(dispatch)=>({

adderror:(error)=>dispatch(erroraction(error)),
changepost:(post)=>dispatch(changepost(post))

})

export default connect(null,propstostate)(Input)