import React,{useState} from "react"
import Input from "../input/input"
import Alert from "../alert/alert"
import {POST_MUTATİON} from "../../QueryAndMutations"
import {useMutation} from "@apollo/react-hooks"
import { Button } from "@material-ui/core"
import {connect} from "react-redux"
import {erroraction} from "../../redux/error.reducer/error.reducer"
const Post=({startquery,adderror,error})=>{

    const [values, setvalues] = useState({ postbody: "" })
    const [sharepost] = useMutation(POST_MUTATİON,
        {
        update(_, result) {
              startquery()

                console.log("post paylaşıldıj")
            },
            onError(Err){
try {
    adderror(Err.graphQLErrors[0].message)
    setTimeout(()=>adderror(null),4000)
     
} catch (error) {
    console.log(error)
}



            }
          

        },
        
    )


    const onchange = (event) => {
        setvalues({ postbody: event.target.value })


    }

    const Share = (event) => {
        event.preventDefault()
        console.log("paylaşılıyor butona basıldı")
        
        sharepost({ variables: values })

    }




return(
    
<div style={{width:"100%" , justifyContent:"center", alignItems:"center" , display:"flex", flexDirection:"column"}}>
    
    <Input onchange={onchange}></Input>

{error?(

<Alert error={error}></Alert>

)
:(null)


}

                                <Button onClick={(event) => { Share(event) }}
                                    variant="contained" color="secondary" style={{ marginTop: 20,}} size="small">

                                    Paylaş

        </Button>



        </div>
)


}

const propstostate=(dispatch)=>({

    adderror: (error)=>dispatch(erroraction(error))
})
const statetoprops=(state)=>({

error:state.error.error

})
export default connect(statetoprops,propstostate)(Post)