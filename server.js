const http = require("http");

const fs = require("fs");

const Port = 2000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html', 'utf-8');
const Auditor = fs.readFileSync('./Auditor.html', 'utf-8');
const contact = fs.readFileSync('./contact.html', 'utf-8');
const service = fs.readFileSync('./service.html', 'utf-8');
const about = fs.readFileSync('./about.html', 'utf-8');

const server = http.createServer((req, res)=>{
  
    if(req.url === '/'||req.url === '/home'){
        return res.end(home);
    }else
    if(req.url === '/about'){
        return res.end(about);
    }else
    if(req.url === '/contact'){
        return res.end(contact);
    }else

    if(req.url === '/Auditor'){
        return res.end(Auditor);
    }else
    if(req.url === '/service'){
        return res.end(service);
    }else{
        return res.end('<h1>404 Error Page</h1>')
    }
});

server.listen(Port,hostname,() => {
   console.log(`Server is working on http://${hostname}:${Port}`);
})

server.on('error', (err) => {
  console.error('Server error:', err.message);
})