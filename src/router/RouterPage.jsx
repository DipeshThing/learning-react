import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../components/Layout'
import App from '../App'
import ContactUs from '../pages/ContactUs'
import AboutUsPage from '../pages/AboutUsPage'
import MySkillPages from '../pages/MySkillPages'

import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../pages/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Product from '../components/Product'
import SellProduct from '../components/SellProduct'
import ProductDertailsPage from '../components/ProductDertailsPage'
import { CarouselSize } from '../pages/CarouselSize'






const RouterPage = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          Component: Layout,
          children: [
            { index: true, Component: App },
            { path: "about-us", Component: AboutUsPage },
            { path: 'contact-us', Component: ContactUs},
            { path: "myskill", Component: MySkillPages },
            { path: 'login', Component: LoginPage},
            { path: 'register', Component: RegisterPage},
            { path: 'product', Component: Product},
            { path: 'sell-product', Component: SellProduct},
            { path: 'product-details/:id', Component: ProductDertailsPage},
            { path: 'carousel', Component: CarouselSize}
            ],
        },
        {
            // path: "auth",
            Component: AuthLayout,
            children: [    
            ]
        }
    ]);
  return (
    //Declaritive Mode
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<App />} />
    //       <Route path="/contact-us" element={<ContactUs />} />
    //       <Route path="/about-us" element={<AboutUsPage />} />
    //       <Route path="/myskill" element={<MySkillPages />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    //Data Mode
    <RouterProvider router = {router} />
    

  )
}

export default RouterPage;