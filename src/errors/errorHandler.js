import EErrors from "./product.errors";


const errorHandler = (error, req, res, next) => {
    switch(error.code){
        case EErrors.INVALID_TYPES:
            res.status(400).json({ status: 400, ok: false, response: error.name });
        break;
        case EErrors.NOT_FOUND:
            res.status(400).json({ status: 400, ok: false, response: error.name });
        break;
        case EErrors.OUT_OF_STOCK:
            res.status(400).json({ status: 400, ok: false, response: error.name  });
        break;
        case EErrors.UNAVAILABLE:
            res.status(400).json({ status: 400, ok: false, response: error.name });
        break;
        default:
            res.status(500).json({ status: 500, ok: false, error: "Internal server error." });
        break; 
    }
}

export default errorHandler;