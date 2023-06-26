export function WelcomeTop() {
  return (
    <>
      <div className="home-slider owl-carousel">
        <div
          className="slider-item"
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_1.jpg)` }}
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
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_2.jpg)` }}
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
      </div>
      <div className="ftco-section ftc-no-pb ftc-no-pt">
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_2.jpg)` }}
            >
              <a
                href="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play" />
              </a>
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
                <div className="ml-md-0">
                  <span className="subheading">
                    Welcome to Furama Resort Hotel
                  </span>
                  <h2 className="mb-4">Welcome To Our Hotel</h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
                <p>
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove, the headline of Alphabet Village and the
                  subline of her own road, the Line Lane. Pityful a rethoric
                  question ran over her cheek, then she continued her way.
                </p>
                <ul className="ftco-social d-flex">
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-google-plus" />
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="/">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}