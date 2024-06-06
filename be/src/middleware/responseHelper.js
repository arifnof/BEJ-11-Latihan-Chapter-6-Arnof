class ResponseHelper {
  constructor(res) {
    this.res = res
  }

  success(data, message = "Success") {
    return this.res.status(200).json({
      status: "success",
      message,
      data,
    })
  }

  error(error, message = "An error occurred", code = 500) {
    // throw error
    return this.res.status(code).json({
      status: "error",
      message,
      error
    })
  }

  notFound(message = "Resource not found") {
    return this.error(message, message, 404)
  }

  validationError(errors, message = "Validation errors", code = 422) {
    return this.res.status(code).json({
      status: "fail",
      message,
      errors,
    })
  }
}

function responseMiddleware(req, res, next) {
  res.helper = new ResponseHelper(res)
  next()
}

module.exports = responseMiddleware
