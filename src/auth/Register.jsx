import React, {useRef} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

const Register = () => {
  const classes = useStyles();
  const username = useRef();
    const email = useRef();
    const password = useRef();
    const history = useHistory();

    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!username.current.value) return toast.error('Username is required');
      if(!email.current.value) return toast.error('Email address is required');
      if(!password.current.value) return toast.error('Password is required');

      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }

      try{
        let res = await axios.post('http://localhost:7000/api/v1/auth/register', user);
        if(res.data.success) toast.success(res.data.msg);
        history.push('/verify-user');
        console.log(res.data);
      }catch(err){
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }

    }
    return (
        <>
        <div className="register">
          <p className="register__head">Welcome to <span className="register__highlight">BRUMIS</span></p>
           <h3>Create an Account</h3>
           <div className="holder">
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <TextField 
                      id="outlined-basic" 
                      type="text"
                      label="Username" 
                      variant="outlined" 
                      inputRef={username}
                      
                    />

                    <TextField id="outlined-basic" type="email" label="Email Address" variant="outlined" inputRef={email}/>
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" inputRef={password}/>
                 

                    <p> Already Have an Account?<Link to="/login">Login</Link></p>

                    <Button type="submit" className={classes.btn1} variant="contained">Create</Button>

                </form>
           </div>
        </div>
        </>
    )
}

export default Register;
