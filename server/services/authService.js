import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { readFile, writeFile } from "node:fs/promises";
import "dotenv/config";

const filePath = "C:\\JSProjects\\Linkodkod\\server\\DAL\\users.json";

async function readUsers() {
  try {
    const users = await readFile(filePath, "utf8");

    return JSON.parse(users);
  } catch (error) {
    throw new Error("Failed to read users", error.message);
  }
}

export async function register(username, password) {
  try {
    // Hash password with 12 salt rounds for security
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = { username, hashedPassword };

    const users = await readUsers();
    newUser.id = Number(
      users.length > 0 ? Math.max(...users.map((u) => Number(u.id))) + 1 : 1
    );
    users.push(newUser);

    await writeFile(filePath, JSON.stringify(users, null, 2), "utf8");

    // Generate JWT token with 7-day expiration
    const token = generateToken(newUser);

    return {
      user: newUser,
      token: token,
      expiresIn: "7d",
    };
  } catch (err) {
    throw new Error("Could not signup user: " + err.message);
  }
}

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role || "user",
    },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
}
