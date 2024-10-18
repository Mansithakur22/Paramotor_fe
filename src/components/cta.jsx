

  export default function CTA (){
    return (
    <>
 <section className="cta-area pt-60">
  <div className="container">
    <div className="row">
      <div className="col-md-12 position-relative">
        <div className="cta cta-bg-primary">
          <div className="shapes">
            <img src="images/footer_cta/icon-1.png" alt="shape" />
            <img
              data-parallax='{"x": 150, "y": 0, "rotateZ":-0}'
              src="images/footer_cta/icon-2.png"
              alt="shape"
            />
            <img src="images/footer_cta/icon-3.png" alt="shape" />
            <img src="images/footer_cta/icon-4.png" alt="shape" />
            <img src="images/footer_cta/icon-5.png" alt="shape" />
            <img
              data-parallax='{"x": 400, "y": 0, "rotateZ":0}'
              src="images/footer_cta/icon-6.png"
              alt="shape"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="cta-content wow fadeInRight">
                <h2 className="mb-10">Have any question?</h2>
                <p>
                  Ask us anythisg.Do you have a love question you want us to
                  answer?
                </p>
              </div>
            </div>
            <div className="col-md-5 text-center text-md-end">
              <div className="cta-content text-md-end mt-3 mt-md-0">
                <a
                  href="#"
                  className="theme-btn theme-btn-alt wow fadeInLeft m-0"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
    )
  }
