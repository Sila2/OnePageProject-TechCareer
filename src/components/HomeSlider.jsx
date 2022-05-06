import React, { Component } from 'react';
// import Back1 from '../../public/img/homeSlider/back1.png';
// import Back2 from '../../public/img/homeSlider/back2.png';
// import Back3 from '../../public/img/homeSlider/back3.png';
// import Back4 from '../../public/img/homeSlider/back4.png';
// import Logo3 from '../../public/img/logobig.png';

const Back1 = '/img/homeSlider/back1.png';
const Back2 = '/img/homeSlider/back2.png';
const Back3 = '/img/homeSlider/back3.png';
const Back4 = '/img/homeSlider/back4.png';
const Logo3 = '/img/logo@2.png';


export default class HomeSlider extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
          <div id="home">
{/* <!-- Slider Starts --> */}
<div id="myCarousel" className="carousel slide banner-slider animated flipInX" data-ride="carousel">     
      <div className="carousel-inner">
        {/* <!-- Item 1 --> */}
        <div className="item active">
          <img src={Back1} alt="banner"/>          
            <div className="carousel-caption">
            	<div className="caption-wrapper">
            		<div className="caption-info">
            		<img src={Logo3} className="animated bounceInUp" alt="logo"/>
              		<h1 className="animated bounceInLeft">Creative digital agency</h1>
              		<p className="animated bounceInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis!</p>
              		<div className="scroll animated fadeInUp">{/*<a href="#works" classNameName="btn btn-default"><i className="fa fa-flask"></i>  View Project</a>*/} <a href="#works" className="btn btn-default"><i className="fa fa-paper-plane-o"></i> Menüye Git</a></div>
              		</div>
              	</div>
            </div>
        </div>
        {/* <!-- #Item 1 --> */}
        {/* <!-- Item 1 --> */}
        <div className="item">
          <img src={Back2} alt="banner"/>          
             <div className="carousel-caption">
            	<div className="caption-wrapper">
            		<div className="caption-info">
                <img src={Logo3} className="animated bounceInUp" alt="logo"/>
                  <h1 className="animated bounceInLeft">Creative digital agency</h1>
                  <p className="animated bounceInRight">Lead by passionate and uber progressive team that lives and breathes design.</p>
                  <div className="scroll animated fadeInUp"><a href="#works" className="btn btn-default"><i className="fa fa-flask"></i>  View Project</a> <a href="#contact" className="btn btn-default"><i className="fa fa-paper-plane-o"></i> Start Your Project</a></div>
                  </div>
                </div>
            </div>
        </div>
        {/* <!-- #Item 1 --> */}
        {/* <!-- Item 1 --> */}
        <div className="item">
          <img src={Back3} alt="banner"/>          
             <div className="carousel-caption">
            	<div className="caption-wrapper">
            		<div className="caption-info">
                <img src={Logo3} className="animated bounceInUp" alt="logo"/>
                  <h1 className="animated bounceInLeft">Creative digital agency</h1>
                  <p className="animated bounceInRight">Lead by passionate and uber progressive team that lives and breathes design.</p>
                  <div clasName="scroll animated fadeInUp"><a href="#works" className="btn btn-default"><i className="fa fa-flask"></i>  View Project</a> <a href="#contact" className="btn btn-default"><i className="fa fa-paper-plane-o"></i> Start Your Project</a></div>
                  </div>
                </div>
            </div>
        </div>
        {/* <!-- #Item 1 --> */}
        {/* <!-- Item 1 --> */}
        <div className="item">
          <img src={Back4} alt="banner"/>          
             <div className="carousel-caption">
            	<div className="caption-wrapper">
            		<div className="caption-info">
                <img src={Logo3} className="animated bounceInUp" alt="logo"/>
                  <h1 className="animated bounceInLeft">Creative digital agency</h1>
                  <p className="animated bounceInRight">Lead by passionate and uber progressive team that lives and breathes design.</p>
                  <div className="scroll animated fadeInUp"><a href="#works" className="btn btn-default"><i className="fa fa-flask"></i>  View Project</a> <a href="#contact" className="btn btn-default"><i className="fa fa-paper-plane-o"></i> Start Your Project</a></div>
                  </div>
                </div>
            </div>
        </div>
        {/* <!-- #Item 1 --> */}
      </div>
      <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon-chevron-left"><i className="fa fa-angle-left"></i></span></a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon-chevron-right"><i className="fa fa-angle-right"></i></span></a>
    </div>
{/* <!-- #Slider Ends --> */}
</div>

{/* <!-- The Bootstrap Image Gallery lightbox, should be a child element of the document body --> */}
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">
    {/* <!-- The container for the modal slides --> */}
    <div className="slides"></div>
    {/* <!-- Controls for the borderless lightbox --> */}
    <h3 className="title">title</h3>
    <a className="prev">‹</a>
    <a className="next">›</a>
    <a className="close">×</a>
    {/* <!-- The modal dialog, which will be used to wrap the lightbox content -->     */}
</div>
      </div>
    )
  }
}
