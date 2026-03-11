import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    console.log(req.body)

    if (!username || !email || !password) {
      return next(errorHandler(400, "All fields are required"))
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: "User already exists" 
      })
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    await newUser.save()

    res.status(201).json({ 
      success: true,
      message: "User created successfully ✅" 
    })

  } catch (error) {

    console.log(error)

    // ✅ ADD: MongoDB duplicate username/email error handle
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Username or Email already exists"
      })
    }

    next(error)
  }
}