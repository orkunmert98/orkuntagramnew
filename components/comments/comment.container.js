import React,{useEffect} from 'react'
import Comments from "./comments"
import Input from "./input"
import Error from "../error/error"
import {useMutation,useLazyQuery} from "@apollo/react-hooks"
import {GET_POST_ONE,CREATE_COMMENT} from "../../QueryAndMutations"
import { Button } from '@material-ui/core'
export default function Commentcontainer({getcomments,querydata,id}) {
   


console.log(querydata)
      

    return (
   

        <div>   
   <Input id={querydata&&querydata.getpost.id}></Input>
       

   {
querydata&&querydata.getpost.comments.map(comment=>
  
  
  <Comments commentbody={comment.body} username={comment.username} commentid={comment.id} postid={querydata.getpost.id}/>
  
  
  )




       }
    
     

      </div>
           
    )
}
