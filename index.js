var app = require('express')();
// let server = require('http').Server(app)
// let io = require('socket.io')(server);


// Set port for listening
app.set('port',(process.env.PORT || 5000));

app.get('/',function(req,resp) {
  resp.send('<b>Fire</b>');
});

app.listen(app.get('port'), function() {
  console.log('Created a server at port 5000');
});

