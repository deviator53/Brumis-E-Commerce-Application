import React, {useState} from 'react';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles,
    useTheme,
    useMediaQuery
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Bg from '../img/newbackground.jpg';
import Lady from '../img/cosmetic16.png';
import Cosmetic2 from '../img/cosmetic2.jpg';
import Cosmetic4 from '../img/cosmetic4.jpg';
import Cosmetic15 from '../img/cosmetic15.jpg';
import './arrival.css';



const useStyles = makeStyles(theme => ({
    arrivalContainer:{
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginTop: '30px',
        marginBottom: '50px',
        [theme.breakpoints.down("xs")]:{
           flexDirection: 'column'
        }

    },
    arrivalBg:{
        width: '50%',
        position: 'relative',
        [theme.breakpoints.down("xs")]:{
            width: 'auto',
       }
    },
    paperBg:{
        position: 'relative',
        width: '100%',
        height: '500px',
        borderRadius: '0% 40% 40% 0%',
        marginTop: '110px',
        [theme.breakpoints.down("xs")]:{
            display: 'none'
       }
    },
    paperLady:{
        position: 'absolute',
        top: '0',
        marginLeft: '-400px',
        width: '350px',
        [theme.breakpoints.down("xs")]:{
            display: 'none'
       }
    },
    arrivalText:{
        width: '50%',
        marginTop: '200px',
        paddingLeft: '30px',
        [theme.breakpoints.down("xs")]:{
            width: '100%',
            marginTop: '100px',
            position: 'relative',
            paddingLeft: '5px',
            textAlign: 'center'
       }
       
    },
    arrivalHead:{
        color: '#0e233f',
        fontWeight: 'bold'
    },
    arrivalBody:{
        // width: '80%',
        margin: '20px 0px',
        [theme.breakpoints.down("xs")]:{
            padding: '0px 20px'
       }
    },
    arrivalBtn:{
        fontSize: '10px',
        backgroundColor: '#001e40',
        color: 'white',
        borderRadius: '20px',
        padding: '10px 20px',
        '&:hover':{
            backgroundColor: '#fff',
            color: '#001e40',
            border: '2px solid #001e40',
            fontWeight: 'bold'
        }
    },
    expand: {
        // transform: 'rotate(0deg)',
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
    },
    arrivalImg:{
        position: 'absolute',
        top: '450px',
        left: '480px',
        [theme.breakpoints.down("md")]:{
            left: '60px'
        },
        [theme.breakpoints.down("xs")]:{
            position: 'static'
        }
    },
    cardContainer:{
        display: 'flex',
        [theme.breakpoints.down("xs")]:{
           flexDirection: 'column',
           gap: '2em',
           width: '50%',
           margin: '20px auto 0px auto'
          
        }
    }
    
}));

const Arrival = ({newArrivals}) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
        <div>
            {
                newArrivals.map((arrival) => {
                    <div className={classes.arrivalContainer} key={arrival.id}>
                <div className={classes.arrivalBg}>
                    <img className={classes.paperBg} src={Bg} />
                    <img className={classes.paperLady} src={Lady} />

                </div>

                <div className={classes.arrivalText}>
                    <Typography className={classes.arrivalHead} variant="h4">New Arrival</Typography>
                    <Typography className={classes.arrivalBody} mt={2}>Most dermatologist agree it is important to cleanse the face twice daily to get bacteria, dirt and pollutants off your skin</Typography>
                    <Button className={classes.arrivalBtn} onClick={()=>(window.location.href="/shop")}>View More</Button>
                </div>

                <div className={classes.arrivalImg}>
                  <div className={classes.cardContainer}>
                    <div className="card1">
                        <div className="card-image">
                            <img className="cardImg" src={Cosmetic2} />
                        </div>
                        <div className="spanContainer">
                            <div className="span-text">Night Cream<br
                            /><span className="span-price">$23.99</span></div>
                            <IconButton
                            className={classes.expand}>
                            <ArrowRightAltIcon />
                            </IconButton>  
                        </div>          
                    </div>

                    <div className="card1">
                        <div className="card-image">
                            <img className="cardImg" src={arrival.image} />
                        </div>
                        <div className="spanContainer">
                          <div className="span-text">{arrival.name}
                            <span className="span-price">${arrival.price}</span> 
                          </div>
                            <IconButton
                            className={classes.expand}>
                            <ArrowRightAltIcon />
                            </IconButton>  
                        </div>          
                    </div>

                    <div className="card1">
                        <div className="card-image">
                            <img className="cardImg" src={Cosmetic15} />
                        </div>
                        <div className="spanContainer">
                            <div className="span-text">Under Eye Gel<br/>
                            <span className="span-price">$26.99</span></div>
                            <IconButton
                            className={classes.expand}>
                            <ArrowRightAltIcon />
                            </IconButton>  
                        </div>          
                    </div>

                  </div>
                </div>

            </div>
                })
            }
            
        </div>
        </>
    )
}

export default Arrival;
