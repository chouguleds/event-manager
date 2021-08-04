var fs = require('fs');
var appConfig = require(process.cwd() + '\\AppConfig');
exports.createEventPageHandler = function(request, response) {
	console.log(process.cwd() + '\\View\\AddVendorService.html')
	fs.readFile(process.cwd() + '\\View\\AddVendorService.html', function(err, data) {

		if (err) {
			console.log(err);
			response.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(data.toString());
		}
		response.end();
	});

}