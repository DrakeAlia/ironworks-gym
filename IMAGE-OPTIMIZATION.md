# Image Optimization Guide for Iron Works Gym

## Overview

This guide explains how to optimize high-resolution gym photos for web use using the provided script.

## Current Image Issues

- **Original Size**: 9504x6336 pixels (~39MB each)
- **Problem**: Way too large for web, causing slow page loads
- **Solution**: Resize to 1920px width and compress to ~80% quality

## Setup

### 1. Check Dependencies

Sharp is already installed with Next.js. You're ready to go!

```bash
# Verify sharp is installed
npm list sharp
```

### 2. Prepare Your Images

Place all high-resolution images in the `public/images/updated-imgs` folder:

```bash
# Check the folder
ls public/images/public/images/updated-imgs/
```

## Usage

### Basic Usage

```bash
# Run the optimization script
node optimize-images.js
```

### What the Script Does

1. ✅ Reads all images from `public/images/updated-imgs/` folder
2. ✅ Resizes to max **1920px width** (maintains aspect ratio)
3. ✅ Compresses to **80% quality** (good balance of quality/file size)
4. ✅ Converts to progressive JPEG (better web loading)
5. ✅ Saves to `public/images/` folder
6. ✅ Keeps original filenames
7. ✅ Shows before/after file sizes

### Example Output

```
🖼️  Found 10 image(s) to optimize

────────────────────────────────────────────────────────────

📸 Processing: gym-weights-1.jpg
   Original size: 39.24 MB
   Original dimensions: 9504x6336
   ✓ Optimized dimensions: 1920x1280
   ✓ New size: 0.82 MB (97.9% reduction)
   ✓ Saved to: ./public/images/gym-weights-1.jpg
```

## Configuration

You can customize the script by editing `optimize-images.js`:

```javascript
const CONFIG = {
  inputDir: './public/images/updated-imgs',  // Source folder
  outputDir: './public/images',              // Destination folder
  maxWidth: 1920,                            // Max width in pixels
  quality: 80,                               // JPEG quality (1-100)
  formats: ['.jpg', '.jpeg', '.png', '.webp'],
};
```

## Naming Conventions

The script preserves original filenames. For consistency, consider this naming pattern:

### Recommended Naming Pattern

```
about-gym-floor.jpg          # About page - gym floor
about-pullups.jpg            # About page - pullups
about-machines.jpg           # About page - machines

carousel-squat.jpg           # Carousel - squat rack
carousel-shoulder-press.jpg  # Carousel - shoulder press
carousel-pullups.jpg         # Carousel - pullups

facility-cardio.jpg          # Facility - cardio area
facility-weights.jpg         # Facility - weights area
facility-stretching.jpg      # Facility - stretching zone

gym-equipment-1.jpg          # General equipment photos
gym-equipment-2.jpg
gym-equipment-3.jpg
```

### Current Images in Use

Based on your codebase, these are the current image paths:

**About Page:**
- `/images/about-gym-floor.jpg`
- `/images/about-pullups.jpg`
- `/images/about-machines.jpg`

**About Page Carousel:**
- `/images/carousel-squat.jpg`
- `/images/carousel-shoulder-press.jpg`
- `/images/carousel-pullups.jpg`
- `/images/carousel-kettlebell-rows.jpg`
- `/images/about-dumbbell-curl.jpg`

**Membership Page:**
- `/images/facility-cardio.jpg`
- `/images/facility-weights.jpg`
- `/images/facility-stretching.jpg`
- `/images/facility-machines.jpg`

**General:**
- `/images/gym-equipment-1.jpg`
- `/images/gym-equipment-2.jpg`
- `/images/gym-equipment-3.jpg`

## Workflow

### Step-by-Step Process

1. **Add new photos to `public/images/updated-imgs/` folder**
   ```bash
   # Copy your high-res images
   cp ~/Downloads/gym-photos/*.jpg public/images/updated-imgs/
   ```

2. **Run the optimization script**
   ```bash
   node optimize-images.js
   ```

3. **Review the results**
   ```bash
   # Check optimized images
   ls -lh public/images/
   ```

4. **Update your code if needed**
   - If you renamed files, update the image paths in your components
   - Example: `src="/images/new-photo.jpg"`

5. **Clean up (optional)**
   ```bash
   # Remove original high-res images after confirming optimization
   rm -rf public/images/updated-imgs/*
   ```

## Best Practices

### Image Quality Guidelines

- **1920px width**: Perfect for desktop displays (even 4K monitors)
- **80% quality**: Sweet spot for web (high quality, reasonable file size)
- **Progressive JPEG**: Better perceived loading speed

### Expected File Sizes

After optimization:
- **1920x1280 image**: ~0.5-1.5 MB (depending on content)
- **Reduction**: Usually 95-98% file size reduction
- **Loading time**: Much faster, under 1 second on good connections

### When to Re-optimize

Re-run the script when:
- Adding new photos
- Need different dimensions (update `maxWidth` in config)
- Want different quality (update `quality` in config)

## Troubleshooting

### Script Errors

**Error: "Cannot find module 'sharp'"**
```bash
# Install sharp manually if needed
npm install sharp
```

**Error: "Input directory not found"**
```bash
# Create the directory
mkdir updated-imgs
```

**Error: "No image files found"**
- Check that images are in `public/images/updated-imgs/` folder
- Verify file extensions (.jpg, .jpeg, .png, .webp)

### Image Quality Issues

**Images look blurry:**
- Increase quality: Change `quality: 80` to `quality: 85` or `quality: 90`

**File sizes still too large:**
- Decrease quality: Change `quality: 80` to `quality: 75` or `quality: 70`
- Reduce max width: Change `maxWidth: 1920` to `maxWidth: 1440`

**Images too small on large displays:**
- Increase max width: Change `maxWidth: 1920` to `maxWidth: 2560`

## Advanced Usage

### Batch Processing

Process specific files only:

```bash
# Move specific files to public/images/updated-imgs/
cp ~/Downloads/new-photo-1.jpg public/images/updated-imgs/
cp ~/Downloads/new-photo-2.jpg public/images/updated-imgs/

# Run optimization
node optimize-images.js

# Move back
rm public/images/updated-imgs/*
```

### Different Output Formats

Edit the script to output WebP (better compression):

```javascript
.webp({
  quality: 80,
})
.toFile(outputPath.replace('.jpg', '.webp'));
```

## Performance Impact

### Before Optimization
- **File Size**: ~39 MB per image
- **Load Time**: 10-30 seconds (slow connection)
- **Total Page Size**: 390 MB (10 images)

### After Optimization
- **File Size**: ~0.8 MB per image (97% smaller!)
- **Load Time**: Under 1 second (slow connection)
- **Total Page Size**: 8 MB (10 images)

## Summary

✅ **Script Location**: `optimize-images.js`
✅ **Input Folder**: `public/images/updated-imgs/`
✅ **Output Folder**: `public/images/`
✅ **Max Width**: 1920px
✅ **Quality**: 80%
✅ **Format**: Progressive JPEG

**Result**: Beautiful images that load fast! 🚀
