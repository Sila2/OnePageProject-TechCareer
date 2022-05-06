import React, { Component } from 'react'
// import Menu1 from '../../public/img/menu/1.png'
// import Menu2 from '../../public/img/menu/2.png'
// import Menu3 from '../../public/img/menu/3.png'
// import Menu4 from '../../public/img/menu/4.png'
// import Menu5 from '../../public/img/menu/5.png'
// import Menu6 from '../../public/img/menu/6.png'
// import Menu7 from '../../public/img/menu/7.png'
// import Menu8 from '../../public/img/menu/8.png'

const Menu1 = '/img/menu/1.png'
const Menu2 = '/img/menu/2.png'
const Menu3 = '/img/menu/3.png'
const Menu4 = '/img/menu/4.png'
const Menu5 = '/img/menu/5.png'
const Menu6 = '/img/menu/6.png'
const Menu7 = '/img/menu/7.png'
const Menu8 = '/img/menu/8.png'



export default class Menu extends Component {
    constructor(props){
        super(props);
      }

      addButton(){
          
      }

    
  render() {
    return (
      <div>
          {/* <!-- works --> */}
<div id="works"  className=" clearfix grid"> 
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu1} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            {/* <a href={Menu1} title="1" data-gallery>Sepete Ekle</a></p>  */}
            <button className="btn btn-outline-secondary" onClick={this.addButton}>Sepete Ekle</button>          
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu2} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu2} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu3} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu3} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu4} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu4} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu5} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu5} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
     
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu6} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu6} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu7} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu7} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu8} alt="img01"/>
        <figcaption>
            <h2>Hamburger</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu8} title="1" data-gallery>Sepete Ekle</a></p>            
        </figcaption>
    </figure>

     
</div>
{/* <!-- works --> */}
      </div>
    )
  }
}
