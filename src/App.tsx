import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import Body from "./pages/Body";
import Top1 from "./pages/Top1";
import Body1 from "./pages/Body1";
import Body2 from "./pages/Body2";
import Body3 from "./pages/Body3";
import Body4 from "./pages/Body4";
import Body5 from "./pages/Body5";
import Body6 from "./pages/Body6";
import Body7 from "./pages/Body7";
import Body8 from "./pages/Body8";
import Body9 from "./pages/Body9";
import Footer from "./pages/Footer";
import Testimonial from "./pages/Testimonial";
import Freetrial from "./pages/Freetrial";
import Body10 from "./pages/Body10";
import ContentifySetting1BILLIN from "./pages/ContentifySetting1BILLIN";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/3body":
        title = "";
        metaDescription = "";
        break;
      case "/1top":
        title = "";
        metaDescription = "";
        break;
      case "/12body":
        title = "";
        metaDescription = "";
        break;
      case "/10body":
        title = "";
        metaDescription = "";
        break;
      case "/9body":
        title = "";
        metaDescription = "";
        break;
      case "/8body":
        title = "";
        metaDescription = "";
        break;
      case "/7body":
        title = "";
        metaDescription = "";
        break;
      case "/5body":
        title = "";
        metaDescription = "";
        break;
      case "/6body":
        title = "";
        metaDescription = "";
        break;
      case "/4body":
        title = "";
        metaDescription = "";
        break;
      case "/2body":
        title = "";
        metaDescription = "";
        break;
      case "/15footer":
        title = "";
        metaDescription = "";
        break;
      case "/14testimonial":
        title = "";
        metaDescription = "";
        break;
      case "/13freetrial":
        title = "";
        metaDescription = "";
        break;
      case "/11body":
        title = "";
        metaDescription = "";
        break;
      case "/contentify-setting-1-billing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="/3body" element={<Body />} />
      <Route path="/1top" element={<Top1 />} />
      <Route path="/12body" element={<Body1 />} />
      <Route path="/10body" element={<Body2 />} />
      <Route path="/9body" element={<Body3 />} />
      <Route path="/8body" element={<Body4 />} />
      <Route path="/7body" element={<Body5 />} />
      <Route path="/5body" element={<Body6 />} />
      <Route path="/6body" element={<Body7 />} />
      <Route path="/4body" element={<Body8 />} />
      <Route path="/2body" element={<Body9 />} />
      <Route path="/15footer" element={<Footer />} />
      <Route path="/14testimonial" element={<Testimonial />} />
      <Route path="/13freetrial" element={<Freetrial />} />
      <Route path="/11body" element={<Body10 />} />
      <Route
        path="/contentify-setting-1-billing"
        element={<ContentifySetting1BILLIN />}
      />
    </Routes>
  );
}
export default App;
