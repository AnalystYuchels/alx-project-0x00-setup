# Next.js Airbnb Clone Project

A comprehensive Next.js project focused on building an Airbnb-inspired interface while learning modern React, TypeScript, and Tailwind CSS fundamentals.

## 🎯 Learning Objectives

By the end of this project, you will understand how to:

- ✅ **Next.js Setup**: Create projects using TypeScript and best practices
- ✅ **Project Structure**: Organize your code with a clean folder structure
- ✅ **Component Development**: Build reusable and dynamic React components
- ✅ **Props & Interfaces**: Pass data using TypeScript interfaces and props
- ✅ **Routing**: Create and navigate multiple pages using Next.js Pages Router
- ✅ **Styling**: Use Tailwind CSS for responsive, clean UI design
- ✅ **Code Quality**: Enforce quality with ESLint and TypeScript


## 🛠️ Tech Stack

- **Framework:** Next.js 13+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Image Handling:** Next.js Image Optimization


## 📋 Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Visual Studio Code (recommended)
- Basic understanding of React and TypeScript


## 🚀 Getting Started

### Initial Setup:

```bash
# Create project with TypeScript
npx create-next-app@latest alx-project-0x00 --typescript

# Navigate to project directory
cd alx-project-0x00

# Start development server
npm run dev -- -p 3000
```

### Project Configuration:

- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ Import alias (`@/`)
- ❌ /src directory
- ❌ App Router (using Pages Router)


## 📁 Project Structure

```
alx-project-0x00/
├── components/           # Holds reusable React components
│   ├── Card.tsx          # Displays property cards with images and details
│   ├── Pill.tsx          # Reusable tag component for highlighting features
│   └── Button.tsx        # Dynamic button component with size and style variants
├── interfaces/           # Centralized TypeScript type/interface definitions
│   └── index.ts          # Exports all component interfaces like PillProps and ButtonProps
├── pages/                # All route files handled by Next.js Pages Router
│   ├── index.tsx         # Homepage route displaying landing hero section
│   ├── landing.tsx       # Landing page showing property listings with components
│   ├── about.tsx         # About page giving project background
│   └── _app.tsx          # Next.js app wrapper to import global styles
├── public/               # Static assets served directly (images, icons, etc.)
│   └── assets/
│       └── images/       # Folder to store property images like house.png, star.png
├── styles/               # Global styling (if needed beyond Tailwind defaults)
└── README.md             # Project overview, objectives, setup, and guide
```


## 🎨 Component Architecture

### Reusable Components:

- **Card**: Property listing card with images, location, price, and ratings
- **Pill**: Tag component to highlight property features like “Top Villa”
- **Button**: Configurable button supporting size and rounded shape variants

### TypeScript Interfaces:

- Interfaces in `interfaces/index.ts` ensure type safety across components
- Autocompletion and error checks during development


## 🔗 Routing Structure

| Route           | Description                      |
|-----------------|----------------------------------|
| `/`             | Homepage with hero section       |
| `/landing`      | Displays property listings       |
| `/about`        | Basic about page information     |


## 💻 Development Workflow

### 1. Component Development:

```tsx
interface ButtonProps {
  title: string;
  styles: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => (
  <button className={styles}>{title}</button>
);
```

### 2. Styling with Tailwind:

```tsx
<div className="flex justify-center items-center h-screen">
  <h1 className="text-3xl font-bold">Welcome</h1>
</div>
```

### 3. Image Optimization:

```tsx
import Image from "next/image";
import HOUSE from "@/public/assets/images/house.png";

<Image src={HOUSE} width={378} height={299} alt="House" />
```


## 🎯 Task Breakdown

| Task | Focus |
|------|-------|
| **Task 0** | Setup Next.js, TypeScript, ESLint, Tailwind |
| **Task 1** | Set up directory structure and homepage |
| **Task 2** | Add routing for landing and about pages |
| **Task 3** | Create Card and Pill components |
| **Task 4** | Use components in pages |
| **Task 5** | Implement TypeScript interfaces for props |
| **Task 6** | Build dynamic Button component with size/shape props |

## 🎨 Design Highlights

### Card Component:

- Responsive image display
- Dynamic feature tags with Pill component
- Ratings and pricing

### Button Component:

- Props for size (`small`, `medium`, `large`)
- Shape variations (`rounded-sm`, `rounded-md`, `rounded-full`)

### Responsive Design:

- Mobile-first approach with Tailwind utilities
- Optimized layouts for all screen sizes


## 🔧 Best Practices Followed

- **Component Reusability:** All UI elements are broken into reusable components
- **Type Safety:** Fully typed with TypeScript interfaces
- **Directory Organization:** Logical separation of components, pages, and types
- **Performance Optimization:** Next.js features like Image optimization and fast routing
- **Clean Imports:** Using `@/` alias for easy path references


## 🧪 Testing Guide

### Development Checklist:

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All components render properly
- [ ] Pages load without issues
- [ ] Routes navigate correctly
- [ ] Images load correctly
- [ ] Buttons display all shapes and sizes

### Local Testing:

```bash
npm run dev -- -p 3000
```

Test in browser:
- http://localhost:3000
- http://localhost:3000/landing
- http://localhost:3000/about


## 🚨 Troubleshooting Common Errors

- **Missing Props:** Ensure interfaces are imported and used properly
- **Broken Images:** Check image paths under `public/assets/images/`
- **Tailwind Styling Issues:** Rebuild server if Tailwind doesn’t apply
- **Route Errors:** Use correct filename and routing under `/pages/`


## 🔮 Next Steps After Project

- Add global state management (Zustand or Redux)
- Implement API fetching for dynamic listings
- Setup authentication (NextAuth.js)
- Integrate a backend database (Prisma/MongoDB)
- Deploy to Vercel


## 🤝 Contributing

- Fork the repo
- Create a new branch
- Commit and push your changes
- Open a pull request


## 📄 License

This project is strictly educational. Use it freely for learning purposes.
