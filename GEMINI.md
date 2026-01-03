# Project: Astro Retro Blog

## Overview
This is a web application built with [Astro](https://astro.build/), featuring a distinct 8-bit retro aesthetic. It leverages **React** for interactive UI components and **Tailwind CSS** (v4 via Vite plugin) for styling. The project demonstrates a decoupled architecture where complex visual effects (like the canvas background) are separated from the content layer.

## Tech Stack
- **Framework:** Astro 5.x
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript / JavaScript

## Project Structure
- `src/pages/index.astro`: The main landing page. It orchestrates the layout, background, and content.
- `src/layouts/Layout.astro`: The global layout component, handling HTML structure, fonts (Press Start 2P), and global styles.
- `src/components/RetroBackground.astro`: A dedicated component that renders the animated 8-bit background (grid, scanlines, vignette) using HTML5 Canvas. It isolates visual logic from content.
- `src/components/RetroCard.jsx`: A React component representing a blog post card with hover effects and 8-bit styling.
- `src/styles/global.css`: Global CSS definitions.

## Key Features
- **Visuals:** Custom canvas animations for a CRT/Retro feel.
- **Fonts:** Uses "Press Start 2P" from Google Fonts for pixel-art typography.
- **Hybrid Rendering:** Astro handles static HTML generation while React handles interactive components (`client:visible`).

## Development

### Prerequisites
- Node.js (Latest LTS recommended)

### Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server at `http://localhost:4321`. |
| `npm run build` | Builds the project for production. |
| `npm run preview` | Previews the production build locally. |

## Coding Conventions
- **Styling:** Use Tailwind utility classes directly in markup. For highly specific pixel-art look, custom shadows and borders are defined via Tailwind arbitrary values (e.g., `shadow-[6px_6px_0px_0px_#2f2f2f]`).
- **Components:** 
    - Use `.astro` files for layout and static structure.
    - Use `.jsx/.tsx` (React) for interactive elements requiring state or event handling.
- **Architecture:** Keep visual "effects" (like the background canvas) separate from "content" (text, cards) to maintain code readability and performance.

## Interaction Guidelines
- **Language:** Please respond and communicate in **Chinese (中文)** for all future interactions related to this project.
