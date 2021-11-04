import React, { useState } from 'react';
import './pay.css';
import Image from '../img/cosmetic5.png';
import Image1 from '../img/cosmetic2.png';
import Image2 from '../img/grass.png';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const Pay = () => {

    const [count, setCount] = useState (1);

    const [count1, setCount1] = useState (1);

    const [amount, setAmount] = useState (50.4);

    const [amount1, setAmount1] = useState (10.9);

    const [totalAmount, setTotalAmount] = useState (amount + amount1);

    const [show, setShow] = useState (false);

    const history = useHistory();


    const handleIncreament = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        
    }

    const handleIncreament1 = () => {
        setCount1(count1 + 1);
    };

    const handleDecrement1 = () => {
        setCount1(count1 - 1);
    }


    const useStyles = makeStyles(theme => ({
        open: {
            [theme.breakpoints.up("md")]: {
                display: (props) => (props.show ? "flex": "none"),
            }
        }
    }));

    const classes = useStyles({show});


    return (
        <>
        <Navbar/>
        <div style={{position: 'relative', height: '50rem'}}>
        <div className="card-holder">
            
            <div className="card">

                <div show={show} className={`card-wrapper`}>

                    <h1 className='brand'>BRUMIS</h1>
                    
                    <h2 className="card-title">SHOPPING CART</h2>

                    <div className="card-left">

                        <div className="card-left__one">

                            <div className="img-bg"><img className="image" src={Image} alt="Buaex Cream" /></div>

                            <div className="card-one__text">
                                <h4 className="cardone__subtitle">Buaex Cream</h4>
                                <div className="cardleft__text">
                                    <p className="">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <span className="moneySign">$</span><h4 className="">{setCount ? (amount * count): amount}</h4>
                                </div>
                            </div>

                        </div>

                        <div className="card-left__two">
                            <div className="">
                                <span aria-hidden="true"><button className="span1" onClick={handleIncreament}>&times;</button></span>
                            </div>

                            <div className="count">
                                0{count}
                            </div>

                            <div className="">
                                <span aria-hidden="true"><button className="span2" onClick={handleDecrement}>&minus;</button></span>
                            </div>
                        </div>

                        <div className="card-left__three">
                            <button className="close">
                            <span className="span" aria-hidden="true">&times;</span>
                            </button>
                        </div>

                    </div>

                    <div className="card-left">

                        <div className="card-left__one">

                            <div className="img-bg"><img className="image1" src={Image1} alt="Ladies Cosmetic" /></div>

                            <div className="card-one__text">

                                <h2 className="cardone__subtitle">Ladies Cream</h2>

                                <div className="cardleft__text">

                                    <p className="">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>

                                    <span className="moneySign">$</span><h4 className="">{setCount1 ? (amount1 * count1): amount1}</h4>

                                </div>

                            </div>
                            
                        </div>

                        <div className="card-left__two">
                            <div className="">
                                <span aria-hidden="true"><button className="span1" onClick={handleIncreament1}>&times;</button></span>
                            </div>

                            <div className="count">
                                0{count1}
                            </div>

                            <div className="">
                                <span aria-hidden="true"><button className="span2" onClick={handleDecrement1}>&minus;</button></span>
                            </div>
                        </div>

                        <div className="card-left__three">
                            <button onClick={''} className="close">
                                <span className="span" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>

                    <hr className="card-left__bottom" />
                    
                    <div className="subtotal">
                        <h4 className="">SUBTOTAL</h4>
                        <h4 className="" onChange={() => setTotalAmount(amount + amount1)}><span className="moneySign1">$</span>{totalAmount}</h4>
                    </div>

                    <button className="payment" onClick={() => history.push('/makepayment')}>Make Payment</button>

                    <script>

                    </script>
   
                </div>

                <div className="card-right" style={{}}>

                    <div className="container">

                        <div className="container-wrapper">
                            <h2 className="container-title">PAYMENT</h2>
                            
                            <label className="label" for="checkbox1"><input id="checkbox1" name="COD" className='checkbox1' type="radio" /><span className="text">Cash On Delivery (COD)</span></label>
                            <label className="label" for="checkbox2"><input id="checkbox2" name="COD" className='checkbox2' type="radio" checked /><span className="text">Online Delivery</span></label>

                            <div className="pay-method">
                            <button className="paypal" style={{ width: '50%'}}>Paypal</button>
                            <button className="visa"style={{ width: '50%'}}>Visa</button>
                            </div>

                            <input type="text" className="cardholder-name" placeholder="Cardholder Name" required />
                            <input type="text" className="cardnumber" placeholder="Card Number" required />

                            <div className="holder">
                                <input type="text" className="exp-date" placeholder="Exp. Date" required />
                                <input type="text" className="cvv-number" placeholder="CVV" required />
                            </div>
                            
                        </div>

                        <button className="checkout">CHECKOUT <span className="arrow"><ArrowRightAltIcon /></span></button>

                    </div>

                </div>
    
                <img src={Image2} alt="flower" className="bottom-grass" />

            </div>

        </div>
        </div>
        <Footer/>
        </>
    )
}

export default Pay;
