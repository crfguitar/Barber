class AdRotator {
    constructor() {
        this.mainImage = document.getElementById('main-image');
        this.adImage = document.getElementById('ad-image');
        
        // Array of ad images - can be easily modified to add more ads
        this.adImages = [
            'ad1.svg',
            'ad2.svg',
            'ad3.svg'
        ];
        
        this.currentAdIndex = 0;
        this.isAdShowing = false;
        
        // Configuration
        this.adDisplayDuration = 5000; // 5 seconds as specified
        this.fadeOutDuration = 1000; // 1 second fade out
        this.intervalBetweenAds = 15000; // 15 seconds between ads (can be adjusted)
        
        this.init();
    }
    
    init() {
        // Start the ad rotation cycle
        this.startAdCycle();
        
        // Handle image load errors gracefully
        this.adImage.addEventListener('error', () => {
            console.warn('Failed to load ad image:', this.adImage.src);
            this.hideAd();
        });
        
        this.mainImage.addEventListener('error', () => {
            console.warn('Failed to load main image');
            this.mainImage.style.display = 'none';
        });
    }
    
    startAdCycle() {
        // Start the periodic ad display
        setInterval(() => {
            if (!this.isAdShowing) {
                this.showNextAd();
            }
        }, this.intervalBetweenAds);
    }
    
    showNextAd() {
        if (this.adImages.length === 0) {
            console.warn('No ad images configured');
            return;
        }
        
        // Get the next ad image
        const adSrc = this.adImages[this.currentAdIndex];
        this.currentAdIndex = (this.currentAdIndex + 1) % this.adImages.length;
        
        this.isAdShowing = true;
        
        // Set the ad image source and show it
        this.adImage.src = adSrc;
        this.adImage.classList.remove('hidden', 'fade-out');
        this.adImage.classList.add('show');
        
        console.log('Showing ad:', adSrc);
        
        // Hide the ad after the display duration
        setTimeout(() => {
            this.hideAd();
        }, this.adDisplayDuration);
    }
    
    hideAd() {
        if (!this.isAdShowing) return;
        
        // Start fade out animation
        this.adImage.classList.add('fade-out');
        this.adImage.classList.remove('show');
        
        // After fade out completes, fully hide the ad
        setTimeout(() => {
            this.adImage.classList.add('hidden');
            this.adImage.classList.remove('fade-out');
            this.isAdShowing = false;
            console.log('Ad hidden');
        }, this.fadeOutDuration);
    }
    
    // Method to manually trigger an ad (for testing)
    triggerAd() {
        if (!this.isAdShowing) {
            this.showNextAd();
        }
    }
}

// Initialize the ad rotator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const adRotator = new AdRotator();
    
    // For debugging/testing - expose to window
    window.adRotator = adRotator;
    
    // Optional: Add keyboard shortcut to manually trigger ads (for testing)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            adRotator.triggerAd();
        }
    });
    
    console.log('Ad rotator initialized. Press "A" to manually trigger an ad for testing.');
});