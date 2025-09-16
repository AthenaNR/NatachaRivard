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
    console.log("Vite middleware loaded successfully");
  } catch (error) {
    console.log("Vite middleware not available, setting up manual development server");
    
    // In development, serve from client directory
    if (process.env.NODE_ENV !== "production") {
      // Serve static assets from client directory
      app.use(express.static("client"));
      app.use(express.static("client/public"));
      
      // Serve index.html for all non-API routes
      app.get("*", (_req, res) => {
        res.sendFile("index.html", { root: "client" }, (err) => {
          if (err) {
            console.error("Error serving index.html:", err);
            res.status(404).send("Frontend not found. Please ensure the client directory contains index.html");
          }
        });
      });
    } else {
      // Production: serve from dist/public
      app.use(express.static("dist/public"));
      app.get("*", (_req, res) => {
        res.sendFile("index.html", { root: "dist/public" }, (err) => {
          if (err) res.status(404).send("Not found");
        });
      });
    }
  }
}

setupVite();

const port = parseInt(process.env.PORT || "5000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});