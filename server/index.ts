import express from "express";
import { createServer } from "http";
import apiRoutes from "./routes.js";

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", apiRoutes);

// Register Vite middleware (with fallback)
async function setupVite() {
  try {
    const { registerVite } = await import("./vite");
    registerVite(app, server);
  } catch (error) {
    console.log("Vite middleware not available, using static file serving");
    app.use(express.static("dist/public"));
    app.get("*", (_req, res) => {
      res.sendFile("index.html", { root: "dist/public" }, (err) => {
        if (err) res.status(404).send("Not found");
      });
    });
  }
}

setupVite();

const port = parseInt(process.env.PORT || "5000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});