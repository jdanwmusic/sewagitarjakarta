const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/guitars';

async function convertImages() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg'));
  console.log('=== Konversi ke WebP (quality=85) ===');
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = inputPath.replace('.jpg', '.webp');
    const info = await sharp(inputPath).metadata();
    console.log(`  ${file}: ${info.width}x${info.height}, ${Math.round(fs.statSync(inputPath).size/1024)}KB`);
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    const outSize = Math.round(fs.statSync(outputPath).size/1024);
    console.log(`    -> ${path.basename(outputPath)}: ${outSize}KB`);
  }
  console.log('Done.');
}

convertImages().catch(console.error);
