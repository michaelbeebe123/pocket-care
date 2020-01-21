import axios from "axios";

export default {

  // =================================================
  // FIXME: FORM METHODS
  // =================================================
  // -----------------------------
  // GETS ALL FORM ITEMS
  // -----------------------------
  getForm: function() {
    return axios.get("/api/form");
  },
  // -----------------------------
  // GETS FORM ITEM BY ID
  // -----------------------------
  getFormID: function() {
    return axios.get("/api/form" + id)
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
  saveForm: function() {
    return axios.post("api/submit-form")
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
    return axios.get("/api/prescriptions/" + id);
  },
  // -----------------------------
  // DELETES PRESCRIPTION BY ID
  // -----------------------------
  deletePrescriptionID: function(id) {
    return axios.delete("/api/update-prescriptions/" + id);
  },
  // ---------------------------------------
  // SAVES PRESCRIPTION TO THE DATABASE  
  // ---------------------------------------
  savePrescription: function(prescriptionData) {
    return axios.post("/api/submit-prescription", prescriptionData);
  }

};
