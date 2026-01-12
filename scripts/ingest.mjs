import fs from "node:fs/promises";
import path from "node:path";

const KEY = process.env.OPENAI_API_KEY ?? "";
if (!KEY) {
  console.error("Missing OPENAI_API_KEY");
  process.exit(1);
}

const root = process.cwd();
const docsDir = path.join(root, "data", "docs");
const outFile = path.join(root, "data", "index.json");

await fs.mkdir(docsDir, { recursive: true });

function chunkText(text, max = 900) {
  const clean = text.replace(/\r/g, "");
  const out = [];
  for (let i = 0; i < clean.length; i += max) out.push(clean.slice(i, i + max));
  return out;
}

async function embed(text) {
  const r = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${KEY}` },
    body: JSON.stringify({ model: "text-embedding-3-small", input: text })
  });
  if (!r.ok) throw new Error(await r.text());
  const data = await r.json();
  return data.data[0].embedding;
}

const files = (await fs.readdir(docsDir))
  .filter(f => /\.(md|txt)$/i.test(f))
  .filter(f => !/^README(\.|$)/i.test(f) && !f.startsWith("_"));

if (files.length === 0) {
  await fs.writeFile(outFile, JSON.stringify({ entries: [] }, null, 2), "utf8");
  console.log("No docs found. Wrote empty index:", outFile);
  process.exit(0);
}

const entries = [];
for (const file of files) {
  const full = path.join(docsDir, file);
  const content = await fs.readFile(full, "utf8");
  const chunks = chunkText(content, 900);
  let i = 0;
  for (const c of chunks) {
    const e = await embed(c);
    entries.push({ id: `${file}#${i++}`, source: file, content: c, embedding: e });
    await new Promise(r => setTimeout(r, 60));
  }
}

await fs.writeFile(outFile, JSON.stringify({ entries }, null, 2), "utf8");
console.log(`Wrote ${entries.length} chunks -> ${outFile}`);
