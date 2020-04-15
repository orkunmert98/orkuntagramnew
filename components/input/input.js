import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({onchange}) {
  const classes = useStyles();
 

  return (
    
        <div className="textfield" style={{"width":"80%",margin:"0 10%",}}>
        <TextField
        fullWidth={true}
    rows="4"
          id="filled-textarea"
          label="LET POST SOMETHING!"
          placeholder="Placeholder"
          multiline
          variant="filled"
          onChange={onchange}
        />



       </div>
   
  );
}