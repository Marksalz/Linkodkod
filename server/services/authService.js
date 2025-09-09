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

async function readUserById(id) {
  try {
    const users = await readUsers();
    const filteredUser = users.filter((user) => user.id === Number(id));
    if (filteredUser.length <= 0) {
      throw new Error("post not found 404");
    }
    return filteredUser[0];
  } catch (error) {
    throw new Error(error.message);
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

export async function login(id, username, password, token) {
  try {
    const user = await readUserById(id);

    //verify user by name
    if (!(user.username === username)) {
      throw new Error("Invalid username");
    }

    // Verify password against stored hash
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }
    let tokenFinal = undefined;
    if (!token) {
      // Generate new JWT token
      tokenFinal = generateToken(user);
    } else {
      tokenFinal = token;
    }

    return {
      message: "Login successful!",
      token: tokenFinal,
      user: {
        id: user.id,
        username: user.username,
      },
      expiresIn: "7d",
    };
  } catch (error) {
    throw new Error("Could not login user: " + error.message);
  }
}

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.SECRET,
    { expiresIn: "7d" }
  );
}
