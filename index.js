//my main file

var express = require('express');
var app = express();

app.get('/', function (req, res){
      var o = {
            msg: "hello from node (JSON)"
      };
      //var jsonObj = JSON.stringify(o);

      res.type('application/json');
      res.send(JSON.stringify(o));
      //res.send('hello world!');
});

//creates html code to make a header 3 (looks messy)
app.get('/index.html', function(req, res){
      res.type('png');
      res.send("<html><body><h3>Hello World</h3></body></html>");
});

//two arguements: int= 3000 & function
app.listen(3000, function(){
      console.log('Example app listening on port 3000.');
});
