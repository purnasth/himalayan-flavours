# Himalayan Flavours

Himalayan Flavours is more than just a restaurant; it's a celebration of the rich and diverse culinary heritage of the Himalayan region. Nestled in the heart of Victoria, B.C., our restaurant offers an authentic taste of India, Nepal, and China, bringing together the vibrant and bold flavors that define the cultures.

---

## 🚀 Features

- **Modern UI Design**:
- **Restaurant Content and Features**:
- **Reservation System**: 

---

## 🛠️ Technologies Used

- **React**: Frontend library
- **Vite**: Fast build tool
- **TypeScript**: For static typing
- **TailwindCSS**: Utility-first CSS framework
- **Yup**: Validation schema
- **React Hook Form**: For form management
- **react-toastify**: For user notifications
- **react-google-recaptcha**: For bot protection

---

## 📁 Project Structure

### **src/**

| Folder            | Description                                      |
|--------------------|--------------------------------------------------|
| `components/`     | Contains reusable React components               |
| `hooks/`          | Custom React hooks                               |
| `pages/`          | Page-level components                            |
| `styles/`         | Global CSS and TailwindCSS configurations         |
| `utils/`          | Utility functions and API calls                  |
| `types/`          | TypeScript type definitions                      |

---

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone 
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Create an `.env` file: 
    ```bash
    VITE_API_URL=https://api.com # Your API URL
    VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI # Your reCAPTCHA site key
    ```
4. Start the development server:
    ```bash
    pnpm run dev
    ```

## 📂 File Structure

``` plaintext
📂 himalayan-flavours
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 constants
│   │   └── data.ts
|   ├── 📂 layouts
│   │   └── [Layout Components]
│   ├── 📂 hooks
│   │   └── useCustomHook.tsx
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── 📂 utils
│   │   ├── api.tsx
│   ├── App.tsx
│   ├── global.d.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslintrc.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Available Scripts
- `dev`: vite
- `build`: vite build
- `preview`: vite preview

---

## 📝 Frontend Documentation

### 1. For Deployment on Cloudflare:
``` plaintext
1. Go to the Cloudflare dashboard.
2. Select the website you want to deploy.
3. Go to the `Workers & Pages` tab.
4. Connect your GitHub repository.
5. Select the branch you want to deploy.
6. Click on the `Deploy` button.
    - use the following command: `pnpm run build`
    - use the following directory: `dist`
```

### 2. For Deployment on Longtail cpanel server:

```bash
pnpm run build
```
and then upload the build folder to the server on the root directory.

`NOTE:` Add these files for no production error:

- Create a `.htaccess` file in the root directory of the project and add the following code:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
`NOTE:` This code will redirect all the requests to the index.html file which prevents the 404 error after user navigates to the different pages and refreshes the page.

#### [Optional]: Only if the folder has /folder-name in the URL then add the following code:

`.htaccess`
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /folder-name/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /folder-name/index.html [L]
</IfModule>
```

`vite.config.js`
```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/folder-name/',
})
```

`App.tsx`
```jsx
import { BrowserRouter as Router } from 'react-router-dom';

<Router basename="/folder-name">
  <App />
</Router>
```

---

## Team Members

- **[Purna Shrestha](https://www.purnashrestha.com.np)** - _Frontend Developer_ - _UI/UX Designer_
- **[Swarna Shakya](https://www.swarnashakya.com.np)** - _Backend Developer_
- **[Sunita Shakya](#)** - _Team Lead_

---

## License

All the assets, and codes used in this project are the propety of `Longtail e-Media` and `Himalayan Flavours`. Use of any of the assets, codes, and designs without the permission of the owner is strictly prohibited.