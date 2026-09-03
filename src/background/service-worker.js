// Background service worker

chrome.runtime.onInstalled.addListener(() => {
    console.log('Airbnb Extension installed');
    // Initialize default settings
    chrome.storage.local.set({
        sortSettings: {
            sortType: 'nearby',
            minBudget: 0,
            maxBudget: 1000,
            distance: 5,
            autoApply: true,
            showDistance: true
        }
    });
});

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url?.includes('airbnb.com')) {
        console.log('Airbnb page loaded:', tab.url);
        // Auto-apply if enabled
        chrome.storage.local.get(['sortSettings'], (result) => {
            if (result.sortSettings?.autoApply) {
                chrome.tabs.sendMessage(tabId, {
                    action: 'applySorting',
                    state: result.sortSettings
                }).catch(err => console.log('Content script not ready yet'));
            }
        });
    }
});
