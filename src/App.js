import React, {useState} from 'react';
import { createTheme } from '@mui/material/styles';
import Grid from './theme/Grid';
import EditorMenu from './theme/Editor';

export default function App(){
    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
        mode: darkMode ? "dark" : "light",
        }
    });

    return(
        <>
          <Grid theme={theme} setDarkMode={setDarkMode} darkMode={darkMode}/>
          <EditorMenu theme={theme} setDarkMode={setDarkMode} darkMode={darkMode}/>
        </>
    )
        
}

