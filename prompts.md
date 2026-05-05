# Prompting Log — ITDEV-164

## Activity 1: The AI-Native Launchpad

### Prompt 1
**What I asked:**
> Look at the existing src/app/page.tsx and src/app/layout.tsx in this project.  
> Replace the current homepage content with a "Developer Profile" page for me.  
> It should include:
> - My name: Mabu Rahman Habibullah 
> - A short bio (1-2 sentences about being a web development student)
> - A "Skills" section that displays at least 6 skills in a responsive Tailwind CSS grid (use cards with icons from lucide-react)
>
> Keep the existing Header component and layout structure intact.  
> If you need to create new components, go ahead and create them in the src/components/ folder.


**What happened:**
> The AI generated a new page.tsx with a Developer Profile layout, including my name and bio. It created a Skills section using a responsive Tailwind CSS grid and imported icons from lucide-react. Any necessary subcomponents were added to src/components/. The Header and layout structure remained unchanged. Some minor adjustments were needed for spacing and grid responsiveness, but the page worked correctly in the browser.

### Prompt 2
**What I asked:**
> Improve the Developer Profile page by adding hover effects to the skill cards, better spacing, and Also make sure the layout looks good on mobile devices.

**What happened:**
> The AI enhanced the design by adding hover effects such as shadows and slight scaling to the skill cards, making them more interactive. It also improved the spacing between sections and elements, giving the page a cleaner look. The layout was updated to be responsive using Tailwind CSS, so it adjusted properly on mobile screens. I only needed to make small adjustments to fine-tune the spacing and styling.

### Reflection
> Directing the AI to build the Developer Profile page felt fast and efficient, almost like working with a coding partner. I was surprised by how quickly it understood my instructions and generated a functional, responsive design with minimal effort. Next time, I would give more detailed and specific instructions to reduce the need for small adjustments afterward.



## Activity 2: Building the Dashboard Shell

### Prompt 1

**What I asked:**

> Using the shadcn sidebar components that are now in my src/components/ui/ folder,
create a professional, collapsible dashboard layout. It should include:

1. A sidebar (src/components/app-sidebar.tsx) with navigation links for:
   - Overview (use the Home icon from lucide-react)
   - Projects (use the FolderOpen icon)
   - Settings (use the Settings icon)

2. A top navigation area with breadcrumbs showing the current page.

3. A main content area that wraps the existing page content.

4. Update src/app/layout.tsx to use the new SidebarProvider and sidebar layout.

Important: Preserve the Developer Profile content from Activity 1 in
src/app/page.tsx — it should appear in the main content area of the new layout.
Keep the dark mode toggle working.

**What happened:**

> The Agent created the app-sidebar.tsx file and used Shadcn Sidebar components correctly. It added navigation links with lucide-react icons and updated layout.tsx to include SidebarProvider and SidebarInset. It also added a header with breadcrumbs. The Developer Profile content from Activity 1 was preserved and displayed in the main content area, and the dark mode toggle continued to work.

### Prompt 2

**What I asked:**

> Improve the dashboard layout by enhancing usability and visual hierarchy. Add active state highlighting for the current sidebar link (Overview, Projects, Settings) so users can clearly see which page they are on. Improve spacing and alignment in the sidebar and header for a cleaner, more professional look. Also ensure the sidebar closes automatically on mobile when any navigation link is clicked, including the current page. Keep using Shadcn/ui components and do not replace them with custom divs. Do not modify or remove the Developer Profile content in src/app/page.tsx.

**What happened:**

> The Agent improved the sidebar by adding an active state highlight, making it clear which page is selected. It also adjusted spacing and alignment in both the sidebar and header, giving the layout a more polished and professional appearance. For mobile behavior, it ensured the sidebar closes when any link is clicked by adding a simple onClick handler. The Agent followed the instructions correctly by continuing to use Shadcn components and did not modify the existing Developer Profile content.

### Reflection

> The Agent did not delete my Activity 1 code, but I made sure to review all changes before accepting them. When something looked off, I used the "Revert" option to undo the changes and gave a clearer prompt. I learned that being specific is very important, especially when telling the Agent to preserve existing files like page.tsx. I also realized that the Agent can sometimes overcomplicate solutions, so I need to guide it toward simpler fixes. Overall, this activity helped me understand how to control and work effectively with AI tools.



## Activity 3: Server-Side Data with Supabase

### Prompt 1

**What I asked:**

> Using the Supabase client at src/lib/supabase.ts, create a new Server Component
at src/app/projects/page.tsx that:

1. Fetches all records from the "projects" table in Supabase
2. Displays them in a professional layout using shadcn/ui Card components
   (run `npx shadcn@latest add card` if needed)
3. Each card should show the project title, description, and a status badge
4. The status badge should be color-coded:
   - "active" = green
   - "completed" = blue
   - "archived" = gray

Use @workspace context to match the styling of our existing Dashboard.
This must be a React Server Component (async function, no "use client").
Do NOT use useEffect or useState for data fetching.

