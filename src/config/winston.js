import winston from "winston";
import config from "./config.js";



const customLevelsOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        http:4,
        debug: 5
        
    },
    colors: {
        fatal: 'red',
        error: 'green',
        warning: 'yellow',
        info: 'blue',
        http: 'black',
        debug: 'white'
        
    }
};


const devLogger = winston.createLogger({
    
    levels: customLevelsOptions.levels,
    transports: [
        new winston.transports.Console(
            {
                level: "debug",
                format: winston.format.combine(
                    winston.format.colorize({colors: customLevelsOptions.colors}),
                    winston.format.simple()
                )
            }
        ),
        new winston.transports.File(
            {
                filename: './errors.log', 
                level: 'warning', 
                format: winston.format.simple()
            }
        )
    ]
});


const prodLogger = winston.createLogger({
    
    transports: [
        new winston.transports.Console({level: "http"}),
        new winston.transports.File({filename: './errors.log', level: 'warn'})
    ]
});


export const addLogger = (req, res, next) => {
    if (config.environment === 'production'){
        req.logger = prodLogger;
    } else {
        req.logger = devLogger;
    }
    req.logger.info(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    next();
};