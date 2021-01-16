const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'debug',
    message:'Combined daily logs',
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new DailyRotateFile({frequency:'1d', level:'info', filename:'combined.log'})
    ],
    format: winston.format.simple()
});

module.exports = logger;