# Student Info App

A simple webpage that displays student information in a card layout, built as a Git collaboration exercise for an MCA course.

## Team members

| Role | Name | Responsibility |
|------|------|-----------------|
| Team lead / Backend developer | Student 1 | Repository setup, merge management, contact info feature |
| Frontend / UI developer | Student 2 | UI styling and layout |
| JavaScript developer | Student 3 | Interactive JavaScript features |

## Project description

The app renders a single student's profile as a card: name, register number, programme, academic year, contact details, attendance, and additional details that can be toggled on demand. It has no backend or database — all behaviour is handled client-side.

## Technologies used

- HTML5
- CSS3 (custom properties, responsive layout, print styles)
- Vanilla JavaScript (no frameworks or build tools)
- Git and GitHub (feature branches, pull requests, merge commits)

## Features

- Card-style layout with avatar, heading, and status badge
- Icon-labeled information rows
- Dark mode toggle (choice remembered via `localStorage`)
- Print button with dedicated print styling
- Animated attendance progress bar
- Show/Hide Details toggle for extra student information
- Contact information section
- Fully responsive layout for mobile screens

## Branching strategy

All work happens on feature branches cut from an up-to-date `main`. No commits are made directly to `main`. Every branch is merged back into `main` through a pull request using a merge commit, so the history preserves the full commit graph instead of being squashed or rebased.

| Branch | Purpose |
|--------|---------|
| `main` | Stable, deployable version of the app |
| `feature/ui` | Initial UI styling and layout improvements |
| `feature/javascript` | Show/Hide Details toggle (JavaScript feature) |
| `feature/contact` | Contact information section |
| `feature/student-name` | Updated the heading to "Student Management System" |
| `feature/app-title` | Updated the heading to "MCA Student Information Portal"; later resolved a merge conflict with `feature/student-name` |
| `docs/readme` | Documentation of the branching strategy and conflict resolution |

## Pull requests

| PR | From branch | Into | Description |
|----|-------------|------|-------------|
| #1 | `feature/ui` | `main` | Improve student information UI |
| #3 | `feature/javascript` | `main` | Add student details functionality |
| #4 | `feature/contact` | `main` | Add contact information |
| #5 | `feature/student-name` | `main` | Update application heading |
| #6 | `feature/app-title` | `main` | Update application title (conflict resolved) |
| #7 | `docs/readme` | `main` | Document branching strategy and conflict resolution |

## Merge conflict

`feature/student-name` and `feature/app-title` were both cut from the same commit on `main`, before either was merged. Both branches changed the same line: the `<h1>` heading in `index.html`. `feature/student-name` changed it to "Student Management System", while `feature/app-title` changed it to "MCA Student Information Portal".

Once `feature/student-name` was merged into `main` first, `feature/app-title` could no longer merge automatically, because Git could not tell which of the two changes to the same line should win. GitHub flagged the pull request from `feature/app-title` as having a conflict.

The conflict was resolved locally by merging `main` into `feature/app-title`, which produced conflict markers around the `<h1>` line. Both changes were combined into a single heading, "Student Management System - MCA", the conflict markers were removed, and the resolution was committed and pushed. The pull request then became mergeable and was merged into `main` with a merge commit.

## How to run

Clone the repository and open `index.html` directly in a web browser. No build step, server, or dependencies are required.
