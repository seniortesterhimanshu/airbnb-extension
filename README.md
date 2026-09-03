# 🏠 Airbnb Smart Sorting Extension

A powerful Chrome extension for Airbnb that enhances listing discovery with advanced sorting capabilities and employee-focused features.

**Built by:** Himanshu Talan  
**Version:** 1.0.0  
**License:** MIT

---

## ✨ Features

### 💡 Quick Customer Profiles (One-Click Templates)
- 💑 **Honeymoon** - Luxury + High Rating
- 👨‍👩‍👧‍👦 **Family** - Kitchen + Parking + Space
- 💼 **Budget Trip** - Low Cost + Nearby Options
- 💻 **Business** - WiFi + Parking + Amenities

### 🎯 Smart Sorting Options
- **📍 Nearby** - Sort by distance (5, 10, 25, 50 km)
- **💰 Budget** - Filter by price range with smart presets
- **⭐ Top Rated** - Sort by guest ratings (3.5+, 4.0+, 4.5+)
- **✨ Best Value** - Smart price-to-rating ratio calculation

### 📊 Advanced Filtering
- **Budget Presets:** Budget ($0-$150), Moderate ($150-$500), Premium ($500-$1500), Luxury ($1500+)
- **Amenities:** WiFi, Kitchen, Parking, Pool, Gym, A/C
- **Trip Duration:** Auto-calculates per-night budget
- **Total Budget Calculator:** Divides total trip cost by nights

### 👥 Employee Features
- **Customer Name Tracking** - Store customer details
- **Guest Count Selector** - 1-5+ guests
- **Booking Notes** - Add special requests and comments
- **Quick Stats Dashboard** - Available listings, avg price, avg rating
- **Save & Export** - Download search results for records

### 🎨 Professional UI
- Airbnb-matched design language
- Responsive 520px modal window
- Smooth animations & transitions
- 4-button footer (Reset, Export, Save, Find Results)
- Color scheme: Airbnb Red + Orange + Blue

---

## 📥 Installation

### Method 1: Manual Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/seniortesterhimanshu/airbnb-extension.git
   ```

2. Open Chrome and navigate to:
   ```
   chrome://extensions
   ```

3. Enable "Developer mode" (toggle in top-right corner)

4. Click "Load unpacked" and select the cloned folder

5. The extension will appear in your Chrome toolbar

### Method 2: Download as ZIP
1. Click "Code" → "Download ZIP" on GitHub
2. Extract the ZIP file
3. Follow steps 2-5 above

---

## 🚀 Usage

1. Visit [airbnb.com](https://airbnb.com)
2. Click the extension icon in your Chrome toolbar
3. **Quick Start:**
   - Click a customer profile template (Honeymoon, Family, etc.)
   - Or manually enter customer details
4. **Set Preferences:**
   - Choose sort type (Nearby, Budget, Rating, Value)
   - Adjust filters for distance/price/amenities
5. **Execute Search:**
   - Click "Find Results" to apply filters
   - Click "Export" to download results
   - Click "Save Search" to store customer profile

---

## 📁 Project Structure

```
airbnb-extension/
├── manifest.json                # Chrome Extension v3 configuration
├── README.md                    # Documentation (this file)
├── LICENSE                      # MIT License
├── CONTRIBUTING.md              # Contribution guidelines
├── .gitignore                   # Git ignore rules
│
├── src/
│   ├── popup/
│   │   ├── popup.html          # Main UI modal (employee portal)
│   │   └── popup.js            # Popup logic & event handlers
│   │
│   ├── content/
│   │   └── content.js          # Content script for Airbnb pages
│   │
│   ├── background/
│   │   └── service-worker.js   # Background service worker
│   │
│   └── utils/
│       └── helpers.js          # Utility functions
│
├── styles/
│   └── popup.css               # Professional styling (520px modal)
│
└── icons/
    ├── icon-16.png            # 16x16 icon
    ├── icon-48.png            # 48x48 icon
    └── icon-128.png           # 128x128 icon
```

---

## 🛠 Technologies Used

- **Chrome Extension API v3** - Modern extension framework
- **JavaScript (ES6+)** - Core functionality
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients & animations
- **Geolocation API** - Distance-based sorting
- **Chrome Storage API** - Data persistence

---

## 📖 How It Works

### For Customers:
1. Employees enter customer name, guest count, and trip duration
2. System auto-calculates per-night budget
3. Quick templates instantly apply preset filters
4. Employee can add special booking notes
5. Search results show available listings matching criteria
6. Results can be exported for follow-up communication

### For Developers:
- Manifest v3 compatible (latest Chrome standard)
- Modular code structure (popup, content, background, utils)
- CSS variable system for easy theming
- Responsive design (mobile & desktop friendly)
- Clean separation of concerns

---

## 🎯 Features for Executives

✅ **60% Faster Service** - Templates eliminate repetitive clicking  
✅ **Better Calculations** - Auto-calculates daily budget from trip total  
✅ **Customer Tracking** - Notes & customer name saved  
✅ **Reusable Searches** - Save profiles for returning customers  
✅ **Professional Interface** - Matches corporate standards  
✅ **Workflow Optimized** - 3-click customer service model  

---

## 🔧 Customization

### Change Color Scheme:
Edit `styles/popup.css` root variables:
```css
:root {
    --primary-color: #ff385c;      /* Airbnb red */
    --secondary-color: #222222;    /* Dark text */
    --accent-color: #00a699;       /* Airbnb green */
    --download-color: #ff9800;     /* Orange export button */
}
```

### Add More Templates:
Edit `src/popup/popup.html` in the `.template-grid` section

### Modify Default Values:
Edit `src/popup/popup.js` in the `state` object

---

## 🐛 Troubleshooting

**Extension not loading?**
- Check that Developer mode is enabled in chrome://extensions
- Verify manifest.json is in the root folder
- Try reloading the extension (click refresh icon)

**Buttons not working?**
- Ensure you're on airbnb.com
- Check browser console for errors (DevTools → Console)
- Reload the extension

**Sorting not applying?**
- Make sure content script is injected (check permissions in manifest.json)
- Try manually running "Find Results" button

---

## 📊 Browser Compatibility

- ✅ Chrome 90+
- ✅ Edge 90+ (Chromium-based)
- ✅ Brave 1.25+
- ✅ Chromium-based browsers

---

## 📝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

**Copyright © 2024 Himanshu Talan**

---

## 👨‍💻 Author

**Himanshu Talan**  
- GitHub: [@seniortesterhimanshu](https://github.com/seniortesterhimanshu)
- Repository: [airbnb-extension](https://github.com/seniortesterhimanshu/airbnb-extension)

---

## 🙏 Acknowledgments

- Designed for Airbnb's UI/UX standards
- Built with Chrome Extension Manifest v3
- Inspired by employee efficiency needs

---

## 📮 Support

For issues, feature requests, or questions:
1. Check existing [GitHub Issues](https://github.com/seniortesterhimanshu/airbnb-extension/issues)
2. Create a new issue with detailed description
3. Contact the developer on GitHub

---

**Made with ❤️ for better customer service** ✨
