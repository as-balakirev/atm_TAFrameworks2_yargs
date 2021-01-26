const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const rotateTransport = new winston.transports.DailyRotateFile({
    frequency:'5m',
    filename: 'combined-log-rotate-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '1m',
    maxFiles: '2d',
    auditFile: 'logs-audit.json',
    level: 'info'
});

rotateTransport.on('rotate', function (oldFilename, newFilename) {
    console.log( `Log file was changed FROM ${oldFilename} to ${newFilename}.`);
});

const logger = winston.createLogger({
    level: 'debug',
    message:'Combined daily logs',
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        rotateTransport
    ],
    format: winston.format.simple()
});

module.exports = logger;