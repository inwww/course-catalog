# Course Catalog

This is my Lab 1 project for the Advanced Web Technologies course. It's a
simple course catalog made with Next.js 16 (App Router), TypeScript and
Tailwind CSS.

## What I did

- `/` — home page with a short welcome text and a link to the courses page
- `/about` — a simple page with some info about the project
- `/courses` — shows the list of all courses, data comes from a mock file
  (`lib/courses.ts`) instead of a real backend
- `/courses/[id]` — a page for one specific course, using a dynamic route.
  If the course doesn't exist it shows a "not found" page. There's also a
  loading state while the data is "loading" (it's just a fake delay).
- Like button on the course page — you can click the heart and the number
  goes up. This is the only component that uses `'use client'` and
  `useState`, everything else is a Server Component.
- Simple navbar in the layout so you can move between the pages.

## Bonus task

I did one bonus task: an error boundary (`app/courses/error.tsx`). If you
go to `/courses/broken` it will show an error page instead of crashing
the whole app.

## How to run it

```bash
npm install
npm run dev
```

then open http://localhost:3000 in the browser.

## Deployment

I didn't deploy it, it only runs locally for now.
