
# 🚫 InstaBlocker

> **Stay focused. Block distractions. Master your time.**

A powerful browser extension that blocks Instagram and forces you to solve a technical coding question to gain temporary access.

---

## ✨ Overview

InstaBlocker is a smart Chrome extension built for developers serious about beating social media addiction. It doesn't just block Instagram—it acts as a "Technical Interview" bouncer. You want to scroll? Prove you know your stuff first.

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🚫 **The Wall** | Fully blocks Instagram with a high-priority overlay |
| 🎲 **Randomizer** | Fetches a random CS/Coding question from an internal bank |
| ⏳ **Memory System** | Correct answers grant **10 minutes** of access (persists via LocalStorage) |
| 🎨 **Hacker UI** | Matrix-style, CSS-injected terminal interface |
| 🛡️ **Anti-Cheating** | Input sanitization handles case sensitivity |

---

## 📥 Installation

### Quick Setup

1. **Get the files**
   ```bash
   git clone <repository-url>
   # or download and extract the zip file


2. **Open Chrome Extensions**
* Navigate to `chrome://extensions/`


3. **Enable Developer Mode**
* Toggle "Developer mode" (top-right corner)


4. **Load the extension**
* Click "Load unpacked"
* Select the project folder


5. **You're ready!** 🎉 Open Instagram to test the Toll Booth.

---

## 📁 Project Structure

```text
instablocker/
├── manifest.json      # The ID Card (Permissions & Config)
├── content.js         # The Brain (Blocking, Quiz Logic, & CSS Injection)
└── README.md          # You are here

```

---

## ⚙️ How It Works

When you visit Instagram, InstaBlocker springs into action:

1. **🕒 CHECK:** Is there a valid 10-minute timestamp in LocalStorage?
* **YES:** Allow access.
* **NO:** Deploy The Wall.


2. **🔒 BLOCK:** A full-page overlay covers the content.
3. **❓ QUIZ:** The script picks a random question (e.g., "What is FIFO?").
4. **⌨️ INPUT:** User types the answer.
5. **✅ SUCCESS:**
* Overlay is removed.
* Timestamp is saved for 10 minutes.
* User is free to scroll.



---

## 🚀 Future Roadmap

* [x] Randomized challenge questions (COMPLETED)
* [x] Time-based unlock (10 mins) (COMPLETED)
* [ ] Add support for YouTube & Twitter
* [ ] Custom unlock phrases
* [ ] Usage statistics dashboard
* [ ] Website whitelist/blacklist

---

## 📄 License

MIT License - Feel free to use, modify, and distribute

---

## 👤 Author

**Rishi**

---

*Made with ❤️ for productivity enthusiasts everywhere*



