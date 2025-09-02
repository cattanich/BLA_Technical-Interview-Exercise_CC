# Pokédex Application

A full-stack Pokémon browser with React frontend and Express backend.
Developed by Christian Cattani

## User Story

"As a Pokemon enthusiast, I want to browse and search for Pokemon easily, so that I can quickly find detailed information about my favorite Pokemon. I need a secure application where I can log in and access a comprehensive collection of Pokemon with their abilities, moves, and forms."

## Features

- **Secure Authentication**
  - Username/password login
  - Session persistence
  - Protected routes

- **Pokémon Browsing**
  - Visual card-based layout
  - Type indicators with color coding
  - Pagination for easy navigation
  - Search functionality

- **Detailed Information**
  - Modal view with comprehensive details
  - Pokémon abilities, moves, and forms
  - Visual styling based on Pokémon types

## Project Structure

```
├── frontend/ (React + Vite)
│   ├── components/ - Reusable UI elements
│   ├── contexts/ - Global state management
│   ├── hooks/ - Custom React hooks
│   ├── pages/ - Main views
│   └── services/ - API communication
│
└── backend/ (Express)
    ├── controllers/ - Request handlers
    ├── data/ - Pokémon dataset
    ├── routes/ - API endpoints
    └── services/ - Business logic
```

## Claude Code Prompts

### Project Initialization

```
Create a Pokémon application with React and Express that fulfills this user story:
"As a Pokemon enthusiast, I want to browse and search for Pokemon easily, so that I can quickly find detailed information about my favorite Pokemon. I need a secure application where I can log in and access a comprehensive collection of Pokemon with their abilities, moves, and forms."

Set up the folder structure and files for the frontend (React + Vite) and backend (Express) following clean architecture.
```

### Authentication System

```
Implement a simple authentication system for the Pokémon application with:
- Local validation using "admin"/"admin" credentials
- Persistence with localStorage
- React context for authentication state management
- Automatic redirection based on authentication status
```

### Pokémon Frontend

```
Create React components to display a list of Pokémon with:
- Visual cards showing image and name
- Color-coded badges for Pokémon types
- Modal to show details on click (abilities, moves, forms)
- Pagination for navigating results
- Functional search bar
```

### Pokémon Backend

```
Develop an Express backend that:
- Replicates basic PokeAPI functionality
- Implements RESTful endpoints for listing Pokémon with pagination
- Allows search by name
- Delivers complete details of a Pokémon by ID
- Uses in-memory storage for data
```

## Setup

1. Install dependencies:
   ```bash
   npm run install-all
   ```

2. Start servers:
   ```bash
   npm run dev
   ```

3. Access:
   - Frontend: http://localhost:4000
   - Backend: http://localhost:3001

4. Credentials:
   - Username: admin
   - Password: admin

## Resources

Pokémon images are sourced from the official PokeAPI sprites repository:
```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
```

## Technologies

- **Frontend**: React, Vite, React Router, Styled Components
- **Backend**: Express, Node.js
- **Development**: ESLint, Vitest

---

This project implements clean architecture with separation of concerns, reusable components, and an efficient REST API.
