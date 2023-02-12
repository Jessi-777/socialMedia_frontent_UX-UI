import React from 'react'
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Card, CardHeader, IconButton, Avatar, CardMedia, Typography, CardContent, CardActions } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';



const Post = () => {
  return (
    <Card sx={{ margin:3 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "primary" }} aria-label="recipe">
          C
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Take a break!"
      subheader="Feb 1, 2023"
    />
    <CardMedia
      component="img"
      height="24%"
      image="https://res.cloudinary.com/ninjagrvl/image/upload/v1672724862/chen-mizrach-jL6PTWI7h18-unsplash_nowdgx.jpg"
      alt="My time"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Work hard, Relax hard!
      </Typography>
    </CardContent>

    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />

    
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     </CardActions> 
  </Card>
  )
}

export default Post