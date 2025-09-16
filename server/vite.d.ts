declare module "./vite" {
  import type { Express } from "express";
  import type { Server } from "http";
  export function registerVite(app: Express, server: Server): void;
}