import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';

import { Container, makeStyles, Box ,Typography } from '@material-ui/core';

import './rate.css';

const useStyles = makeStyles(theme => ({
  rateText:{
    marginLeft: theme.spacing(1),
    fontSize: '14px',
    alignSelf: 'center'
  }
}))

export default function Rate() {

    const [value, setValue] = useState(2);

    const classes = useStyles();
    return (
       <div>
         <Box display="flex" component="fieldset" mt={2} borderColor="transparent">
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
            <span className={classes.rateText}>29 Reviews</span>
         </Box>
       </div>
        
    )
}

