import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Dashboard } from "./Pages/Dashboard";
import { About } from "./Pages/About";
import { Help } from "./Pages/Help";
import { Data } from "./Pages/Data";
import "./App.css";

function App() {
  return (
    <div className="App overflow-x-hidden scroll-smooth bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
