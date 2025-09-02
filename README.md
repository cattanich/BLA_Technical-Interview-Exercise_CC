# Pokédex Application

A full-stack Pokémon browser with React frontend and Express backend.
Developed by Christian Cattani

## User Story

"As a Pokemon enthusiast, I want to browse and search for Pokemon easily, so that I can quickly find detailed information about my favorite Pokemon. I need a secure application where I can log in and access a comprehensive collection of Pokemon with their abilities, moves, and forms."


##  Prompts Used (Claude Code)

Frontend Prompt

Create a React (TypeScript + Vite) app with the following features:
- Login screen with username/password validation (admin/admin).
- Store session in localStorage.
- Main page with a search bar and paginated list of Pokémon from https://pokeapi.co/.
- Each Pokémon card shows image + name.
- Clicking a Pokémon opens a modal with abilities, moves, and forms.
- Use Zustand for state management.
- Use TailwindCSS for styling.
- Implement routing with React Router.

Backend Prompt

Using Node.js + Express, create a lightweight backend that replicates basic PokeAPI behavior.
- Endpoint: GET /pokemon?page=X&limit=Y → returns paginated Pokémon list.
- Endpoint: GET /pokemon/:id → returns details (name, abilities, moves, forms).
- Use in-memory data or SQLite.
- Add a simple login endpoint: POST /login {username, password}, validate 'admin'/'admin', return a session token.
- Protect Pokémon endpoints so they require a valid token.
- Add Jest + Supertest tests.

Table Component Prompt (GenAI exercise)

Generate a React component <TaskTable> that supports CRUD operations for tasks.
- Each task has: id, title, description, status, due_date, userId.
- Display tasks in a table with edit/delete buttons.
- Add a form to create new tasks.
- Use Zustand for state management.
- Use TailwindCSS for styling.
- Include basic form validation.

Testing Prompt

Write Jest + React Testing Library tests for a React login form component with username and password fields.
- Validate empty input shows error.
- Validate wrong credentials show error message.
- Validate correct login calls onLogin function.

## Overview

This application allows users to browse, search, and view detailed information about Pokémon in a clean, intuitive interface. It features secure login, responsive design, and comprehensive Pokémon data.

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

## Architecture

### Frontend
- React with Vite
- React Router for navigation
- Styled Components for UI
- Context API for state management

### Backend
- Express.js REST API
- In-memory data storage
- Service-based architecture

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI elements
│   │   ├── contexts/   # Application state
│   │   ├── hooks/      # Custom React hooks
│   │   ├── pages/      # Main views
│   │   ├── services/   # API communication
│   │   └── styles/     # Global styling
│
└── backend/
    └── src/
        ├── controllers/ # Request handlers
        ├── data/        # Pokémon dataset
        ├── routes/      # API endpoints
        └── services/    # Business logic
```

## Setup

1. Install dependencies:
   ```bash
   npm run install-all
   ```

2. Start development servers:
   ```bash
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:4000
   - Backend: http://localhost:3001

## Login Credentials

- Username: admin
- Password: admin

## API Endpoints

- `GET /api/pokemon` - List Pokémon with pagination and search
- `GET /api/pokemon/id/:id` - Get Pokémon by ID
- `GET /api/pokemon/name/:name` - Get Pokémon by name

## Image Resources

The Pokémon images used in this application are sourced from the official Pokémon sprites repository maintained by the PokeAPI project. These sprite images are referenced directly from:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
```

Where `{id}` is the Pokémon's National Pokédex number. These images are used for educational and demonstrative purposes in this application.



---

This project demonstrates modern web development practices including component-based architecture, RESTful API design, and responsive UI implementation.
