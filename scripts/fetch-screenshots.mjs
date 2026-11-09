// Baixa os 4 primeiros screenshots (iPhone) de cada app da App Store (BR) para public/apps/<id>/N.jpg
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const ids = [...new Set([...readFileSync("lib/data.ts", "utf8").matchAll(/apple\.com\/\w+\/app\/[^"]*\/id(\d+)/g)].map((m) => m[1]))];
const manifest = {};
for (const id of ids) {
  const { results } = await (await fetch(`https://itunes.apple.com/lookup?id=${id}&country=br`)).json();
  const urls = (results[0]?.screenshotUrls ?? []).slice(0, 4);
  if (!urls.length) { console.log("sem screenshots:", id); continue; }
  mkdirSync(`public/apps/${id}`, { recursive: true });
  manifest[id] = [];
  for (const [i, u] of urls.entries()) {
    const buf = Buffer.from(await (await fetch(u.replace(/\/[^/]+$/, "/392x696bb.jpg"))).arrayBuffer());
    writeFileSync(`public/apps/${id}/${i + 1}.jpg`, buf);
    manifest[id].push(`/apps/${id}/${i + 1}.jpg`);
  }
  console.log(id, urls.length);
}
writeFileSync("public/apps/manifest.json", JSON.stringify(manifest, null, 1));
