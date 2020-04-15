import React from "react"
import Loader from 'react-loader-spinner'


import { ThemeProvider } from '@zendeskgarden/react-theming';


 export default class Spinner extends React.Component {
  //other logic
    render() {
     return(
         <div className="spinner">
             <div className="spinnerinner">
        <ThemeProvider >
        <Loader
         type="MutatingDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
      </ThemeProvider>
      </div>
      <style jsx>{`
     
     .spinner{
      position: fixed;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      display: flex;
      align-items: center;
      overflow: auto;
      
  }
  .spinnerinner{
      margin: auto;
      max-height: 100%;
  }






      `}</style>
      
      
      </div>

     
     );
    }
 }