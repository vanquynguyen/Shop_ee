import React from 'react';

const Slide = () => {
    return (
        <div className="slide container">
            <div className="row">
                <div className="col-md-8">   
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item">
                        <img src="https://cf.shopee.vn/file/331186208d93880a3d68684666ef71c6" alt="Galaxy s9" />
                        </div>

                        <div className="item active">
                        <img src="https://cf.shopee.vn/file/f37ba54860d22f90e3398c5ecbe4f754" alt="BuiTD" />
                        </div>

                        <div className="item">
                        <img src="https://cf.shopee.vn/file/483a566ddef3d3cf1511b506501707f3" alt="IphoneX" />
                        </div>

                        <div className="item">
                        <img src="https://cf.shopee.vn/file/cb8a6bc951073c1567ae045c6a3fadfa" alt="HTC U Ultra" />
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="img-item">
                        <img src="https://cf.shopee.vn/file/fac8eeea2d170ac2adf92b1a4fdfa930" width="100%" height="115" alt=""/>
                    </div>
                    <div>
                        <img src="https://cf.shopee.vn/file/d2e3ea8dd5d8ec17ce8cce550118b5f5" width="100%" height="115"  alt=""/>
                    </div>
                </div> 
            </div>    
        </div>
    );
};

export default Slide;