import axios from "axios";

export default {

  // =================================================
  // TODO: FORM METHODS
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
  // TODO:
  // -----------------------------
  // DELETES FORM ITEM BY ID
  // -----------------------------
  deleteFormID: function() {
    return axios.post("/update-form")
  },
  // -----------------------------
  // SAVES FORM TO THE DATABASE
  // -----------------------------
  saveForm: function() {
    return axios.post("/submit-form")
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
    return axios.delete("/api/prescriptions/" + id);
  },
  // ---------------------------------------
  // SAVES PRESCRIPTION TO THE DATABASE  
  // ---------------------------------------
  savePrescription: function(prescriptionData) {
    return axios.post("/api/prescriptions", prescriptionData);
  }

};
