import React from 'react';
import './footer.css';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles,
    useTheme,
    useMediaQuery
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppsIcon from '@material-ui/icons/Apps';
import Cosmetic8 from '../img/cosmetic8.jpg';
import Cosmetic9 from '../img/cosmetic9.jpg';
import Cosmetic10 from '../img/cosmetic10.jpg';
import Cosmetic11 from '../img/cosmetic18.jpg';


const useStyles = makeStyles(theme => ({
    footer:{
        position: 'relative'
    },
    footerTop:{
        width: '100%',
        height: '30vh',
        [theme.breakpoints.down("md")]:{
            height: '0vh'
        }
    },
    footerBottom:{
        width: '100%',
        height: '70vh',
        backgroundColor: '#293144',
        [theme.breakpoints.down("md")]:{
            height: 'auto'
        }
    },
    footerImages:{
        width: '300px',
        height: '200px',
        marginLeft: '30px',
          [theme.breakpoints.down("xs")]:{
            height: '100px'
            
        }
    },
    footerImg:{
        display: 'flex',
        position:'absolute',
        top: '100px',
        [theme.breakpoints.down("md")]:{
            position: 'relative'
        }
    },
    footerHead:{
        textAlign: 'center',
        color: '#0e233f',
        fontWeight: 'bold',
        marginTop: '50px',
        [theme.breakpoints.down("md")]:{
            marginTop: '0px',
            paddingTop: '20px',
            color: 'white'
        }
    },
    footerMedia:{
        width: '90%',
        display: 'grid',
        gridTemplateColumns: '3fr 3fr 2fr',
        gridGap: '80px',
        paddingTop: '200px',
        margin: 'auto',
        color: 'white',
        [theme.breakpoints.down("xs")]:{
            gridTemplateColumns: '1fr'
            
        }
    },

    footerLetter:{
        fontWeight: 'bold'
    },

    footInput:{
        width: '180px',
        backgroundColor: 'white',
        padding: '10px'
    },

    footBtn:{
        padding: '10px 20px',
        backgroundColor: '#fc8d9e',
        color: 'white',
        border: 'none',

    },

    footText:{
        lineHeight: '2.5'
    },
    footerNews:{
    },
    footerContact:{
    },
    contactIcons:{
        display: 'flex',
        alignItems: 'center'
    },
    contactIcon:{
        padding: '8px',
        backgroundColor: '#fc8d9e'
    },

    footerSocial:{
        textAlign: 'right',
          [theme.breakpoints.down("xs")]:{
            textAlign: 'left'
        }
    },
    socialContainer:{
        display: 'flex',
        flexDirection: 'row-reverse',
          [theme.breakpoints.down("xs")]:{
            flexDirection: 'row'
            
        }
    },

    socialIcon:{
        marginRight: '15px',
        padding: '5px',
        backgroundColor: '#fc8d9e',
        borderRadius: '40%'
    },
    copyright:{
        width: '90%',
        margin: '20px auto 0px auto',
        borderTop: '1px solid white',
        color: 'white',
        textAlign: 'center',
        paddingTop: '30px'
    }

}));


const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
        <div className={classes.footer}>
            <div className={classes.footerTop}>
                <Typography className={classes.footerHead} variant="h4">Instagram Feed</Typography>
            </div>
            <div className={classes.footerBottom}>
                <div className={classes.footerImg}>
                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic9} />
                    </div>

                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic11} />
                    </div>

                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic8} />
                    </div>

                    <div className={classes.footerImages}>
                        <img className="footerImage1" src={Cosmetic10} />
                    </div>

                </div>

                <div className={classes.footerMedia}>
                    <div className={classes.footerNews}>
                        <Typography className={classes.footerLetter} variant="h6">Newsletter</Typography>
                        <p className={classes.footText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, placeat.</p>
                        <form>
                            <div>
                                <input className={classes.footInput} type="email" name="email" placeholder="Enter Email ID"/>
                                <button className={classes.footBtn}>Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className={classes.footerContact}>
                        <Typography className={classes.footerLetter} variant="h6">Quick Contact</Typography>
                        <p className={classes.footText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, placeat.</p>
                        <div className={classes.contactIcons}>
                            <span className={classes.contactIcon}><AppsIcon className={classes.appIcon}/></span><span className={classes.contactNum}>+2347032145887</span>
                        </div>
                    </div>

                    <div className={classes.footerSocial}>
                         <Typography className={classes.footerLetter} variant="h6">Follow Us</Typography>
                            <div className={classes.socialContainer}>
                                <div className={classes.socialIcon}><InstagramIcon/></div>
                                <div className={classes.socialIcon}><FacebookIcon/></div>
                                <div className={classes.socialIcon}><TwitterIcon/></div>
                                
                            </div>

                    </div>
                    {/* <div className={classes.horizontal}></div> */}
                </div>
                <div className={classes.copyright}>
                    <Typography>Copyright 2021 Brumis All Rights reserved</Typography>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer;
