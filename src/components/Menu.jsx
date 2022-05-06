import React, { Component } from 'react'
import Menu1 from '../../public/img/menu/1.png'
import Menu2 from '../../public/img/menu/2.png'
import Menu3 from '../../public/img/menu/3.png'
import Menu4 from '../../public/img/menu/4.png'
import Menu5 from '../../public/img/menu/5.png'
import Menu6 from '../../public/img/menu/6.png'
import Menu7 from '../../public/img/menu/7.png'
import Menu8 from '../../public/img/menu/8.png'



export default class Menu extends Component {

    
  render() {
    return (
      <div>
          {/* <!-- works --> */}
<div id="works"  className=" clearfix grid"> 
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu1} alt="img01"/>
        <figcaption>
            <h2>Adidas</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu1} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu2} alt="img01"/>
        <figcaption>
            <h2>Jeans</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu2} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu3} alt="img01"/>
        <figcaption>
            <h2>Metal</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu3} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu4} alt="img01"/>
        <figcaption>
            <h2>Vintage</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu4} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu5} alt="img01"/>
        <figcaption>
            <h2>Typers</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu5} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
     
     <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu6} alt="img01"/>
        <figcaption>
            <h2>Marco</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu6} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu7} alt="img01"/>
        <figcaption>
            <h2>Chinese</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu7} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>
    <figure className="effect-oscar  wowload fadeInUp">
        <img src={Menu8} alt="img01"/>
        <figcaption>
            <h2>Dicrap</h2>
            <p>Lily likes to play with crayons and pencils<br/>
            <a href={Menu8} title="1" data-gallery>View more</a></p>            
        </figcaption>
    </figure>

     
</div>
{/* <!-- works --> */}
      </div>
    )
  }
}
