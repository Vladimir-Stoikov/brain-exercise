# Brain Exercise

A small React + TypeScript web application with a collection of interactive exercises designed to train attention, reaction speed, memory, and typing skills.

## Features

- **Schulte Table** — find numbers in the correct order as quickly as possible.
- **Stroop Test** — identify the displayed color while ignoring conflicting word meanings.
- **Touch Typing** — practice typing speed and accuracy with different difficulty levels.
- **Socratic Questions** — reflect on open-ended questions and keep a history of your answers.
- **Difficulty System** — adjustable difficulty for exercises that support it.
- **Responsive UI** — designed to work across different screen sizes.
- **Error Boundary** — prevents a single component error from breaking the entire application.
- **Lazy Loading** — application pages are loaded on demand.

## Tech Stack

- React
- TypeScript
- React Router
- Styled Components
- Vite
- ESLint

## Project Structure

The project is organized around features rather than keeping all application logic in a single directory.

```text
src/
├── components/       # Shared UI components
├── features/         # Exercise-specific components, hooks and data
├── hooks/             # Shared custom hooks
├── pages/             # Application pages
├── router/            # Routing configuration
├── utility/           # Shared context and utilities
├── App.tsx
└── main.tsx
```

## Getting Started

### Requirements

- Node.js
- npm

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Create a production build:

```bash
npm run build
```

### Lint

Run ESLint:

```bash
npm run lint
```

## Purpose

This project was created as a personal React + TypeScript practice project.

The main goal was to practice building an application with reusable components, custom hooks, typed data, routing, context, feature-based structure, and interactive UI logic.

## Status

Completed as a personal pet project.
