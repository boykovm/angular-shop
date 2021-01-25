const {Schema, model} = require('mongoose')

const imageSchema = new Schema({
  image: {
    type: String
  }
})

module.exports = model('Image', imageSchema)
