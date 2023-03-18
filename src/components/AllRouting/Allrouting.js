import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import SubNav from '../SubNavBar/SubNav';
import Product from '../Products/Product';
import ProdDetails from '../ProductDetails/ProdDetails';
import Signin from '../LoginPage/Signin';
import NewUser from '../Register/NewUser';

const Allrouting = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <SubNav />
                <Routes>
                    <Route path="signin" element={<Signin />} />
                    <Route path="reg" element={<NewUser />} />
                    <Route path="/" element={<Product/>} />
                    <Route path="/pdetails/:id" element={<ProdDetails/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Allrouting