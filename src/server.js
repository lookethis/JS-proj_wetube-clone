import express from "express";

const PORT = 4001;
const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Home</h1>");
};
const handleLogin = (req, res) => {
  return res.send("Login here.");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

app.use(logger); // Middleware1
app.use(privateMiddleware); // Middleware2

app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😀`);

app.listen(PORT, handleListening);
