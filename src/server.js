import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4001;
const app = express();
app.use(morgan("dev")); // middleware 중 하나인 morgan

app.set("view engine", "pug"); // view engine을 pug로 set
app.set("views", process.cwd() + "/src/views"); // 경로 수정
app.use(express.urlencoded({ extended: true })); // express application이 form의 value들 이해할 수 있게 함
app.use("/", globalRouter); // "/"경로에 접근시, globalRouter의 controller 찾게 함
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😀`);

app.listen(PORT, handleListening);
