const { dbHost, dbUser, dbPassword, dbName } = require('../constants/config');

module.exports = {
     host: dbHost,
     user: dbUser,
     password: dbPassword,
     database: dbName,
     waitForConnections: true,
     connectionLimit: 10,
     maxIdle: 10,
     idleTimeout: 60000,
     queueLimit: 0,
     enableKeepAlive: true,
     keepAliveInitialDelay: 0
};
