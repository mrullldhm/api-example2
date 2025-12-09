import express from "express";

const app = express();
const PORT = 8383;

// Middleware
app.use(express.json())

// app.method (route, handler)
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// app.listen(port, callback)
app.listen(PORT, () => {
  console.log(`The server connect in in http://localhost:${PORT}`);
});
