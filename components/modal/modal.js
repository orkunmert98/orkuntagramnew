import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Carderror from "../errorcard/errorcard"
import {connect} from  "react-redux"
import {erroraction} from "../../redux/error.reducer/error.reducer"

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    
    position: 'absolute',
    width:500,
    
  },
}));

function SimpleModal(props) {
 
 
 
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  
  
  const handleClose = () => {
    
    props.adderror(null)
    
    setOpen(false);



};

  
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >


<div
          style={modalStyle} className={classes.paper}
          >
          <Carderror
          handleClose={handleClose}
          errorbody={props.errorbody}
        style={{width:"100%"}}
        
        ></Carderror>


          </div>



        
       
      </Modal>
    </div>
  );
}


const propstostate=(dispatch)=>(
{
adderror:(error)=>dispatch(erroraction(error))
}
)


export default connect(null,propstostate)(SimpleModal)