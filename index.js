const http = require('http');
const app = require('./app');

const config = require('./utils/config');
const loggers = require('./utils/loggers');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  loggers.logInfo(`App connected on PORT ${config.PORT}`);
});
