import axios from "axios";


export default {
  id: "5e321e5f3ec44b02e2d1bce3",

// =================================================
// FORM METHODS
// =================================================
  // -----------------------------
  // GETS ALL FORM ITEMS
  // -----------------------------
  getForm: function(data) {
    return axios.get("/api/form", data);
  },
  // -----------------------------
  // GETS FORM ITEM BY ID
  // -----------------------------
  getFormID: function(data) {
    return axios.get(`/api/form/${this.id}`, data)
  },
  // -----------------------------
  // DELETES FORM ITEM BY ID
  // -----------------------------
  deleteFormID: function() {
    return axios.post("api/update-form")
  },
  // -----------------------------
  // SAVES FORM TO THE DATABASE
  // -----------------------------
  saveForm: function(data) {
    return axios.post("api/submit-form", data)
  },
  updateForm: function(data) {
    return axios.post("api/update-form", data)
  },

// =================================================
// APPOINTMENT METHODS
// =================================================
  // -----------------------------
  // SAVES EVENT TO THE DATABASE
  // -----------------------------
  saveEvent: function(){
    return axios.post("api/submit-appointment")
  },

// =================================================
// HISTORY METHODS
// =================================================
  // -------------------------------------------------------------
  // GETS MEDICAL HISTORY OF THE FORM OF THE CURRENT LOGGED IN ID
  // -------------------------------------------------------------
  getHistoryID: function(data) {
    console.log(this.id)
    return axios.get(`/api/history/${this.id}`, data)
  },

// =================================================
// PRESCRIPTION METHODS
// =================================================
  // -----------------------------
  // GETS ALL PRESCRIPTIONS
  // -----------------------------
  getPrescriptions: function() {
    return axios.get("/api/prescriptions");
  },

  // -----------------------------
  // GETS THE FORM TO ADD PRESCRIPTIONS
  // -----------------------------
  getPrescriptionForm: function() {
    return axios.get("/api/prescription-form")
  },

  // -----------------------------
  // GETS PRESCRIPTION BY ID
  // -----------------------------
  getPrescriptionID: function(data) {
      // FIXME:
      return axios.get(`/api/prescriptions/${this.id}`, data);
  },
  // -----------------------------
  // DELETES PRESCRIPTION BY ID
  // -----------------------------
  deletePrescriptionID: function(data) {
    // FIXME:
    return axios.delete(`/api/update-prescriptions/${this.id}`, data);
  },
  // ---------------------------------------
  // SAVES PRESCRIPTION TO THE DATABASE
  // ---------------------------------------
  savePrescription: function(data) {
    return axios.post("/api/submit-prescription", data);
  },
 
// =================================================
// LOGIN / SIGNUP METHODS
// =================================================
  login: function(loginData) {
    return axios.get("http://localhost:3001/api/login", loginData)
  }
};