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