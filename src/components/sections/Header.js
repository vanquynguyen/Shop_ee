import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id="header">
                <div className="container navbar-wrapper container-wrapper">
                    <ul className="navbar__links navbar__left">
                        <li><a href="">Kênh người bán</a></li>
                        <li>|</li>
                        <li><a href="">Tải ứng dụng</a></li>
                        <li>|</li>
                        <li><a href="">Kết nối</a></li>
                    </ul>
                    <ul className="navbar__links navbar__right">
                        <li><a href=""><i className="fa fa-bell"></i> Thông báo</a></li>
                        <li><a href=""><i className="fa fa-question-circle"></i> Trợ giúp</a></li>
                        <li><Link to="/register" >Đăng ký</Link></li>
                        <li>|</li>
                        <li><Link to="/login">Đăng nhập</Link></li>
                        <li>
                            <div className="dropdown">
                                <a data-toggle="dropdown"><span className="account"></span>
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a className="account-dropdown">Dashboard</a></li>
                                    <li><a className="account-dropdown">Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container-wrapper header-with-search-wrapper">
                    <div className="container logo">
                    <div>
                        <Link to="/">
                            <img className="logo" src="https://cdngarenanow-a.akamaihd.net/shopee/shopee-pcmall-live-vn/assets/6ce1f4f6d79353c5f24ee047a5132d77.jpg" alt="" />                
                       </Link>
                    </div>
                    <div className="dropdown cart">
                        <i data-toggle="dropdown" className="fa fa-shopping-cart fa-2x"></i><span className="cart-count">1</span>
                        <ul className="dropdown-menu cart-dropdown">
                            <li><p>Sản phẩm mới được thêm</p></li>
                            <li>
                                <img className="image-cart" width="42" height="42"  alt=""/>
                                <span>hihi</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
