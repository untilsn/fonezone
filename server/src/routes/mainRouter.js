import authRouter from "./authRouter.js"
import categoryRouter from "./categoryRouter.js"
import productRouter from "./productRouter.js"


const mainRouter = (app) => {
  app.use("/api/auth", authRouter)
  app.use("/api/product", productRouter)
  app.use("/api/category", categoryRouter)
  app.use("/api/brand", authRouter)
}

export default mainRouter