import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev/config/
export default defineConfig({     
  plugins: [react(), tailwindcss()], //if tailwing is not added here AND imported at the top none of the css styling will show up.    
  base: "Portfolio", //this is the repo name on github for gh pages
})
