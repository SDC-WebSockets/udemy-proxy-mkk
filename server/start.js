const app = require('./server.js');
const port = 6012;

const serverInstance = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

const closeServer = () => {
  serverInstance.close();
}

exports.closeServer = closeServer;