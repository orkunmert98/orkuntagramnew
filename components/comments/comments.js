import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {connect} from  "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {erroraction} from "../../redux/error.reducer/error.reducer"
import {changepost} from "../../redux/post.reducer/post.reducer"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useMutation} from "@apollo/react-hooks"
import {DELETE_COMMENT} from "../../QueryAndMutations"
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function AlignItemsLiss({commentbody,username,postid,commentid,user,adderror,changepost}) {
  const classes = useStyles();
  
const [deletecomments,{data}]=useMutation(DELETE_COMMENT,{
  update(_,result){
    changepost(result.data.deletecomment)
    
   
  },onError(Err){

    adderror(Err.graphQLErrors[0].message)
    setTimeout(()=>adderror(null),4000)
  }
})

  return (
    <List className={classes.root}>
    
      <ListItem alignItems="flex-start"
      style={{width:"100%"}}>
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
        style={{width:"100%"}}
          primary={username}
          secondary={
            <React.Fragment>
             
              {commentbody}
            </React.Fragment>
          }
        
        />

{user&&user.username===username?(   <IconButton onClick={()=>{
       

       
       deletecomments({variables:{postid:postid,commentid:commentid}})
      
        
       
       
       
       }}>  <DeleteIcon></DeleteIcon></IconButton>):(null)}

 

      </ListItem>
    
      <Divider variant="inset" component="li" />
    </List>
  );
}

const statetoprops=(state)=>(

{
  user:state.user.user
}

)
const propstostate=(dispatch)=>({

  adderror:(error)=>dispatch(erroraction(error)),
  changepost:(post)=>dispatch(changepost(post))
})

export default connect(statetoprops,propstostate)(AlignItemsLiss)