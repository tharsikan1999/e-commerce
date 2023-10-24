import React from 'react'
import belt from './images/products/belt.jpg';
import clothesone from './images/products/clothes-1.jpg'
import clothestwo from './images/products/clothes-2.jpg'
import two from './images/products/2.jpg'
import three from './images/products/3.jpg'
import star from './images/star.png'
import clock from './images/stopwatch-spp.gif'
import fire from './images/fire.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import plane from './images/plane.png';
import returnimg from './images/return.png'
import safe from './images/safe.png'


function Productpage() {
  return (
    <div className='main-box-product'>
      <div className="sub-box-product">
        <div className="box-one-img-addcart">
         <div className="left-box-product">
         <div className="sub-box-img-set">
          <div className="clone-img">
            <div className="clone-img-one">
              <img src={belt} alt="" />
            </div>
            <div className="clone-img-two">
            <img src={clothesone} alt="" />
            </div>
            <div className="clone-img-three">
            <img src={clothestwo} alt="" />
            </div>
            <div className="clone-img-four">
            <img src={two} alt="" />
            </div>
            <div className="clone-img-five">
              <img src={three} alt="" />
            </div>
          </div>
          <div className="main-img">
            <img src={two} alt="" />
          </div>
          </div>
          <div className="verify-by-shoppers">
            <div className="verify-by-shoppers-box-one">
              <FontAwesomeIcon className='faThumbsUp' icon={faThumbsUp}/>
              <p className='Verified'> Verified by shoppers </p>
            </div>
            <p className='product-always'> Product always receives high satisfaction ratings from our customers </p>
          </div>
         </div>
          <div className="right-box-product">
          <div className="img-addcart">
            <h5 className='product-title'>Cute Fluffy Leopard Print Phone Case For iPhone</h5>
            <div className="review-each-product">
              <div className="img-start">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              </div>
              <p>8 review</p>
            </div>
            <h2 className='each-product-price'>$12.00 – $15.00</h2>
            <p className='free-shipping'>Free Shipping & Returns</p>
            <div className="selling-fast">
              <img src={clock} alt="" />
              <p> Selling fast: get yours before it’s gone!</p>
              </div>
              <p className='Material'>Material</p>

              
            <h2 className='each-product-price'>$13.83</h2>
            <div className="high-demand">
              <img src={fire} alt="" />
              <p> In high demand - only 8 items left!</p>
            </div>
            <button className='add-to-cart-button'>Add To Cart</button>
            
          </div>
          </div>
        </div>
        <div className="sub-box-two-product">
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={plane} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Worldwide Shipping</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Enjoy flexible international shipping services that currently operate in over 200 countries across the world</p>
            </div>
          </div>
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={returnimg} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Free Returns</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Arrange your return for a full refund, we've got you covered with our full Buyer protection</p>
            </div>
          </div>
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={safe} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Safe Payment</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Buy with confidence using the world’s most popular and secure payment methods</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Productpage