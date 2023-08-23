import mongoose from "mongoose";

//db connect
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

// error event
db.on("error", handleError);
db.once("open", handleOpen);
