import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

const app = express()

// ✅ CORS Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)

// ✅ Body Middleware
app.use(express.json())

// ✅ Routes
app.use("/api/auth", authRoutes)

// ✅ MongoDB Connection + Server Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected")

    app.listen(5000, () => {
      console.log("Server is running on port 5000!")
    })
  })
  .catch((err) => {
    console.log(err)
  })

// ✅ Error Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})