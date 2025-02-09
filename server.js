import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5000;

// Allow CORS (so React can access this server)
app.use(cors());

// Serve static files from the videos folder
const VIDEO_DIR = "E:/Courses/Project/videos";
app.use("/videos", express.static(VIDEO_DIR));

// Route to check if server is running
app.get("/", (req, res) => {
  res.send("Video server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
