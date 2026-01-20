# Premium Music Producer Portfolio

A modern, minimal, Linktree-style portfolio website built with React and Vite. Optimized for Music Producers, Engineers, and Artists.

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Locally:**
   ```bash
   npm run dev
   ```

3. **Customize Content:**
   Edit `src/config/portfolio.js` to update your name, roles, links, and media.

## 📦 Deployment

### Netlify (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your repository.
5. Build settings (should be detected automatically):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**.

### GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Set the `base` in `vite.config.js` to your repository name:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```
4. Run deployment:
   ```bash
   npm run deploy
   ```

## 🛠 Tech Stack
- **React** (Vite)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Vanilla CSS** (Premium Glassmorphism Design)
