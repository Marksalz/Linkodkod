import { register, login } from "../services/authService.js";

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    const result = await register(username, password);
    console.log(result);

    res.cookie("token", result.token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      path: "/",
    });

    res.status(201).json({
      ...result.user,
      token: result.token,
      expiresIn: result.expiresIn,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server internal error" });
  }
}

async function loginUser(req, res) {
  try {
    const { id, username, password } = req.body;

    const result = await login(id, username, password, token);

    res.cookie("token", result.token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    res.status(200).json({
      ...result.user,
      token: result.token,
      expiresIn: result.expiresIn,
    });
  } catch (err) {
    res.status(401).json({ error: err.message || "Server internal error" });
  }
}

const authCtrl = { registerUser, loginUser };

export default authCtrl;
