import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const assetsDirectory = path.resolve("src/assets");

const images = [
  {
    input: "intro-bg.webp",
    output: "intro-bg-optimized.webp",
    width: 1440,
    quality: 78,
  },
  {
    input: "bird-white.webp",
    output: "bird-white-optimized.webp",
    width: 320,
    quality: 82,
  },
];

await Promise.all(
  images.map(async ({ input, output, width, quality }) => {
    const inputPath = path.join(assetsDirectory, input);
    const outputPath = path.join(assetsDirectory, output);

    await sharp(inputPath)
      .resize({
        width,
        withoutEnlargement: true,
      })
      .webp({
        quality,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`✓ Created: ${output}`);
  }),
);