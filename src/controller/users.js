import { read, write } from "../utils/moduls.js";

let userController = {
  GET: (req, res) => {
    let users = read("users");
    res.send(users);
  },

  POST: (req, res) => {
    let users = read("users");

    req.body.userId = users.length ? users.at(-1).userId + 1 : 1;
    users.push(req.body);
    write("users", users);

    res.status(200).send({ status: 200, message: "user added" });
  },
};

export default userController;
