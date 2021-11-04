import React, {useState} from 'react';
import './product.css';
import Cosmetic5 from '../img/cosmetic5x.png';
import Cosmetic6 from '../img/cosmetic6x.png';
import Cosmetic7 from '../img/cosmetic7.png';
import {
    Typography,
    Paper, 
    Button,
    IconButton,
    makeStyles
} from '@material-ui/core';
import { fontWeight } from '@mui/system';

const useStyles = makeStyles(theme => ({
    productContainer:{
        width: '100%',
        marginTop: '150px',
        position: 'relative'
    },
    productHead:{
        fontSize: '14px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0e233f'

    },
    productHead1:{
        fontSize: '24px',
        textAlign: 'center',
        color: '#0e233f',
        fontWeight: 'bold'
    },
    itemContainer:{
        width: '100%'
    },
    productItems:{
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        margin: '20px auto',
        [theme.breakpoints.down("md")]:{
            margin: '0px'
        },
        [theme.breakpoints.down("xs")]:{
            flexDirection: 'column',
            margin: '10px auto'
        }

    },
    productItem:{
        marginLeft: '100px',
        [theme.breakpoints.down("sm")]:{
            marginLeft: '60px'
        }
    },
    
    productBg:{
        backgroundColor: 'rgb(223, 219, 219)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        position: 'relative',
        marginTop: '50px',
        [theme.breakpoints.down("sm")]:{
            width: '170px',
            height: '170px'
        }
       
    },
    productImage:{
        width: '300px',
        height: '400px',
        position: 'absolute',
        top: '0',
        left: '185px',
        [theme.breakpoints.down("md")]:{
            left: '55px'
        },
        [theme.breakpoints.down("sm")]:{
            width: '230px',
            height: '300px',
            left: '30px',
            top: '25px'

        },
        [theme.breakpoints.down("xs")]:{
            left: '60px'

        }
    },
    productImage1:{
        width: '300px',
        height: '400px',
        position: 'absolute',
        top: '0',
        left: '530px',
        [theme.breakpoints.down("md")]:{
            left: '350px'
        },
        [theme.breakpoints.down("sm")]:{
            width: '230px',
            height: '300px',
            left: '260px',
            top: '25px'

        },
        [theme.breakpoints.down("xs")]:{
            top: '485px',
            left: '65px',
        }
    },
    productImage2:{
        width: '300px',
        height: '400px',
        position: 'absolute',
        top: '0',
        left: '865px',
        [theme.breakpoints.down("md")]:{
            width: 'auto',
            left: '665px'
        },
        [theme.breakpoints.down("sm")]:{
            width: '230px',
            height: '300px',
            left: '485px',
            top: '25px'
        },
        [theme.breakpoints.down("xs")]:{
            top: '965px',
            left: '75px'
            
        }
    },
    productText:{
        marginTop: '40px',
        textAlign: 'center'
    },
    productHeader:{
        color: '#0e233f',
        textAlign: 'center'
    },
    productPrice:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0e233f'

    },
    productBtn:{
        fontSize: '10px',
        margin: '20px auto',
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
    }


}));


const Product = () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.productContainer}>
            <Typography className={classes.productHead} variant="h6">Popular Product</Typography>
            <Typography className={classes.productHead1} variant="h4">Meet Our Bestsellers</Typography>
            <div className={classes.itemContainer}>
                <div className={classes.productItems}>
                    <div className={classes.productItem}>
                        <div className={classes.productBg}>
                        </div>
                        <img className={classes.productImage} src={Cosmetic5} />

                        <div className={classes.productText}>
                            <h4 className={classes.productHeader}>Face Care</h4>
                            <p>A very functional face care product</p>
                            <p className={classes.productPrice}>$129.00</p>
                            <Button className={classes.productBtn}>Buy Now</Button>

                        </div>

                    </div>

                    <div className={classes.productItem}>
                        <div className={classes.productBg}>
                        </div>
                        <img className={classes.productImage1} src={Cosmetic7} />


                        <div className={classes.productText}>
                        <h4 className={classes.productHeader}>Bath & Body</h4>
                            <p>A very functional Bathing product</p>
                            <p className={classes.productPrice}>$199.00</p>
                            <Button className={classes.productBtn}>Buy Now</Button>

                        </div>

                    </div>

                    <div className={classes.productItem}>
                        <div className={classes.productBg}>
                        </div>
                        <img className={classes.productImage2} src={Cosmetic6} />

                        <div className={classes.productText}>
                        <h4 className={classes.productHeader}>Skin Care</h4>
                            <p>A very functional skin product</p>
                            <p className={classes.productPrice}>$219.00</p>
                            <Button className={classes.productBtn}>Buy Now</Button>
                        </div>

                    </div>
                </div>
          </div>
        </div>
        </>
    )
}

export default Product;
