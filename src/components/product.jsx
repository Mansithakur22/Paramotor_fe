export default function Product() {
  return (
    <>
    <section className="pt-60 pb-60 bg-white products_section">
  <div className="container">
    <div className="section-title text-center">
      <h2 className="mb-0 wow fadeInUp">Our Products</h2>
      <p className="subtext_center">
        Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has
        been the industry's standard dummy text
      </p>
    </div>
    <div className="product_paddding">
      <div className="row mt-5">
        <div className="col-md-4 col-sm-6">
          <div className="product_list">
            <div className="product_img">
              <img src="images/pems.png" alt="" width="" height="" />
            </div>
            <h2 className="heading-titleproduct">Green</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="elementor-divider">
              <span className="elementor-divider-separator"> </span>
            </div>
            <ul className="product_ullist">
              <li>
                Only Your Curent to{" "}
                <span className="style-color">
                  <span>USD</span>
                </span>
              </li>
              <li>
                Only Valid on{" "}
                <span className="style-color">
                  <span>Your Country</span>
                </span>
              </li>
              <li>
                Unlimited{" "}
                <span className="style-color">
                  <span>Transaction</span>
                </span>
              </li>
            </ul>
            <div className="productbtn">
              <a className="custom_btn" href="#">
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="product_list active_product">
            <div className="product_img">
              <img src="images/prepaidcard.png" alt="" width="" height="" />
            </div>
            <h2 className="heading-titleproduct">Silver</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="elementor-divider">
              <span className="elementor-divider-separator"> </span>
            </div>
            <ul className="product_ullist">
              <li>
                Your Curent to <span>USD, EUR, CNY</span>
              </li>
              <li>
                Valid in <span>5 Country</span>
              </li>
              <li>
                Unlimited{" "}
                <span className="style-color">
                  <span>Transaction</span>
                </span>
              </li>
            </ul>
            <div className="productbtn">
              <a className="custom_btn" href="#">
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="product_list">
            <div className="product_img">
              <img src="images/thirdcard.png" alt="" width="" height="" />
            </div>
            <h2 className="heading-titleproduct">Black</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="elementor-divider">
              <span className="elementor-divider-separator"> </span>
            </div>
            <ul className="product_ullist">
              <li>
                Accept <span>All Curency</span>
              </li>
              <li>
                Valid in <span>10 Country</span>
              </li>
              <li>
                Unlimited <span>Transaction</span>
              </li>
            </ul>
            <div className="productbtn">
              <a className="custom_btn" href="#">
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <p className="linkbtnr">
          Get More Special Offer{" "}
          <a href="#" className="linkbtn">
            Contact us <i className="fa fa-arrow-right" />
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
