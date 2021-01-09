import bodyParser from "body-parser";
import { config } from "dotenv";
import express from "express";
import cors from "cors";

import { AuthentificationRoute } from "./src/routes/AuthentificationRoute";

var express = require('express');
const stripe = require('stripe')('sk_test_51I6YU9KCUA5u3WGTKA3xuTolvhvPLz2j55ojR154HN0gafOj8FWARcqMbWuv9HFJGASNWIZ66oO2s7GVbKPy7gCE00GPPfUcFl');
var app = express();

app.listen(3000, function () {
    console.log("server running");
});


var carte = function () {

    var param = {
    card :{
        number: '4242424242424242',
        exp_month: 2,
        exp_year:2024,
        cvc:'212'
    }
    }

    stripe.tokens.create(param, function (err,token) {
        if(err)
        {
            console.log("err: "+err);
        }if(token)
        {
            console.log(token.card.exp_month);
            console.log("success: "+JSON.stringify(token, null, 2));
        }else{
            console.log("Something wrong")
        }
    })
}




carte();

app.post('/payment', function (req, res) {
  res.send(""+carte);
});

config(); //process.env
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', AuthentificationRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server run to http://localhost:${process.env.PORT}`);
})