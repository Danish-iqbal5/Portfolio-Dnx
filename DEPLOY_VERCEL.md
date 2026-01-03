# Deploying this portfolio to Vercel

Quick steps to deploy your site to Vercel (recommended for Next.js App Router):

1) Push your local repo to GitHub (if not already):

```bash
# from project root
git init  # if not already a git repo
git add .
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

2) Log in to Vercel (https://vercel.com/) and click "New Project" → "Import Git Repository" → choose your repo.

3) For build settings use the defaults (Vercel will detect Next.js). Two options:

- Recommended (native Next.js): let Vercel detect the project — it will run `npm run build` and deploy the app serverless (supports App Router fully).
- Static export (we added `vercel.json`): the site will use `npm run export` and publish the `out/` folder. This is fine if your site is fully exportable.

4) If you use Gemini/OpenAI keys or other secrets, add them in the Vercel project settings under "Environment Variables".

5) Click "Deploy". Vercel will provide a live URL and automatic deployments on push.

Local build commands

```bash
npm ci
npm run build
# If you intend to export static HTML
npm run export
# `out/` will contain exported site (used by vercel.json)
```

Notes and troubleshooting

- If `npm run export` fails, prefer Vercel's native Next.js deploy (remove `vercel.json` or set Vercel to detect framework). The App Router is not always compatible with `next export`.
- If local `npm ci` fails on Windows due to locked files, close editors/terminals that may hold files, delete `node_modules`, and re-run as administrator.
- Add any runtime environment variables in Vercel for API keys (e.g., `GEMINI_KEY`, `OPENAI_KEY`).

Want me to push the repo to your GitHub and connect Vercel? I can guide the exact commands or prepare a pull request if you prefer.