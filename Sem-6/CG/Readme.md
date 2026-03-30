
### The Interactive SVG Code

---

## 1. SVG Code File (`smart_home.svg`)
Copy this code exactly. It includes the shapes, the interactive logic, and the animations required by your guidelines.

```xml
<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      #mainPanel, #toggleTrack, #toggleHandle { transition: all 0.5s ease; }
      .clickable { cursor: pointer; }
    </style>
  </defs>

  <rect id="mainPanel" x="50" y="40" width="300" height="120" rx="20" ry="20" fill="#f0f4f8" stroke="#d1d9e6" stroke-width="2" />

  <g id="sunIcon" transform="translate(110, 100)">
    <circle r="18" fill="#ffb700" />
    <g>
      <rect x="-2" y="-30" width="4" height="10" rx="2" fill="#ffb700" />
      <rect x="-2" y="20" width="4" height="10" rx="2" fill="#ffb700" />
      <rect x="20" y="-2" width="10" height="4" rx="2" fill="#ffb700" />
      <rect x="-30" y="-2" width="10" height="4" rx="2" fill="#ffb700" />
      <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
    </g>
  </g>

  <g id="moonIcon" transform="translate(110, 100)" opacity="0">
    <circle r="18" fill="#e2e8f0" />
    <circle cx="-8" cy="-5" r="15" fill="#1a202c" />
  </g>

  <g transform="translate(230, 85)" class="clickable" onclick="toggleTheme()">
    <rect id="toggleTrack" width="70" height="30" rx="15" fill="#48bb78" />
    <circle id="toggleHandle" cx="55" cy="15" r="12" fill="white" />
  </g>

  <text id="statusText" x="230" y="135" font-family="sans-serif" font-size="14" font-weight="bold" fill="#4a5568">Mode: DAY</text>

  <script><![CDATA[
    let isDay = true;
    function toggleTheme() {
      isDay = !isDay;
      const panel = document.getElementById('mainPanel');
      const sun = document.getElementById('sunIcon');
      const moon = document.getElementById('moonIcon');
      const track = document.getElementById('toggleTrack');
      const handle = document.getElementById('toggleHandle');
      const text = document.getElementById('statusText');

      if (isDay) {
        panel.setAttribute('fill', '#f0f4f8');
        sun.setAttribute('opacity', '1');
        moon.setAttribute('opacity', '0');
        track.setAttribute('fill', '#48bb78');
        handle.setAttribute('cx', '55');
        text.textContent = 'Mode: DAY';
        text.setAttribute('fill', '#4a5568');
      } else {
        panel.setAttribute('fill', '#1a202c');
        sun.setAttribute('opacity', '0');
        moon.setAttribute('opacity', '1');
        track.setAttribute('fill', '#cbd5e0');
        handle.setAttribute('cx', '15');
        text.textContent = 'Mode: NIGHT';
        text.setAttribute('fill', '#e2e8f0');
      }
    }
  ]]></script>
</svg>
```

---

## 2. Explanation of Project

### **Code Structure**
The project is structured using a hierarchical **XML-based SVG format**. It is divided into four main sections:
* **Definitions (`<defs>`)**: Contains CSS styles for smooth transitions.
* **Graphics Groups (`<g>`)**: Used to containerize the Sun and Moon icons so they can be treated as single objects for transformations.
* **Interactive Layer**: A grouping of the toggle switch with an `onclick` event listener.
* **Scripting**: An embedded JavaScript block that handles the logic for switching between "Day" and "Night" states.

### **Elements Used**
* **`<rect>`**: Used for the dashboard panel and the toggle switch track.
* **`<circle>`**: Used for the sun core, the moon body, and the toggle handle.
* **`<text>`**: Displays the current status of the dashboard.
* **`<animateTransform>`**: Specifically used on the sun’s rays to create a continuous $360^{\circ}$ rotation.
* **`<g>`**: Organizes elements for easier coordinate manipulation (using `translate`).

### **Functionality**
The project functions as an **Interactive Smart Home UI**. 
1.  **Continuous Animation**: When the scene is in "Day Mode," the sun’s rays rotate infinitely using SVG's native animation engine.
2.  **User Interaction**: By clicking the toggle switch, the user triggers a JavaScript function `toggleTheme()`.
3.  **Transformation & State Change**: 
    * The **Toggle Handle** translates horizontally along the X-axis (from `cx="55"` to `cx="15"`).
    * The **Visual Theme** shifts: The background color transitions from light gray to dark charcoal, the Sun fades out (opacity 0), and the Moon fades in (opacity 1).
    * The **Text Feedback** updates dynamically to inform the user of the current mode.


