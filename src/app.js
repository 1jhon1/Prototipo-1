const express = require('express'),
     // formidable=require('express-formidable'),
     //multer = require('multer'),
      path = require('path'),
      morgan = require('morgan'),
     // bodyParser=require('body-Parser'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
  
//const upload = multer({dest:'upload/Imagen'});


const app = express();

//app.post('/add',upload.single('Imagen')
//);



// importing routes
const customerRoutes = require('./routes/customer');






// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: ' mysql-1nodejs1.alwaysdata.net',
  user: '1nodejs1_free',
  password: 'teogra12345',
  
  database: '1nodejs1_crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);
//app.('/tabla', customerRoutes);




  





// static files
app.use(express.static(path.join(__dirname, 'views')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
