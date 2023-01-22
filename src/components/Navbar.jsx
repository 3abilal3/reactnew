import { AppBar, Avatar, Box, Icon, IconButton, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})


const Searched = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar  position="fixed">
                <StyledToolbar>
                    <Typography
                        variant='h5'
                        sx={{
                            display:
                            {
                                xs: "none",
                                sm: "block"
                            }
                        }
                        }
                    >
                        Bilal DEV
                    </Typography>

                    <ArrowForwardIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <Searched>
                        <InputBase placeholder="search..."  />

                    </Searched>
                    <Icons>
                        <Badge badgeContent={5} color="error" >
                            <NotificationsActiveIcon />
                        </Badge>
                        <Badge badgeContent={3} color="error" >
                            <MailIcon />
                        </Badge>
                        <Badge>
                           <Avatar onClick={(e)=>setOpen(true)} alt="Bilal" src=".\a.jpeg" />
                   </Badge>
                    </Icons>
                    <UserBox onClick={(e)=>setOpen(true)} >
                        <Badge >
                            <Avatar alt="Bilal" src=".\a.jpeg" />
                            <Typography>
                                Bilal
                            </Typography>
                        </Badge>
                    </UserBox>

                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby='demo-positioned-button'
                    open={false}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}

                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </AppBar>
        </Box>
    )
}

export default Navbar