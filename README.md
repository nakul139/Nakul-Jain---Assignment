# 📰 ReactJS Web Scraper App with Google OAuth

A modern ReactJS application that allows users to **log in with Google**, **scrape public website data (news headlines)**, and view it in a beautifully styled and responsive UI. Built with **React.js**, **Node.js**, **Python (BeautifulSoup)**, and **Tailwind CSS**.

---

## 🚀 Features

- 🔐 **Google OAuth 2.0 Authentication**
- 🕸️ **Web Scraping using Python (BeautifulSoup)**
- 📊 **Displays scraped data in React UI**
- 🔄 **Real-time Refresh Button**
- 🎨 **Clean, modern UI with Tailwind CSS**
- 💡 **Fully responsive layout**

---

## 🛠️ Tech Stack

| Frontend        | Backend           | Scraper                | Styling      |
| --------------- | ----------------- | ---------------------- | ------------ |
| React.js (Vite) | Node.js (Express) | Python (BeautifulSoup) | Tailwind CSS |

---

## 📂 Folder Structure

react-scraper-app/
├── Frontend/       # React + Tailwind frontend
├── server/         # Express.js backend and Python scraper
│   └── scraper.py  # Uses BeautifulSoup to scrape data
├── README.md

---

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and configure **OAuth 2.0 credentials**.
3. Add `http://localhost:5173` as an authorized redirect URI.
4. Copy your **Client ID** and replace in `main.jsx`:

```jsx
<GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
💻 Local Development Setup
🧱 Prerequisites
Node.js v18+

Python 3+

pip install beautifulsoup4 requests

⚙️ Clone the repository
git clone https://github.com/nakul139/Nakul-Jain-Assignment.git
cd react-scraper-app

1. Start Backend Server
cd server
npm install
node server.js

2. Start Frontend (React)
cd ../Frontend
npm install
npm run dev

App will run at: http://localhost:5173


🤝 Connect with Me
👤 Nakul Jain
📧 jainnakul543@gmail.com
🔗 https://www.linkedin.com/in/nakul-j/
💻 https://github.com/nakul139/

```
