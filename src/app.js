import express from 'express'
import cors from 'cors'
import userRouter from './routers/user.js';
import orderRouter from './routers/order.js';
import foodRouter from './routers/food.js';

const PORT = process.env.PORT || 5500

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(foodRouter)
app.use(orderRouter)


app.listen(PORT, () => console.log(`*${PORT}`))

/**
    /users
    {userId, username, contact}

    /foods
    {foodId, foodImg, foodName}

    /orders
    {orderId, foodId, userId, count}
**/