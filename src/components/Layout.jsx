import { Outlet } from "react-router-dom";
import SmoothScroll from "./SmoothScroll";
import AmbientBackground from "./AmbientBackground";
import Navbar from "./Navbar";
import Closer from "./Closer";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <AmbientBackground />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Closer />
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}
