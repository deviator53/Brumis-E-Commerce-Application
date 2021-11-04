import React, {useRef} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './register.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '85%',
    },
  },
  btn1:{
      backgroundColor: '#0e233f',
      color: '#fff',
      padding: '10px',
      fontWeight: 'bold',
      width: '85%',
      // maxWidth: '30%',
      textAlign: 'center',
      '&:hover':{
          backgroundColor: 'black',
          color: 'white'
      }
  }
}));

const ForgotPassword = () => {
  const classes = useStyles();

    return (
        <>
        <div className="register">
           <h3>Forgot Password</h3>
           <div className="holder">
                <form className={classes.root} noValidate autoComplete="off">
                   
                    <TextField id="outlined-basic" type="email" label="Enter Email Address" variant="outlined"/>
                   
                    <Button type="submit" className={classes.btn1} variant="contained">Submit</Button>

                </form>
           </div>
        </div>
        </>
    )
}

export default ForgotPassword;
