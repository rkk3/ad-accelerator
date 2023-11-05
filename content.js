(function() {
    // Function to handle video manipulation
    function handleVideoAd() {
        const video = document.querySelector('video');
        const adElement = document.querySelector('.video-ads.ytp-ad-module');
        if (video && adElement && adElement.children.length > 0) {
            video.playbackRate = 10.0;
            video.muted = true;
        }
    }

    // Immediate application for already present video
    handleVideoAd();

    // MutationObserver to catch changes in page content
    const observer = new MutationObserver(handleVideoAd);
    
    observer.observe(document.body, { childList: true, subtree: true });
})();
