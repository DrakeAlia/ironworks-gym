#!/usr/bin/env node

/**
 * Image Optimization Script for Iron Works Gym
 *
 * This script optimizes high-resolution gym photos for web use:
 * - Resizes images to max 1920px width (maintains aspect ratio)
 * - Compresses to 80% quality
 * - Outputs to public/images folder
 * - Preserves original filenames
 *
 * Usage: node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  inputDir: './public/images/updated-imgs',
  outputDir: './public/images',
  maxWidth: 1920,
  quality: 80,
  formats: ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'],
};

// Create output directory if it doesn't exist
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  console.log(`✓ Created output directory: ${CONFIG.outputDir}`);
}

// Check if input directory exists
if (!fs.existsSync(CONFIG.inputDir)) {
  console.error(`✗ Error: Input directory "${CONFIG.inputDir}" not found!`);
  console.log('\nPlease create the directory and add your images:');
  console.log(`  mkdir ${CONFIG.inputDir}`);
  process.exit(1);
}

// Read all files from input directory
const files = fs.readdirSync(CONFIG.inputDir);

// Filter image files
const imageFiles = files.filter(file => {
  const ext = path.extname(file);
  return CONFIG.formats.includes(ext);
});

if (imageFiles.length === 0) {
  console.log('✗ No image files found in the input directory.');
  console.log(`\nSupported formats: ${CONFIG.formats.join(', ')}`);
  process.exit(0);
}

console.log(`\n🖼️  Found ${imageFiles.length} image(s) to optimize\n`);
console.log('─'.repeat(60));

// Process images
let successCount = 0;
let errorCount = 0;

async function optimizeImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(CONFIG.inputDir, file);
    const outputPath = path.join(CONFIG.outputDir, file);

    try {
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / (1024 * 1024)).toFixed(2);

      console.log(`\n📸 Processing: ${file}`);
      console.log(`   Original size: ${originalSize} MB`);

      // Get original dimensions
      const metadata = await sharp(inputPath).metadata();
      console.log(`   Original dimensions: ${metadata.width}x${metadata.height}`);

      // Optimize image
      const info = await sharp(inputPath)
        .resize(CONFIG.maxWidth, null, {
          withoutEnlargement: true, // Don't enlarge smaller images
          fit: 'inside',
        })
        .jpeg({
          quality: CONFIG.quality,
          progressive: true, // Better for web loading
        })
        .toFile(outputPath);

      // Get new file size
      const newStats = fs.statSync(outputPath);
      const newSize = (newStats.size / (1024 * 1024)).toFixed(2);
      const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`   ✓ Optimized dimensions: ${info.width}x${info.height}`);
      console.log(`   ✓ New size: ${newSize} MB (${savings}% reduction)`);
      console.log(`   ✓ Saved to: ${outputPath}`);

      successCount++;
    } catch (error) {
      console.error(`   ✗ Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  // Summary
  console.log('\n' + '─'.repeat(60));
  console.log('\n📊 Optimization Complete!\n');
  console.log(`   ✓ Successfully optimized: ${successCount} image(s)`);
  if (errorCount > 0) {
    console.log(`   ✗ Failed: ${errorCount} image(s)`);
  }
  console.log(`\n💾 Output directory: ${CONFIG.outputDir}\n`);
}

// Run the optimization
optimizeImages().catch(error => {
  console.error('\n✗ Fatal error:', error);
  process.exit(1);
});
