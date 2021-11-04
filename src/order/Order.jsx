import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
import { Container } from "@material-ui/core";
import { BiUser, BiSearch } from "react-icons/bi";
import { GrCart } from "react-icons/gr";
import Rate from "../rate/Rate";
import Quantity from "../Quantity/Quantity";
import Like from "../Like/Like";
import Button from "../Buttons/Button";
import Cosmetic2 from "../img/cosmetic2.png";
import shopItems from "../database/shop";
import AppContext from "../context/App-Context";
import Data from "../database/Data";


const Order = () => {
	const {products} = useContext(AppContext);
	// const {products} = props;
	const { id } = useParams();

	return (
        <div className="order-container">
            {Data
				.filter((item) => item.id === id)
				.map((item)=>(
			<Container  
			key={item.id}
			style ={{
                // border: '8px solid black',
                // borderRadius: '6px',
                // display: 'flex',
                maxwidth: '65vw',
                // height: '80vh',
                padding: '0 20px',
                // marginTop: '100px',
                background: 'linear-gradient(-243deg, #918ba7, #918ba7 40%, #fff 40%, #fff)'

                }} fixed>
                <div className="order__nav__wrapper">
                    <div className="order__nav">
                        <div className="order__logo">
                            <h1 className="order__logo__brand">
                                BRUMIS
                            </h1>
                        </div>

                        <div className="order__icon">
                            <li>
                                <BiSearch className="order__icon__search"/>
                            </li>

                            <li>
                                <GrCart className="order__icon__search"/>
                            </li>

                            <li>
                                <BiUser className="order__icon__search"/>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="order__main">
                    <div className="order__image__container">
                        <img src={ Cosmetic2 } alt="order" className ="order__image" />
                    </div>
                    <div className="order__desc">
                        <div className="order__desc__ratings">
                            <Rate/>
                        </div>
                        <div className="order__title">
                            <h2 className = "order__title__header">
                                Orange G Pro Max <br />
                                Berido Model
                            </h2>
                            <p className="order__title__para">
                                Flavour# FEE440
                            </p>
                        </div>
                        <div className="order__price">
                            <h1 className="order__price__header">
                                $ 2449.17
                            </h1>
                        </div>
                        <p className="order__flavour">
                            Flavours
                        </p>
                       
                        <div>
                            <Quantity/>
                        </div>
                        <div className="order__like">
                            <Like/>
                        </div>
                        <div className="order__button">
                            <Button/>
                        </div>
                            
                    </div>
                        <div className="order__line">
                            <div class="order__solid"></div>
                            <div class="order__dotted"></div>
                        </div>
                    
                </div>


            </Container>
				))}
        </div>
    );
};

export default Order;