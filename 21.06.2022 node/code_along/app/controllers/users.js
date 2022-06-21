import { User } from "../models/User.js";

export const crateUser = async (req, res) => {
  try {
    const userBody = req.body;
    console.log(userBody);
    const user = new User(userBody);
    const newUser = await user.save();
    res.send(newUser);
  } catch (e) {
    console.log(e);
  }
};
