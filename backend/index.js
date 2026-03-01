import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

const app = express()

// ✅ Middleware (ONLY ONCE)
app.use(express.json())

// ✅ Routes
app.use("/api/auth", authRoutes)

// ✅ MongoDB Connection + Server Start
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database is connected")

    app.listen(5000, () => {
        console.log("Server is running on port 5000!")
    })
})
.catch((err) => {
    console.log(err)
})