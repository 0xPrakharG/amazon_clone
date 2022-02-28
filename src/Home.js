import React from 'react'
import Product from './Product'
import styled from 'styled-components'

function Home() {
  return (
    <Banner>
      <div class="home">
        <img class="home__image"src="../images/banner.jpg" alt="" />
      </div>
      {/* Product id, title, price, rating, image */}
      <div className="home__row">

      <Product id="12321341"
      title="The Lean Startup : How Constant Innovation Creates Radical Successful Businesses Paperback"
      price={400}
      rating={5}
      image="../images/product1.jpg"/>

      <Product id="12321342"
      title="Philips Amaze HL7576/00 600-Watt Juicer Mixer Grinder with 3 Jars (Celestial Blue/Bright White)"
      price={4399}
      rating={5}
      image="../images/product2.jpg"/>

      </div>

      <div className="home__row">

      <Product id="12321343"
      title="Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
      price={30900}
      rating={5}
      image="../images/product3.jpg"/>

      <Product id="12321344"
      title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
      price={6999}
      rating={5}
      image="../images/product4.jpg"/>

      <Product id="12321345"
      title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 256GB) - Space Grey (9th Generation)"
      price={44900}
      rating={5}
      image="../images/product5.jpg"/>

      </div>

      <div class="home__row">

        <Product id="12321346"
      title="Samsung 163 cm (65 inches) Q Series QA65Q7FNAK 4K LED Smart TV (Black)"
      price={341900}
      rating={5}
      image="../images/product6.jpg"/>

      </div>
      {/* Product */}
    </Banner>
  )
}

export default Home



const Banner = styled.div`
  background-color: rgb(234,237,237);
  max-width:1250px;
  margin: 0 auto;
  padding-bottom: 10px;
  .home{
    max-width:1250px;
    margin: 0 auto;
  }
  .home__image{
    width: 100%;
    mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
    z-index:-1;
    margin-bottom: -150px;
  }
  .home__row{
    display:flex;
    z-index:1;
    margin:0px 10px;
  }
`
