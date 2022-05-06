import React from 'react';
import Logo from './logo192.png';


export default function Header() {
  return (
    <div>
        {/* <!-- Header Starts --> */}
<div className="navbar-wrapper">
      <div className="container">

        <div className="navbar navbar-default navbar-fixed-top" role="navigation" id="top-nav">
          <div className="container">
            <div className="navbar-header">
              {/* <!-- Logo Starts --> */}
              <a className="navbar-brand" href="#home"><img src={Logo} alt={"logo"}/></a>
              {/* <!-- #Logo Ends --> */}


              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

            </div>


            {/* <!-- Nav Starts --> */}
            <div className="navbar-collapse  collapse">
              <ul className="nav navbar-nav navbar-right scroll">
                 <li className="active"><a href="#home">Home</a></li>
                 <li ><a href="#about">About</a></li>
                 <li ><a href="#works">Works</a></li>
                 <li ><a href="#partners">Partners</a></li>
                 <li ><a href="#contact">Contact</a></li>                 
              </ul>
            </div>
            {/* <!-- #Nav Ends --> */}

          </div>
        </div>

      </div>
    </div>
{/* <!-- #Header Starts --> */}
    </div>
  )
}
