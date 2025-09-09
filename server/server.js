import express from "express";
import multer from "multer";
import router from "./router.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const PORT = process.env.PORT || 3040;
const server = express();
// const upload = multer({ dest: "public/" });

// server.post("/upload-handler", upload.single("imgSrc"), (req, res) => {
//   console.log(req.file);

//   // req.file contains information about the uploaded file
//   // The file is already saved in 'uploads/' by Multer
//   res.send("File uploaded successfully!");
// });

server.use(express.json());
server.use(cookieParser());
server.use(express.static("public"));

server.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

server.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = ["http://localhost:3040", "http://localhost:5173"];
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  }

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

server.use(express.json());
server.use("/api", router);

server.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});
