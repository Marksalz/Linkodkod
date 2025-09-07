import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3040;
const server = express();

/**
 * Request logging middleware
 */
server.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Middleware setup
server.use(express.json());
//server.use("/api", router);

/**
 * Start server first, then connect to databases
 * Prevents Render from hanging on deployment
 */
server.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server running on port ${PORT}`);
});
