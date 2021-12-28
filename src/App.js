import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Button,
} from "react-router-dom";
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails.js';
import ProductPage from './Pages/ProductPage';
import Footer from './Components/Footer';

import Payment from './CheckOut/PaymentPage';
import ConfirmationPage from './CheckOut/ConfirmationPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import PublicRoute from './Routing/PublicRouting';
import PrivateRoute from './Routing/PrivateRouting';
import Checkout from './CheckOut/Checkout';
import Profile from './Pages/MyProfile';
import NotFoundPage from './Pages/ErrorPage';




function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="App ">
            <div className="App__body overflow-hidden max-w-full">
              
              
             
       
              {/* <ProductDetails /> */}

              {/* <Route path="/home"> <Home /> </Route> */}
              {/* <Route path="/login"><LoginPage /></Route> */}
              {/* <Route path="/signup"><SignupPage /></Route> */}
              {/* <Route path="/ProductPage"> <ProductPage /> </Route> */}
              {/* <Route path="/productCart"> <ProductCart /> </Route> */}
              {/* <Route path="/checkout"><Checkout/><Footer/></Route> */}
              {/* <Route path="/payment"><Payment /><Footer /></Route> */}
              {/* <Route path="/confirmationPage"><ConfirmationPage /><Footer /></Route> */}


              <PublicRoute restricted={true} component={Home} path="/home" exact />
              <PublicRoute restricted={true} component={LoginPage} path="/login" exact />
              <PublicRoute restricted={true} component={SignupPage} path="/signup" exact />
              <PrivateRoute component={ProductPage} path="/ProductPage" exact />
              <PrivateRoute component={Checkout} path="/checkout" exact />
              <PrivateRoute component={Payment} path="/payment" exact />
              <PrivateRoute component={ConfirmationPage} path="/confirmationPage" exact />

              <PrivateRoute component={ProductDetails} path="/ProductDetails" exact />
              <PrivateRoute component={Profile} path="/profile" exact />

            {/* <PublicRoute restricted={false} component={NotFoundPage} /> */}
              

         
             





            </div>
            {/* <Footer />   */}

          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
