import React, { Component } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';

export default function Error({errorheader,errorbody}){
    
        return (
            
                <Alert severity="error" style={{width:"80%" ,justifyContent:"center" ,margin:"5%"}}>

<div style={{margin:20}}>
        <AlertTitle>{errorheader}</AlertTitle>



{errorbody}

</div>

<style jsx>{`
      .MuiAlert-root{
        align-items: center !important;
    }
      `}</style>

</Alert>

            
        )
    }



