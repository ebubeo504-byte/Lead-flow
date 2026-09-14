# LeadFlow

Frontend for the LeadFlow lead-management product. Built with React, TypeScript, Tailwind CSS, and Vite.

## Connect your automation

Open `src/config/webhook.ts` and paste your Make.com webhook URL. That's the only file you need to touch to make the demo form fire real inquiries into your automation. Leave it blank to keep the built-in demo behavior.

## Deploy for free (GitHub + Netlify, no command line needed)

1. **Create a GitHub repo.** Go to github.com → New repository → name it `leadflow` → Create.
2. **Upload this project.** On the repo page, click "Add file" → "Upload files", then drag this entire folder in. Commit.
3. **Create a Netlify account** at netlify.com (free) if you don't have one.
4. **Import the project.** Netlify → "Add new site" → "Import an existing project" → connect GitHub → choose the `leadflow` repo.
5. **Confirm build settings** (Netlify usually auto-detects these for Vite):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**. Netlify gives you a live `https://your-site-name.netlify.app` URL, and redeploys automatically every time you update the GitHub repo.

## Local development (optional, needs Node.js installed)

```
npm install
npm run dev
```
