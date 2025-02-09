import { useState } from "react";
import folders from "./utils/folders";
import VideoPlayer from "./components/VideoPlayer";
import { ChevronDownIcon, ChevronRightIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const App = () => {
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleModule = (moduleName) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleName]: !prev[moduleName],
    }));
  };

  const toggleTopic = (topicName) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicName]: !prev[topicName],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div className={`transition-all duration-300 bg-gray-800 overflow-y-auto ${sidebarOpen ? "w-80" : "w-0 hidden"}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-100">📚 Video Library</h1>
            <XMarkIcon
              className="h-6 w-6 cursor-pointer text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            />
          </div>

          {folders.map((module) => (
            <div key={module.name}>
              <div
                className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-gray-700 rounded-md text-lg font-semibold text-gray-200"
                onClick={() => toggleModule(module.name)}
              >
                <span>{module.name}</span>
                {expandedModules[module.name] ? (
                  <ChevronDownIcon className="h-5 w-5 text-gray-300" />
                ) : (
                  <ChevronRightIcon className="h-5 w-5 text-gray-300" />
                )}
              </div>

              {expandedModules[module.name] &&
                module.topics.map((topic) => (
                  <div key={topic.name} className="pl-5">
                    <div
                      className="flex items-center justify-between cursor-pointer py-2 px-3 hover:bg-gray-700 rounded-md text-md font-medium text-gray-300"
                      onClick={() => toggleTopic(topic.name)}
                    >
                      <span>{topic.name}</span>
                      {expandedTopics[topic.name] ? (
                        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                      )}
                    </div>

                    {expandedTopics[topic.name] &&
                      topic.videos.map((video) => (
                        <div
                          key={video.title}
                          className="cursor-pointer py-2 px-6 text-sm text-gray-300 hover:bg-gray-700 rounded-md"
                          onClick={() => setSelectedVideo(video.src)}
                        >
                          🎥 {video.title}
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Toggle */}
      {!sidebarOpen && (
        <div className="absolute top-4 left-4 z-50">
          <Bars3Icon
            className="h-7 w-7 cursor-pointer text-gray-300 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      )}

      {/* Video Player Section */}
      <div className={`flex-1  transition-all duration-300 ${sidebarOpen ? "ml-80" : "ml-0"}`}>
        <div className="h-full flex items-center center justify-center p-4 ">
          <VideoPlayer videoSrc={selectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;