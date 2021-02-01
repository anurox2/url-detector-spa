import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import logo from "../images/avatar.jpg"
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    homeLogo:{
        widht: '15em',
        height: '12em',
    },
    Home:{
        textAlign: 'center',
    },
    invisibleSeparator:{
        color: 'white',
    }
}))


function Home(){
    // const [newUrl, evalURL] = useState("");

    const classes = useStyles();

    // const evalURL = useCallback((event) => {
    //     event.preventDefault();
    //     axios.post(`https://my-url-checker.com/`, {url})
    //     },
    //     [input],
    // )

    return (
        <Container maxWidth="sm" className={classes.Home}>
            <Paper>
                <img src={logo} className={classes.homeLogo} alt="logo" />
                <hr className={classes.invisibleSeparator} />
                <Typography variant="h4" component="h1" gutterBottom>
                    Malicious URL checker
                </Typography>

                <form noValidate autoComplete='off'>
                    {/* <TextField id='filled' label='URL goes here.....' variant="filled" value={newURL} /> */}
                    <TextField id='filled' label='URL goes here.....' variant="filled"/>

                    {/* <Button variant="contained" color="primary" type='submit' onClick={evalURL}> */}
                    <Button variant="contained" color="primary" type='submit'>
                        Check this URL
                    </Button>
                </form>    
            </Paper>
        </Container>
    );
}

export default Home;