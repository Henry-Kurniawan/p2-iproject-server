const errorHandler = (err, req, res, next) => {
    let code = 500
    let message = ["internal server error"]
    // let message = [err.message]

    switch (err.name) {
        case "SequelizeValidationError":
            code = 400
            message = err.errors.map((el) => {
                return el.message
            })
            break;
        case "LIMIT_FILE_SIZE":
            code = 400
            message = ["Maximum file size: 255 KB"]
            break
        case "InvalidFileType":
            code = 400
            message = [err.message]
            break
        case "RegisterError":
            code = err.code // 404
            message = [err.message]
        case "AlreadyExist":
            code = err.code // 404
            message = [err.message]
        case "ProductNotFound":
            code = err.code // 404
            message = [err.message]
            break;
        case "NotEnoughAccess":
            code = err.code // 403
            message = [err.message]
            break;
        case "InvalidUserToken":
            code = err.code // 401
            message = [err.message]
        case "LoginError":
            code = err.code // 401
            message = [err.message]
        default:
            break;
    }


    res.status(code).json({ message })
}

module.exports = errorHandler