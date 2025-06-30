# 🎨 CanvasEra - Virtual Art Exhibition Platform

**CanvasEra** is a modern web application designed to host and showcase virtual art exhibitions. Users can explore exhibitions categorized as **Upcoming**, **Ongoing**, and **Past**, with smooth UI powered by **Tailwind CSS** and **Swiper.js**. The backend is handled by **Express.js**, all in a single server file.

---

## 🚀 Features

- 🎨 Art exhibitions categorized for easy navigation
- 📊 JSON-driven dynamic data rendering
- 🖼 Responsive UI with Tailwind CSS
- 🔁 Swiper.js sliders for interactive exhibition display
- 🎤 Voice of Canvas section for featured artist stories
- ⚡ All backend logic handled inside a single `server.js` file

---

## 🛠 Tech Stack

**Frontend:**
- HTML5 (`landing.html`, `login.html`, `mainpage.html`)
- Tailwind CSS (`input.css`, `output.css`)
- JavaScript (`script.js`)
- Swiper.js

**Backend:**
- Node.js
- Express.js
- CORS & Body-parser

---

## 📂 Folder & File Structure

CanvasEra/
├── public/
│ ├── images/
│ ├── output.css
│ └── script.js
├── data/
│ ├── exhibitions.json
│ └── featuredArtists.json
├── landing.html
├── login.html
├── mainpage.html
├── input.css
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── tailwind.config.js
└── server.js <-- (Contains all backend logic: routes + data serving)

yaml
Copy
Edit


---

## 🧪 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/CanvasEra.git

# 2. Navigate to the folder
cd CanvasEra

# 3. Install dependencies
npm install

# 4. Start the server
node server.js


Then open http://localhost:3000 in your browser to experience CanvasEra 🚀


🔮 Future Improvements
🗃 Modular backend with separate route files

🔐 User authentication system

🧾 Admin panel to upload exhibitions

☁️ Database integration (MongoDB or Firebase)

🎧 Audio-visual guide for exhibitions

👨‍🎨 Author
Krish Kumar Singh
📧 rajputkrish1031@gmail.com
📍 Greater Noida, India