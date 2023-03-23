import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div className="home-container01">
        <header data-role="Accordion" className="home-header">
          <div className="home-container02">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="home-image"
            />
            <div className="home-container03">
              <div className="home-container04">
                <Link to="/" className="home-navlink">
                  <img
                    alt="image"
                    src="https://cdn-icons-png.flaticon.com/512/5900/5900195.png"
                    className="home-image01"
                  />
                </Link>
              </div>
              <div className="home-container05">
                <Link to="/" className="home-navlink1">
                  <img
                    alt="image"
                    src="https://i.ibb.co/GRZBZnY/flight.png"
                    className="home-image02"
                  />
                </Link>
              </div>
              <div className="home-container06">
                <Link to="/" className="home-navlink2">
                  <img
                    alt="image"
                    src="https://cdn-icons-png.flaticon.com/512/993/993696.png"
                    className="home-image03"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <nav className="home-nav">
            <div className="home-links-container">
              <a href="#resources" className="home-link Anchor">
                Resources
              </a>
              <a href="#process" className="home-link1 Anchor">
                Services
              </a>
              <a href="#ourstory" className="home-link2 Anchor">
                Our story
              </a>
            </div>
          </nav>
          <div data-role="AccordionHeader" className="home-accordion-header">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="AccordionContent" className="home-accordion-content">
            <div className="home-nav1"></div>
          </div>
        </header>
        <div id="resources" className="home-hero">
          <div className="home-container07">
            <div className="home-content-container">
              <div className="home-hero-text">
                <h1 className="home-heading Section-Heading">
                  Make Memories in Turkey
                </h1>
                <span className="home-text">
                  Welcome to our platform for booking flights and hotels and
                  exploring investment opportunities in Turkey. We offer a wide
                  range of options and expert guidance from our experienced
                  team. Start exploring Turkey today and discover all it has to
                  offer. Contact us if you need assistance.
                </span>
                <a href="#process" className="home-cta-btn button">
                  <span>
                    <span className="Anchor">Discover Turkey!</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
            <div className="home-container08">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-blog">
          <div className="home-blog-post-card">
            <img
              alt="image"
              src="/playground_assets/castle-icon-simple-vector-99094587-removebg-preview-200w.png"
              className="home-image04"
            />
            <h1 className="home-text004">Our Values</h1>
            <span className="home-text005">
              <span>
                Integrity, we are steadfast in our principles, fair, honest, and
                trustworthy for all our stakeholders.
              </span>
              <br className="home-text007"></br>
              <br></br>
              <span>
                Respect, we treat our customers and employees with courtesy,
                appreciation and respect. in all of our business and the
                products that we offer.
              </span>
              <br className="home-text010"></br>
              <br></br>
              <span>
                We work as one team, trust each other and work together to
                achieve excellence.
              </span>
              <br className="home-text013"></br>
              <br></br>
              <span>
                Value We deliver exceptional real value to our customers,
                shareholders and employees.
              </span>
            </span>
          </div>
          <div className="home-blog-post-card1">
            <img
              alt="image"
              src="/playground_assets/1004017-removebg-preview-200h.png"
              className="home-image05"
            />
            <h1 className="home-text016">OUr message</h1>
            <span className="home-text017">
              <span>
                We apply the highest possible standards in all our business.
                Innovation is our motive, initiative is our motive, and
                leadership is our way in words and deeds. We encourage our
                customers to spend on investment instead of spending on
                consumption.
              </span>
              <br className="home-text019"></br>
              <br></br>
            </span>
          </div>
          <div className="home-blog-post-card2">
            <img
              alt="image"
              src="/playground_assets/eye-icon-vector-design-web-260nw-1714712071-removebg-preview-200w.png"
              className="home-image06"
            />
            <h1 className="home-text021">
              <span>Our Vision</span>
              <br></br>
            </h1>
            <span className="home-text024">
              <span>
                Our whole philosophy revolves around customer satisfaction by
                taking advantage of distinguished ideas, and we are working to
                provide high-level solutions to our valued customers to match
                their expectations by combining finding solutions to problems
                and providing effective and new services that work to connect
                the seller and buyer with ease through commercial mediation.
                Today one of the most prominent methods adopted
              </span>
              <br className="home-text026"></br>
              <br></br>
            </span>
          </div>
        </div>
        <div id="inspiration" className="home-features">
          <div className="home-heading-container">
            <h2 className="home-text028 Section-Heading">
              Which are the greatest things about it?
            </h2>
          </div>
          <div className="home-cards-container">
            <div className="home-features-card">
              <div className="home-icon-container">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container">
                <span className="home-heading1">Fruitful partnerships</span>
                <span className="home-text029">
                  <span className="Card-Text">
                    Provide a helping hand to all parties, the seller and the
                    buyer, until they reach successful contracts, partnerships
                    and business alliances.
                  </span>
                  <br></br>
                  <br className="Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card1">
              <div className="home-icon-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon09">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container1">
                <span className="home-heading2">
                  <span>Investor solutions</span>
                  <br className="Card-Heading"></br>
                </span>
                <span className="home-text035">
                  <span className="home-text036 Card-Text">
                    Problem solutions and provide appropriate services to
                    investors and a customer list on demand.
                  </span>
                  <br></br>
                  <br className="home-text038 Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card2">
              <div className="home-icon-container2">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container2">
                <span className="home-heading3">
                  <span>Commercial mediation</span>
                  <br className="Card-Heading"></br>
                </span>
                <span className="home-text041">
                  <span className="home-text042 Card-Text">
                    Commercial mediation, coordination and follow-up services
                    until the commercial process is completed.
                  </span>
                  <br></br>
                  <br className="home-text044 Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card3">
              <div className="home-icon-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon15">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container3">
                <span className="home-heading4">
                  <span>Facilitate the request</span>
                  <br className="Card-Heading"></br>
                </span>
                <span className="home-text047">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="home-features-card4">
              <div className="home-icon-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container4">
                <span className="home-heading5">
                  <span>Investment opportunities</span>
                  <br className="Card-Heading"></br>
                </span>
                <span className="home-text050">
                  <span>
                    Search for the best available and appropriate investment
                    opportunities for each field separately.
                  </span>
                  <br></br>
                  <br className="home-text053 Card-Text"></br>
                  <br className="home-text054 Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card5">
              <div className="home-icon-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon21">
                  <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                  <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                </svg>
              </div>
              <div className="home-text-container5">
                <span className="home-heading6">Marketing studies</span>
                <span className="home-text055">
                  <span className="Card-Text">
                    Do a full marketing study on the market and competitors and
                    provide available
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="Card-Text">opportunities</span>
                  <span className="Card-Text">
                    {' '}
                    and appropriate marketing offers.
                  </span>
                  <br></br>
                  <br className="Card-Text"></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="process" className="home-services">
          <div className="home-container09">
            <h1 className="home-text061">Services</h1>
          </div>
          <div className="home-heading-container1">
            <div className="home-container10">
              <h1 className="home-text062 Section-Heading">
                More things to explore
              </h1>
              <span className="home-text063">
                <span className="Section-Text">
                  We offer a range of services that are designed to meet your
                  travel needs in Turkey. Whether you&apos;re looking to book a
                  flight or hotel, or want to explore investment opportunities
                  across Turkey, we&apos;ve got you covered.
                </span>
                <br></br>
                <br className="Section-Text"></br>
              </span>
            </div>
            <Player
              src="https://assets4.lottiefiles.com/packages/lf20_ca87x53s3t.json"
              loop
              speed="0.8"
              autoplay
              background="transparent"
              className="home-lottie-node"
            ></Player>
          </div>
          <div className="home-cards-container1">
            <Link to="/" className="home-navlink3">
              <div className="home-service-card">
                <h3 className="home-text067">Flight</h3>
                <span className="home-text068">
                  <span className="Card-Text">
                    Our travel agency specializes in booking flights to and from
                    Turkey. We work with major airlines to provide you with the
                    best flight options at the most affordable prices. Our team
                    of travel experts can help you find the perfect flight that
                    meets your needs and budget.
                  </span>
                  <br></br>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="home-container11">
                  <span className="home-link3">Book A Flight Right Now </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M942 412q6 26-7 48t-39 30q-248 66-412 110l-226 60-68 20-112-192 62-16 84 64 212-56-176-306 82-22 294 274 228-60q26-8 49 6t29 40zM106 810h812v86h-812v-86z"></path>
                  </svg>
                </div>
              </div>
            </Link>
            <Link to="/" className="home-navlink4">
              <div className="home-service-card1">
                <h3 className="home-text073">Hotels</h3>
                <span className="home-text074">
                  <span className="Card-Text">
                    We also offer hotel booking services in Turkey. We work with
                    a range of hotels across the country to provide you with the
                    best accommodations for your travel needs. Whether
                    you&apos;re looking for a luxury hotel or a budget-friendly
                    option, we can help you find the perfect hotel for your
                    stay.
                  </span>
                  <br></br>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="home-container12">
                  <span className="home-link4">
                    <span>
                      Book Your
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      Hotel
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Right Now</span>
                    <br className="home-text082"></br>
                    <br></br>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M810 298q70 0 121 51t51 121v384h-86v-128h-768v128h-86v-640h86v384h342v-300h340zM298 554q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
                  </svg>
                </div>
              </div>
            </Link>
            <Link to="/" className="home-navlink5">
              <div className="home-service-card2">
                <h3 className="home-text084">
                  <span>Investment</span>
                  <br></br>
                </h3>
                <span className="home-text087">
                  <span className="Card-Text">
                    Our investment consulting services are designed to help you
                    invest in the growing Turkish economy. We offer a range of
                    investment opportunities, from real estate to manufacturing,
                    and work with our clients to develop customized investment
                    plans that meet their specific goals and objectives. We have
                    a team of experienced professionals who are experts in the
                    Turkish market and can help you navigate the complexities of
                    investing in Turkey.
                  </span>
                  <br className="home-text089"></br>
                  <br className="Card-Text"></br>
                  <span className="Card-Text">
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <div className="home-container13">
                  <span className="home-link5">
                    <span>Explore All The Investment</span>
                    <br></br>
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M704 0c-176.73 0-320 143.268-320 320 0 20.026 1.858 39.616 5.376 58.624l-389.376 389.376v192c0 35.346 28.654 64 64 64h64v-64h128v-128h128v-128h128l83.042-83.042c34.010 12.316 70.696 19.042 108.958 19.042 176.73 0 320-143.268 320-320s-143.27-320-320-320zM799.874 320.126c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="home-container14">
            <div className="home-heading-container2">
              <div className="home-container15">
                <h1 className="home-text096">
                  Double Your Profit by Investing In Turkey 
                </h1>
                <span className="home-text097">
                  <span className="Section-Text">
                    We offer a range of services that are designed to meet your
                    travel needs in Turkey. Whether you&apos;re looking to book
                    a flight or hotel, or want to explore investment
                    opportunities across Turkey, we&apos;ve got you covered.
                  </span>
                  <br></br>
                  <br className="Section-Text"></br>
                </span>
              </div>
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_nkrg6ju7.json"
                loop
                speed="1"
                autoplay
                background="transparent"
                className="home-lottie-node1"
              ></Player>
            </div>
            <div className="home-blog1">
              <div className="home-blog-post-card3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxlLWNvbW1lcmNlfGVufDB8fHx8MTY3OTA5MTAyMA&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image07"
                />
                <div className="home-container16">
                  <span className="home-text101">
                    Turkey is the 18th largest market for eCommerce with a
                    predicted revenue of US$22,983.4 million by 2023, placing it
                    ahead of Thailand. Revenue is expected to show a compound
                    annual growth rate (CAGR 2023-2027) of 14.5%, resulting in a
                    projected market volume of US$39,441.6 million by 2027
                  </span>
                  <div className="home-separator1"></div>
                  <span className="home-text102">E-Commerce</span>
                </div>
              </div>
              <div className="home-container17">
                <div className="home-blog-post-card4">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjc5MDkwODc1&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image08"
                  />
                  <div className="home-container18">
                    <span className="home-text103">
                      One of the most important advantages of real estate
                      investment in Turkey is the guaranteed return on
                      investment. A foreign investor can purchase residential or
                      commercial property and receive a guaranteed annual return
                      of up to 10% of the property&apos;s value.
                    </span>
                    <div className="home-separator2"></div>
                    <span className="home-text104">Real Estate</span>
                  </div>
                </div>
                <div className="home-blog-post-card5">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"
                    className="home-image09"
                  />
                  <div className="home-container19">
                    <span className="home-text105">
                      The stock market is the name of a market where the
                      transactions continue through a broker. Patience,
                      experience, knowledge, and some critical strategies are
                      required to be successful in this market
                    </span>
                    <div className="home-separator3"></div>
                    <span className="home-text106">
                      Istanbul Stock Exchange (BİST)
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-blog-post-card6">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHx0cmF2ZWx8ZW58MHx8fHwxNjc5MDc2NTkw&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className="home-image10"
                />
                <div className="home-container20">
                  <span className="home-text107">
                    Tourism Revenues in Turkey averaged 4304.91 USD Million from
                    1990 until 2022, reaching an all time high of 17835.00 USD
                    Million in the third quarter of 2022 and a record low of
                    294.00 USD Million in the first quarter of 1990.
                  </span>
                  <div className="home-separator4"></div>
                  <span className="home-text108">Tourism</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div className="home-section-separator1"></div>
        <div id="ourstory" className="home-our-story">
          <div className="home-container21">
            <h1 className="home-text109">Our Story</h1>
          </div>
          <div className="home-container22">
            <div className="home-gallery">
              <div className="home-container23">
                <div className="home-container24">
                  <div className="home-container25">
                    <div className="home-gallery-card">
                      <div className="home-container26">
                        <div className="home-container27">
                          <h2 className="home-text110">Project Title</h2>
                          <span className="home-text111">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </span>
                          <span className="home-text112">SHOW MORE</span>
                        </div>
                      </div>
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx0dXJrZXl8ZW58MHx8fHwxNjc5MTcyNjQ5&amp;ixlib=rb-4.0.3&amp;h=1000"
                        className="home-image11"
                      />
                    </div>
                  </div>
                  <div className="home-container28">
                    <div className="home-gallery-card1">
                      <div className="home-container29">
                        <div className="home-container30">
                          <h2 className="home-text113">Project Title</h2>
                          <span className="home-text114">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </span>
                          <span className="home-text115">SHOW MORE</span>
                        </div>
                      </div>
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHx0dXJrZXl8ZW58MHx8fHwxNjc5MTcyNjQ5&amp;ixlib=rb-4.0.3&amp;h=1000"
                        className="home-image12"
                      />
                    </div>
                  </div>
                </div>
                <div className="home-container31">
                  <div className="home-gallery-card2">
                    <div className="home-container32">
                      <div className="home-container33">
                        <h2 className="home-text116">Project Title</h2>
                        <span className="home-text117">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                        <span className="home-text118">SHOW MORE</span>
                      </div>
                    </div>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1602941800793-78c44baca4d8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHx0dXJrZXl8ZW58MHx8fHwxNjc5MTcyNjQ5&amp;ixlib=rb-4.0.3&amp;h=1000"
                      className="home-image13"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container34">
                <div className="home-gallery-card3">
                  <div className="home-container35">
                    <div className="home-container36">
                      <h2 className="home-text119">Project Title</h2>
                      <span className="home-text120">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                      <span className="home-text121">SHOW MORE</span>
                    </div>
                  </div>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHR1cmtleXxlbnwwfHx8fDE2NzkxNzI2NDk&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image14"
                  />
                </div>
              </div>
            </div>
            <div className="home-gallery1">
              <div className="home-container37">
                <div className="home-container38">
                  <div className="home-container39">
                    <div className="home-gallery-card4">
                      <div className="home-container40">
                        <div className="home-container41">
                          <h2 className="home-text122">Project Title</h2>
                          <span className="home-text123">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </span>
                          <span className="home-text124">SHOW MORE</span>
                        </div>
                      </div>
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx0cmF2ZWx8ZW58MHx8fHwxNjc5MTc1Njg2&amp;ixlib=rb-4.0.3&amp;h=1000"
                        className="home-image15"
                      />
                    </div>
                  </div>
                  <div className="home-container42">
                    <div className="home-gallery-card5">
                      <div className="home-container43">
                        <div className="home-container44">
                          <h2 className="home-text125">Project Title</h2>
                          <span className="home-text126">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </span>
                          <span className="home-text127">SHOW MORE</span>
                        </div>
                      </div>
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGhvdGVsc3xlbnwwfHx8fDE2NzkxNzU3MDM&amp;ixlib=rb-4.0.3&amp;h=1000"
                        className="home-image16"
                      />
                    </div>
                  </div>
                </div>
                <div className="home-container45">
                  <div className="home-gallery-card6">
                    <div className="home-container46">
                      <div className="home-container47">
                        <h2 className="home-text128">Project Title</h2>
                        <span className="home-text129">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </span>
                        <span className="home-text130">SHOW MORE</span>
                      </div>
                    </div>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHx0cmF2ZWx8ZW58MHx8fHwxNjc5MTc1Njg2&amp;ixlib=rb-4.0.3&amp;h=1000"
                      className="home-image17"
                    />
                  </div>
                </div>
              </div>
              <div className="home-container48">
                <div className="home-gallery-card7">
                  <div className="home-container49">
                    <div className="home-container50">
                      <h2 className="home-text131">Project Title</h2>
                      <span className="home-text132">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                      <span className="home-text133">SHOW MORE</span>
                    </div>
                  </div>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxob3RlbHN8ZW58MHx8fHwxNjc5MTc1NzAz&amp;ixlib=rb-4.0.3&amp;w=1400"
                    className="home-image18"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <svg viewBox="0 0 1152 1024" className="home-icon30">
              <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
              <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
            </svg>
            <span className="home-text134">Customers</span>
            <h1 className="home-text135">
              <span>50</span>
            </h1>
          </div>
          <div className="home-stat1">
            <svg viewBox="0 0 1024 1024" className="home-icon33">
              <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
            </svg>
            <span className="home-text137">Projects</span>
            <h1 className="home-text138">
              <span>300</span>
            </h1>
          </div>
          <div className="home-stat2">
            <svg viewBox="0 0 1024 1024" className="home-icon35">
              <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
            </svg>
            <span className="home-text140">Cities</span>
            <h1 className="home-text141">
              <span>20</span>
            </h1>
          </div>
        </div>
        <div className="home-get-in-touch">
          <h2 className="home-text143 Section-Heading">Get in touch</h2>
          <div className="home-content-container1">
            <div className="home-form-container">
              <span className="home-heading7 BigCard-Heading">
                Send us a message
              </span>
              <input
                type="text"
                required="true"
                placeholder="Name"
                className="home-name input"
              />
              <input
                type="text"
                required="true"
                placeholder="E-mail"
                className="home-email input"
              />
              <textarea
                placeholder="Your Message"
                className="home-message textarea"
              ></textarea>
              <button className="home-cta-btn1 Anchor button">SEND</button>
            </div>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading8">Turkey</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon37">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">Address</span>
                </div>
                <div className="home-email1">
                  <svg viewBox="0 0 1024 1024" className="home-icon39">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon41"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="Section-Text">Phone Number</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon43">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon45">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon47">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="home-copyright-container">
              <svg viewBox="0 0 1024 1024" className="home-icon49">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
