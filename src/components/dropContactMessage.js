export default function DropContactMessage() {
  return (
    <>
      <section className="pt-100 pb-100 contact_form contact-form-widget">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="form_boxcontact">
                <div className="formtitle">
                  <h2>Feel free to drop us a message</h2>
                  <div className="separator_line" />
                </div>
                <form method="" name="">
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="form-field-name">Name*</label>
                      <input
                        size=""
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="form-field-field_5b0536c">
                        Company Name*
                      </label>
                      <input
                        size=""
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Designation*</label>
                      <input
                        size={1}
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Designation"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Address*</label>
                      <input
                        size={1}
                        type="tel"
                        name=""
                        id=""
                        placeholder="Address"
                        required="required"
                        className="form-control"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">City*</label>
                      <input
                        size=""
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="City"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Country*</label>
                      <select className="form-control nice-select niceclass">
                        <option>India</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Select State*</label>
                      <select
                        className="form-control niceclass"
                        name="state"
                        required=""
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">
                          Dadar and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Pin/Zip Code*</label>
                      <input
                        size={1}
                        type="email"
                        name=""
                        className="form-control"
                        id=""
                        placeholder="Pin/Zip Code"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Phone*</label>
                      <input
                        size={1}
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Phone Number"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="">Email*</label>
                      <input
                        size={1}
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Email Address"
                        required="required"
                        aria-required="true"
                      />
                    </div>
                    <div className="col-md-8">
                      <label htmlFor="">Type of Enquiry*</label>
                      <select
                        className="form-control niceclass"
                        name="enq_type"
                        id="required"
                      >
                        <option value="">Type of Enquiry</option>
                        <option value="New sales enquiry">
                          New sales enquiry
                        </option>
                        <option value="Interested in partnership">
                          Interested in partnership
                        </option>
                        <option value="Existing customer query">
                          Existing customer query
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="">Query/Comment*</label>
                      <textarea
                        name=""
                        id=""
                        className="form-control"
                        rows={4}
                        placeholder="Query/Comment"
                        defaultValue={""}
                      />
                    </div>
                    <div
                      className="col-md-12 checkbox_inputlabel"
                      style={{ margin: "0 5px" }}
                    >
                      <div className="checkbox_input">
                        <label>
                          <input type="checkbox" required="" />I authorize
                          Paramotor Digital Technology Private Limited and its
                          representatives to contact me by telephone/ email/ SMS
                          with reference to my enquiry/application. This consent
                          will override any registration for DND/DNC / NDNC.*
                        </label>
                      </div>
                    </div>
                    <div className="text-center" style={{ marginTop: 15 }}>
                      <button type="submit" className="theme-btn w-10">
                        <span>Enquire Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
