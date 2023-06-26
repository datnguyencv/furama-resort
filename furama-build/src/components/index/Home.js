import { Anchor } from "../layout/commons/Anchor";
import { WelcomeTop } from "./WelcomeTop";
import React from "react";

export default function Home() {
  return (
    <>
      <WelcomeTop />
      <section className="home-slider owl-carousel">
        <div
          className="slider-item"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_1.jpg)`,
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-12 ftco-animate text-center">
                <div className="text mb-5 pb-3">
                  <h1 className="mb-3">Welcome To Furama Resort</h1>
                  <h2>Hotels &amp; Resorts</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_2.jpg)`,
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-12 ftco-animate text-center">
                <div className="text mb-5 pb-3">
                  <h1 className="mb-3">Enjoy A Luxury Experience</h1>
                  <h2>Join With Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-reception-bell" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">25/7 Front Desk</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-serving-dish" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Restaurant Bar</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-car" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Transfer Services</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services py-4 d-block text-center">
                <div className="d-flex justify-content-center">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-spa" />
                  </div>
                </div>
                <div className="media-body p-2 mt-2">
                  <h3 className="heading mb-3">Spa Suites</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Our Rooms</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-1.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Suite Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$120.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-2.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Family Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$20.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-3.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Furama Resort Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$150.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-4.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Classic Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$130.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-5.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Superior Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$300.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-6 col-lg-4 ftco-animate">
              <div className="room">
                <a
                  href="rooms.html"
                  className="img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/room-6.jpg)`,
                  }}
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-search2" />
                  </div>
                </a>
                <div className="text p-3 text-center">
                  <h3 className="mb-3">
                    <a href="rooms.html">Luxury Room</a>
                  </h3>
                  <p>
                    <span className="price mr-2">$500.00</span>{" "}
                    <span className="per">per night</span>
                  </p>
                  <hr />
                  <p className="pt-1">
                    <a href="room-single.html" className="btn-custom">
                      View Room Details{" "}
                      <span className="icon-long-arrow-right" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 ftco-animate">
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div
                          className="user-img mb-4"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/person_1.jpg)`,
                          }}
                        >
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div
                          className="user-img mb-4"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/person_2.jpg)`,
                          }}
                        >
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div
                          className="user-img mb-4"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/person_3.jpg)`,
                          }}
                        >
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div
                          className="user-img mb-4"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/person_1.jpg)`,
                          }}
                        >
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div
                          className="user-img mb-4"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/person_1.jpg)`,
                          }}
                        >
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Anchor
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/image_1.jpg")`,
                  }}
                ></Anchor>
                <div className="text mt-3 d-block">
                  <h3 className="heading mt-3">
                    <a href="/">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="/">Dec 6, 2018</a>
                    </div>
                    <div>
                      <a href="/">Admin</a>
                    </div>
                    <div>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Anchor
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/image_2.jpg")`,
                  }}
                ></Anchor>
                <div className="text mt-3">
                  <h3 className="heading mt-3">
                    <a href="/">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="/">Dec 6, 2018</a>
                    </div>
                    <div>
                      <a href="/">Admin</a>
                    </div>
                    <div>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Anchor
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/image_3.jpg")`,
                  }}
                ></Anchor>
                <div className="text mt-3">
                  <h3 className="heading mt-3">
                    <a href="/">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="/">Dec 6, 2018</a>
                    </div>
                    <div>
                      <a href="/">Admin</a>
                    </div>
                    <div>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <Anchor
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/image_4.jpg")`,
                  }}
                ></Anchor>
                <div className="text mt-3">
                  <h3 className="heading mt-3">
                    <a href="/">
                      Even the all-powerful Pointing has no control about the
                      blind texts
                    </a>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <a href="/">Dec 6, 2018</a>
                    </div>
                    <div>
                      <a href="/">Admin</a>
                    </div>
                    <div>
                      <a href="/" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="instagram">
        <div className="container-fluid">
          <div className="row no-gutters justify-content-center pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2>
                <span>Instagram</span>
              </h2>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-sm-12 col-md ftco-animate">
              <a
                href="/public/images/insta-1.jpg"
                className="insta-img image-popup"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-1.jpg)`,
                }}
              >
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center" />
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md ftco-animate">
              <a
                href="public/images/insta-2.jpg"
                className="insta-img image-popup"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-2.jpg)`,
                }}
              >
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center" />
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md ftco-animate">
              <a
                href="public/images/insta-3.jpg"
                className="insta-img image-popup"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-3.jpg)`,
                }}
              >
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center" />
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md ftco-animate">
              <a
                href="public/images/insta-4.jpg"
                className="insta-img image-popup"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-4.jpg)`,
                }}
              >
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center" />
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md ftco-animate">
              <a
                href="public/images/insta-5.jpg"
                className="insta-img image-popup"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-5.jpg)`,
                }}
              >
                <div className="icon d-flex justify-content-center">
                  <span className="icon-instagram align-self-center" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
