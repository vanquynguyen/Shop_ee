import React from 'react';

const Home = () => {
    return (
        <div className="detail-product">
            <div className="breadcrumb">
                Home <span>/</span> <span> Detail</span>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://cf.shopee.vn/file/a89c1715d8c133d8da9d6569505034b8_tn" with="333" height="333" alt=""/>
                    <div className="social">
                        <span>
                            <i className="fa fa-heart"></i> 
                            <span>Thích: 10</span>
                            Chia sẻ tới
                            <img src="https://www.shareicon.net/data/2016/07/10/119903_facebook-messenger_512x512.png" width="16" height="16" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" width="16" height="16" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_google%2B_2015.png" width="16" height="16" alt="" />
                            <img src="https://www.freepnglogos.com/uploads/pinterest-logo-circle-p-in-red-png-24.png" width="16" height="16" alt="" />
                            <img src="http://www.freepngimg.com/thumb/twitter/2-2-twitter-png-file-thumb.png" width="16" height="16" alt="" />
                        </span>
                    </div>
                </div>
                <div className="col-md-8 detail-right">
                    <div>
                        name
                    </div>
                    <div>
                        1000 đ
                    </div>
                    <br />
                    <div>
                    <img src="http://icons.iconarchive.com/icons/froyoshark/enkel/512/Bitcoin-icon.png" width="32" height="32" alt="" />
                    <span>Mua hàng và tích xu <i className="fa fa-question-circle"></i></span>
                    </div>
                    <hr />
                    <div>
                    <img src="https://cdn.iconscout.com/public/images/icon/free/png-512/tag-label-discount-sell-offer-ecommerce-buy-free-3f9d344e2bdb014c-512x512.png" alt="" width="32" height="32" /> 
                    <span>Miễn Phí Vận Chuyển cho đơn hàng có giá trị từ ₫200.000 (giảm tối đa 40.000 VNĐ)</span>
                    <div>
                        <i className="fa fa-bus"></i>
                        Vận chuyển tới: 
                        <span>
                
                        </span>
                    </div>
                    </div>
                    <hr />
                    <div className="content-count">
                        <span>  Số Lượng:</span> 
                        <span>
                            <ul className="count">
                                <li className="count-first">
                                    <a><i className="fa fa-minus"></i></a>
                                </li>
                                <li className="count-content">
                                10
                                </li>
                                <li>
                                    <a><i className="fa fa-plus"></i></a>
                                </li>
                            </ul>
                        </span> 
                        <span className="available"><p>(1000 sản phẩm có sẵn)</p></span>
                    </div>
                    <br />
                    <ul className="detail-footer">
                        <li><button className="btn btn-success"><i className="fa fa-comment"></i>  Chat ngay</button></li>
                        <li><button className="btn btn-success" ><i className="fa fa-cart-plus"></i> Thêm vào giỏ hàng</button></li>
                        <li><button className="btn btn-danger">Mua ngay</button></li>
                    </ul>
                </div>
            </div>
            <hr />
            <span>
            <h3>CÓ THỂ BẠN CŨNG THÍCH</h3>
            </span>
            <ul className="product-content">
            <li className="first-product">
                <img src="https://cf.shopee.vn/file/a89c1715d8c133d8da9d6569505034b8_tn" width="200px" height="180px" alt="" />
                <p className="product-name">Bộ quần áo khủng long</p>
                <p className="product-price">37000$</p>
            </li>
            </ul>
        </div>
    );
};

export default Home;