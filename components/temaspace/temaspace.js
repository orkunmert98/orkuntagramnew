import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import LOGO from "../../assets/flame.png"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Phone from "../../assets/phone.png.png"
import TEXT from "../bananas/index"
import "./styles.css"
// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class Tema extends React.Component {
    render() {
      return (
          <div style={{position:"static",height:"100%",width:"100%"} }>
        <Parallax ref={ref => (this.parallax = ref)} pages={3} >
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
  
          <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
  
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={url('earth')} style={{ width: '50%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />
  
          <ParallaxLayer
           offset={0} speed={-0.1}
           className={"naber"}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundPosition: 'center', backgroundColor:"rgb(16, 16, 16)" ,height:"auto",paddingTop:50 
}}>
           
            <Grid container spacing={3}
              justify="center"
              alignItems="center"
style={{margin:-30}}

            >
        <Grid item lg={6}>
       
        <img src={LOGO} style={{width:"100%"}} />
</Grid>
<Grid item lg={6} stlye={{width:"100%" }}>
<TEXT ></TEXT>
</Grid>
</Grid>
          
            
            
            
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:"auto"}}>






             <img src={Phone} 
           
            style={{ position:"absolute" }}  className="phone">




            </img>
           
            
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '50%' }} />
          </ParallaxLayer>
        </Parallax>
      
        </div>
      )
    }
  }
  
 
  export default Tema