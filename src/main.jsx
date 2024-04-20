import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import MainHeroSection from "./components/Main Body/MainHeroSection.jsx";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer.jsx";

import { store } from "./store/store.js";

import "./styles/header/allpages.scss";
import "./styles/mediaQueries.scss";
import "./styles/header/logo.scss";
import "./styles/header/headercontainer.scss";
import "./styles/header/individualelement.scss";
import "./styles/header/searchNcart.scss";
import "./styles/header/cart.scss";
import "./styles/first/mainfirstleft.scss";
import "./styles/first/mainfirstleftindividual.scss";
import "./styles/first/first.scss";
import "./styles/first/mainherosection.scss";
import "./styles/first/carouseldisplay.scss";
import "./styles/second/sale.scss";
import "./styles/second/secondtop.scss";
import "./styles/second/card.scss";
import "./styles/third/thirdtop.scss";
import "./styles/third/individualcategory.scss";
import "./styles/third/third.scss";
import "./styles/third/categories.scss";
import "./styles/forth/forth.scss";
import "./styles/forth/individualcategory.scss";
import "./styles/forth/forthproducts.scss";
import "./styles/fifth/fifthimage.scss";
import "./styles/sixth/individualsixth.scss";
import "./styles/sixth/sixth.scss";
import "./styles/footer/footer.scss";
import "./styles/signup/signup.scss";
import "./styles/story/story.scss";
import "./styles/about/about.scss";
import "./styles/universal/universal.scss";
import "./styles/myaccount/myaccount.scss";
import "./styles/checkout/checkout.scss";
import "./styles/maincart/maincart.scss";
import "./styles/individualproductdetails/individualproductdetails.scss";
import Signup from "./components/SignUp/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Story from "./components/story/Story.jsx";
import About from "./components/contact/Contact.jsx";
import Universal from "./components/universal/Universal.jsx";
import MyAccount from "./components/myaccount/MyAccount.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import MainCart from "./components/maincart/MainCart.jsx";
import IndividualProductDetails from "./components/individualProduct/IndividualProductDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainHeroSection />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
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
            {/* <Route path="/footer" element={<Footer />} /> */}
          </Route>
        </Routes>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
