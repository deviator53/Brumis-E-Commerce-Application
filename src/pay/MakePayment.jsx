import React from 'react';
import './pay.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const MakePayment = () => {
    return (
        <div className="card-holder" style={{height: 500, backgroundColor: 'rgb(44, 44, 44)', maxWidth: '65vw'}}>

            <div className="container" style={{width: '60%'}}>

                <div className="container-wrapper">
                    <h2 className="container-title">PAYMENT</h2>
                    
                    <label className="label" for="checkbox1"><input id="checkbox1" name="COD" className='checkbox1' type="radio" /><span className="text">Cash On Delivery (COD)</span></label>
                    <label className="label" for="checkbox2" style={{marginBottom: '1rem'}}><input id="checkbox2" name="COD" className='checkbox2' type="radio" checked /><span className="text">Online Delivery</span></label>

                    <div className="pay-method">
                    <button className="paypal" style={{ width: '50%'}}>Paypal</button>
                    <button className="visa"style={{ width: '50%'}}>Visa</button>
                    </div>

                    <input type="text" className="cardholder-name" placeholder="Cardholder Name" style={{marginTop: '1rem'}} required />
                    <input type="text" className="cardnumber" placeholder="Card Number" required />

                    <div className="holder" style={{disply: 'flex', width: '100.2%'}}>
                        <input type="text" className="exp-date" placeholder="Exp. Date" required />
                        <input type="text" className="cvv-number" placeholder="CVV" required />
                    </div>
                    
                </div>

                <button className="checkout" style={{marginBottom: '1.5rem'}}>CHECKOUT <span className="arrow"><ArrowRightAltIcon /></span></button>

            </div>

        </div>
    )
}

export default MakePayment
