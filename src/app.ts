import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { userRouter } from "./routers";
import { sessionRouter } from "./routers/session.router";
import { contactRouter } from "./routers/contact.router";

const app: Application = express();
app.use(json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/contact", contactRouter);

app.use(middlewares.handleError);

export default app;
