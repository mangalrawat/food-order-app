import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        "Fresh, Fast, and Delicious! Your favorite food is now
                        just a click away. Order mouth-watering and hot meals
                        from the comfort of your home with our app. With
                        top-rated restaurants, exclusive discounts, and
                        super-fast delivery, we make every order special.
                        Whether you crave desi, Chinese, or Italian – find it
                        all in one place. So why wait? Order now and satisfy
                        your cravings instantly!"
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privecy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>HET IN TOUCH</h2>
                    <ul>
                        <li>+91-9923456567</li>
                        <li>gagan@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ Tomato.com-All Right Reserved
            </p>
        </div>
    );
};

export default Footer;
