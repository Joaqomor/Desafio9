import {Router} from "express"



const loggerRouter = Router();

loggerRouter.get("/", (req, res, next) => {
    
        req.logger.fatal(`${req.method} for testing fatal level.`);
        req.logger.error(`${req.method} for testing error level.`);
        req.logger.warning(`${req.method} for testing warning level.`);
        req.logger.info(`${req.method} for testing info level.`);
        req.logger.http(`${req.method} for testing http level.`);
        req.logger.debug(`${req.method} for testing debug level.`);
     
    
    

    res.status(200).json({ status: 200, ok: true, message: 'Test end.' });
})

export default loggerRouter;
