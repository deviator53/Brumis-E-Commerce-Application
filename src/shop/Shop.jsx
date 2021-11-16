import React, {useState, useEffect} from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useHistory} from 'react-router-dom';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles
} from '@material-ui/core';
import cosmetic2 from '../img/cosmetic2.png';
import cosmetic4 from '../img/cosmetic4.jpg';
import cosmetic5 from '../img/cosmetic5.jpg';
import cosmetic6 from '../img/cosmetic6.jpg';
import cosmetic15 from '../img/cosmetic15.jpg';
import cosmetic19 from '../img/cosmetic19.jpg';
import cosmetic20 from '../img/cosmetic20.jpg';
import cosmetic21 from '../img/cosmetic21.jpg';
import cosmetic22 from '../img/cosmetic22.jpg';
import cosmetic23 from '../img/cosmetic23.jpg';
import cosmetic24 from '../img/cosmetic24.jpg';
import cosmetic25 from '../img/cosmetic25.jpg';


const useStyles = makeStyles(theme => ({
    shop__container:{
        width: '100%'
    },
    shop__content:{
        width: '70%',
        margin: '80px auto',
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '10px',
        [theme.breakpoints.down("md")]:{
           width: '90%',
           margin: '70px auto',
           gridTemplateColumns:'repeat(auto-fill, 200px)'
        }
    },
    shop__box:{
        boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
        width: '200px',
        '&:hover':{
             boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.8)',
             cursor: 'pointer'
            
        }
    },
    shop__image:{
        width: '200px',
        height: '150px'
    },
    shopImg:{
        width: '100%',
        height: '100%',
        borderRadius: '10px 10px 0px 0px'

    },
    shop__details:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px'
    },
    shopPrice:{
         marginLeft: '10px',
        fontSize: '15px',
        color: '#e791a1'
    },
    shopIcon:{
        marginLeft: 'auto',
        backgroundColor: '#001e40',
        color: '#fff',
        padding: '2px',
        marginRight: '10px',
        '&:hover':{
            backgroundColor: '#fff',
            color: '#001e40',
            border: '2px solid #001e40'
        }
    }
}));



const Shop = () => {
        const classes = useStyles();
        // const {product} = props;
        const history = useHistory();

    return (
        <>
        <Navbar/>
        <div className={classes.shop__container}>
            <div className={classes.shop__content}>
                <div className={classes.shop__box}>
                    <div className={classes.shop__image}>
                        <img className={classes.shopImg} src={cosmetic15} alt="cosmetic"/>
                    </div>
                    <div className={classes.shop__details}>
                        <div className={classes.shopText}>Floral Cream<br/>
                            <span className={classes.shopPrice}>$24.4</span>
                        </div>
                        <IconButton className={classes.shopIcon}>
                            <ArrowRightAltIcon/>
                        </IconButton>  
                    </div>  
                </div>

                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Shop;
