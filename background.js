chrome.webNavigation.onCompleted.addListener((details) => {
    if (details.url) {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['content.js']
        });
    }
}, {url: [{urlMatches : 'https://*.youtube.com/*'}]});
  
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    if (details.url) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['content.js']
    });
    }
}, {url: [{urlMatches : 'https://*.youtube.com/*'}]});
