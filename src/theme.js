import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette:{
        type: 'light',
        primary: {
            main: '#61dafb',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        secondary: {
            main: '#b5ecfb',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        error:{
            main: red.A400,
        },
        background:{
            default: '#282c34',
        },
    },
    overrides:{
        MuiPaper:{
            root:{
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#fff',
            },
            Homelogo:{
                width: '200px',
                height: '200px',
            },
        },
        MuiButton: {
            root: {
                margin: '5px',
            },
        },
    },
    
});

export default theme;