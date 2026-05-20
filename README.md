# 📊 MIS Dashboard — Management Information System

A modern, full-featured Management Information System built with React 19, Vite, Tailwind CSS v4, and ShadCN UI components.

---

## 🚀 Tech Stack

| Technology           | Version  | Purpose                  |
| -------------------- | -------- | ------------------------ |
| **React**            | ^19.2.0  | UI Framework             |
| **Vite**             | ^7.2.4   | Build Tool & Dev Server  |
| **Tailwind CSS**     | ^4.1.18  | Utility-First Styling    |
| **React Router DOM** | ^7.12.0  | Client-Side Routing      |
| **Redux Toolkit**    | ^2.11.2  | Global State Management  |
| **React Redux**      | ^9.2.0   | React-Redux Bindings     |
| **Axios**            | ^1.13.2  | HTTP Client              |
| **React Hook Form**  | ^7.71.1  | Form Management          |
| **TanStack Table**   | ^8.21.3  | Data Table Engine        |
| **MUI Material**     | ^7.3.7   | Material UI Components   |
| **ShadCN UI**        | ^1.x     | Accessible UI Primitives |
| **Lucide React**     | ^0.562.0 | Icon Library             |
| **React Icons**      | ^5.5.0   | Extended Icon Library    |
| **React Toastify**   | ^11.0.5  | Toast Notifications      |
| **Date-fns**         | ^4.1.0   | Date Utility Library     |

---

## 📋 Prerequisites

Make sure the following are installed on your machine before proceeding:

- **Node.js** — v18.0.0 or higher → [Download Node.js](https://nodejs.org/)
- **npm** — v9.0.0 or higher _(comes with Node.js)_

To verify your versions:

```bash
node -v
npm -v
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder-name>
```

### 2. Install Dependencies

```bash
npm install
```

> This will install all packages listed in `package.json` including React, Vite, Tailwind, ShadCN components, Redux, and everything else.

### 3. Start Development Server

```bash
npm run dev
```

The app will be running at → **http://localhost:5173**

---

## 📦 Available Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start local development server (hot reload enabled) |
| `npm run build`   | Build the project for production                    |
| `npm run preview` | Preview the production build locally                |
| `npm run lint`    | Run ESLint to check for code issues                 |

---

## 🧩 Key Libraries — Quick Reference

### Routing — React Router DOM v7

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

### State Management — Redux Toolkit

```jsx
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
```

### HTTP Requests — Axios

```jsx
import axios from "axios";
```

### Forms — React Hook Form

```jsx
import { useForm } from "react-hook-form";
```

### Tables — TanStack Table

```jsx
import { useReactTable } from "@tanstack/react-table";
```

### Notifications — React Toastify

```jsx
import { toast } from "react-toastify";
```

---

## 🛠️ Troubleshooting

**`npm install` fails or throws errors?**

```bash
npm install --legacy-peer-deps
```

**Port 5173 already in use?**

```bash
npm run dev -- --port 3000
```

**Node version too old?**
Use [nvm](https://github.com/nvm-sh/nvm) to switch Node versions:

```bash
nvm install 18
nvm use 18
```

---

## 👤 Author

Built by **Samman Qaiser**

---

> **Note for the next developer:** Read through this README fully before starting. If you add new packages, please update the Tech Stack table above.
