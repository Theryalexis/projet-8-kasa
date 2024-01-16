import React from 'react';
import "../style/components/footer.scss"
import { Link } from "react-router-dom";
import logofooter from "../assets/Logofooter.png"

const Footer = () => {
    return (
        <footer>
            <Link to="/">
                <img src={logofooter} alt="logo Kasa Footer" />
            </Link>
            <p> &copy; 2020 Kasa. All rights reserved</p>            
        </footer>
    );
};

export default Footer;