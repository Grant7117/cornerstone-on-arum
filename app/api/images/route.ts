import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, route: "images" });
}

// If you also defined POST/PUT before, remove them for now or add minimal stubs.
// export async function POST() { return NextResponse.json({ ok: true }); }

// Avoid Edge runtime until everything builds cleanly:
// export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // safe default

