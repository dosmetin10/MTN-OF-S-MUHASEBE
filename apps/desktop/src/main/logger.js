const { app } = require('electron');
const path = require('path');
const fs = require('fs');
const winston = require('winston');
require('winston-daily-rotate-file');

const logsDir = path.join(app.getPath('userData'), 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

const transport = new winston.transports.DailyRotateFile({
  filename: path.join(logsDir, 'app-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  ),
  transports: [transport, new winston.transports.Console()]
});

module.exports = logger;
