import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) //use method is used for middlewares or comfigurations. 

app.use(express.json({limit: "16kb"})) // to parse the incoming request body in JSON format
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) // to serve static files

app.use(cookieParser())

export { app } 