const EventEmitter = require("events");


const event = new EventEmitter();


// event.on('Yourname', () => {
//     console.log("My name is Akshdeep Singh");
// });

// event.emit("Yourname");// this should be called last


event.on('CheckPage', (sc, msg) => {
    console.log(`status code is ${sc} and page is ${msg}`);
})

event.emit("CheckPage", 200, 'ok');
