import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).send("Unauthorized please login or sign in");
    return;
  } else {
    try {
      const payload = jwt.verify(token, process.env.SECRET);
      req.user = payload;
    } catch (error) {
      res
        .status(401)
        .send("Unauthorized, token not valid please login or sign in");
      return;
    }
  }
  next();
}
