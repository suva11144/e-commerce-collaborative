const express = require("express");


const mongoose = require("mongoose");


const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose.connect("mongodb+srv://suvamoyghorai8:Sonu%402005@cluster0.p9bo6qg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then (() => {
    console.log("Connected to MongoDB");}).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    })

const app = express();
const port = process.env.PORT || 3000;


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization",
    "cache-control",
    "expires",
    "pragma",
  ],
  credentials: true,
}));


app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}   );