const express = require('express');
const app = express();
const Signature = require('../models/signature');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('portfolio');
  })



//old website
app.get('/old', (req, res) => {


      res.render('index');

})

//book of life
app.get('/bookoflife', (req, res) => {
  res.render('book');
})

app.post('')



//SIGN THE BOOK
app.post('/signbook', (req, res) => {


  let signature = new Signature(req.body);

  recaptcha.verify(req, function(error, data){
       if(!error)
           //success code
           {
             signature.save((err,signature) => {
               if(err) throw err;
               res.redirect('/');
             })
           }
       else
           //error code
           {
             res.redirect('back');
           }
   });

})







} //Modules.exports
