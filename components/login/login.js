import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Modals from "../modal/modal"
import ANİMATE from "../advancedanimation/index"
import {Link} from "react-router-dom"

import Paper from '@material-ui/core/Paper';
import IMAGE from "../../assets/wall2.jpg"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"
import {adduseraction,logoutaction} from "../../redux/user/user.reducer"
import {erroraction} from "../../redux/error.reducer/error.reducer"
import {LOG_IN} from "../../QueryAndMutations"
import Error from "../error/error"
import gql from "graphql-tag"
import {useMutation} from "@apollo/react-hooks"
function Copyright() {



  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
        {"orkunmertgs41@gmail.com "}
        {"  "} 
      
      {" "+new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignInSide=(props)=> {
 





  const classes = useStyles();
  const [values,setvalues]=useState({
    email:"",password:""
  });
 



  const [adduser,{loading,error,data}]=useMutation(LOG_IN,{
  update(_, result) {
    props.history.push("/home")
    console.log("başarılı sign in")
    props.adduseraction1(result.data.Signin)
    localStorage.setItem("jwtToken",result.data.Signin.token)
    },
    onError(err){
      console.log(err)
try {
props.erroraction(err.graphQLErrors[0].extensions.exception.Signerrors)
  
} catch (error) {
  console.log(error)
}    




    }
   

})
  const onchangefunct=(event)=>{
  setvalues({...values,[event.target.name]:event.target.value})
  
  }
  const onsubmit=(event)=>{
    event.preventDefault();
    console.log({...values})
  adduser( { variables: values})
 

}
 

return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={0} sm={12} md={7} className={classes.image}  >

<ANİMATE style={{width:"100%"}}></ANİMATE>

      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square style={{marginTop:60}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
             
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              autoFocus
              onChange={onchangefunct}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={values.password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onchangefunct}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onsubmit}
            >
              Sign In
            </Button>
           
            <Box mt={5}>
              <Copyright />

<div style={{width:"100%",justifyContent:"center",display:"flex",marginTop:50}}>
            <Link to="/Signup">
              <Button variant="contained" color="secondary"  size="large" >
          
      
Don't have an account? Sign Up
        
        
        </Button>
        </Link>
        </div>
            </Box>
          </form>
        </div>
      </Grid>
    
    {props.error?(



<Modals errorbody={props.error}/>

    ):(null)}
    
    </Grid>
  );
}


const propsdispatch=(dispatch)=>(

{
  adduseraction1:(user) =>dispatch(adduseraction(user)),
  
erroraction: (error) =>dispatch(erroraction(error))

}

)

const statetoprops=(state)=>({

error: state.error.error

})



export default connect(statetoprops,propsdispatch)(SignInSide)