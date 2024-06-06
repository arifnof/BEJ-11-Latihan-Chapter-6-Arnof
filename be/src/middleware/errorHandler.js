const errorHandler = (err, req, res, next) => {
  
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"
  const name = err.name || "Error"
  const stack = process.env.NODE_ENV === "development" ? err.stack.split("\n").map((item, index) => `${index} ${item}`) : undefined
  const details = err.details || undefined

  res.status(statusCode).json({
    status: "error",
    statusCode,
    name,
    message,
    stack,
    details,
  })
}

module.exports = errorHandler
