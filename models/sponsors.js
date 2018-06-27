const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sponsorSchema = new Schema({
  company: {type: String, required: true},
  product: {type: String, required: true},
  desciption: {type: String, required: true}
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

module.exports = Sponsor;
