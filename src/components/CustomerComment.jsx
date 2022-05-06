
import React from 'react';
// import Cutomer1 from '../../public/img/customer/customer/1.png';
// import Cutomer2 from '../../public/img/customer/customer/2.png';
// import Cutomer3 from '../../public/img/customer/customer/3.png';
// import Partner1 from '../../public/img/customer/partner/1.png';
// import Partner2 from '../../public/img/customer/partner/2.png';
// import Partner3 from '../../public/img/customer/partner/3.png';
// import Partner4 from '../../public/img/customer/partner/4.png';

const Cutomer1 = '/img/customer/customer/c1.png';
const Cutomer2 = '/img/customer/customer/2.png';
const Cutomer3 = '/img/customer/customer/3.png';
const Partner1 = '/img/customer/partner/5.png';
const Partner2 = '/img/customer/partner/2.png';
const Partner3 = '/img/customer/partner/3.png';
const Partner4 = '/img/customer/partner/4.png';


export default function CustomerComment() {
  return (
    <div>
        <div id="partners" className="container spacer ">
	        <h2 className="text-center  wowload fadeInUp">Müşteri Yorumları</h2>
            <div className="clearfix">
                {/* <div className="col-sm-6 partners  wowload fadeInLeft"> */}
                    {/* <img src={Partner1}  alt="partners"/> */}
                    {/* <img src={Partner2}  alt="partners"/> */}
                    {/* <img src={Partner3} alt="partners"/> */}
                    {/* <img src={Partner4} alt="partners"/> */}
                {/* </div> */}


                <div className="col-sm-6">


                <div id="carousel-testimonials" className="carousel slide testimonails  wowload fadeInRight" data-ride="carousel">
                    <div className="carousel-inner">  
                        <div className="item active animated bounceInRight row">
                            <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                            <div  className="col-xs-10">
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime, dolor, et doloribus quae repudiandae natus odit earum sed deserunt odio est recusandae vero doloremque pariatur illum quod exercitationem cupiditate. </p>      
                            <span>Angel Smith - <b>eshop Canada</b></span>
                            </div>
                        </div>
                <div className="item  animated bounceInRight row">
                    <div className="animated slideInLeft col-xs-2"><img alt="portfolio"    src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                    <div  className="col-xs-10">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate consequatur voluptates, a ullam odit doloremque eaque placeat incidunt possimus molestiae quaerat porro facere iste dolorem assumenda aliquam cumque! Veritatis?</p>
                    <span>John Partic - <b>Crazy Pixel</b></span>
                    </div>
                </div>
                <div className="item  animated bounceInRight row">
                    <div className="animated slideInLeft  col-xs-2"><img alt="portfolio" src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                    <div  className="col-xs-10">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus ullam veniam exercitationem laborum odit ab expedita ratione. Suscipit ratione, consectetur exercitationem soluta enim sapiente molestiae nulla reiciendis quia odio!</p>
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

                <div className="col-sm-6">


                    <div id="carousel-testimonials" className="carousel slide testimonails  wowload fadeInRight" data-ride="carousel">
                        <div className="carousel-inner">  
                            <div className="item active animated bounceInRight row">
                                <div className="animated slideInLeft col-xs-2"><img alt="portfolio" src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                                <div  className="col-xs-10">
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, maxime, dolor, et doloribus quae repudiandae natus odit earum sed deserunt odio est recusandae vero doloremque pariatur illum quod exercitationem cupiditate. </p>      
                                <span>Angel Smith - <b>eshop Canada</b></span>
                                </div>
                            </div>
                    <div className="item  animated bounceInRight row">
                        <div className="animated slideInLeft col-xs-2"><img alt="portfolio"    src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                        <div  className="col-xs-10">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate consequatur voluptates, a ullam odit doloremque eaque placeat incidunt possimus molestiae quaerat porro facere iste dolorem assumenda aliquam cumque! Veritatis?</p>
                        <span>John Partic - <b>Crazy Pixel</b></span>
                        </div>
                    </div>
                    <div className="item  animated bounceInRight row">
                        <div className="animated slideInLeft  col-xs-2"><img alt="portfolio" src={Cutomer1} width="100" className="img-circle img-responsive"/></div>
                        <div  className="col-xs-10">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus ullam veniam exercitationem laborum odit ab expedita ratione. Suscipit ratione, consectetur exercitationem soluta enim sapiente molestiae nulla reiciendis quia odio!</p>
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
