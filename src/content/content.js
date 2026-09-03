// Content script for Airbnb listings

const SortingEngine = {
    // Get all listings on the page
    getListings() {
        return document.querySelectorAll('[data-testid="little-search"]');
    },

    // Extract price from listing
    getPrice(listing) {
        const priceEl = listing.querySelector('[data-testid="price"]');
        if (priceEl) {
            const priceText = priceEl.textContent;
            const match = priceText.match(/\$(\d+)/);
            return match ? parseInt(match[1]) : null;
        }
        return null;
    },

    // Get listing location (simplified)
    getLocation(listing) {
        const titleEl = listing.querySelector('[dir="ltr"]');
        return titleEl ? titleEl.textContent : 'Unknown';
    },

    // Sort listings by budget
    sortByBudget(listings, minBudget, maxBudget) {
        const listingsArray = Array.from(listings);
        return listingsArray.sort((a, b) => {
            const priceA = this.getPrice(a) || Infinity;
            const priceB = this.getPrice(b) || Infinity;
            return priceA - priceB;
        }).filter(listing => {
            const price = this.getPrice(listing);
            return price && price >= minBudget && price <= maxBudget;
        });
    },

    // Sort listings by distance (simplified - requires geolocation)
    async sortByNearby(listings, radiusKm) {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    
                    const listingsArray = Array.from(listings);
                    // Mock distance calculation - real implementation would need lat/lng from listings
                    const sorted = listingsArray.sort(() => Math.random() - 0.5);
                    resolve(sorted);
                },
                (error) => {
                    console.log('Geolocation error:', error);
                    resolve(Array.from(listings));
                }
            );
        });
    },

    // Reorder DOM elements
    reorderListings(container, sortedListings) {
        sortedListings.forEach(listing => {
            container.appendChild(listing);
        });
    }
};

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'applySorting') {
        const { state } = request;
        const listings = SortingEngine.getListings();
        
        if (state.sortType === 'budget') {
            const sorted = SortingEngine.sortByBudget(
                listings,
                state.minBudget,
                state.maxBudget
            );
            const container = listings[0].parentElement;
            SortingEngine.reorderListings(container, sorted);
            sendResponse({ success: true, message: 'Budget sorting applied' });
        } else if (state.sortType === 'nearby') {
            SortingEngine.sortByNearby(listings, state.distance).then(sorted => {
                const container = listings[0].parentElement;
                SortingEngine.reorderListings(container, sorted);
                sendResponse({ success: true, message: 'Nearby sorting applied' });
            });
        }
    }
});

console.log('Airbnb extension content script loaded');
