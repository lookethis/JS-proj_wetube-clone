import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

// password 저장 전에 잠깐 가로채서 hashing
userSchema.pre("save", async function () {
  // create되는 user = this
  console.log("Users password", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
