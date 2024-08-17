import React from "react";
import ReactDOM from "react-dom/client";

//------CHAKRA------
import { ChakraProvider } from "@chakra-ui/react";

//ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//------REDUX------
import { Provider } from "react-redux";
//------STORE------
import { store } from "./store/store.js";

//------AUTH0------
import { Auth0Provider } from "@auth0/auth0-react";

//-------STYLES-------
import "./styles/common.scss";

//------COMPONENTS-------
import {
  Checkout,
  Header,
  Signup,
  Story,
  About,
  Universal,
  MyAccount,
  MainCart,
  IndividualCompleteProducts,
  IndividualProductDetails,
  VerifyEmail,
  MainHeroSection,
  MyOrders,
  Temp,
} from "./Common.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wdlr56ndce87jp4y.us.auth0.com"
    clientId="wHFrxiuvvErMUIfVHfv8rybk8ZelAV1E"
    // redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<MainHeroSection />} />
              <Route path="sale/:id" element={<IndividualCompleteProducts />} />
              <Route
                path="products/:id"
                element={<IndividualCompleteProducts />}
              />
              <Route path="signup" element={<Signup />} />
              <Route path="story" element={<Story />} />
              <Route path="contact" element={<About />} />
              <Route path="myaccount" element={<MyAccount />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="cart" element={<MainCart />} />
              <Route
                path="signup/https://oneclickmart.netlify.app/"
                element={<Temp />}
              />
              <Route
                path="signup/https://oneclickmart.netlify.app/signup?"
                element={<Temp />}
              />
              <Route
                path="individualelement"
                element={<IndividualProductDetails />}
              />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<Universal />} />

              <Route path="test" element={<VerifyEmail />} />
            </Route>
          </Routes>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
