// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB से कनेक्ट करें
mongoose.connect("YOUR_MONGODB_URI_HERE", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// एक Schema और Model बनाएं
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", UserSchema);

// Routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// नया यूजर सेव करने का API
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// सभी यूजर लाने का API
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
