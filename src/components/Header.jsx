import React from 'react';
// import Logo from '../../public/img/logo.png';

const Logo = '/img/logo.png';

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
              <a className="navbar-brand" href="#home"><img src={Logo} alt="logo"/></a>
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
              {/* <ul className="nav navbar-nav navbar-right scroll"> */}
              <ul className="nav navbar-nav me-auto mt-2 mt-lg-0 scroll">
                 <li className="active"><a href="#home">Anasayfa</a></li>
                 <li ><a href="#about">Hakkımızda</a></li>
                 <li ><a href="#works">Menü</a></li>
                 <li ><a href="#partners">Yorumlar</a></li>              
              </ul>

              <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#register" href="#"><i class="fa fa-user">Üye Girişi</i></a>
                </li>

                {/* <!-- uye ol --> */}
              
                </ul>


                {/* sepet */}
                {/* dropdown menu */}
                <ul className="nav navbar-nav me-auto mt-2 mt-lg-0 scroll">
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-cart-circle-arrow-down"></i></a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                </ul>
            </div>
            {/* <!-- #Nav Ends --> */}



          </div>
        </div>

      </div>
    </div>
{/* <!-- #Header Starts --> */}

{/* <!-- modal start register --> */}
    {/* <!-- Modal --> */}
    <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Üye Girişi</h5>
                    <button type="button" className="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form method="get" action="index.htm">
                        <div className="form-control">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-control" required/>
                        </div>
                        <div className="form-control">
                            <label for="password">Şifre</label>
                            <input type="password" id="password" name="password" class="form-control" required/>
                        </div>
                        
                        <div className="mt-3">
                            <input type="reset" className="btn btn-danger text-uppercase" value="temizle"/>
                            <input type="submit" className="btn btn-primary text-uppercase" value="gönder"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Kapat</button>
                    <button type="button" className="btn btn-primary">Kaydet</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- modal end register --> */}
    </div>
  )
}
