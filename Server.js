import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
