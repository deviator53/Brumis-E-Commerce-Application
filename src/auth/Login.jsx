import React, {useContext, useRef} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Select } from '@material-ui/core';
import toast from 'react-hot-toast';
import './login.css';
import {AuthContext} from '../context/AuthContext';
import {loginCall} from '../apiCalls';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


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


const Login = () => {
  const classes = useStyles();
  const userInput = useRef();
  const password = useRef();
  const history = useHistory();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!userInput.current.value) return toast.error('Username is required');
    if(!password.current.value) return toast.error('Password is required');


    const user = {
      userInput: userInput.current.value,
      password: password.current.value,
    }

    loginCall(user, dispatch, history.push('/'));

  }

    return (
        <>
        <div className="login">
        <h3>User Login</h3>
           <div className="holder">
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <TextField 
                      id="outlined-basic" 
                      type="text"
                      label="Username or Email" 
                      variant="outlined" 
                      inputRef={userInput}
                    />

                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" inputRef={password}/>

                    <p><a href="">Forgot Password?</a></p>
                   
                    <Button type="submit" className={classes.btn1} variant="contained">Login</Button>

                    <p>Don't Have An Account?<Link to="/register">Register </Link></p>


                </form>
           </div>
        </div>
        </>
    )
}

export default Login;
