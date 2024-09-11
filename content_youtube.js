(function () {
    const skipButtonSelectors = [
       // Original version
       '.ytp-ad-skip-button',
       '.ytp-ad-skip-button-modern',
       '.ytp-skip-ad-button',
       // Observed May 2024
       '.ytp-skip-ad button',
       '[id^="skip-ad"] button',
       '[id^="skip-button"]',
    ];
    // Checks for ads and manipulates the video or uses skip button if present
    function handleVideoAd() {
        const video = document.querySelector('video');
        const adElement = document.querySelector('.video-ads.ytp-ad-module');
        if (video && adElement && adElement.children.length > 0) {
            muteAndSpeedUp(video, 16.0)
        }
        // Skip button seems to be acessible at initialization, if its ever present
        const skipButton = document.querySelector(skipButtonSelectors.join(', '));
        if (skipButton) {
            skipButton.click();
            console.log('Used Button to Skip Ad');
        }
    }

    function muteAndSpeedUp(videoElement, playbackRate) {
        videoElement.muted = true;
        videoElement.playbackRate = playbackRate;
    }

    function initializeAdHandling() {
        handleVideoAd();

        const observer = new MutationObserver(handleVideoAd);
        observer.observe(document.body, { childList: true, subtree: true });
    }
    initializeAdHandling()
})();