import authRouter from "./authRouter.js"
import blogRouter from "./blogRouter.js"
import brandRouter from "./brandRouter.js"
import categoryRouter from "./categoryRouter.js"
import couponRouter from "./couponRouter.js"
import flashsaleRouter from "./flashsaleRouter.js"
import orderRouter from "./orderRouter.js"
import productRouter from "./productRouter.js"
import reviewRouter from "./reviewRouter.js"
import wishlistRouter from "./wishlistRouter.js"


const mainRouter = (app) => {
  app.use("/api/auth", authRouter)
  app.use("/api/blog", blogRouter)
  app.use("/api/brand", brandRouter)
  app.use("/api/category", categoryRouter)
  app.use("/api/coupon", couponRouter)
  app.use("/api/flashsale", flashsaleRouter)
  app.use("/api/wishlist", wishlistRouter)
  app.use("/api/order", orderRouter)
  app.use("/api/products", productRouter)
  app.use("/api/review", reviewRouter)
}

export default mainRouter