const http = require("http");
const fs = require("node:fs");
const path = require("path");
const { lookupService } = require('node:dns');
//const { extname } = require('node:path');

const port = 6003 // check if it's free in your laptop

const server = http.createServer((req,res) =>{
    const filepath = path.join(__dirname, req.url === '/' ? "index.html" : req.url ) //similar to, if else, condition ? {} : {}; how to find the path and give acces to current dicrectory to req.url , path.join(__dirname);
    console.log(filepath);
    const extensionname = String(path.extname(filepath)).toLowerCase()

    const mimeTypes = {
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'text/png'
    }//what file types to support in 

    const contentType = mimeTypes[extensionname] || 'application-stream/octet-stream';
    // grabibng stuff aboveee

    fs.readFile(filepath, (err, content)=>{
        if (err){
            if (err.code === "ENOENT"){
                res.writeHead(404, {"Content-Type":'text/html'});
                res.end("page not found brooo");
            }
        } else {
            res.writeHead(200, {"Content-Type":contentType}) // http response status code mdn for 200
            res.end(content, "utf-8")
            
        } 
    });       
    // responding stuffs
});

server.listen(port, () =>{
    console.log(`listening  at port ${port}`);
});