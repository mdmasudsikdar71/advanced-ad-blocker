function skipAds() {
    const skipBtn = document.querySelector('.ytp-ad-skip-button') as HTMLElement;
    if (skipBtn) skipBtn.click();

    const video = document.querySelector('video');
    const adShowing = document.querySelector('.ad-showing');
    if (video && adShowing) video.currentTime = video.duration;

    const adSelectors = [
        '.ytp-ad-module', '.ytp-ad-overlay-container', '.video-ads',
        '#player-ads', '.ytp-ad-skip-button-container'
    ];

    adSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
    });
}

setInterval(skipAds, 1000);
