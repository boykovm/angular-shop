// const express = require('express');
const {Router} = require('express');
const router = Router()
const Product = require('../models/product')
const Image = require('../models/imagess')
const bodyParse = require('body-parser')

router.post('/add', async (req, res) => {
  const {category, productName, price, shortDescription, fullDescription } = req.body

  const product = new Product({
    category: req.body.category,
    productName: req.body.productName,
    price: req.body.price,
    shortDescription: req.body.shortDescription,
    fullDescription: req.body.fullDescription,
    images: req.body.images,
    rating: 0.00,
  })

  try {
    await product.save()
    res.json({
      success: true
    })
  } catch (e) {
    console.log(e)
  }
})

router.post('/createproduct', async (req, res) => {
  // console.log(req.body)
  // console.log(typeof 'img-name')
  console.log(Object.keys(req))
  // for (let i of req){
  //   console.log(i)
  // }
  // const {image} = req.body
  // console.log(req.body.image)

  // console.log(fd)
  // const {image} = req.body
  // console.log(req.body.file)
  // console.log(req.body.image)
  // console.log(req.body.image)
  // const image = new Image ({
  //   image:
  // })

  // try {
  //   await image.save()
  res.json({
    success: true
  })
  // } catch (e) {
  //   console.log(e)
  // }
})




module.exports = router;
