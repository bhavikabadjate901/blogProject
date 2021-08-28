const express = require('express');
const app = express();
const blog=require('./routes/blog-route')

const mongoose=require('mongoose')

var cors = require('cors');

app.options('*', cors()); 

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
    next();
});

var whitelist = ['*']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


mongoose.connect('mongodb://localhost:27017/myshinynewdb')
	.then(()=> console.log("connected to Database"))
  .catch(err=> console.error("Could not connect to mongo db."+ err))

  //MiddleWare for program-> all the api and route are mapped here
app.use(cors()); 
app.use(express.json());


app.use('/blog', blog);

const Port = process.env.PORT || 3000;
app.listen(Port,()=> {
	console.log(`Listening Dude Feel Safe at ${Port}`);
	// (async function(){
	// const endpoint= await ngrok.connect(Port);
	// 	console.log(' ${endpoint}' )
	// })
});

