const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   subscribedTo:{
      type: String,
      required: true
   },
   userDate:{
      type: Date,
      required: true,
      default: Date.now()
   }
})

module.exports = mongoose.model('User', userSchema)