import { Link } from "react-router-dom";

function Properties() {
  return (
    <div>
<div>
  {/* ***** Preloader Start *****  */}
  <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
  {/* ***** Preloader End ***** */}
  <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ul className="info">
            <li><i className="fa fa-envelope" /> info@company.com</li>
            <li><i className="fa fa-map" /> Sunny Isles Beach, FL 33160</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4">
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook" /></a></li>
            <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-linkedin" /></a></li>
            <li><a href="#"><i className="fab fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            {/* <a href="index.html" className="logo">
              <h1>Villa</h1>
            </a> */}
            <Link to="/" className="logo">
            <h1>villa</h1>
            </Link>
            
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              {/* <li><a href="index.html">Home</a></li>
              <li><a href="properties.html" className="active">Properties</a></li>
              <li><a href="property-details.html">Property Details</a></li>
              <li><a href="contact.html">Contact Us</a></li> */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Properties">Properties</Link></li>
              <li><Link to="/PropertyDetails">Property Details</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
              
              
              <li><a href="#"><i className="fa fa-calendar" /> Schedule a visit</a></li>
            </ul>   
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="breadcrumb"><a href="#">Home</a> / Properties</span>
          <h3>Properties</h3>
        </div>
      </div>
    </div>
  </div>
  <div className="section properties">
    <div className="container">
      <ul className="properties-filter">
        <li>
          <a className="is_active" href="#!" data-filter="*">Show All</a>
        </li>
        <li>
          <a href="#!" data-filter=".adv">Apartment</a>
        </li>
        <li>
          <a href="#!" data-filter=".str">Villa House</a>
        </li>
        <li>
          <a href="#!" data-filter=".rac">Penthouse</a>
        </li>
      </ul>
      <div className="row properties-box">
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-01.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$2.264.000</h6>
            <h4><a href="property-details.html">18 Old Street Miami, OR 97219</a></h4>
            <ul>
              <li>Bedrooms: <span>8</span></li>
              <li>Bathrooms: <span>8</span></li>
              <li>Area: <span>545m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>6 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-02.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$1.180.000</h6>
            <h4><a href="property-details.html">54 New Street Florida, OR 27001</a></h4>
            <ul>
              <li>Bedrooms: <span>6</span></li>
              <li>Bathrooms: <span>5</span></li>
              <li>Area: <span>450m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>8 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-03.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$1.460.000</h6>
            <h4><a href="property-details.html">26 Mid Street Portland, OR 38540</a></h4>
            <ul>
              <li>Bedrooms: <span>5</span></li>
              <li>Bathrooms: <span>4</span></li>
              <li>Area: <span>225m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>10 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-04.jpg" alt /></a>
            <span className="category">Apartment</span>
            <h6>$584.500</h6>
            <h4><a href="property-details.html">12 Hope Street Portland, OR 12650</a></h4>
            <ul>
              <li>Bedrooms: <span>4</span></li>
              <li>Bathrooms: <span>3</span></li>
              <li>Area: <span>125m2</span></li>
              <li>Floor: <span>25th</span></li>
              <li>Parking: <span>2 cars</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-05.jpg" alt /></a>
            <span className="category">Penthouse</span>
            <h6>$925.600</h6>
            <h4><a href="property-details.html">34 Hope Street Portland, OR 42680</a></h4>
            <ul>
              <li>Bedrooms: <span>4</span></li>
              <li>Bathrooms: <span>4</span></li>
              <li>Area: <span>180m2</span></li>
              <li>Floor: <span>38th</span></li>
              <li>Parking: <span>2 cars</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-06.jpg" alt /></a>
            <span className="category">Modern Condo</span>
            <h6>$450.000</h6>
            <h4><a href="property-details.html">22 Hope Street Portland, OR 16540</a></h4>
            <ul>
              <li>Bedrooms: <span>3</span></li>
              <li>Bathrooms: <span>2</span></li>
              <li>Area: <span>165m2</span></li>
              <li>Floor: <span>26th</span></li>
              <li>Parking: <span>3 cars</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-03.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$980.000</h6>
            <h4><a href="property-details.html">14 Mid Street Miami, OR 36450</a></h4>
            <ul>
              <li>Bedrooms: <span>8</span></li>
              <li>Bathrooms: <span>8</span></li>
              <li>Area: <span>550m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>12 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-02.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$1.520.000</h6>
            <h4><a href="property-details.html">26 Old Street Miami, OR 12870</a></h4>
            <ul>
              <li>Bedrooms: <span>12</span></li>
              <li>Bathrooms: <span>15</span></li>
              <li>Area: <span>380m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>14 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
          <div className="item">
            <a href="property-details.html"><img src="assets/images/property-01.jpg" alt /></a>
            <span className="category">Luxury Villa</span>
            <h6>$3.145.000</h6>
            <h4><a href="property-details.html">34 New Street Miami, OR 24650</a></h4>
            <ul>
              <li>Bedrooms: <span>10</span></li>
              <li>Bathrooms: <span>12</span></li>
              <li>Area: <span>860m2</span></li>
              <li>Floor: <span>3</span></li>
              <li>Parking: <span>10 spots</span></li>
            </ul>
            <div className="main-button">
              <a href="property-details.html">Schedule a visit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li><a className="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&gt;&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. 
          Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
      </div>
    </div>
  </footer>
</div>

      
    </div>
  )
}

export default Properties ;
