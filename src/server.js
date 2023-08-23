import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.use(morgan("dev")); // middleware 중 하나인 morgan

app.set("view engine", "pug"); // view engine을 pug로 set
app.set("views", process.cwd() + "/src/views"); // 경로 수정
app.use(express.urlencoded({ extended: true })); // express application이 form의 value들 이해할 수 있게 js로 변경

// 브라우저가 백엔드와 상호작용할 때마다
// 이 session이라는 middleware가 브라우저에 쿠키 전송
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 20000,
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
