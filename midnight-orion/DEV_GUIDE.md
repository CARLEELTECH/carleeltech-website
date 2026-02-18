# CARLEELTECH Development Guide

## 📂 Project Structure

This project is built with **React** + **Vite**. The design uses **Vanilla CSS** for maximum control and performance.

### 🎨 Styling (Colors, Fonts, Layout)
**File:** `src/index.css`

This is the "Control Center" for the design. 
- **Colors:** Look for the `:root` section at the top. Change `--color-primary`, `--color-bg-start`, etc.
- **Fonts:** Change `--font-main` or `--font-tech`.
- **Glass Effect:** Tweak `--glass-bg`, `--glass-border` to change the frosted glass look.
- **Global Classes:** Reusable classes like `.glass-card`, `.btn-primary` are defined here.

### 🧩 Components (Content & Sections)
**Directory:** `src/components/`

Each section of the website is its own file. Edit these to change text, images, or layout structure.

- **`Navbar.jsx`**: The top navigation bar and logo.
- **`Hero.jsx`**: The main top section ("Engineering the Future").
- **`Services.jsx`**: The "Core Capabilities" grid.
- **`Robotics.jsx`**: The "Intelligent Robotics" schematic section.
- **`Projects.jsx`**: The "Builds & Deployments" list.
- **`Jimoh.jsx`**: The AI Widget integration code.
- **`Footer.jsx`**: The bottom footer links.

### 🧠 AI Agent (Jimoh)
**File:** `src/components/Jimoh.jsx`

To update the AI agent (e.g., if you create a new agent in ElevenLabs):
1. Open this file.
2. Find the `<elevenlabs-convai>` tag.
3. Replace the `agent-id` with your new ID.

### 🖼️ Images & Assets
**Directory:** `public/`

- Place images here (like `logo.png`).
- Reference them in code as `/filename.png`.

## 🚀 Running the Project

1. **Start Development Server:**
   ```bash
   npm run dev
   ```
2. **Build for Production:**
   ```bash
   npm run build
   ```
