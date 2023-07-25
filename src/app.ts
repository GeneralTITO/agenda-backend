import "express-async-errors";
import express, { Application, json } from "express";
// import middlewares from "./middlewares";
// import {
//   categoryRouter,
//   ingredientRouter,
//   recipeRouter,
//   sessionRouter,
//   userRouter,
// } from "./routers";

const app: Application = express();
app.use(json());

// app.use("/users", userRouter);
// app.use("/login", sessionRouter);
// app.use("/categories", categoryRouter);
// app.use("/ingredients", ingredientRouter);
// app.use("/recipes", recipeRouter);

// app.use(middlewares.handleError);

export default app;
