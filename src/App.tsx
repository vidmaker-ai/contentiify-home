import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ImFucked3 from "./pages/ImFucked3";
import Ver1CurrentCopy2 from "./pages/Ver1CurrentCopy2";
import Ver1CurrentCopy from "./pages/Ver1CurrentCopy";
import Ver from "./pages/Ver";
import Edit1 from "./pages/Edit1";
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
      case "/ver1currentcopy2":
        title = "";
        metaDescription = "";
        break;
      case "/ver1currentcopy":
        title = "";
        metaDescription = "";
        break;
      case "/ver1current":
        title = "";
        metaDescription = "";
        break;
      case "/contentifydraft20230521":
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
      <Route path="/" element={<ImFucked3 />} />
      <Route path="/ver1currentcopy2" element={<Ver1CurrentCopy2 />} />
      <Route path="/ver1currentcopy" element={<Ver1CurrentCopy />} />
      <Route path="/ver1current" element={<Ver />} />
      <Route path="/contentifydraft20230521" element={<Edit1 />} />
    </Routes>
  );
}
export default App;
