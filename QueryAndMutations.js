import gql from "graphql-tag"
export const GET_POST_ONE= gql`
query getpost($postId:ID!){
getpost(postId:$postId){
id
createdAt
body
username
comments{
username
body
id
}
likes{
id
username
}
likesnumber
commentsnumber
}


}



`




export const CREATE_LİKE=gql`
mutation createlike($postid:ID!){

createlike(postid:$postid){
  body
id
username
createdAt
comments{id}
likes{id username}
likesnumber
commentsnumber

}


}




`






export const DELETE_COMMENT=gql`
mutation deletecomment($postid:ID!,$commentid:ID!){
deletecomment(postid:$postid,commentid:$commentid){
  body
id
username

createdAt
comments{
username
body
id
}
likes{
id
username
}
likesnumber
commentsnumber

}





}


`



export const CREATE_COMMENT=gql`
mutation createcomment($postid:ID!,$body:String!){

createcomment(postid:$postid,body:$body){
  body
id
username

createdAt
comments{
username
body
id
}
likes{
id
username
}
likesnumber
commentsnumber
}




}



`


export const SIGN_UP=gql`
  mutation register(
    $email: String!
    $password: String!
    $confirm: String!
    $username: String!
  ) {
    register(
      registerinput: {
        email: $email
        password: $password
        confirm: $confirm
        username: $username
      }
    ) {
      id username token email
      
    }
  }


`



export const POST_QUERY = gql`
{

getposts{
body
id
username
createdAt
comments{id}
likes{id username}
likesnumber
commentsnumber
}

}
`
export const POST_MUTATİON = gql`
mutation createpost($postbody:String!){
createpost(postbody:$postbody){
id
}


}

`

//deletepost(postid:ID!):String!  


export const DELETE_POST=gql`
mutation deletepost($postid:ID!){
deletepost(postid:$postid){
  body
id
username
createdAt
comments{id}
likes{id username}
likesnumber
commentsnumber


}


}


` 
export const LOG_IN=gql`
mutation signin($email:String,$password:String){
Signin(email:$email,password:$password){

  id username token email
}


}




`
