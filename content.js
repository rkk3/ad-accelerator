(function() {
    // Checks for adds and manipulates the video or uses skip button if present
    function handleVideoAd() {
        const video = document.querySelector('video');
        const adElement = document.querySelector('.video-ads.ytp-ad-module');
        if (video && adElement && adElement.children.length > 0) {
            video.muted = true;
            video.playbackRate = 10.0;
        }
        // Skip button seems to be acessible at initialization, if its ever present
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
        if (skipButton) {
            skipButton.click();
            console.log('Used Button to Skip Add')
        }
    }

    // Handle video adds on initialization
    handleVideoAd();

    // Handle video adds when there are content changes
    const observer = new MutationObserver(handleVideoAd);
    
    observer.observe(document.body, { childList: true, subtree: true });
})();
