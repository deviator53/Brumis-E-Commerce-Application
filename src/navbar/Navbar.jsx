import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import MenuListComposition from '../navbar/MenuList';
import FadeMenu from '../fadeMenu/FadeMenu';
import { useHistory} from 'react-router-dom';
import {
    alpha,
    AppBar,
    Avatar,
    Toolbar, 
    IconButton, 
    Typography, 
    InputBase, 
    Badge, 
    MenuItem, 
    makeStyles,
    Paper,
    Box,
    useTheme,
   useMediaQuery
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search} from '@material-ui/icons';
import DrawerComponent from "../Drawer";




const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("md")]:{
            justifyContent: (props) => (props.openDrawer? "space-between": "normal")
        }
    },

    appbar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'black'
    },

    appbarSolid: {
        backgroundColor: '#001e40',
        color: 'white'
    },

    linkItems:{
        display:'flex'
    },

    linkItem:{
        marginLeft: '60px',
        cursor: 'pointer',
  
      '&:hover':{
        borderBottom: '1px solid #e791a1'
      }
    },
    linkIcon:{
        display: 'flex',
        alignItems: 'center',
         [theme.breakpoints.down("md")]:{
             marginLeft: 'auto',
        },
        [theme.breakpoints.down("xs")]:{
            marginLeft: 'auto',
       }
    },
    searchIcon:{
        // color: 'black',
        marginRight: '40px',
        [theme.breakpoints.down("md")]:{
            marginRight: '20px',
       }

    },
    cart:{
        // color: 'black',
        marginRight: '40px',
        [theme.breakpoints.down("md")]:{
            marginRight: '20px',
       }
    }
}))


const Navbar = () => {
 
    const classes = useStyles();
    const history = useHistory();
    const [navBackground, setNavBackground] = useState('appbar');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navRef = React.useRef()
    navRef.current = navBackground;

    useEffect(()=>{
        const handleScroll = () =>{
            const show = window.scrollY > 50
            if(show){
                setNavBackground('appbarSolid')
            } else{
                setNavBackground('appbar')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return ()=>{
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return (
        <div>
            <AppBar className={classes[navRef.current]}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.type} variant="h6" noWrap>
                        BRUMIS
                    </Typography>
                    
                    {isMobile ? (
                    <DrawerComponent />
                    ) : (
                    <div className={classes.linkItems}>
                        <div className={classes.linkItem} onClick={()=>(window.location.href="/")}>
                             <Typography className={classes.linkText}> 
                               Home
                             </Typography> 
                        </div>

                        <div className={classes.linkItem} onClick={()=>(window.location.href="/about")}>
                            <Typography className={classes.linkText}>
                            About
                            </Typography>
                        </div>

                        <div className={classes.linkItem} onClick={()=>(window.location.href="/shop")}>
                            <Typography className={classes.linkText}>
                            Shop
                            </Typography>
                        </div>

                        <div className={classes.linkItem} onClick={()=>(window.location.href="/blog")}>
                            <Typography className={classes.linkText}>
                             Blog
                            </Typography>
                        </div>

                        <div className={classes.linkItem} onClick={()=>(window.location.href="/contact")}>
                            <Typography className={classes.linkText}>
                            Contact
                            </Typography>
                        </div>
                    </div>
                            )}

                    <div className={classes.linkIcon}>
                        <Search className={classes.searchIcon} />
                        <Badge className={classes.badge}>
                            <ShoppingCart className={classes.cart} />
                        </Badge>
                        <MenuListComposition />
                    </div>
                </Toolbar>
            </AppBar>
     </div>
    )
}

export default Navbar;