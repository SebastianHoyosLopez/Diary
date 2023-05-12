import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import HistorySerenatas from "./pages/history/HistorySerenatas";
import Responsibles from "./pages/Responsibles/Responsibles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<HistorySerenatas />} />
        <Route path="responsibles" element={<Responsibles />} />
      </Route>
    </Routes>
  );
}

export default App;
