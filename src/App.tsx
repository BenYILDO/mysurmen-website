import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;