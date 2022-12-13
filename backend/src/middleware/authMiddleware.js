import jwt from "jsonwebtoken";
import UserModel from "../model/user.model";

export async function protect(req, res, next) {
  let token;
  try {
    if (!req.headers.authorization) {
      throw new Error("Token deosn't provided");
    }
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.accessSecret);

    // cheange this if you are useing username to encrypt you tokens or so
    req.email = decoded.email;
    const user = await UserModel.findOne({ email: req.email });
    req.user = user;

    //  or you can create req.user att to sotre user data
    next();
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
}
