export default function Footer() {
  return (
    <>
      <footer className="footer footer-3">
        <div className="footer-top pt-100 pb-0">
          <div className="container">
            <div className="row gx-0 pt-45">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start ms-0">
                <div className="footer-widget wow fadeInLeft mb-30">
                  <div className="footer-text mb-20">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#"> Our core Businesses </a>
                      </li>
                      <li>
                        <a href="#"> Our 'company purpose'</a>
                      </li>
                      <li>
                        <a href="#"> Jobs &amp; Careers</a>
                      </li>
                      <li>
                        <a href="#"> Our Responsibility</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Solutions</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#"> Compliance Publications</a>
                      </li>
                      <li>
                        <a href="#"> Annual Reports</a>
                      </li>
                      <li>
                        <a href="#"> CSR Reports</a>
                      </li>
                      <li>
                        <a href="#"> Financial documentation</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 text-center text-sm-start me-0 ms-lg-5">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Products</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">Gift Card</a>
                      </li>
                      <li>
                        <a href="#">Prepaid Gift Card</a>
                      </li>
                      <li>
                        <a href="#">Our job offers</a>
                      </li>
                      <li>
                        <a href="#">Our websites</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        {/* copyright area */}
        <div className="copyright pt-10 pb-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 text-left my-3 my-sm-0">
                <div className="copyright-text">
                  <p>Copyright @2024 Paramotordt. All rights reserved.</p>
                </div>
              </div>
              <div className="col-lg-4 text-right text-lg-end">
                <div className="social-button">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
