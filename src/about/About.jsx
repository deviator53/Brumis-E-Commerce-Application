import React, {useState, useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Banner from '../img/banner.jpg'
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    aboutContainer:{
        marginTop: '80px',
        width: '100%'
    },
    aboutContent:{
        width: '80%',
        margin: '20px auto'
    },
    about__image:{
        height:'350px'
    },
    aboutImg:{
        width: '100%',
        height: '100%'
    }


}));



const About = () => {
    const classes = useStyles();
    return (
        <>
        <Navbar/>
        <div className={classes.aboutContainer}>
            <div className={classes.about__image}>
                <img className={classes.aboutImg} src={Banner} />
            </div>
            <div>
            <Typography className={classes.aboutContent} variant="h6">
                <strong>BRUMIS</strong> is an e-commerce platform with the goal to bring the whole world to a particular platform
                where seamless trade and transactions occurs, We are based in the heart of Nigeria (Abuja), the city that never sleeps. 
                We were founded by David Bradford and co-founded by Ogheneruno on 1st November,2021.
            </Typography>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default About
