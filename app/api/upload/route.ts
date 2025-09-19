// app/api/upload/route.ts
import { NextResponse } from "next/server";

// Force Node.js runtime (not Edge) so bundler stops complaining about Node APIs
export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // safe default for APIs

export async function POST(_req: Request) {
  // TODO: replace with your actual upload logic later
  return NextResponse.json({ ok: true, message: "Upload endpoint placeholder" });
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "upload" });
}
