const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/products_raw');
const outputDir = path.join(__dirname, 'public/products');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Grid configuration: 2 columns, 3 rows
const COLS = 2;
const ROWS = 3;

// Margins (approximate percentages, can be tuned)
// Assuming the grid covers most of the page but might have headers/footers
// Let's start with simple equal division and see.
// Actually, looking at typical catalogs, there is often a header.
// I'll try to process one image first or just do all and inspect.
// Better to just slice equally for now.

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  
  if (files.length === 0) {
    console.log("No images found in", inputDir);
    return;
  }

  console.log(`Found ${files.length} images to process.`);

  let productCount = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const { width, height } = metadata;
    const itemWidth = Math.floor(width / COLS);
    const itemHeight = Math.floor(height / ROWS);

    console.log(`Processing ${file}: ${width}x${height} -> Grid ${itemWidth}x${itemHeight}`);

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const left = col * itemWidth;
        const top = row * itemHeight;
        
        // Skip the last item if it's empty? We don't know yet.
        // We'll just save all 6.

        const outputFilename = `product_${++productCount}.jpg`;
        const outputPath = path.join(outputDir, outputFilename);

        // Extract region
        // Improve: Add some crop to remove potential borders/text overlap if needed
        // For now, raw slice.
        await image
          .clone()
          .extract({ left, top, width: itemWidth, height: itemHeight })
          .toFile(outputPath);
        
        console.log(`  Saved ${outputFilename}`);
      }
    }
  }
}

processImages().catch(err => console.error(err));
