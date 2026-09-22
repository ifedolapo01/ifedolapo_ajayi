/**
 * Generates a small and a full-size WebP for every plate, plus one compressed
 * fallback. Both WebP widths are always produced so <Plate> can emit a srcset
 * without having to know anything about the source file.
 *
 * Run `npm run images` after dropping new screenshots into /assets-source.
 */
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "assets-source";
const OUT = "public/plates";
const SMALL = 760;
const MAX = 1800;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const name = path.parse(file).name;
  const input = path.join(SRC, file);
  const { width = MAX } = await sharp(input).metadata();
  const full = Math.min(width, MAX);

  await sharp(input)
    .resize({ width: SMALL, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(OUT, `${name}-${SMALL}.webp`));

  await sharp(input)
    .resize({ width: full, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(OUT, `${name}-full.webp`));

  await sharp(input)
    .resize({ width: Math.min(width, 1280), withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 70 })
    .toFile(path.join(OUT, `${name}.png`));

  console.log(`✓ ${name}  ${SMALL}w · ${full}w`);
}
