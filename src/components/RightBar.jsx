import React from 'react'
import { AvatarGroup,ListItem,ListItemText,List,Avatar, Box, Typography, ImageListItem, ImageList, ListItemAvatar, Divider } from '@mui/material';

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block",mt:"10px"  }}}><Box position="fixed" m={5}>
<Typography variant='h6' fontWeight={100}>
  Online Friends
</Typography>
<AvatarGroup total={5}>
      <Avatar alt="ab" src="\b.jpg" />
      <Avatar alt="bk " src="\a.jpeg" />
      <Avatar alt="gd" src="\b.jpg" />
      <Avatar alt="gm" src="\a.jpeg" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
  Latest Posts
</Typography>
<ImageList  cols={3} rowHeight={100}>
      
        <ImageListItem >
          <img
            src= 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
            alt="ab"
          
          />
        </ImageListItem>

        
        <ImageListItem >
          <img
            src= 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
            alt="ab"
          
          />
        </ImageListItem>

        
        <ImageListItem >
          <img
            src= 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
            alt="ab"
          
          />
        </ImageListItem>
      
    </ImageList>
<Typography variant='h6' fontWeight={100} mt={1}>
  Latest conservations
</Typography>
<List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="\a.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="\b.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="\a.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Box></Box>
  )
}

export default RightBar