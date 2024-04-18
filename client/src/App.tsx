import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Dashboard } from "./Pages/Dashboard";
import { About } from "./Pages/About";
import { Data } from "./Pages/Data";
import "./App.css";

function App() {
  return (
    <div className="App overflow-x-hidden scroll-smooth bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/node/" element={<Navigate to="/node/home" />} />
          <Route path="/node/home" element={<Dashboard />} />
          <Route path="/node/data" element={<Data />} />
          <Route path="/node/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
