import React from 'react';
import s from './header.module.css';
import logo from '../../Utils/Images/logo.png';
import googlePlay from '../../Utils/Images/GooglePlaylogo.png';
import appPlay from '../../Utils/Images/AppPlaylogo.png';

const Header = () => {
    return (
        <div className={s.header_wrapper}>
            <div className={s.nav_left}>
                <img className={s.header_logo} src={logo} alt='logo'/>
                <nav className={s.nav}>
                    <a href='#'>Features</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Help</a>
                </nav>
            </div>
            <div className={s.app_badges}>
                <img src={googlePlay} alt='googlePlay'/>
                <img src={appPlay} alt='appPlay'/>
            </div>
        </div>
    );
};

export default Header;