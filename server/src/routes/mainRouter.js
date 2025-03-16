import adminRouter from "./adminRouter.js"
import authRouter from "./authRouter.js"
import brandRouter from "./brandRouter.js"
import categoryRouter from "./categoryRouter.js"
import couponRouter from "./couponRouter.js"
import productRouter from "./productRouter.js"
import wishlistRouter from "./wishlistRouter.js"


const mainRouter = (app) => {
  app.use("/api/auth", authRouter)
  app.use("/api/products", productRouter)
  app.use("/api/category", categoryRouter)
  app.use("/api/brand", brandRouter)
  app.use("/api/coupon", couponRouter)
  app.use("/api/wishlist", wishlistRouter)
  app.use("/api/admin", adminRouter)
}

export default mainRouter