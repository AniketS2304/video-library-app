# 📚 Video Library App

A **React-based Video Library App** that allows users to browse categorized modules, expand topics, and play videos seamlessly. The app features a collapsible sidebar for better navigation and an optimized video player interface.

## 🚀 Features
- 🎥 **Video Playback** - Play videos from selected topics.
- 📂 **Module & Topic Navigation** - Expand/collapse modules and topics dynamically.
- 📱 **Responsive Sidebar** - Toggle sidebar for better mobile usability.
- 🎨 **Modern UI** - Styled with Tailwind CSS for a sleek design.

## 🛠️ Technologies Used
- **React.js** - Frontend framework
- **Tailwind CSS** - Styling framework
- **Heroicons** - Icons for UI elements

## 📂 Folder Structure
```
📦 video-library-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 VideoPlayer.js
 ┃ ┣ 📂 utils
 ┃ ┃ ┗ 📜 folders.js
 ┃ ┗ 📜 App.js
 ┣ 📂 videos  # Add your videos here
 ┣ 📜 generateFolder.js  # Run this script to update folder structure
 ┣ 📜 package.json
 ┣ 📜 tailwind.config.js
 ┗ 📜 README.md
```

## 📌 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/video-library-app.git
   cd video-library-app
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Add Your Videos**
   - Place your videos inside the `videos` folder.
   - Run the script to generate the folder structure:
     ```sh
     node generateFolder.js
     ```
4. **Run the App**
   ```sh
   npm start
   ```
5. **Open in Browser**
   Visit `http://localhost:3000` to see the app in action.

## 📝 Usage
- Click on a **module** to expand topics.
- Click on a **topic** to reveal available videos.
- Select a **video** to start playback.
- Use the **sidebar toggle** to show/hide navigation.

## 🛠️ Customization
- Modify the `folders.js` file inside `utils/` to add new **modules, topics, or videos**.
- Customize the UI by modifying Tailwind classes in `App.js`.

## 🤝 Contributing
Feel free to fork the repo and submit pull requests with improvements! 🎉

## 📜 License
This project is licensed under the MIT License. See `LICENSE` for details.

---
🚀 **Happy Coding!**

