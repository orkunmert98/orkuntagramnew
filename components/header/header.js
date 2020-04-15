import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FaApple,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import {logoutaction} from "../../redux/user/user.reducer"
import Email from "@material-ui/icons/Email";
import decode from "jwt-decode"

import {erroraction} from "../../redux/error.reducer/error.reducer"
// core components
import LOGO from "../../assets/share.png"
import Header from "./header.ui.js";
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from "../CustomButtons/Button";
import {connect} from "react-redux"


import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);

const HHeader=(props)=>{
  const Router=useRouter()
  React.useEffect(() => {
    console.log("useeffect kullanıldı")
  
    console.log(localStorage.getItem("jwtToken"))
    if(localStorage.getItem("jwtToken")){
  
  const decodedtoken=decode(localStorage.getItem("jwtToken"))
  if(decodedtoken.exp*1000<Date.now()){
  //patladı tokesn
  console.log("token patladı :"+decodedtoken)
  localStorage.removeItem("jwtToken")
  props.logout()
  }
  
  
  
    }else{

//props.logout()

    }
    
  })



const logoutt=()=>{
props.logout()
  localStorage.removeItem("jwtToken")


}
    const classes = useStyles();
console.log(props.state)
return(

    <Header
   
    color="dark"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
leftLinks={
  <List className={classes.list}>
  <ListItem className={classes.listItem}>
    <Link href="/">
    <Button
     
      className={classes.navLink}
      
      color="transparent"
    
      to="/"
    >
      

      <img src={LOGO} style={{width:50}}></img>
    </Button>
    </Link>

  </ListItem>
  </List>
}
    rightLinks={
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
         
        
          <Button
           
            className={classes.navLink}
            
            color="transparent"
          
            onClick={()=>{Router.push("/home")}}
          >
            
            Discover
            <FaApple style={{marginLeft:5,marginBottom:2}}></FaApple>
          </Button>
        
        </ListItem>
        <ListItem className={classes.listItem}>
          {
          props.user?( 
          
            <Link href="/">
          <Button
            
            className={classes.navLink}
            onClick={logoutt}
            color="transparent"
          
            
          >
            Log out
            <FaSignOutAlt style={{marginLeft:5}}></FaSignOutAlt>
          </Button></Link>):(         <Link href="/login"><Button
        
            className={classes.navLink}
            onClick={()=>{

props.adderror(null)

            }}
            color="transparent"
           
          >
            
            Sign in
            <FaSignInAlt style={{marginLeft:5}}></FaSignInAlt>
          </Button></Link>)
          
        
        
        
        }
          
          
        
        </ListItem>
        <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
         
        </ListItem>
      </List>
    }
  />

)


}

const statetoprops=state=>(

  {
state:state,
    user:state.user.user
  }
)

const propsdispatch=dispatch=>({

logout:()=>dispatch(logoutaction()),
adderror:(error)=>dispatch(erroraction(error))
})


export default connect(statetoprops,propsdispatch)(HHeader)