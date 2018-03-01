var util = require('util');
var WebSocketServer = require('uws').Server;
var wss = new WebSocketServer({ port: 3000 });

function onMessage(message) {
    console.dir(message);
    
    var data = JSON.parse(message);
    if(data.POST != null && data.POST.email == 1) this.send('{ "mutation": "LOGIN_SUCCESS", "token": "aabbccddee" }');
    else this.send('{ "mutation": "LOGIN_ERROR" }');
}

wss.on('connection', function(ws) {
    ws.on('message', onMessage);
    //ws.send('something');
});