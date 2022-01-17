const mongoose = require('mongoose');

const { Schema } = mongoose;

const recoverySchema = new Schema({
  email: { type: String, required: true, immutable: true },
  expires_at: { type: Date, default: (Date.now() + 600000), immutable: true, required: false },
}, { versionKey: false });

const Recovery = mongoose.model('Recovery', recoverySchema);

module.exports = Recovery;