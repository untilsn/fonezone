import adminRouter from "./adminRouter.js";
import authRouter from "./authRouter.js";
import clientRouter from "./clientRouter.js";

const mainRouter = (app) => {
  app
    .use("/api", clientRouter)
    .use("/api/admin", adminRouter)
    .use("/api/auth", authRouter)
};

export default mainRouter;
