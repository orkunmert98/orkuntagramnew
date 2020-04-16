import React from "react"
import {Provider} from "react-redux"
import App,{Container} from "next/app"
import withRedux from "next-redux-wrapper"
import {createHttpLink} from "apollo-link-http"
import {compose} from "redux"
import decode from "jwt-decode"
import Router from 'next/router'
import Spinner from "../components/spinner/spinner"
import Head from 'next/head'
import NProgress from 'nprogress'
import {setContext} from "apollo-link-context"
import nookies from 'nookies'
import "../components/bananas/styles.css"
import {makeStore} from "../redux/root.reducer"



import "../components/animation2/styles.css"
import Header from "../components/header/header"
import "../global.css"
import { ThemeProvider } from '@material-ui/core/styles';

import withApollo from "next-with-apollo"
import {ApolloProvider} from "@apollo/react-hooks"

import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from "apollo-client"




const myApp =( {Component,pageProps,store,apollo})=>{
const [loading,setloading]=React.useState(false)
  Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    setloading(true)
  })
  Router.events.on('routeChangeComplete', () =>  setloading(false))
  Router.events.on('routeChangeError', () =>  setloading(false))
  

  

        
             return(

<ApolloProvider client={apollo}>

<Provider store={store}>

{loading?(

<Container>
<Head>
        <title>MERT's App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, noindex, nofollow, follow"/>
        <meta name="description" content="this app is about social media"></meta>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
</Head>
<Header></Header>
<Spinner></Spinner></Container>):(
  <Container>
<Header></Header>

<Component {...pageProps} ></Component>
</Container>



)}


</Provider>
</ApolloProvider>

             )
        }
    





 




const httplink= createHttpLink({
    uri:"https://merngorkun123.herokuapp.com/"
  
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

