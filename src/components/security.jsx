import Script from "next/script";
import React from "react";

export default function Security() {
  return (
    <>
     <section className="security-area">
  <div className="security-priority pt-90 pb-95 text-center">
    <div className="shapes">
      <img src="images/yoursecurityourpriority/shape-1.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-2.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-3.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-4.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-5.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-6.png" alt="shape" />
      <img src="images/yoursecurityourpriority/shape-1.png" alt="shape" />
      <img
        data-parallax='{"x": -60, "y": 150, "rotateZ":-15}'
        src="images/yoursecurityourpriority/shape-7.png"
        alt="shape"
      />
      <img
        data-parallax='{"x": 0, "y": -150, "rotateZ":0}'
        src="images/yoursecurityourpriority/shape-8.png"
        alt="shape"
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 mx-auto">
          <img
            src="images/yoursecurityourpriority/security-priority.png"
            alt="icon"
          />
          <h2 className="mt-4 mb-3">Your security. Our priority.</h2>
          <p>
            We always have your security in mind. Rest easy knowing your data is
            protected with 128-bit encryption. <a href="#">Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
