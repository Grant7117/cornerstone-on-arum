import { NextResponse } from "next/server";

// Optional: run on the Edge runtime (fast, no cold start)
export const runtime = "edge";

export async function GET() {
  return NextResponse.json({
    ok: true,
    time: new Date().toISOString(),
    env: process.env.VERCEL ? "vercel" : "local",
  });
}
