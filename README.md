# InstaBlocker

A browser extension that blocks Instagram and replaces the page with a motivational message.

## Description

InstaBlocker is a Chrome/Firefox extension designed to help users avoid distractions by blocking access to Instagram. When you try to visit Instagram, the extension clears the page and displays a motivational message reminding you to stay focused.

## Features

- 🚫 Blocks Instagram website access
- 💪 Displays motivational message: "PAY FOR YOUR SINS"
- 🎨 Simple and effective distraction blocker

## Installation

1. Clone this repository or download the files
2. Open your browser's extension management page:
   - **Chrome**: `chrome://extensions/`
   - **Firefox**: `about:addons`
3. Enable "Developer mode" (Chrome only)
4. Click "Load unpacked" and select the folder containing these files
5. The extension is now active!

## Files

- `manifest.json` - Extension configuration and permissions
- `contents.js` - Script that blocks Instagram and displays the message

## How It Works

When you visit Instagram, the `contents.js` script:
1. Clears the entire page content
2. Creates a heading with the message "PAY FOR YOUR SINS"
3. Styles it in red, centered, and large font

## Requirements

- Chrome 88+ or Firefox 68+
- Browser extension installation permissions

## Future Enhancements

- Customizable messages
- Whitelist/blacklist functionality
- Timer-based blocking
- Multiple language support

## License

MIT License

## Author

Brain Nourishment
