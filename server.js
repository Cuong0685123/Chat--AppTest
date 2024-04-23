import express from 'express'; 
import connectToMongoDB from "./db/connectToMongoDB.js";
import dotenv from 'dotenv'; 
import authRouter from './routers/auth.routers.js';
const PORT = process.env.PORT || 3000;

dotenv.config();
await connectToMongoDB();

const app = express();
app.use(express.json());



app.use("/api/auth", authRouter),


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});