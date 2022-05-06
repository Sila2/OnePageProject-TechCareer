import React from 'react';
// import Logo from '../../public/img/logo.png';

const Logo = '/img/logo1.png';

export default function Header() {
    
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light61 bg-light61">
 
  <a className="navbar-brand" href="#home"><img src={Logo} alt="logo"/></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Anasayfa
         <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">Hakkimizda</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#works">Menu</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#partners">Yorumlar</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" role="button" data-toggle="modal" data-target="#register">
      Uye Girisi  <i className="fa fa-user"></i>
        </a>
      </li> 
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 
    {/* <!-- Modal --> */}
    <div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <form method="get" action="index.htm">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Üye Girişi</h5>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="form-control2">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" required/>
                        </div>
                        <br />
                        <div className="form-control2">
                            <label for="password">Şifre</label>
                            <input type="password" id="password" name="password" className="form-control" required/>
                        </div>
                         
                </div>
                <div className="modal-footer"> 
                    <button type="submit"  onClick={()=> {
                      // alert("Lutfen sifrenizi girin.")
                    }} className="btn btn-primary loginButton">Giris Yap</button>
                </div>
            </div>
        </div>
        </form>
    </div>
    {/* <!-- modal end register --> */}
    </div>
  )
}
