const fs = require('fs');
const http = require('http');
const path = require('path');
const { Script } = require('vm');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(__dirname + "/facebook_clone/index.html", "utf-8", (err, data) => {
            if (err) throw err
            else {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }

    else if (req.url === '/profile') {
        fs.readFile(__dirname + "/facebook_clone/profile.html", "utf-8", (err, data) => {
            if (err) throw err
            else {
                res.writeHead(200, { "content-type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }

    else if (req.url.match('\.css$')) {
        const cssPath = path.join(__dirname + "/facebook_clone", req.url);
        const fileStream = fs.createReadStream(cssPath, "utf-8");
        res.writeHead(200, { "content-type": "text/css" });
        fileStream.pipe(res);
    }

    else if (req.url.match('\.(jpg|png)$')) {
        const imgPath = path.join(__dirname + "/facebook_clone", req.url);
        const fileStream = fs.createReadStream(imgPath);
        res.writeHead(200, { "content-type": "image" });
        fileStream.pipe(res);
    }

    else if (req.url.match('\.js$')) {
        const jsPath = path.join(__dirname + "/facebook_clone", req.url);
        const fileStream = fs.createReadStream(jsPath, "utf-8");
        res.writeHead(200, { "content-type": "text/js" });
        fileStream.pipe(res);
    }


}).listen(3000, () => console.log("server is running"));