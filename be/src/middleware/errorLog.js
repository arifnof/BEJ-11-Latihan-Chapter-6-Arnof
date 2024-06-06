const morgan = require("morgan")
const path = require("path")
const rfs = require("rotating-file-stream")

const errorLogStream = rfs.createStream(
  (time, index) => {
    if (!time) return "error.log"
    const month =
      time.getFullYear() + "-" + ("0" + (time.getMonth() + 1)).slice(-2)
    return `${month}-error.log`
  },
  {
    interval: "1M",
    path: path.join(__dirname, "../../logs"),
  }
)

const errorLogMiddleware = (err, req, res, next) => {
  morgan("combined", {
    skip: (req, res) => res.statusCode < 400,
    stream: errorLogStream,
  })
  next(err)
}

module.exports = errorLogMiddleware
