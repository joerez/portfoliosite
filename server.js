const express = require('express');


const methodOverride = require('method-override')


//initialize Express
const app = express();


const bodyParser = require('body-parser');

/*Put Models Here

const Comment = require('./models/comment');

*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Recaptcha = require('express-recaptcha');
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LciD0EUAAAAAMSM4b2xRawGOzSD0ke7mlaY-ZpQ', '6LciD0EUAAAAAH4H4CCH0EwKcfbDlQPdMUQe0SFO');



var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfoliosite', {  });


// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))


//Handlbars set up
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));





//Middleware

//ROUTES
require('./controllers/root.js')(app);



const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Portfolio Site listening on port ${port}!`);
})
