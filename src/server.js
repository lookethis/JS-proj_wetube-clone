import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4001;
const app = express();
app.use(morgan("dev")); // middleware 중 하나인 morgan

app.use("/", globalRouter); // "/"경로에 접근시, globalRouter의 controller 찾게 함
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😀`);

app.listen(PORT, handleListening);
