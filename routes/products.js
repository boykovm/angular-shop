// const express = require('express');
const {Router} = require('express');
const router = Router()
const Product = require('../models/product')

router.get('', async (req, res) => {
  const products = await Product.find()

  res.send(products)

  console.log('success')
})

module.exports = router;
