const morgan = require("morgan")
const path = require("path")
const rfs = require("rotating-file-stream")

const accessLogStream = rfs.createStream(
  (time, index) => {
    if (!time) return "access.log"
    const month =
      time.getFullYear() + "-" + ("0" + (time.getMonth() + 1)).slice(-2)
    return `${month}-access.log`
  },
  {
    interval: "1M", 
    path: path.join(__dirname, "../../logs"),
  }
)

const accessLogMiddleware = morgan("combined", { stream: accessLogStream })

module.exports = accessLogMiddleware
