const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const prizeSchema = new Schema({
  winner: [{
    type: ObjectId,
    ref: 'User',
  }],
  date: Date,
  tripOptions: [String],
}
);

const User = mongoose.model('Prize', prizeSchema);

module.exports = Prize;