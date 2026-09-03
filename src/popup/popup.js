// DOM Elements
const sortRadios = document.querySelectorAll('input[name="sortType"]');
const budgetSection = document.getElementById('budgetSection');
const distanceSection = document.getElementById('distanceSection');
const minBudgetInput = document.getElementById('minBudget');
const maxBudgetInput = document.getElementById('maxBudget');
const budgetRange = document.getElementById('budgetRange');
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const distanceBtns = document.querySelectorAll('.distance-btn');
const autoApplyCheckbox = document.getElementById('autoApply');
const showDistanceCheckbox = document.getElementById('showDistance');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');

// State
let state = {
    sortType: 'nearby',
    minBudget: 0,
    maxBudget: 1000,
    distance: 5,
    autoApply: true,
    showDistance: true
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupEventListeners();
});

// Load saved settings
function loadSettings() {
    chrome.storage.local.get(['sortSettings'], (result) => {
        if (result.sortSettings) {
            state = { ...state, ...result.sortSettings };
            updateUI();
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Sort type radio buttons
    sortRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.sortType = e.target.value;
            updateVisibility();
            saveSettings();
        });
    });

    // Budget inputs
    minBudgetInput.addEventListener('change', () => {
        state.minBudget = parseInt(minBudgetInput.value);
        saveSettings();
    });

    maxBudgetInput.addEventListener('change', () => {
        state.maxBudget = parseInt(maxBudgetInput.value);
        updateBudgetDisplay();
        saveSettings();
    });

    budgetRange.addEventListener('input', () => {
        state.maxBudget = parseInt(budgetRange.value);
        updateBudgetDisplay();
    });

    // Distance buttons
    distanceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            distanceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.distance = parseInt(btn.dataset.distance);
            saveSettings();
        });
    });

    // Checkboxes
    autoApplyCheckbox.addEventListener('change', () => {
        state.autoApply = autoApplyCheckbox.checked;
        saveSettings();
    });

    showDistanceCheckbox.addEventListener('change', () => {
        state.showDistance = showDistanceCheckbox.checked;
        saveSettings();
    });

    // Buttons
    applyBtn.addEventListener('click', applySorting);
    resetBtn.addEventListener('click', resetSettings);
}

// Update visibility based on sort type
function updateVisibility() {
    if (state.sortType === 'budget') {
        budgetSection.style.display = 'block';
        distanceSection.style.display = 'none';
    } else {
        budgetSection.style.display = 'none';
        distanceSection.style.display = 'block';
    }
}

// Update budget display
function updateBudgetDisplay() {
    rangeMin.textContent = `$${state.minBudget}`;
    rangeMax.textContent = `$${state.maxBudget}`;
    maxBudgetInput.value = state.maxBudget;
    budgetRange.value = state.maxBudget;
}

// Update UI from state
function updateUI() {
    document.getElementById(`sort-${state.sortType}`).checked = true;
    minBudgetInput.value = state.minBudget;
    maxBudgetInput.value = state.maxBudget;
    budgetRange.value = state.maxBudget;
    updateBudgetDisplay();
    
    distanceBtns.forEach(btn => {
        if (parseInt(btn.dataset.distance) === state.distance) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    autoApplyCheckbox.checked = state.autoApply;
    showDistanceCheckbox.checked = state.showDistance;
    updateVisibility();
}

// Save settings
function saveSettings() {
    chrome.storage.local.set({ sortSettings: state });
}

// Apply sorting
function applySorting() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'applySorting',
            state: state
        }, (response) => {
            if (response && response.success) {
                showNotification('Sorting applied successfully!');
            }
        });
    });
}

// Reset settings
function resetSettings() {
    state = {
        sortType: 'nearby',
        minBudget: 0,
        maxBudget: 1000,
        distance: 5,
        autoApply: true,
        showDistance: true
    };
    saveSettings();
    updateUI();
    showNotification('Settings reset!');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}
