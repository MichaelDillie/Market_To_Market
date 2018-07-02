import axios from "axios";

export default {
  getEvents: function() {
    return axios.get("/api/events");
  },
  saveEvent: function(eventData) {
    return axios.post("/api/books", eventData);
  }
}