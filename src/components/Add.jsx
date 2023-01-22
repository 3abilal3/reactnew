import React, { useState } from 'react'
import { Box, Fab, Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { DateRange, EmojiEmotions, Image } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <Tooltip onClick={(e) => setOpen(true)}
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    left: { xs: "calc(50%-25px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

            </Tooltip>
            <StyledModal

                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box bgcolor= {"background.default"} color={"text.primary" } sx={{ width: "400px", height: 350, borderRadius: "15px", alignItem: "center", p: 2 }}>
                    <Typography variant="h6" sx={{ color: "grey", textAlign: "center", mt: 2 }}>
                        Create post
                    </Typography>
                    <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                        <Avatar alt="Bilal" src=".\a.jpeg" sx={{ ml: 1, mt: 1 }} />

                        <Typography sx={{ ml: 1, mt: 1 }} variant="h6" fontWeight={100}>
                            Ahmed Bilal
                        </Typography>
                    </Stack>
                    <TextField
                        id="standard-multiline-static"
                        placeholder="What's in your mind?"

                        multiline
                        rows={4}

                        variant="standard"
                        sx={{ mt: 2, width: "100%", textAlign: "center" }}
                    />

                    <Stack direction="row" sx={{ mt: 2 }} gap={1}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraFrontIcon color="error" />
                        <PersonAddIcon color="success" />
                    </Stack>

                    <ButtonGroup sx={{ width: "100%", mt: 2 }} variant="contained" aria-label="outlined primary button group">
                        <Button sx={{ width: "87%" }}>post</Button>
                        <Button><DateRange /></Button>

                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Box>

    );
}


export default Add