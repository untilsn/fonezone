import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import mainRouter from "./routes/mainRouter.js"
import config from "./config/env.js"
dotenv.config()


const app = express()
app.use(cors({
  origin: config.CLIENT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())
mainRouter(app)
const port = config.PORT || 5000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})