# Airbnb Extension

A powerful Chrome extension for Airbnb that enhances listing discovery with advanced sorting capabilities.

## Features

✨ **Smart Sorting**
- Sort by nearby locations using geolocation
- Filter and sort by budget range
- Real-time price comparison
- Distance-based recommendations

## Installation

1. Clone this repository
2. Open `chrome://extensions` in Chrome
3. Enable "Developer mode"
4. Click "Load unpacked" and select the project folder
5. The extension will appear in your Chrome toolbar

## Project Structure

```
airbnb-extension/
├── manifest.json           # Extension configuration
├── src/
│   ├── popup/             # Popup UI components
│   ├── content/           # Content script logic
│   ├── background/        # Background service worker
│   └── utils/             # Utility functions
├── styles/                # CSS stylesheets
├── icons/                 # Extension icons
└── README.md              # This file
```

## Usage

1. Visit [airbnb.com](https://airbnb.com)
2. Click the extension icon in your toolbar
3. Select sorting preference:
   - **Nearby First**: Sort by distance from your location
   - **Budget Range**: Filter by price range
4. Results update automatically

## Technologies

- Chrome Extension API
- JavaScript (ES6+)
- HTML5 & CSS3
- Geolocation API

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please follow the coding standards in CONTRIBUTING.md
