var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log("server running");
});


var audio = function () {

    var param = {
    audio :{
        id: '1',
        nom: 'eminem lose yourself ',
        url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s",
        cover:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51OypmO2ebL._SY450_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.fr%2FLose-Yourself-Eminem%2Fdp%2FB00007EAS0&tbnid=mYEYZlRxONDsRM&vet=12ahUKEwi1h66bnI_uAhVPXxoKHdvXDvAQMygAegUIARCwAQ..i&docid=L-74EyKEeVWNLM&w=450&h=450&q=eminem%20lose%20yourself&ved=2ahUKEwi1h66bnI_uAhVPXxoKHdvXDvAQMygAegUIARCwAQ",
        time:'2002'
    }
    }
}




audio();

app.post('/audio', function (req, res) {
  res.send(""+audio);
});