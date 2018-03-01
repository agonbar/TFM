var util = require('util');
var WebSocketServer = require('uws').Server;
var wss = new WebSocketServer({ port: 3000 });

var db = { email:1, password: 1, token: "aabbccddeeff" }

function onMessage(message) {
    console.dir(message);
    
    var data = JSON.parse(message);
    if((data.POST != null || data.GET != null || data.PUT != null || data.DELETE != null) && 
        ((data.token == db.token) || (data.POST.email == db.email && data.POST.password == db.password))) {
            this.send('{ "mutation": "LOGIN_SUCCESS", "token": "'+ db.token+'" }');
        }
    else this.send('{ "mutation": "LOGIN_ERROR" }'); 
}

wss.on('connection', function(ws) {
    ws.on('message', onMessage);
    //ws.send('something');
});