import { Routes, Route } from "react-router-dom";
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
          <Route path="/home" element={<Dashboard />} />
          <Route path="/data" element={<Data />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
