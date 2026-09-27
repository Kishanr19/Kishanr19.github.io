import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repo-name>/.
// Change base below to '/<your-repo-name>/' before deploying,
// or leave as '/' if this will be a <username>.github.io root repo.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
