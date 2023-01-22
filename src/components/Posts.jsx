import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Posts = () => {
  return (
    <Card sx={{ maxWidth: 345 ,margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ }} aria-label="recipe" src="\a.jpeg">
          
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="AHMED BILAL"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image="\a.jpeg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
    hI !!!!!!!!!! I am Ahmed Bilal a passionate and 
enthusiastic Web developer working on MERN stack. For front end i use material ui as a frame work.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
      
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
   
    </CardActions>
    
  </Card>
  )
}

export default Posts