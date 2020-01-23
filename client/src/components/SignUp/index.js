import React from "react";
import "./style.css";

export default function SignupComponent() {
  // const classes = useStyles();

  return (
    <section className="view intro-2">
      <div className="mask rgba-gradient">
        <div className="container h-100 d-flex justify-content-center align-items-center">
          <div className="row  pt-5 mt-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h2 className="font-weight-bold my-4 text-center mb-5 mt-4 font-weight-bold">
                    <strong>REGISTER</strong>
                  </h2>
                  <hr />
                    <div className="col-md-10">
                      <div className="md-form">
                        <i className="fas fa-user prefix"></i>
                        <input
                          type="text"
                          id="orangeForm-name"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-name">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="text"
                          id="orangeForm-email"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-email">Your email</label>
                      </div>

                      <div className="md-form">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="orangeForm-pass"
                          className="form-control"
                        />
                        <label htmlFor="orangeForm-pass">Your password</label>
                      </div>

                      <div className="text-center">
                        <button className="btn btn-indigo btn-rounded mt-5">
                          Sign up
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
