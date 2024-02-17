
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");


const authRoutes = require('./routes/authroutes');
const messageRoutes = require('./routes/messageroutes');
const userRoutes = require('./routes/userroutes');



const connectDB = require('./db/connect');

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello World!")
// })

const start = async () => {

    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`I am alive! port ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

start()