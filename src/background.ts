let isEnabled = true;

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    if (message.type === 'TOGGLE_ADBLOCK') {
        isEnabled = !isEnabled;
        sendResponse({ isEnabled });
    } else if (message.type === 'GET_STATE') {
        sendResponse({ isEnabled });
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        return isEnabled ? { cancel: true } : { cancel: false };
    },
    {
        urls: [
            "*://*.doubleclick.net/*",
            "*://*.googlesyndication.com/*",
            "*://*.youtube.com/pagead/*",
            "*://*.youtube.com/api/stats/ads*"
        ]
    },
    ["blocking"]
);
