import express from "express";

const PORT = 4002;
const app = express();

const methodlogger = (req, res, next) => {
  console.log("METHOD: ", req.method, req.url);
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

const routeLogger = (req, res, next) => {
  console.log("Path: ", req.path);
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

app.use(methodlogger); // Middleware1
app.use(privateMiddleware); // Middleware2

app.get("/", routeLogger, handleHome);
app.get("/login", routeLogger, handleLogin);
app.get("/protected", routeLogger, handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😀`);

app.listen(PORT, handleListening);
