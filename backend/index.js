const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const hotelRoute = require("./routes/hotels.js");
const roomRoute = require("./routes/rooms.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
};

// app.get("/",(req,res)=>{
//     res.send("Hello World!")
// })

//middlewares
app.use(express.json())

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);

app.listen(8080, () => {
  connect()
  console.log(`Backend listening on port 8080`);
});
