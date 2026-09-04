import { Hono } from "hono";

export interface Env {
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_SHEET_ID: string;
  GOOGLE_DRIVE_ROOT_ID: string;
}

const app = new Hono<{ Bindings: Env }>();

app.get("/health", (c) => c.json({ success: true, data: { service: "e-kanjoli-api", status: "ok" } }));

app.get("/api/v1/health", (c) => c.json({ success: true, data: { service: "e-kanjoli-api", status: "ok" } }));

export default app;
