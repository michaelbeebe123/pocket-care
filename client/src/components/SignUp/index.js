import React from "react";

export default function SignupComponent() {
  // const   classes = useStyles();

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
                      <div className="row pb-4 d-flex justify-content-center mb-4">
                        <h4 className="mt-3 mr-4">
                          <strong>Login with</strong>
                        </h4>

                        <div className="inline-ul text-center d-flex justify-content-center">
                          <a className="p-2 m-2 fa-lg tw-ic">
                            <i className="fab fa-twitter fa-lg indigo-text"></i>
                          </a>
                          <a className="p-2 m-2 fa-lg li-ic">
                            <i className="fab fa-linkedin-in fa-lg indigo-text">
                              {" "}
                            </i>
                          </a>
                          <a className="p-2 m-2 fa-lg ins-ic">
                            <i className="fab fa-instagram fa-lg indigo-text">
                              {" "}
                            </i>
                          </a>
                        </div>

                        <h4 className="mt-3 ml-4">
                          <strong>or:</strong>
                        </h4>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-user prefix"></i>
                        <input
                          type="text"
                          id="orangeForm-name"
                          className="form-control"
                        />
                        <label for="orangeForm-name">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-envelope prefix"></i>
                        <input
                          type="text"
                          id="orangeForm-email"
                          className="form-control"
                        />
                        <label for="orangeForm-email">Your email</label>
                      </div>

                      <div className="md-form">
                        <i className="fas fa-lock prefix"></i>
                        <input
                          type="password"
                          id="orangeForm-pass"
                          className="form-control"
                        />
                        <label for="orangeForm-pass">Your password</label>
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
