import authRouter from "./authRouter.js"
import categoryRouter from "./categoryRouter.js"


const mainRouter = (app) => {
  app.use("/api/auth", authRouter)
  app.use("/api/category", categoryRouter)
  app.use("/api/brand", authRouter)
  app.use("/api/product", authRouter)
}

export default mainRouter