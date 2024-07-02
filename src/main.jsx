import React from "react";
import ReactDOM from "react-dom/client";

//CHAKRA
import { ChakraProvider } from "@chakra-ui/react";

//ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
//STORE
import { store } from "./store/store.js";

//AUTH0
import { Auth0Provider } from "@auth0/auth0-react";

//STYLES
import "./styles/common.scss";

import Header from "./components/Header/Header.jsx";
import MainHeroSection from "./components/Main Body/MainHeroSection.jsx";
import Signup from "./components/SignUp/Signup.jsx";
// import Login from "./components/Login/Login.jsx";
import Story from "./components/story/Story.jsx";
import About from "./components/contact/Contact.jsx";
import Universal from "./components/universal/Universal.jsx";
import MyAccount from "./components/myaccount/MyAccount.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import MainCart from "./components/maincart/MainCart.jsx";
import IndividualProductDetails from "./components/individualProduct/IndividualProductDetails.jsx";
import IndividualCompleteProducts from "./components/individualProducts/IndividualCompleteProducts.jsx";
import VerifyEmail from "./components/verifyEmail/VerifyEmail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-wdlr56ndce87jp4y.us.auth0.com"
    clientId="wHFrxiuvvErMUIfVHfv8rybk8ZelAV1E"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
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
              {/* <Route path="products/playstation5" element={<IndividualCompleteProducts/>}/> */}
              <Route path="signup" element={<Signup />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="story" element={<Story />} />
              <Route path="contact" element={<About />} />
              <Route path="myaccount" element={<MyAccount />} />
              <Route path="cart" element={<MainCart />} />
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
