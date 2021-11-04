import React, {useContext, useRef} from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Select } from '@material-ui/core';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

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
            color: '#e233f'
        }
    }
  }));


const VerifyUser = () => {

    const classes = useStyles();
    const secretToken = useRef();
    const history = useHistory();


    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!secretToken.current.value) return toast.error('Token is required');


      const user = {
        secretToken: secretToken.current.value,
      }
      try{
        let res = await axios.post('http://localhost:7000/api/v1/auth/confirm-user', user);
        if(res.data.success) toast.success(res.data.msg);
        history.push('/login');
        console.log(res);
      }catch(err){
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }

    }

    

    return (
        <div>
            <div className="register">
            <h3>Verify User Account</h3>
                <div className="holder">
                        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                            <TextField 
                            id="outlined-basic" 
                            type="text"
                            label="Enter Secret Token" 
                            variant="outlined" 
                            inputRef={secretToken}
                            />

                            <Button type="submit" className={classes.btn1} variant="contained">Verify</Button>

                        </form>
                </div>
            </div>
        </div>
    );
}

export default VerifyUser;
