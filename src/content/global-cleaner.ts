const selectors = [
    '[id*="ad"]', '[class*="ad"]', '[class*="sponsor"]',
    '[data-ad]', 'iframe[src*="ads"]', '[href*="adclick"]'
];

function removeAds() {
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
    });
}

removeAds();
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });
