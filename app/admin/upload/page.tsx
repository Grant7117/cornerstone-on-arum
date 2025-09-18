"use client";
import { useState } from "react";

type Uploaded = { name: string; url: string; pathname: string; size: number; type: string };

export default function AdminUpload() {
  const [busy, setBusy] = useState(false);
  const [items, setItems] = useState<Uploaded[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true); setError(null); setItems([]);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { authorization: `Bearer ${process.env.NEXT_PUBLIC_SITE_SECRET ?? ""}` },
        body: fd,
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setItems(data.uploaded ?? []);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Bulk upload to Blob</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Files</label>
          <input type="file" name="files" multiple accept="image/*,application/pdf" className="block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Folder</label>
          <select name="prefix" className="border p-2 rounded-xl">
            <option value="cornerstone/">Images & renders</option>
            <option value="plans/">Floor plans (PDF)</option>
            <option value="docs/">Documents (PDF)</option>
          </select>
        </div>
        <button disabled={busy} className="px-5 py-3 rounded-2xl bg-black text-white">
          {busy ? "Uploading…" : "Upload"}
        </button>
      </form>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {items.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-lg font-semibold">Uploaded</h2>
          <ul className="space-y-2 text-sm">
            {items.map((f) => (
              <li key={f.pathname} className="flex items-center justify-between gap-4">
                <div className="truncate">
                  <div className="font-medium truncate">{f.name}</div>
                  <div className="text-neutral-600 truncate">{f.pathname}</div>
                </div>
                <a href={f.url} target="_blank" className="underline">Open</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
