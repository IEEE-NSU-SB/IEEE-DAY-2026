import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Events from "./pages/Events";
import Timeline from "./pages/Timeline";
import Contest from "./pages/Contest";
import Achievement from "./pages/Achievement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="events" element={<Events />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="contest" element={<Contest />} />
          <Route path="achievement" element={<Achievement />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
