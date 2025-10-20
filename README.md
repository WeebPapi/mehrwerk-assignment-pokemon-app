# 🎮 Pokémon Explorer

A sleek, modern web app for browsing Pokémon with support for multiple data sources. Built as part of the MEHRWERK technical challenge.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 🔄 Toggle between two different Pokémon data sources (PokeAPI & custom JSON files)
- 🎨 Polaroid-style card design with randomized backgrounds
- 📱 Fully responsive layout that works beautifully on mobile and desktop
- 🚀 Lightning-fast navigation with React Router
- 📊 Detailed Pokémon stats, types, and characteristics

## 🛠️ Tech Stack

- **React 19.1** with TypeScript for type-safe component development
- **Vite** for blazing-fast build times and hot module replacement
- **Tailwind CSS 4** for modern, utility-first styling
- **React Router 7** for seamless navigation
- **Axios** for clean HTTP requests
- **Lucide React** for crisp, modern icons

## 🚀 Getting Started

Getting this project running is super simple:

```bash
# Clone the repository
git clone <your-repo-url> <your-directory>

# Navigate to the project
cd <your-directory>

# Install dependencies
npm install

# Fire it up!
npm run dev
```

That's it! The app will be running at `http://localhost:5173` 🎉

## 🏗️ Architecture Decisions

### API Abstraction Layer

I created two separate service modules (`pokeapi.ts` and `customapi.ts`) that expose different function signatures. This means switching between data sources is as simple as toggling a context value - no component-level changes needed.

To Illustrate when the Pokeapi is being used as opposed to the JSON files, different images are displayed for the pokemon, in-game sprites for Pokeapi and official art for the custom implementation

### Context-Based API Management

The `ApiContext` keeps track of which data source is active across route changes. This approach keeps things clean without needing heavier state management libraries like Zustand.

### Component Structure

- **PokemonCard**: Polaroid-style cards with random background images from the assets folder
- **APIToggle**: A clean iOS-style toggle switch that lives in the header
- **Route-Based Detail View**: Clicking a Pokémon navigates to `/pokemon/:id` for a dedicated detail page

### Styling Philosophy

Went all-in on Tailwind for rapid iteration and consistent design. The polaroid card aesthetic adds a nostalgic touch while keeping the UI modern and clean.

## 🤖 AI Assistance

I used AI tools throughout this project to speed up development:

- **Project Planning**: Used Claude to create a time-efficient 4-hour implementation plan with tech stack recommendations
- **Code Completion** (VSCode): Leveraged autocomplete for repetitive tasks like prop definitions and type annotations
- **Chat Assistance**: Used AI to generate helper functions, process the JSON files into the right format, as well as creating types and make responsive design adjustments
- **Documentation**: This very README you're reading was drafted with Claude's help to save time

The AI tools were super helpful for handling boilerplate and staying focused on the interesting parts of the problem!

## ⏱️ Development Timeline

Total development time: **~3 hours** (spread over a few days)

I couldn't work on this in one continuous session due to a hackathon with friends over the weekend and some dental appointments, but the actual coding time was around 3 hours. The pre-planning with AI definitely helped me stay efficient and focused when I did have time to work on it.

## 🎨 Design Choices

- **Polaroid Cards**: Added personality with a vintage camera aesthetic
- **Random Backgrounds**: Each card gets a random background from the assets folder for visual variety
- **Clean Toggle**: iOS-style switch in the header for easy API switching
- **Responsive Grid**: Cards automatically adjust from 1 column (mobile) to 3 columns (desktop)

## 🙏 Acknowledgments

Thanks to the MEHRWERK team for the interesting challenge! Building a flexible data layer with a clean UI was a fun problem to solve. Especially as a lifelong Pokemon fan!

---
