import React from 'react';
import './App.css';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import VerifyUser from './auth/VerifyUser';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Order from './order/Order';
import Pay from './pay/Pay';
import Shop from './shop/Shop';
import Contact from './contact/Contact';
import About from './about/About';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Data from "./database/Data";
import newArrival from "./database/newArrival";
import shopItems from "./database/shop";
import ProductContext from "./context/ProductContext";

function App() {
  const {newArrivals, trendingProducts, topCategories } = shopItems;
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" newArrivals={newArrivals} trendingProducts={trendingProducts} topCategories={topCategories} component={Home}></Route>
        <Route exact path="/login" component={Login}></Route> 
        <Route exact path="/verify-user" component={VerifyUser}></Route> 
        <Route exact path="/register" component={Register}></Route>  
        <Route exact path="/forgot-password" component={ForgotPassword}></Route>  
        <Route exact path="/reset-password" component={ResetPassword}></Route> 
        <Route exact path="/shop"  component={Shop}></Route>  
        {/* <ProductContext> */}
          <Route exact path="/order" product={product}  component={Order}></Route> 
          <Route exact path="/pay" component={Pay}></Route>
        {/* </ProductContext> */}

        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>

        
      </Switch>
    </BrowserRouter>
    <Toaster
     position="top-right"
     toastOptions={{
       duration: 5000,
       style:{
         color: 'white'
       },
       success:{
         style:{
           background: 'green',
         },
       },
       error:{
         style:{
           background: 'red',
         },
       },
     }}
     />
      </>
      
     
    </div>
  );
}

export default App;
