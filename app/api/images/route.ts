import { list } from "@vercel/blob";
import { NextResponse } from "next/server";
export const runtime = "edge";
export async function GET() {
  const { blobs } = await list({ prefix: "cornerstone/" });
  const items = blobs
    .filter(b => /\.(png|jpe?g|webp|gif|avif)$/i.test(b.pathname))
    .map(b => ({ url: b.url, pathname: b.pathname, size: b.size ?? 0 }));
  return NextResponse.json({ items });
}
