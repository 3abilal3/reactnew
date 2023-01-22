import Feed from "./components/Feed";
import React,{useState} from "react";
import RightBar from "./components/RightBar";
import Sidebar from './components/Sidebar';
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import { createTheme,Box, ThemeProvider } from "@mui/material";
import Add from "./components/Add";


function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
    })
  return (
    <ThemeProvider theme={darkTheme}>
      
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={{ xs: "row", sm: "row", md: "column", lg: "row" }}
        spacing={{ xs: 2, sm: 5, md: 10, lg: 15, xlg: 20 }}  p={5} >

        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <RightBar />
        <Add/>
      </Stack>

    </Box>
    </ThemeProvider>
  );
}

export default App;
