# Pokédex Application

A full-stack Pokémon browser with React frontend and Express backend.
Developed by Christian Cattani

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
