import express from "express";
import router from "./router.js";
import "dotenv/config";

const PORT = process.env.PORT || 3040;
const server = express();

server.use(express.static("public"));

server.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

server.use(express.json());
server.use("/api", router);

server.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});
