import React, { useState }  from 'react';
import EcoIcon from '@material-ui/icons/Eco';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import TimerIcon from '@material-ui/icons/Timer';
import CachedIcon from '@material-ui/icons/Cached';
import './option.css';
import {
    Toolbar, 
    IconButton, 
    Typography, 
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    optionContainer:{
      display: 'flex',
      marginTop: '35px',
      alignItems: 'center',
       [theme.breakpoints.down("xs")]:{
            flexWrap: 'wrap'

        }
    },

    optionBtn:{
        display: 'flex',
        alignItems: 'center',
        marginRight: '25px'

    },
    optionButton:{
        padding: '10px',
        backgroundColor: '#fee8eb',
        borderRadius: '50%',
        marginRight: '10px'
    },
    optionText:{
        // marginRight: '40px',
        fontSize: '13px',
        color: '#6d7480',
        fontWeight: 'bold'
    }
}))

const Option = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.optionContainer}>
            <div className={classes.optionBtn}>
              <LocalShippingIcon className={classes.optionButton}/>
              <Typography className={classes.optionText}>Free Shipping</Typography>
            </div>


            <div className={classes.optionBtn}>
              <TimerIcon className={classes.optionButton}/>
              <Typography className={classes.optionText}>24x7 Service</Typography>
            </div>

            <div className={classes.optionBtn}>
               <CachedIcon className={classes.optionButton}/>
               <Typography className={classes.optionText}>Free Return</Typography>

            </div>
        </div>
        </>
    )
}

export default Option
