//Install express server
const express = require('express');
const path = require('path');
const {Router} = require('express');
const router = Router();
const Product = require('./models/product');
const mongoose = require('mongoose');
const addRouter = require('./routes/add');
const productsRouter = require('./routes/products')
const cors = require('cors');
const bodyParser = require('body-parser');
// const fileMiddleware = require('./middleware/file')

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = `mongodb+srv://admin:admin@angular-shop.ge78n.mongodb.net/angular-shop?retryWrites=true&w=majority`;
// const MONGO_URI = `mongodb+srv://admin:admin@angular-shop.ge78n.mongodb.net/angular-shop?retryWrites=true&w=majority`


// app.use(express.static(path.join(__dirname, 'src')));
//

// if (port == 8080) {
//   app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname + 'src/index.html'));
//     res.send('lol')
//   });
// } else {
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/dist/angular-shop'));

// app.use(fileMiddleware.single('avatar'))

app.options('*', cors())

// app.use('/admin', addRouter);

// router.post('/admin/add', async (req, res) => {
//   const {productName, price, shortDescription, fullDescription } = req.body;
//   console.log(req.body.productName)
//
//   const product = new Product({
//     // productName: req.body.productName,
//     productName: 'productName',
//     // price: req.body.price,
//     price: 12,
//     // shortDescription: req.body.shortDescription,
//     shortDescription: 'short description',
//     // fullDescription: req.body.fullDescription,
//     fullDescription: 'full description',
//     rating: 0.00
//   })
//
//   try {
//     await product.save()
//     res.json({
//       success: true
//     })
//   } catch (e) {
//     console.log(e)
//   }
// })
// }
app.get('/', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-shop/index.html'));
});

app.use('/admin', addRouter);
app.use('/products', productsRouter);


async function start() {
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })

    app.listen(PORT, () => {
      console.log('Server was started on port:', PORT)
    });
  } catch (e) {
    console.log('error')
    console.log(e)
  }
}

start();
