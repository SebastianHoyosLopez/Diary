import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import HistorySerenatas from "./pages/history/HistorySerenatas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<HistorySerenatas />} />
      </Route>
    </Routes>
  );
}

export default App;
