import fs from 'fs/promises';
import path from 'path';

// Define the base directory
const BASE_DIR = "E:/Courses/Project/videos";

// Allowed video extensions
const VIDEO_EXTENSIONS = ['.mp4', '.mkv', '.avi', '.mov'];

// Define the output file path
const OUTPUT_FILE = path.join('src', 'utils', 'folders.json');

async function getVideoLibrary() {
  const modules = await fs.readdir(BASE_DIR, { withFileTypes: true });
  let data = [];

  for (const module of modules) {
    console.log(module.name);
    if (module.isDirectory()) {
      const modulePath = path.join(BASE_DIR, module.name);
      const topics = await fs.readdir(modulePath, { withFileTypes: true });

      let moduleData = { name: module.name, topics: [] };

      for (const topic of topics) {
        if (topic.isDirectory()) {
          const topicPath = path.join(modulePath, topic.name);
          const files = await fs.readdir(topicPath);

          let topicData = {
            name: topic.name,
            videos: files
              .filter(file => VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase()))
              .map(file => ({
                title: file,
                src: path.join(module.name, topic.name, file).replace(/\\/g, '/') // Fix Windows paths
              }))
          };

          moduleData.topics.push(topicData);
        }
      }

      data.push(moduleData);
    }
  }

  return data;
}

// Ensure the directory exists before writing the file
async function saveData(data) {
  try {
    await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true }); // Create directory if it doesn't exist
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(data, null, 2));
    console.log("✅ Data saved to", OUTPUT_FILE);
  } catch (err) {
    console.error("❌ Error writing file:", err);
  }
}

// Run the script
getVideoLibrary().then(saveData);
