//Install express server
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'src')));
//

if (port == 8080) {
  app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + 'src/index.html'));
    res.send('lol')
  });
} else {
  app.use(express.static(__dirname + '/dist/angular-shop'));

  app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/angular-shop/index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://admin:admin@angular-shop.ge78n.mongodb.net/angular-shop?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
  } catch (e) {
    console.log(e)
  }
}

app.listen(port, () => {
  console.log('Server was started on port:', port)
});

start();
