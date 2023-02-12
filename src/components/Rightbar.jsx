import React from 'react'
import { AvatarGroup, Box, Typography, Avatar, ImageList, ImageListItem } from '@mui/material';
// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



const Rightbar = () => {
  return (
    <Box 
      flex={2} 
      sx={{display:{xs: "none", sm: "block", }}}  
      p={2}>
      <Box position="fixed" width={300}>
        <Typography fontWeight={300} variant="h6">Friends Online</Typography>

    <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692246/art-hauntington-jzY0KRJopEI-unsplash_noqiec.jpg" />
      <Avatar alt="Travis Howard" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692241/joseph-gonzalez-iFgRcqHznqg-unsplash_ubqxon.jpg" />
      <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692215/nora-hutton-tCJ44OIqceU-unsplash_fhamra.jpg" />
      <Avatar alt="Agnes Walker" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302911/cld-sample.jpg" />
      {/* <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302912/cld-sample-3.jpg" />
      <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661412557/login_a9nx06.jpg" />
      <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672724862/chen-mizrach-jL6PTWI7h18-unsplash_nowdgx.jpg" /> */}
      <Avatar alt="Trevor Henderson" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302912/cld-sample-3.jpg" />
    </AvatarGroup>
    <Typography variant="h6" mt={2} mb={2} fontWeight={100}>
      Latest Photos
    </Typography>
    <ImageList cols={3} rowHeight={100} gap={6}>
    <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672724862/chen-mizrach-jL6PTWI7h18-unsplash_nowdgx.jpg"
        alt="" />
    </ImageListItem>
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661412355/products_s7wfnz.jpg"
        alt="" />
      </ImageListItem> */}
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661411412/botanical_pc734c.jpg"
        alt="" />
      </ImageListItem> */}
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302912/cld-sample-3.jpg"
        alt="" />
      </ImageListItem> */}
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302911/cld-sample-2.jpg"
        alt="" />
      </ImageListItem> */}
      <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302911/cld-sample.jpg"
        alt="" />
      </ImageListItem>
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302883/sample.jpg"
        alt="" />
      </ImageListItem> */}
      <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302911/cld-sample-2.jpg"
        alt="" />
      </ImageListItem>
    
      {/* <ImageListItem>
      <img 
        src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661304215/fruit_cokfzg.jpg"
        alt="" />
      </ImageListItem> */}
    </ImageList>
    <Typography variant="h6" mt={2} fontWeight={100}>
      Latest Posts
    </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1661302912/cld-sample-3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Want to build a social media app?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Harry
              </Typography>
              {" — my friend is a Software Engineer $he'll build one for you."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tim Buttona" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692241/joseph-gonzalez-iFgRcqHznqg-unsplash_ubqxon.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Friends let's have dinner?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Jenny, Fulana, Georgie
              </Typography>
              {" — brunch or dinner?…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672724862/chen-mizrach-jL6PTWI7h18-unsplash_nowdgx.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sandy"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Chici
              </Typography>
              {' — Lets get deep? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box>
  </Box>
  )
}

export default Rightbar;