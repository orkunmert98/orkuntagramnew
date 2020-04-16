import React, { useRef, useState, useEffect, useCallback } from 'react'
import Link from "next/link"
import { useTransition, animated } from 'react-spring'

import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Anime from "../animation2/index"


function Banana() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: 'white' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80, margin: 0 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#FFB400' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: "#00AEE0", margin: 0 }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: 'white', margin: 0 },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Beğem', 'Yorum Yap']), 2000))
    ref.current.push(setTimeout(() => set(['Share', 'Like']), 5000))
    ref.current.push(setTimeout(() => set(['Get', 'Started']), 8000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
    <Grid container spacing={2}

      justify="center"
      alignItems="center"
    >

      <Grid item xs={12}
        style={{ marginLeft: 20 }}

      >

        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight, justifyContent: "center" }}>{item}</animated.div>
          </animated.div>
        ))}


      </Grid>





      <Grid container spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item lg={3} md={6} sm={4} xs={4}
style={{boxSizing:"border-box"}}
        >

<div style={{paddingLeft:20 ,boxSizing:"border-box",margin:20 ,width:200,flexDirection:"column",display:"flex"} }>

<div style={{marginBottom:20}}>
<Link href="/login">
<Button variant="contained" color="secondary"  size="large" >
          <h1> GET STARTED</h1>
           
          
          
          </Button>

          </Link>
       
          </div>
<ExpandMoreIcon color="secondary" style={{fontSize:"9rem", margin:0}} className={"forhover"} ></ExpandMoreIcon>

</div>
         
        </Grid>

        <Grid item lg={9} md={6} sm={8} xs={8}
 
        >
          <Anime ></Anime>
        </Grid>


      </Grid>







    </Grid>




</div>

  )
}

export default Banana