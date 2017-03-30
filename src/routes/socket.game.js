var uuid = require('uuid');

module.exports = function (io) {
	io.of('/play').on('connection', function (socket) {
		console.log("User connect with id: ", socket.id);

		socket.on('disconnect', function () {
			console.log("User disconnect with id: ", socket.id);
		});
	});
}
