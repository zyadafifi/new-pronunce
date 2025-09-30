import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ProgressProvider } from "./contexts/ProgressContext";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import MobileLessonPage from "./pages/MobileLessonPage";
import DesktopConversationPage from "./pages/DesktopConversationPage";
import "./App.css";

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Topics Page */}
            <Route path="/topics/:lessonNumber" element={<TopicsPage />} />

            {/* Mobile Routes */}
            <Route
              path="/mobile/:lessonNumber/:topicId/:conversationId"
              element={<MobileLessonPage />}
            />

            {/* Desktop Routes */}
            <Route
              path="/desktop/:lessonNumber/:topicId/:conversationId"
              element={<DesktopConversationPage />}
            />

            {/* Fallback for any other route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;
