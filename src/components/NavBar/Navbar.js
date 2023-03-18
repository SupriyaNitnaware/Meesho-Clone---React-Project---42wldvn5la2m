import React from 'react'
import "./Navbar.css"
import img from "./meesho.png"
import search from "./search.png"
import mobile from "./mobile.png"
import profile from "./user.png"
import cart from "./cart.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className="header_left">
                    <div className='h_logo'>
                        <img src={img} />
                    </div>
                    {/* search */}
                    <div className='searchBox'>
                        <div className='searchIcon'>
                            <img src={search} />
                        </div>
                        <input type="text" placeholder="Try Saree,Kurti or Search by Product Code" className="input_search" />
                        <div className="close_Search">
                            {/* <i class="fa-solid fa-xmark"></i> */}
                        </div>
                    </div>
                </div>

                <div className='header_right'>
                    <div className='download_app'>
                        <div className="mobile_icon">
                            <img src={mobile} />
                        </div>
                        <p>Download App</p>
                    </div>

                    <div className="become_supplier">
                        <p>Become a Supplier</p>
                    </div>

                    <div className='profile_cart'>
                        <div className='profile_container'>
                            <div className='profile_icon'>
                                <img src={profile} />
                            </div>
                            <Link to="/signin" className="signin">Profile</Link>
                            {/* <p>Profile</p> */}
                        </div>

                        <div className='cart'>
                            <div className='cart_icon'>
                                <img src={cart} />
                            </div>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar