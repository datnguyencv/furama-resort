export function BodyTopFirstBackground() {
  return (
    <>
      <div
        className="hero-wrap"
        style={{ backgroundImage: 'url("/images/bg_1.jpg")' }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
            <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
              <div className="text">
                <p className="breadcrumbs mb-2">
                  <span className="mr-2">
                    <a href="index.html">FURAMA</a>
                  </span>{" "}
                  <span>RESORT</span>
                </p>
                <h1 className="mb-4 bread">Welcome to Resort</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
