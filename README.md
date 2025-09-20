# Barber

A simple webpage that displays a static image with periodic advertisement overlays.

## Features

- **Static Image Display**: Shows a main background image continuously
- **Periodic Ads**: Ad images appear every 15 seconds, display for 5 seconds, then fade out over 1 second
- **Smooth Transitions**: CSS animations provide smooth fade in/out effects
- **Multiple Ad Support**: Rotates through multiple advertisement images
- **Responsive Design**: Images scale to fit the viewport while maintaining aspect ratio

## Files

- `index.html` - Main webpage structure
- `style.css` - Styling and animations
- `script.js` - Ad rotation logic and timing
- `main-image.svg` - Static background image
- `ad1.svg`, `ad2.svg`, `ad3.svg` - Advertisement images

## Usage

1. Open `index.html` in a web browser
2. The main image will display immediately
3. Advertisement images will automatically appear every 15 seconds
4. For testing, press 'A' key to manually trigger an ad

## Configuration

Edit the timing values in `script.js`:
- `adDisplayDuration` - How long ads are shown (default: 5 seconds)
- `fadeOutDuration` - Fade out animation time (default: 1 second)  
- `intervalBetweenAds` - Time between ads (default: 15 seconds)

## Adding More Ads

To add more advertisement images:
1. Add image files to the directory
2. Update the `adImages` array in `script.js` with the new filenames