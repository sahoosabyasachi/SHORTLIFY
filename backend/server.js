import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import { connectDB } from "./src/db/db.js";

connectDB();



app.listen(process.env.PORT, (req, res) => {
    console.log(`app is listening on PORT ${process.env.PORT}`);
    
})

