import bcrypt from "bcrypt";
import User from "../models/users.model.js";

export const signup = async (req, res) => {
  try {

    const phoneNumberPattern = /^\d{10,11}$/; // Số điện thoại gồm 10 hoặc 11 chữ số
    if (!phoneNumberPattern.test(req.body.phoneNumber)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

   
    if (req.body.password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      displayName: req.body.displayName,
      avatar: req.file.location,
    });
    console.log(newUser.displayName);

    const savedUser = await newUser.save();

    return res.status(201).json(savedUser);
  } catch (error) {
    return res.status(500).json({ error: "Error registering user" });
  }
};
