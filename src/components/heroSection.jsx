import React from "react";

export default function HeroSection() {
  return (
  <>
  <section
  className="banner-area-2 pt-100 pb-40"
  id="banner_animation"
  style={{ backgroundSize: "auto", backgroundPosition: "top left" }}
>
  <div className="container">
    <div className="background_banner">
      <div className="row align-items-center h-100">
        <div className="col-md-7 col-sm-9">
          <div className="banner-content">
            <h1 className="wow fadeInUp mb-0">
              Paramotor Prepaid
              <br />
              Gift Card
            </h1>
            <p className="wow fadeInUp mt-50" data-wow-delay="0.3s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              data-wow-delay="0.5s"
              className="wow fadeInUp custom_btn mt-20"
            >
              Know More{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </>
  );
}
