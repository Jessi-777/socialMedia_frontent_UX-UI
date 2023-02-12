import { Fab, Tooltip, Modal, Box, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material"
import {Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material';
import React, { useState } from 'react';

const MyModal = styled(Modal)({
alignItems:"center",
display:"flex",
justifyContent:"center"
})

const UserBox = styled(Box)({
  alignItems:"center",
  marginBottom:"3",
  display:"flex",
  gap:"9px"
  })

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip 
      onClick={(e) => setOpen(true)}
      title="Delete" 
      sx={{
        position:"fixed", 
        bottom:20, 
        left:{xs:"calc(50%, -24px)", 
        md:30}}}>

      <Fab color="primary" aria-label="add">
        <AddIcon/>
      </Fab>
    </Tooltip>

    <MyModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={6}>
          <Typography color="skyblue" textAlign="center" variant="h6">
            Create My Post
          </Typography>
        
          <UserBox>
            <Avatar
              src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692215/nora-hutton-tCJ44OIqceU-unsplash_fhamra.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={400} variant="span">
              Chici
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on my mind?"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="success" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="primary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup> 
        </Box>
      </MyModal>
   
    </>
  )
}

export default Add