import React from 'react';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles
} from '@material-ui/core';
import './testimonial.css';
import Testimonial1 from '../img/testimonial1.png';
import Testimonial2 from '../img/testimonial2.png';
import Testimonial3 from '../img/testimonial3.png';
import Testimonial4 from '../img/testimonial4.png';
import Testimonial5 from '../img/testimonial5.png';
import Testimonial6 from '../img/testimonial6.png'


const useStyles = makeStyles(theme => ({
    testimonialContainer:{
        backgroundColor: '#fc8d9e',
        position: 'relative',
        width: '100%',
        padding: '60px 0px'
    },
    testHead:{
        textAlign: 'center',
        color: '#262e41',
        fontWeight: 'bold'
    },
    testBody:{
        width: '40%',
        margin: '30px auto',
        backgroundColor: 'white',
        padding: '40px 20px',
        [theme.breakpoints.down("xs")]:{
            width: '60%'
            
        }
    },
    testText:{
        lineHeight: '2.0'
    }
}));

const Testimonial = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.testimonialContainer}>
            <Typography className={classes.testHead} variant="h4">Trusted by Agencies<br/>& Store Owners</Typography>
            <div className={classes.testBody}>
                <p className={classes.testText}>Brumis cosmetics really delivered on their promise, I am really impressed with their response 
                time and I got my product in one peace, I will definitely recommend them to people close to me. They are just awesome. 
                </p>
            </div>
            <img className="testImage testImage1" src={Testimonial1} />
            <img className="testImagex testImage2" src={Testimonial6} />
            <img className="testImage testImage3" src={Testimonial3} />
            <img className="testImagex testImage4" src={Testimonial4} />
            <img className="testImageL testImage5" src={Testimonial5} />
            <img className="testImageL testImage6" src={Testimonial2} />


        </div>
        </>
    )
}

export default Testimonial;
