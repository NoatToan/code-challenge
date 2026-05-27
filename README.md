# 99tech Assessment

A React + TypeScript + Vite project for the 99tech technical assessment. The app is organized into 3 independent problems, each accessible via a tab in the UI.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **react-hook-form** — form validation
- Mock i18n utility (`src/lib/i18n.ts`)

## Project Structure

```
src/
├── components/
│   └── Task.tsx          # Shared problem-statement card
├── lib/
│   └── i18n.ts           # Mock i18n / translation helper
├── problems/
│   ├── problem1/         # Sum to N
│   │   ├── index.tsx
│   │   ├── solutions.ts
│   │   └── README.md
│   ├── problem2/
│   │   ├── index.tsx
│   │   └── README.md
│   └── problem3/
│       ├── index.tsx
│       └── README.md
├── App.tsx               # Tab navigation
└── index.css             # Global styles + Tailwind entry
```

## Problems

### Problem 1 — Sum to N

Provide 3 unique implementations of `sum_to_n(n)` that returns `1 + 2 + ... + n`.

| | Approach | Time | Space |
|---|---|---|---|
| A | Gaussian formula `n*(n+1)/2` | O(1) | O(1) |
| B | Iterative `for` loop | O(n) | O(1) |
| C | Recursion `n + sum(n-1)` | O(n) | O(n) |

![Problem 1 Solution](src/problems/problem1/problem1_solution.png)

### Problem 2

> To be added.

### Problem 3

> To be added.

## Getting Started

```bash
pnpm install
pnpm dev
```
