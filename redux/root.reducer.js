import {combineReducers} from "redux"

import {Errorreducer} from "./error.reducer/error.reducer"
import logger from "redux-logger"
import {createStore,applyMiddleware} from "redux"

import {Userreducer} from "./user/user.reducer"
import {Postreducer} from "./post.reducer/post.reducer"


export const rootReducers=combineReducers(

{
    error:Errorreducer,
user:Userreducer,
posts:Postreducer
}

)


const middlewares=[]
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

 




export const makeStore =  (initialState, {isServer, req, debug, storeKey}) => {

 

      // we need it only on client side
    




      
      const store = createStore(rootReducers, initialState,applyMiddleware(logger));
     console.log(Userreducer)


      // Nasty hack
   

      return store;
  
};










