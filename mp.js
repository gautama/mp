var _ = require('lodash');
var path = require('path');
var express = require('express');
var cors = require('cors');
var http = require('http');
var app = express();

// cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-app-memberid, x-app-locationid, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,HEAD,OPTIONS");
    next();
});
// app.use(cors({ origin: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

function sendApp(req, res) {
    console.log(`[GET] path=${req.path}`);
    res.sendFile(path.resolve(buildDir, 'index.html'));
}

app.get('/', sendApp);

app.set('port', '4269');

/**
 * Create HTTPS server.
 */

let serverOptions = {}

var server = http.createServer(serverOptions, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen('4269');
server.on('error', onError);
server.on('listening', onListening);

console.log(`process ******PID******=${process.pid}`);
let port = 4269;

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}

