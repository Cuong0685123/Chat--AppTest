import express from "express";
import { signup } from "../controllers/auth.controllers.js";
import multer from 'multer';
import {  storage } from '../s3.config.js'; 

const router = express.Router();
const upload = multer({ storage });

router.post("/signup",upload.single("avatar"), signup);


export default router;