**What happened:**

> The Agent mostly followed the instructions and created the projects page. However, it initially generated a Client Component using "use client" and used useEffect and useState to fetch data. This was incorrect because the assignment requires a Server Component. I reviewed the code and recognized that it was using the old client-side fetching pattern. I then corrected it by asking the Agent to refactor the code into a Server Component. After the fix, the component used an async function and fetched data directly from Supabase using await, with no React hooks involved.

### Prompt 2

**What I asked:**

> Using the Supabase client at src/lib/supabase.ts, slightly enhance the styling of the existing Server Component at src/app/projects/page.tsx without making major structural or layout changes:

Keep the current layout and structure exactly as it is
Do NOT change the grid system or component hierarchy
Do NOT add new sections or rearrange elements
Improve the visual styling of existing shadcn/ui Card components:
Add subtle shadow (shadow-sm)
Add a smooth hover effect (hover:shadow-md transition)
Ensure consistent padding inside cards (p-4 or p-6)
Improve text styling:
Make the project title slightly larger and bold (text-lg font-semibold)
Use muted color for descriptions (text-muted-foreground)
Add small spacing between elements (space-y-2)
Refine the status badge appearance:
Keep existing logic, only improve styling
Use a pill shape (rounded-full px-2 py-1 text-xs)
Apply soft background colors:
"active" → light green background
"completed" → light blue background
"archived" → light gray background
Improve spacing between cards:
Slightly increase gap (gap-4 or gap-6) if needed
Keep the same grid structure

**What happened:**

> The Agent successfully improved the styling without making major layout changes. It added subtle shadows, hover effects, and better spacing, which made the UI look cleaner and more professional. The text hierarchy also improved, with clearer titles and muted descriptions. The status badges were updated to look more modern with rounded shapes and softer colors. I learned that small styling changes can significantly improve the user interface without changing the structure of the code. It also showed me how to guide the AI more precisely to avoid unwanted large changes.

### Reflection

> Fetching data on the server feels much simpler compared to the useEffect pattern I used in Web Programming 1. Previously, I had to manage multiple things like state, loading indicators, and side effects, which made the code more complex. With Server Components, I can fetch data directly using async/await and render it immediately, which makes the code cleaner and easier to understand.

One major advantage is security, since the Supabase API keys are not exposed to the browser. Another advantage is performance, because the page is already rendered with data before it reaches the user, so there is no need for loading spinners.

What surprised me the most is how much simpler the process is. I expected server-side data fetching to be more complicated, but in the App Router it actually reduces complexity and improves both performance and security.



## Activity 4: AI-Driven Forms & Validation

### Prompt 1

**What I asked:**

> Create a Zod validation schema in a new file src/lib/schemas.ts for a "Project"
with the following fields:

title: string, minimum 3 characters, with a custom error message
"Title must be at least 3 characters"
description: string, minimum 10 characters, with a custom error message
"Description must be at least 10 characters"
status: enum with values "active", "completed", "archived"

Export the schema and also export the inferred TypeScript type using z.infer.

**What happened:**

> The Agent successfully created the schema using Zod. It defined all three fields correctly with the required validation rules and custom error messages. It also exported both the schema and the inferred TypeScript type using z.infer. The enum values matched the database values ("active", "completed", "archived"), which ensured consistency between the schema and Supabase.

### Prompt 2

**What I asked:**

> Using the Zod schema from src/lib/schemas.ts, do the following:

Create a form component at src/components/project-form.tsx that:
Uses react-hook-form with zodResolver
Uses shadcn/ui components (Field, Input, Textarea, Select)
Displays validation errors
Shows a toast on success
Create a Server Action in src/app/actions.ts that:
Uses "use server"
Validates data with Zod
Inserts into Supabase
Create a page at src/app/projects/new/page.tsx to render the form
Add a "New Project" button to the projects page

**What happened:**

> The Agent generated all required files and connected them correctly. The form component used react-hook-form with zodResolver and displayed inline validation errors under each field. The Server Action included "use server" and successfully inserted data into Supabase. However, initially, the server-side validation was missing, so I had to verify and ensure Zod validation was applied before inserting. After confirming, the form successfully submitted data, and the toast notification appeared when a project was created.


### Reflection

> The Schema-First approach with Zod completely changes how I think about form validation. Instead of writing validation rules in multiple places (HTML attributes, JavaScript checks, and backend logic), everything is defined once in a single schema. This schema becomes the source of truth for both the client and server.

Zod helps prevent junk data from entering the database by enforcing strict validation rules before the data is accepted. On the client side, it provides immediate feedback to users, improving the user experience. On the server side, it ensures that even if someone bypasses the frontend validation, invalid data is still rejected before reaching the database.

In previous courses, I handled validation using basic techniques like required fields, manual if statements, and sometimes regex. These methods were scattered and easy to miss, which could allow bad data into the system. With Zod, validation is centralized, consistent, and type-safe, making the application more reliable and easier to maintain.
