require("dotenv").config()
const app = require("../app")

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || `localhost:${PORT}`

app.listen(PORT, () => {
  console.log(`Server is running on http://${BASE_URL}/`)
})
