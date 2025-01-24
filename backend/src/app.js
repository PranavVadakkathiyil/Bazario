import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// routers 
import userRouter from './routes/user.routes.js'
import ProductRouter from './routes/product.routes.js'
import CartRouter from './routes/cart.routes.js'
import OrderRouter from './routes/order.routes.js'







// route declaration user
app.use('/api/v1/users',userRouter)
// route declaration Product
app.use('/api/v1/product',ProductRouter)
// route declaration Cart
app.use('/api/v1/cart',CartRouter)
// route declaration Order
app.use('/api/v1/order',OrderRouter)







export default app;
