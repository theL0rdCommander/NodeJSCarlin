// ??? console.log(process.env.USER);
/*Eventos*/
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch',() => {
    console.log('yum book');
})/*suscribe*/ 

process.on('exit', function(){
    // do something
})/*procesa*/

//** desde el cliente*/
eventEmitter.emit('lunch');//emisor del evento
eventEmitter.emit('lunch');

console.log('hello world');
global.luckyNumber = '23';
console.log(luckyNumber);

//FILE SYSTEM 
const { readFile, readFileSync } = require('fs');
const txt = readFileSync('./hello.txt', 'utf-8');

console.log('1) '+ txt);   // lectura lenta
console.log('2) do this ASAP');// sincrono con llamadas anteriores

// asincrono
readFile('./hello.txt','utf-8', (err, text) => {
    console.log('3) '+ txt);   // ASINCRONO
})
console.log('4) do this ASAP');

// promise solution
const {readfile} = require('fs').promises;
async function hello(){
    const file = await readFile('./hello.txt', 'utf-8');
}

//7 - MODULES
// REQUIRE() VS import/export (es modules)
const modulo = require('./module');
console.log(modulo);
// > npm init -y // carga el .json y la npm por defecto.
// npm install express... inicializa la carpeta node_modules

const express = require('express');
// herewego
const app = express();
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err){
            response.status(500).send('sorry, out of order');
         }
        response.send(html)
    })
});

// un approach mas seguro cuando hay muchos callbacks:
app.get('/', async(request, response) => {
    response.send(await readFile('./home.html','utf8'));
})

app.listen(process.env.PORT || 3000, () => console.log('App aviable on port 3000'));

// > node