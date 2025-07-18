# alx-project-0x00

## Project Description
This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components, while emphasizing best practices in front-end development.

## Learning Objectives:
By completing this project, you will:

- Understand how to scaffold a Next.js project with TypeScript
- Learn Next.js folder structure and organization best practices
- Implement basic routing in Next.js (Pages Router)
- Create reusable React components with TypeScript
- Work with TypeScript interfaces for component props
- Manage assets and static files in Next.js
- Develop an understanding of component composition
- Implement responsive design with Tailwind CSS
- Set up and configure ESLint for code quality

## Requirements:
- Node.js (v16 or later)
- npm or yarn
- Visual Studio Code (or any preferred IDE)
- Next.js v13+
- TypeScript
- Tailwind CSS
- ESLint

## Best Practices

### Project Structure:
- Components are organized in a dedicated `components` directory
- TypeScript interfaces are centralized in an `interfaces` directory
- Pages follow Next.js convention in the `pages` directory

### Component Design:
- Components are typed with TypeScript interfaces
- Reusable components accept props for customization
- Components are modular and focused on single responsibilities

### Code Quality:
- ESLint is configured for code consistency
- TypeScript provides type safety
- Arrow function syntax is used consistently

### Styling:
- Tailwind CSS is used for utility-first styling
- Responsive design principles are applied
- Consistent spacing and typography scales

### Performance:
- Next.js `Image` component is used for optimized images
- Code splitting is handled automatically by Next.js
- Only necessary dependencies are included


## Project Setup Instructions

### Scaffolding a Project

#### Objective:
Learn to create a project using CLI tools like `npx`, coupled with `create-next-app`.

#### Instructions:
1. Open **Visual Studio Code**.
2. Open the terminal (**Terminal → New Terminal**).
3. Navigate to your project directory:
    ```bash
    cd path/to/your/project/directory
    ```
4. Scaffold the project using:
    ```bash
    npx create-next-app@latest alx-project-0x00 --typescript
    ```
5. Select the following options during setup:
    - ✅ ESLint → Yes
    - ✅ Tailwind CSS → Yes
    - ❌ /src directory → No
    - ✅ Import alias → Yes
    - ❌ App Router → No (use Pages Router)
6. Start the project:
    ```bash
    cd alx-project-0x00
    npm run dev -- -p 3000
    ```

#### Repository:
- GitHub Repository: [alx-project-0x00-setup](https://github.com/AnalystYuchels/alx-project-0x00-setup)
- Directory: `alx-project-0x00`


## How to Start the Project
```bash
git clone https://github.com/AnalystYuchels/alx-project-0x00-setup.git
cd alx-project-0x00
npm install
npm run dev -- -p 3000
