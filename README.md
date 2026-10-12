# Retro-Modern Digital Alarm Clock ⏰

A sleek, retro-modern digital twin-bell alarm clock built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. This project blends the nostalgic silhouette of a classic mechanical twin-bell alarm clock with a modern, high-contrast digital LED screen.

---

## 📸 Preview & Concept

The design replicates a matte-black physical twin-bell alarm clock standing on metallic chrome peg feet:
- **Vintage Hardware Body**: Curved chrome top handle, dual matte-black alarm bells, top striker (hammer), silver bell pins, and angled metal legs.
- **Modern Digital Screen**: A circular black display enclosed in a glowing white halo ring, featuring large digital numbers and a day-of-the-week indicator with the current day illuminated in neon lime green.

---

## ✨ Features

- **⏱️ Real-Time Digital Display**: Synchronizes with your system clock using JavaScript's native `Date` object and updates every second.
- **🟢 Dynamic Weekday Highlighter**: Displays all seven days of the week (`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`) and automatically highlights today's active day in bright lime green (`#a3e635`).
- **⏳ Blinking Colon Animation**: Smooth blinking colon (`:`) indicator mimicking an authentic digital LED display.
- **🎨 Pure CSS Styling & Depth**:
  - Multi-stop linear and radial gradients for metallic chrome and matte-black powder-coat finishes.
  - Multi-layer drop shadows and inset highlights that create physical depth and realism without external image assets.
  - Pseudo-elements (`::before` and `::after`) for bell mounts, hammer heads, and tubular reflections.
- **📱 Responsive Layout**: Flexbox-centered viewport that scales gracefully on mobile devices and smaller screens.
- **📂 Clean Modular Code**: Organized into separated, easy-to-read files (`index.html`, `style.css`, and `script.js`).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure for clock components (bells, pins, hammer, display, and legs). |
| **CSS3** | Custom gradient shaders, box shadows, transforms, and keyframe animations. |
| **Tailwind CSS** | Container utilities and responsive flexbox alignment. |
| **Google Fonts** | `Orbitron` digital monospace font for clock numbers. |
| **Vanilla JavaScript** | Live time computation, 2-digit zero-padding, and weekday tracking. |

---

## 📁 File Structure

```text
Clock/
├── index.html     # HTML structure and external dependencies
├── style.css      # Custom styles, gradients, and animations
├── script.js      # Time calculation and weekday logic
└── README.md      # Project documentation
```

---

## 🚀 Getting Started

No installations or build steps are required.

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/DigitalClock.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DigitalClock
   ```
3. Open `index.html` in any web browser:
   - Double-click `index.html`, or
   - Right-click and choose **Open with > Chrome / Edge / Firefox**, or
   - Use the **Live Server** extension in VS Code.

---

## ⚙️ How It Works

### 1. Structure (`index.html`)
The clock is built using layered `div` elements:
- `.handle` — Top arch handle
- `.bell.left`, `.bell.right` — Twin bells
- `.pin.left`, `.pin.right` — Silver pins on top of the bells
- `.hammer` — Striker between the bells
- `.clock` — Circular turned metal casing
  - `.display` — Inner face with `.time` and `.days`
  - `.leg.left`, `.leg.right` — Metal legs

### 2. Styling (`style.css`)
- **Outer Casing**: `linear-gradient(120deg, #171717, #050505 55%, #202020)` with inset shadows creates the dark turned-metal bezel.
- **Screen Ring**: `border: 4px solid #f7f7f7` with `box-shadow: 0 0 5px #fff` produces the inner LED halo glow.
- **Weekday Highlight**: `.day.active` changes the text color to `#a3e635` (neon lime).

### 3. Logic (`script.js`)
- `new Date()` extracts hours, minutes, and the current weekday index (`0` for Sunday through `6` for Saturday).
- `padStart(2, "0")` formats single digits with a leading zero (e.g. `09:05`).
- The matching day element with `data-day="<index>"` receives the `.active` class while others have it removed.
- `setInterval(updateClock, 1000)` executes the update function every second.

---

## 🎨 Customization Tips

- **Change Active Day Color**:
  In `style.css`, modify the `.day.active` rule:
  ```css
  .day.active {
    color: #38bdf8; /* Change from lime green to sky blue, orange, etc. */
  }
  ```
- **Switch to 12-Hour Format**:
  In `script.js`, convert hours before zero-padding:
  ```javascript
  let h = now.getHours();
  h = h % 12 || 12; // Converts 0 to 12
  const hours = String(h).padStart(2, "0");
  ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).