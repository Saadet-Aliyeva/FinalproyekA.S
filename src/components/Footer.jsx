import React from 'react';
import {FaInstagram} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaPinterest} from 'react-icons/fa';

const Footer = () => {
    return(
        <div className="ff">
        <section className="footer">
            <div className="social">
           <a><FaInstagram /></a>
           <a><AiFillTwitterCircle/></a>
           <a><BsFacebook /></a>
           <a><FaPinterest /></a>
            </div>

            <ul className="list">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About Me</a>
                </li>
                <li>
                    <a>Pricing</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
            </ul>
            <p className="copright">
            Architecture @2022
            </p>
        </section>
        </div>
    )
}

export default Footer;