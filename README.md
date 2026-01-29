# InstaBlocker

A browser extension that blocks Instagram with an interactive challenge to unlock access.

## Description

InstaBlocker is a Chrome/Firefox extension designed to help users avoid distractions by blocking access to Instagram. When you try to visit Instagram, the extension displays a full-page overlay with a challenge that users must solve to gain access.

## Features

- 🚫 Blocks Instagram website access completely
- 🎯 Interactive challenge to unlock access
- 🔐 Answer the riddle "olleh" to unblock
- 🎨 Clean, centered UI with white input field
- ✅ Error handling with alerts for wrong answers

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
1. Creates a full-page black overlay with fixed positioning
2. Displays "Access Blocked" heading
3. Shows a textarea input field with white background and black text
4. Provides a button to submit the answer
5. User must enter "olleh" (hello backwards) to remove the overlay
6. Shows an alert if the wrong answer is entered
7. Removes the overlay and allows access when correct answer is submitted

## Requirements

- Chrome 88+ or Firefox 68+
- Browser extension installation permissions

## Future Enhancements

- Randomized challenge questions
- Multiple difficulty levels
- Time limit for solving the challenge
- Customizable unlock answers
- Statistics tracking
- Whitelist/blacklist functionality

## License

MIT License

## Author

Brain Nourishment
