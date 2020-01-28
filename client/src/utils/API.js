import axios from "axios";

export default {

  // -----------------------------
  // GETS ALL FORM ITEMS
  // -----------------------------
  getForm: function(data) {
    return axios.get("/api/form", data);
  },
  // -----------------------------
  // GETS FORM ITEM BY ID
  // -----------------------------
  getFormID: function(id) {
    return axios.get("/api/form/:" + id)
  },
  // -----------------------------
  // DELETES FORM ITEM BY ID
  // -----------------------------
  deleteFormID: function() {
    return axios.post("api/update-form")
  },
  // -------------------------------------------------------------
  // GETS MEDICAL HISTORY OF THE FORM OF THE CURRENT LOGGED IN ID
  // -------------------------------------------------------------
  getHistoryID: function(id) {
    return axios.get("/api/history/:" + id)
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
   // -----------------------------
  // SAVES EVENT TO THE DATABASE
  // -----------------------------
  saveEvent: function(){
    return axios.post("api/submit-appointment")
  },


  // =================================================
  // PRESCRIPTION METHODS
  // =================================================
  // -----------------------------
  // GETS ALL PRESCRIPTIONS
  // -----------------------------
  getprescriptions: function() {
    return axios.get("/api/prescriptions");
  },
  // -----------------------------
  // GETS PRESCRIPTION BY ID 
  // -----------------------------
  getPrescriptionID: function(id) {
      // FIXME:
      return axios.get("/api/prescriptions/:" + id);
  },
  // -----------------------------
  // DELETES PRESCRIPTION BY ID
  // -----------------------------
  deletePrescriptionID: function(id) {
    // FIXME:
    return axios.delete("/api/update-prescriptions/:" + id);
  },
  // ---------------------------------------
  // SAVES PRESCRIPTION TO THE DATABASE  
  // ---------------------------------------
  savePrescription: function(data) {
    return axios.post("/api/submit-prescription", data);
  },
  login: function(loginData) {
    return axios.get("http://localhost:3001/api/login", loginData)
  }
};
