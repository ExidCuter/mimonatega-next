import '../styles/globals.css';

import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";


export default function App({Component, pageProps}) {
    const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');
    const darkTheme = createTheme({
        palette: {
            mode: isDarkModeEnabled ? 'dark' : 'light',
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
