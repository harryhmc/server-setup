const express = require('express');
const app = express();

const name = process.env.NAME || "a mystery"
const PORT = 3000;
const HOST = '0.0.0.0';


app.use(express.json());
console.log('server started')
app.get('/', (req, res) => {
  const responseMsg = `Hello, I'm ${name}, brought to you by ${req.headers.referer}`
  res.status(200)
    .send(responseMsg)
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

const shutDown = () => {
    console.log('Received kill signal, shutting down gracefully');
    server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

module.exports = {app, server}