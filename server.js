var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	phaser = fs.readFileSync('phaser.html');

http.createServer(function (req, res) {
	var action = url.parse(req.url, true).pathname;
	if( action.indexOf(".png") > 0) {
		var img = fs.readFileSync("." + action);
		res.writeHead(200, {'Content-Type': "image/png"});
		res.end(img, 'binary');
	} else if( action.indexOf(".js") > 0) {
		var js = fs.readFileSync("." + action);
		res.writeHead(200, {'Content-Type': "text/javascript"});
		res.end(js, 'binary');
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(phaser);
	}
}).listen(1337);

console.log('Server running at localhost:1337/');