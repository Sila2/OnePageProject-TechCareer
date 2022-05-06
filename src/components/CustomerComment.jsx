
import React from 'react';
import Cutomer1 from '../../public/img/customer/customer/1.png';
import Cutomer2 from '../../public/img/customer/customer/2.png';
import Cutomer3 from '../../public/img/customer/customer/3.png';
import Partner1 from '../../public/img/customer/partner/1.png';
import Partner2 from '../../public/img/customer/partner/2.png';
import Partner3 from '../../public/img/customer/partner/3.png';
import Partner4 from '../../public/img/customer/partner/4.png';


export default function CustomerComment() {
  return (
    <div>
        <div id="partners" className="container spacer ">
	        <h2 className="text-center  wowload fadeInUp">Some of our happy clients</h2>
            <div className="clearfix">
                <div className="col-sm-6 partners  wowload fadeInLeft">
                    <img src={Partner1}  alt="partners"/>
                    <img src={Partner2}  alt="partners"/>
                    <img src={Partner3} alt="partners"/>
                    <img src={Partner4} alt="partners"/>
                </div>
                <div className="col-sm-6">


                    <div id="carousel-testimonials" className="carousel slide testimonails  wowload fadeInRight" data-ride="carousel">
                        <div className="carousel-inner">  
                            <div className="item active animated bounceInRight row">
                                <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                                <div  className="col-xs-10">
                                <p> I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. </p>      
                                <span>Angel Smith - <b>eshop Canada</b></span>
                                </div>
                            </div>
                    <div className="item  animated bounceInRight row">
                        <div className="animated slideInLeft col-xs-2"><img alt="portfolio"    src={Cutomer2} width="100" className="img-circle img-responsive"/></div>
                        <div  className="col-xs-10">
                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
                        <span>John Partic - <b>Crazy Pixel</b></span>
                        </div>
                    </div>
                    <div className="item  animated bounceInRight row">
                        <div className="animated slideInLeft  col-xs-2"><img alt="portfolio" src={Cutomer3} width="100" className="img-circle img-responsive"/></div>
                        <div  className="col-xs-10">
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.</p>
                        <span>Harris David - <b>Jet London</b></span>
                        </div>
                    </div>
                </div>

            {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#carousel-testimonials" data-slide-to="0"  className="active"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                    <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                </ol>
  	    {/* <!-- Indicators --> */}
                </div> 
                </div>
                
            </div>
        </div>
    </div>
  )
}
