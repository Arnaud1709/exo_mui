import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        type: "light",
    }
});

const themeDark = createTheme({
    palette: {
        type: "dark",
    }
})

const Theme = (props) => {
    const {children, darkMode} = props;
    const defaultTheme = darkMode ? themeDark : theme;
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const withTheme = (Component) => {
    return (props) => {
        const [darkMode, setDarkMode] = useState(false);
        return(
            <Theme darkMode={darkMode}>
                <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode}/>
            </Theme>
        );
    };
};