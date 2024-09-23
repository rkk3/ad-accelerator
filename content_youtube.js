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
        // Skip button seems to be acessible at initialization, if its ever present        
        if (video && adElement && adElement.children.length > 0) {
            const originalPlaybackRate = video.playbackRate;
            const originalMutedStatus = video.muted;
            muteAndSpeedUp(video, 5.0)
        // const skipButton = document.querySelector(skipButtonSelectors.join(', '));
        // if (skipButton) {
        //     skipButton.click();
        //     console.log('Used Button to Skip Ad');
        }
    }

    function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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