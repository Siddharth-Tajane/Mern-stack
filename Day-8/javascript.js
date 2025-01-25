// server.mjs
// 65 thuousand port numbers

var http = require('http');
var fs = require('fs');
var os = require('os');
const { log, warn } = require('console');

// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.uptime());
// console.log(os.arch());
// console.log(os.homedir());
// console.warn(danger)
// console.assert(true,"trans")

//   res.end('{"name":"John"}');
// if(req.url === '/'){
//     res.end('Welcome to our home page');
//     res.end();
// };

// if(req.url === '/user'){
//     res.end('{username: John, age: 30, email:abc@gmail.com}');
//     res.end();
// };

// if(req.url === '/product'){
//     res.end('{product: Mobile, price: 10000, brand: Samsung, version: 1.0}'); 
//     res.end();
// };

// if(req.url === '/account'){
//     res.end('{account: Savings, balance: 10000, accountNumber: 123456}');
//     res.end();
// };

// if(req.url === '/payment'){
//     res.end('{payment: Credit, amount: 10000, cardNumber: 123456789}');
//     res.end();
// };

console.log('normal log');
console.warn('Danger');
console.assert(true, 'this is true');
console.assert(false, 'this is false');


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
 //res.end('{"name":"John", "age":30, "city":"New York"}');

// if(req.url === '/'){
//   fs.readFile("javascript.txt",(error,data) => {
//     res.write(data);
//     res.end()
//   })
// }

});



// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});