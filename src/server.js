import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
app.use(morgan("dev")); // middleware 중 하나인 morgan

app.set("view engine", "pug"); // view engine을 pug로 set
app.set("views", process.cwd() + "/src/views"); // 경로 수정
app.use(express.urlencoded({ extended: true })); // express application이 form의 value들 이해할 수 있게 js로 변경

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
