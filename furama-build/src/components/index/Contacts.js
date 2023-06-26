export default function Contacts(){
    return (
        <>
     <div>
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
              <p>A small river named Duden flows by their place and supplies.</p>
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
              <p>A small river named Duden flows by their place and supplies.</p>
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
              <p>A small river named Duden flows by their place and supplies.</p>
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
              <p>A small river named Duden flows by their place and supplies.</p>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </section>
  <section className="instagram pt-5">
    <div className="container-fluid">
      <div className="row no-gutters justify-content-center pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <h2><span>Instagram</span></h2>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-sm-12 col-md ftco-animate">
          <a href="images/insta-1.jpg" className="insta-img image-popup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-1.jpg)`}}>
            <div className="icon d-flex justify-content-center">
              <span className="icon-instagram align-self-center" />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md ftco-animate">
          <a href="images/insta-2.jpg" className="insta-img image-popup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-2.jpg)`}}>
            <div className="icon d-flex justify-content-center">
              <span className="icon-instagram align-self-center" />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md ftco-animate">
          <a href="images/insta-3.jpg" className="insta-img image-popup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-3.jpg)`}}>
            <div className="icon d-flex justify-content-center">
              <span className="icon-instagram align-self-center" />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md ftco-animate">
          <a href="images/insta-4.jpg" className="insta-img image-popup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-4.jpg)`}}>
            <div className="icon d-flex justify-content-center">
              <span className="icon-instagram align-self-center" />
            </div>
          </a>
        </div>
        <div className="col-sm-12 col-md ftco-animate">
          <a href="images/insta-5.jpg" className="insta-img image-popup" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/insta-5.jpg)`}}>
            <div className="icon d-flex justify-content-center">
              <span className="icon-instagram align-self-center" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

        </>
    )
}