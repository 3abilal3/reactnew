import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { Groups, Home, ModeNight, Pages, Person, Settings, Store } from '@mui/icons-material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home color="primary" />
              </ListItemIcon>
              <ListItemText primary="homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <Pages color="primary" />
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#group">
              <ListItemIcon>
                <Groups color="primary" />
              </ListItemIcon>
              <ListItemText primary="group" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#store">
              <ListItemIcon>
                <Store color="primary" />
              </ListItemIcon>
              <ListItemText primary="store" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#friend">
              <ListItemIcon>
                <PersonAddIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="friend" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <Settings color="primary" />
              </ListItemIcon>
              <ListItemText primary="setting" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#person">
              <ListItemIcon>
                <Person color="primary" />
              </ListItemIcon>
              <ListItemText primary="person" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#person">
              <ModeNight color="primary" />
              <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar