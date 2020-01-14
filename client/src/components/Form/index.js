import React from "react";

// -----------------------------------------------------------------------------------------------------------------
// TODO: I THINK THIS MIGHT BE MORE READABLE AND EASIER TO WORK WITH IF WE BROKE DOWN EACH PART OF THE FORM
//       INTO DIFFERENT FUNCTIONS. KIND OF LIKE THE FOLLOWING:
// -----------------------------------------------------------------------------------------------------------------

// export function Input(props) {
//     return (
//       <div className="form-group">
//         <input className="form-control" {...props} />
//       </div>
//     );
//   }

//   export function TextArea(props) {
//     return (
//       <div className="form-group">
//         <textarea className="form-control" rows="20" {...props} />
//       </div>
//     );
//   }

//   export function FormBtn(props) {
//     return (
//       <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//         {props.children}
//       </button>
//     );
//   }

// -----------------------------------------------------------------------------------------------------------------
// TODO: ALSO, IN ORDER TO INPUT DATA FROM THE DB WE ARE GOING TO WANT TO USE PROPS, THIS COMPONENT AS IT IS IS NOT
//       SET UP TO DYNAMICALLY RENDER INFORMATION
// -----------------------------------------------------------------------------------------------------------------

// =========================================================================================================

export function General(props) {
  return (
    <div class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button
            class="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Personal Health Snapshot
          </button>
        </h2>
      </div>
      <div
        id="collapseOne"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Username
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Date of Birth
                </span>
              </div>
              <input
                type="date"
                class="form-control"
                placeholder="Date of Birth"
                aria-label="inputDOB"
                aria-describedby="basic-addon2"
              />
            </div>
            <hr size="3"></hr>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Medicare/Medicaid #
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Medicare/Medicaid #"
                aria-label="medicare"
                aria-describedby="basic-addon3"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Military #
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Military #"
                aria-label="military_id"
                aria-describedby="basic-addon4"
              />
            </div>
            <hr size="3"></hr>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Weight
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Weight"
                aria-label="weight"
                aria-describedby="basic-addon5"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Height
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Height"
                aria-label="height"
                aria-describedby="basic-addon6"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Blood Type
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Blood Type"
                aria-label="blood_type"
                aria-describedby="basic-addon7"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Allergies(props) {
    return (
        <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Allergies
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Medication Allergies
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Medication Allergies"
                aria-label="medication_allergies"
                aria-describedby="basic-addon8"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Food Allergies
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Food Allergies"
                aria-label="food_allergies"
                aria-describedby="basic-addon9"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export function SpecialNeeds(props) {
    return (
        <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Special Needs
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="glassesCheck"
              />
              <label class="form-check-label" for="glassesCheck">
                Glasses
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="oxygenCheck"
              />
              <label class="form-check-label" for="oxygenCheck">
                Oxygen
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="denturesCheck"
              />
              <label class="form-check-label" for="denturesCheck">
                Dentures
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="walkerCheck"
              />
              <label class="form-check-label" for="walkerCheck">
                Walker/Cane
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="h_aidCheck"
              />
              <label class="form-check-label" for="h_aidCheck">
                Hearing Aid
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="wheelchairCheck"
              />
              <label class="form-check-label" for="wheelchairCheck">
                Wheelchair
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};
