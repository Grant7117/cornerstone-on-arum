import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "edge";

// Accepts FormData: files[] (images/pdfs) and optional prefix (e.g. "cornerstone/", "plans/", "docs/")
export async function POST(req: NextRequest) {
  // Simple lock: only requests with your secret are allowed
  const secret = process.env.SITE_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return new NextResponse("Unauthorised", { status: 401 });
  }

  const form = await req.formData();
  const files = form.getAll("files") as File[];
  const rawPrefix = (form.get("prefix") as string) || "cornerstone/";
  const prefix = rawPrefix.endsWith("/") ? rawPrefix : `${rawPrefix}/`;

  if (!files.length) return NextResponse.json({ uploaded: [] });

  const uploaded = await Promise.all(
    files.map(async (file) => {
      const safe = file.name.replace(/\s+/g, "-").toLowerCase();
      const key = `${prefix}${Date.now()}-${safe}`;
      const blob = await put(key, file, {
        access: "public",
        // When deployed on Vercel with Blob connected, token is auto-injected.
        // If ever needed locally: token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      return { name: file.name, url: blob.url, pathname: blob.pathname, size: file.size, type: file.type };
    })
  );

  return NextResponse.json({ uploaded });
}
