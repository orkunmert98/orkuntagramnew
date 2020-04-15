import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Zoom } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "../../assets/cat.jpg"
const useStyles = makeStyles({
  root: {
    
  },
});

export default function ImgMediaCard({errorbody,handleClose}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
           
      >
       <Zoom in={true} timeout={2000}>

       
        <CardMedia
   style={{margin:"%5"}}
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />

        </Zoom>
        <CardContent>
         
          <Typography variant="body2" color="textSecondary" component="p"
          style={{fontSize:17,fontWeight:500,color:"#f50057",textAlign:"center"}}
          >
           {

Object.values(errorbody).map(errors=><p>{errors}</p>)

           }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:"center"}}>
      <Button variant="contained" color="primary" onClick={handleClose}>
  TAMAM
</Button>
     
      </CardActions>
    </Card>
  );
}