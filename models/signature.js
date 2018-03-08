const mongoose = require('mongoose');
const Schema = mongoose.Schema


const signatureSchema = mongoose.Schema({
  name : String,
  note : String,
  createdAt : { type: Date }
});

const Signature = mongoose.model('Signature', signatureSchema);

module.exports = Signature;
