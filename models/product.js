const {Schema, model} = require('mongoose')

const productSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  images: {
    type: Array
  },
  id: {
    type: Schema.Types.ObjectId
  }
})

module.exports = model('Product', productSchema)
