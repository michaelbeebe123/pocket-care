import React from "react";
// =========================================================================================================

export function General() {
  // TODO: ASK LOGAN HOW TO USE PROPS
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            General
          </button>
        </h2>
      </div>
      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#careTabs">
        <div class="card-body">

            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">First Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Last Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Last Name"></input>
              </div>

              {/* FIXME: */}
              <div className="form-group">
                <label for="formGroupExampleInput">Date of Birth</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="YYYY-MM-DD"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Date of Birth</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="YYYY-MM-DD"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Gender</label>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Medicare Number</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="0000-000-0000"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Military ID</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="0000-000-0000"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Weight</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="000"></input>
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput">Blood Type</label>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="O-Negative">O Negative</option>
                  <option value="O-Positive">O Positive</option>
                  <option value="A-Negative">A Negative</option>
                  <option value="A-Positive">A Positive</option>
                  <option value="B-Negative">B Negative</option>
                  <option value="B-Positive">B Positive</option>
                  <option value="AB-negative">AB Negative</option>
                  <option value="AB-positive">AB Positive</option>
                </select>
              </div>
            </form>

        </div>
      </div>
    </div>
  )
}

export function Allergies() {
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            Allergies
          </button>
        </h2>
      </div>
      <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#careTabs">
        <div class="card-body">     
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Medication Allergies</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Seperate with commmas"></input>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput">Food Allergies</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Seperate with commmas"></input>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export function SpecialNeeds() {
  return (
    <div className="card">
      <div className="card-header" id="headingThree">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            Special Needs
          </button>
        </h2>
      </div>
      <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#careTabs">
        <div class="card-body">
            {/* TODO: */}
        </div>
      </div>
    </div>
  )
}

export function DoctorInformation() {
  return (
    <div className="card">
      <div className="card-header" id="headingFour">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            Doctor Information
          </button>
        </h2>
      </div>
      <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#careTabs">
        <div class="card-body">
            {/* // TODO: */}
        </div>
      </div>
    </div>
  )
}