const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: String,
  surname: String,
  password: {
    type: String,
    required: true,
  },
  email:{ 
    type:String,
    unique: true,
    required: true,
  },
  phone: Number,
  unwantedCountries: [String],
  discountCode: String,
  numberOfBookings:Number,
  subscriptionType: {
    type: String,
    enum: ['Basic', 'Standard', 'Premium' ],
  }
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;