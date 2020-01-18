import axios from "axios";

// TODO: THIS STILL NEEDS WORK

export default {
  // Gets all prescriptions
  getprescriptions: function() {
    return axios.get("/api/prescriptions");
  },
  // Gets the prescription with the given id
  getPrescription: function(id) {
    return axios.get("/api/prescriptions/" + id);
  },
  // Deletes the prescription with the given id
  deletePrescription: function(id) {
    return axios.delete("/api/prescriptions/" + id);
  },
  // Saves a prescription to the database
  savePrescription: function(prescriptionData) {
    return axios.post("/api/prescriptions", prescriptionData);
  }
};
