# React + Vite: Sunset Diary(Blogging web app)

📖**Sunset Diary** 🌅
A modern, fully responsive blogging platform built with React.js, Express.js, MongoDB, and Firebase Authentication. Smooth animations are powered by Framer Motion, delivering a beautiful and interactive user experience across mobile, tablet, and desktop devices.

🌐 Live URL
👉 Sunset Diary Live: https://sunset-diary-f8a65.web.app/

👉 Server Repository: https://github.com/sumaia-sultana/Sunset-Diary-server-site

⚙️ Run the Project: 
     Client-Site:   npm run dev (local - host) or  
                    i) npm run build
                    ii) firebase deploy
     Server:       nodemon or
                    i) vercel --prod 
                    ii) npm run build
             
🎯 Project Purpose
Sunset Diary is designed for bloggers to share their stories, experiences, and ideas through an interactive and aesthetic web platform. It includes features for publishing blogs, commenting, managing personal wishlists, and showcasing recent and featured posts — all with a dynamic, animated user experience.

🚀 Key Features
🔐 Firebase Authentication — Secure user login & JWT-based access control

📝 Create, Read, Update, Delete (CRUD) operations for blogs

💬 Comment system with real-time updates

❤️ Wishlist management — save blogs for later

📊 Recent Blogs & Featured Blogs section based on creation time and content length

✨ Smooth UI animations with Framer Motion

📱 Fully responsive for mobile, tablet, and desktop

🖼️ Category-based blog search

🎨 Modern, clean, minimalistic UI

📦 Tech Stack & Packages Used
Frontend:
React.js

>React Router DOM
 
>Framer Motion
 
>SweetAlert2
 
>Axios
 
>Tailwind CSS
 
>React Fast Marquee
 
>React Icons

>Firebase (Authentication)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
