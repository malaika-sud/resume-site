# Portfolio Website

Live Site: [malaika-sud.com](http://www.malaika-sud.com/)

A responsive personal portfolio built to present my software engineering experience, education, technical skills, and projects in a clean recruiter-facing format.

This site is meant to be more than a static resume page. It gives visitors a quick, interactive way to understand what I am working on now, what technologies I use, and how my experience connects across frontend, backend, AI, and systems-focused work.

## What It Does

The portfolio highlights:

- current software engineering work at Sailing Stone AI
- graduate study in Computer Science at Georgia Tech
- technical skills across frontend, backend, databases, AI tooling, and infrastructure
- selected technical projects, including HourBank and this portfolio site
- resume, GitHub, LinkedIn, and email contact paths

The site is designed for fast scanning. Recruiters can land on the page, understand my background within a few seconds, and then dig into experience tabs, project details, or my resume.

## Key Features

- Dynamic section with rotating typewriter text
- Responsive graduation photo and short career summary
- Education section for Georgia Tech and UC Santa Cruz
- Skills carousel grouped around languages, tools, frameworks, AI/ML, and coursework
- Interactive experience section with clickable cards and tabbed role details
- Project section with a clear GitHub call-to-action for HourBank
- Responsive navigation and contact actions
- Production build served through a small Express server

## Why This Project Matters

This project focuses on the frontend and product-presentation side of my portfolio.

The engineering goal was to keep the site simple but intentional: reusable React components, clear section ownership, responsive layout behavior, and enough interactivity to feel custom without becoming overcomplicated.

## Tech Stack

| Area          | Tools                                                        |
| ------------- | ------------------------------------------------------------ |
| Frontend      | React, JavaScript, React Bootstrap                           |
| Styling       | CSS, Bootstrap grid, custom responsive layout                |
| UI behavior   | React state, controlled tabs, carousel, typewriter animation |
| Icons         | React Bootstrap Icons                                        |
| Serving       | Node.js, Express                                             |
| Build tooling | Create React App, react-scripts                              |

## Project Structure

```text
src/
  components/
    Banner.js          # Hero section, typewriter text, intro copy
    Education.js       # Academic background
    Skills.js          # Technical skills carousel
    Experience.js      # Tabbed experience section
    ExperienceTab.js   # Clickable experience overview cards
    Projects.js        # Featured project descriptions and links
    NavBar.js          # Navigation, resume, social links
    Bottom.js          # Footer
  assets/
    img/               # Logos, profile photo, section artwork
    font/              # Custom Centra font files
```

## Running Locally

Prerequisites:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Create a production build:

```bash
npm run build
```

Serve the production build:

```bash
npm start
```

The Express server runs on `http://localhost:3000` by default.

## Available Scripts

| Command         | Description                                       |
| --------------- | ------------------------------------------------- |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm start`     | Serves the production build with Express          |
| `npm test`      | Runs the React test runner                        |

## Status

This is an active portfolio project. I update it as my resume, projects, and technical focus evolve.
