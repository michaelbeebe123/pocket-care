import React, { Children } from "react";
// =========================================================================================================

export function General(props) {
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
            // FIXME:
            {Children}
        </div>
      </div>
    </div>
  )
}

export function Allergies(props) {
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
            // FIXME:
            {Children}
        </div>
      </div>
    </div>
  )
}

export function SpecialNeeds(props) {
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
            // FIXME:
            {Children}
        </div>
      </div>
    </div>
  )
}

export function DoctorInformation(props) {
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
            // FIXME:
            {Children}
        </div>
      </div>
    </div>
  )
}