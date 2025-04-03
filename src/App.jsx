import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/body";
import Head from "./components/head.jsx";
import Conheca from "./components/conheca"; 

function App() {
  return (
    <Router>
      <Head/>
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/nos-conheca" element={<Conheca/>} />
      </Routes>
    </Router>
  );
}

export default App;
