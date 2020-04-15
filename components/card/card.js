import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Collapse from '@material-ui/core/Collapse';
import moment from 'moment';
import Commentscontainer from "../comments/comment.container"
import {erroraction} from "../../redux/error.reducer/error.reducer"
import {deletepost} from "../../redux/post.reducer/post.reducer"

import Avatar from '@material-ui/core/Avatar';
import {DELETE_POST} from "../../QueryAndMutations"
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import {useMutation,useLazyQuery} from "@apollo/react-hooks"
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

import {GET_POST_ONE} from "../../QueryAndMutations"
import {connect} from "react-redux"
import Likebutton from "../likebutton/likebutton"
import { Zoom } from '@material-ui/core';





const useStyles = makeStyles(theme => ({
  root: {
    
  
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RecipeReviewCard({key,id,body,username,createAt,startquery,user,adderror,likesnumber,commentsnumber,likes,deletes}) {
  

const [zoom,setzoom]=React.useState(true)

  const classes = useStyles();

  const [getcomments, {data:querydata}]=useLazyQuery(GET_POST_ONE,{
    onCompleted(){
console.log("commentlergetirildi")
console.log(querydata)
    },
    onError(Err){
      adderror(Err.graphQLErrors[0].message)
      setTimeout(()=>adderror(null),4000)

    },
    
    
  })

  const [expanded, setExpanded] = React.useState(false);

  const [deletepost,{error:deleteposterror}]=useMutation(DELETE_POST,{
        
    update(_,result){
      setzoom(false)
      setTimeout(()=>deletes(result.data.deletepost)
      ,1500)       

    },onError(Err){

      adderror(Err.graphQLErrors[0].message)
      setTimeout(()=>adderror(null),4000)

    }
    
    
    })





  const handleExpandClick = () => {
    
    getcomments({ variables:{postId:id}})
    console.log("açılıyor")
    setExpanded(!expanded);
  };
  

console.log("kart")

  return (
    <Zoom in={zoom} timeout={2000}>
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          user&&
          user.username===username?( <IconButton onClick={()=>{
          try {
            deletepost({ variables: {postid:id}})
            
          } catch (error) {
            console.log(error)
          }  
          
           
          
          
          
          }}>  <DeleteIcon></DeleteIcon></IconButton>):(null)
         
       
        }
        title={username}
        subheader={moment(createAt).fromNow(true)}
      />
     
   

   <Typography variant="h4" style={{overflowWrap: "break-word",margin:"5%"}}>
     


       {body}
    
     
    </Typography>






       
 

 

    
   
   
     
     
      <CardActions disableSpacing>
        <Likebutton postid={id} likes={likes}></Likebutton>
      <div>{likesnumber}</div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
           
         <ChatOutlinedIcon/>
        </IconButton>
        <div>{commentsnumber}</div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
       

  
  
  <Commentscontainer  querydata={querydata} getcomments={getcomments} id={id}/>
  
  
 



        </CardContent>
      </Collapse>
    </Card>
    </Zoom>
  );
}


const Memocard=React.memo(RecipeReviewCard)
const statetoprops=(state)=>(
  {

user:state.user.user

  }
)
const propstostate=(dispatch)=>({
  adderror:(error)=>dispatch(erroraction(error)),
  deletes:(post)=>dispatch(deletepost(post))
})

export default connect(statetoprops,propstostate)(Memocard)

RecipeReviewCard.getInitialProps = async (ctx) => {

return{}

}