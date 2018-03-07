var util = require('util');
var WebSocketServer = require('uws').Server;
var wss = new WebSocketServer({ port: 3000 });

var db = { 
    email:1, password: 1, token: "aabbccddeeff" ,
    patients: [
        { id: 0, name: "jhon", age: 18,samples: [
            {id: 1,file: "../../assets/sample1.txt",
            chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]},
            {id: 2,file: "../../assets/sample2.txt",
            chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]}]
          ,description: "Esto es la descripción de uno de los clientes"},
        { id: 1, name: "eva" , age: 20,samples: [
            {id: 1,file: "../../assets/sample3.txt",chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]},
            {id: 2,file: "../../assets/sample4.txt",chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]},
            { id: 3,file: "../../assets/sample5.txt",chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]}]
          ,description: "Esto es la descripción de otro de los clientes"},
        { id: 2,name: "dove" , age: 22,samples: [
            {id: 1,file: "../../assets/sample6.txt",chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]}],
          description: "Esto es la descripción de otro más de los clientes"}
      ]
}

function onMessage(message) {
    console.dir(message);
    
    var data = JSON.parse(message);
    if((data.POST != null || data.PUT != null || data.DELETE != null) && 
        ((data.token == db.token) || (data.POST != null && data.POST.email == db.email && data.POST.password == db.password))) {
            this.send('{ "mutation": "LOGIN_SUCCESS", "token": "'+ db.token+'" }');
            this.send('{ "mutation": "PATIENT_DATA", "token": "'+ db.token+'", "patients": '+JSON.stringify(db.patients)+' }');
    }
    else if((data.GET != null || data.PUT != null || data.DELETE != null) && 
    (data.token == db.token)) {
        this.send('{ "mutation": "PATIENT_DATA", "token": "'+ db.token+'", "patients": '+JSON.stringify(db.patients)+' }');
    }
    else this.send('{ "mutation": "LOGIN_ERROR" }');
}

wss.on('connection', function(ws) {
    ws.on('message', onMessage);
    //ws.send('something');
});