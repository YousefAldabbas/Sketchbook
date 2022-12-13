import UserModel from "../model/user.model";
import { createUser, loginUser } from "../service/user.service";
import { createAccessToken, createTokens, verifyRefresh } from "../utils/jwt";

export async function createUserHandler(req, res, next) {
  try {
    const user = await createUser(req.body);
    return res.send({ user, tokens: createTokens(user.email) });
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}

export async function loginUserHandler(req, res, next) {
  try {
    console.log(req.body);
    const user = await loginUser(req.body);
    return res.send({ user, tokens: createTokens(user.email) });
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}

export async function refreshTokenHandler(req, res, next) {
  try {
    console.log(req.body)
    const email = verifyRefresh(req.body.refreshToken);
    console.log(email);
    const accessToken = createAccessToken(email);
    return res.send({
      tokens: { accessToken, refreshToken: req.body.refreshToken },
    });
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}
