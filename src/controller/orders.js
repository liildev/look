import { read, write } from "../utils/moduls.js";

let ordersController = {
  GET: (req, res) => {
    let { userId } = req.query;

    let users = read("users");
    let foods = read("foods");
    let orders = read("orders");

    orders.map((order) => {
      order.user = users.find((user) => user.userId == order.userId);
      order.food = foods.find((food) => food.foodId == order.foodId);
      delete order.foodId;
    });
    if (userId) {
      orders = orders.filter((order) => order.userId == userId);
      res.send(orders);
    } else {
      res.send(orders);
    }
  },

  POST: (req, res) => {
    let data = req.body;

    let orders = read("orders");
    let { userId, foodId, count } = data;
    let order = orders.find(
      (order) => order.foodId == foodId && order.userId == userId
    );
    if (order) {
      order.count = order.count + +count;
    } else {
      order = {
        userId,
        foodId: foodId,
        count: count,
      };
      orders.push(order);
    }
    res
      .status(200)
      .send({ status: 200, message: "new order added", data: order });

    write("orders", orders);
  },
};

export default ordersController;
