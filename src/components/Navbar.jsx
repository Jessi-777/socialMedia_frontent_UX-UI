import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
// import { borderRadius } from "@mui/system";
import { InputBase, Avatar } from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';
import React, { useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



const StyleBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Searchbox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: " 0 10px",
  width: "40%"
}));


const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UsersBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyleBar>
        <Typography variant="h6" sx={{ display: { xs:"none", sm:"block" }}}>
          Social Media App
        </Typography>
        <PublicIcon sx={{ display: { xs:"block", sm:"none" }}}/>
        <Searchbox>
          <InputBase placeholder="search..." />
        </Searchbox>

        <Icons>
        <Badge badgeContent={4} color="success">
          <Mail />
        </Badge>

        <Badge badgeContent={2} color="secondary">
          <Notifications />
        </Badge>

        <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692215/nora-hutton-tCJ44OIqceU-unsplash_fhamra.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <UsersBox onClick={(e) => setOpen(true)}>
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://res.cloudinary.com/ninjagrvl/image/upload/v1672692215/nora-hutton-tCJ44OIqceU-unsplash_fhamra.jpg"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">Laura</Typography>
          </UsersBox>

      </StyleBar>
    
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
};

export default Navbar;