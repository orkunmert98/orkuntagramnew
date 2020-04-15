import React from "react"
import {Provider} from "react-redux"
import App,{Container} from "next/app"
import withRedux from "next-redux-wrapper"
import {createHttpLink} from "apollo-link-http"
import {compose} from "redux"
import decode from "jwt-decode"

import {setContext} from "apollo-link-context"
import nookies from 'nookies'
import "../components/bananas/styles.css"
import {makeStore} from "../redux/root.reducer"

import "../components/animation2/styles.css"
import Header from "../components/header/header"
import "../global.css"
import { ThemeProvider } from '@material-ui/core/styles';
import Router from 'next/router'
import withApollo from "next-with-apollo"
import {ApolloProvider} from "@apollo/react-hooks"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from "apollo-client"



const myApp =( {Component,pageProps,store,apollo})=>{

 

        
             return(
<ApolloProvider client={apollo}>

<Provider store={store}>

<Header></Header>

<Component {...pageProps} ></Component>


</Provider>
</ApolloProvider>

             )
        }
    





 




const httplink= createHttpLink({
    uri:"http://localhost:5000"
  
  })

 


myApp.getInitialProps= async ({Component,ctx})=>{
const pageProps=Component.getInitialProps? await Component.getInitialProps(ctx):{} 

const nokie=nookies.get(ctx).auth


if(nokie){
  
if(!process.browser){  ctx.store.dispatch({type:"adduseraction",payload: JSON.parse(nokie).user })}  







}

return{pageProps}














}
const authlink= setContext(()=>{
if(process.env.RUNTIME=== 'browser'){ const token=localStorage.getItem("jwtToken")
console.log("ggg")
return{
headers:{
  Authorization: token ? `Bearer ${token}` : ''




}}

  

}
else{

  return{
    headers:{
      Authorization:''
    
    
    
    
    }}

}
   
    
    })


  












export default withApollo(({ initialState }) => {
  return new ApolloClient({
    ssrMode:true,
    link: authlink.concat(httplink),
      cache: new InMemoryCache().restore(initialState || {})
      })
  
})(withRedux(makeStore)(myApp));

