import React, {useState} from 'react';
import {makeStyles, Typography, Button} from '@material-ui/core';
import './counter.css';
import { display } from '@mui/system';

const useStyles = makeStyles(theme =>({
    counterContainer:{
        display: 'flex',
        marginTop: '30px'
    },
    counterBtn:{
        width: '15%',
        // padding: '8px',
        border: '1px solid black',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        marginLeft: '50px',
        [theme.breakpoints.down("sm")]:{
            width: '25%'
        }
    },
    priceText:{
        fontSize: '24px',
        fontWeight: 'bold'
    },
    substract:{
        fontSize: '24px',
        marginLeft: '10px',
        marginRight: '10px',
        cursor: 'pointer'
    },
    add:{
        fontSize: '24px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    cartBtn:{
        fontSize: '10px',
        backgroundColor: '#001e40',
        color: 'white',
        textTransform: 'captalize',
        borderRadius: '20px',
        marginLeft: '30px',
        '&:hover':{
            backgroundColor: '#fff',
            color: '#001e40',
            border: '2px solid #001e40',
            fontWeight: 'bold'
        }
    }
}))

const Counter = () => {
    const classes = useStyles();
    const [count, setCount] = useState(1);
    const [number, setNumber] = useState(29.99);

    const handleIncrement = () => {
        setCount( (add) => add + 1);

    };

    const handleDecrement = () =>{
        setCount((sub) => sub - 1);
    };
    return (
        <>
        <div className={classes.counterContainer}>
            <Typography className={classes.priceText}>${number ? (number * count): number}</Typography>
            <div className={classes.counterBtn}>
                <span className={classes.substract} onClick={handleDecrement}>-</span>
                <span>{count}</span>
                <span className={classes.add} onClick={handleIncrement}>+</span> 
            </div>
            <Button className={classes.cartBtn}>
                Add to Cart
            </Button>
        </div>
        </>
    )
}

export default Counter
